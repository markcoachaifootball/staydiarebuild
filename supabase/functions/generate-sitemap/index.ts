import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

const SITE_URL = "https://about.staydiasports.com";

// Contentful configuration
const CONTENTFUL_SPACE_ID = "qo4q4xk8vua7";
const CONTENTFUL_ACCESS_TOKEN = "9r0ya2DRB2KRdn8Jqr2xQpu8n8mBC56Mz0Dn7Q-1TzU";

interface ContentfulArticle {
  fields: {
    title: string;
    slug?: string;
    date?: string;
  };
  sys: {
    id: string;
    updatedAt: string;
  };
}

// Generate slug from title (matching frontend logic)
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Sanitize slug to remove any full URLs that may have been incorrectly stored
function sanitizeSlug(slug: string): string {
  // Remove any full URL prefixes if present
  const urlPattern = /^https?:\/\/[^/]+\/news\//;
  return slug.replace(urlPattern, '');
}

// Fetch news articles from Contentful
async function fetchContentfulArticles(): Promise<ContentfulArticle[]> {
  try {
    const url = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=article&order=-fields.date&limit=100`;
    
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Contentful API error:", response.status);
      return [];
    }
    
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching Contentful articles:", error);
    return [];
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Fetch sitemap entries and Contentful articles in parallel
    const [entriesResult, contentfulArticles] = await Promise.all([
      supabase
        .from("sitemap_entries")
        .select("loc, lastmod, changefreq, priority")
        .eq("is_active", true)
        .order("priority", { ascending: false }),
      fetchContentfulArticles()
    ]);

    if (entriesResult.error) {
      console.error("Error fetching sitemap entries:", entriesResult.error);
      throw entriesResult.error;
    }

    const entries = entriesResult.data;
    const today = new Date().toISOString().split("T")[0];

    // Build XML sitemap
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- Homepage (hardcoded) -->
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

    // Add database entries
    for (const entry of entries || []) {
      xml += `  <url>
    <loc>${SITE_URL}${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>
`;
    }

    // Add news articles from Contentful
    for (const article of contentfulArticles) {
      const rawSlug = article.fields.slug || generateSlug(article.fields.title);
      const slug = sanitizeSlug(rawSlug);
      const lastmod = article.sys.updatedAt.split("T")[0];
      const lastmod = article.sys.updatedAt.split("T")[0];
      
      xml += `  <url>
    <loc>${SITE_URL}/news/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
    }

    xml += `</urlset>`;

    return new Response(xml, {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`,
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/xml",
        },
      }
    );
  }
});
