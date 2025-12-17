import type { Context } from "https://edge.netlify.com";

// Social media and SEO bot user agents
const BOT_UA_PATTERN = /facebookexternalhit|Facebot|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|TelegramBot|Pinterest|Googlebot|bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Sogou|Exabot/i;

// Contentful credentials (public CDA, read-only)
const CONTENTFUL_SPACE = "qo4q4xk8vua7";
const CONTENTFUL_TOKEN = "9r0ya2DRB2KRdn8Jqr2xQpu8n8mBC56Mz0Dn7Q-1TzU";

interface ContentfulArticle {
  fields: {
    title?: string;
    summary?: string;
    slug?: string;
    date?: string;
    category?: string;
    authur?: string;
    featuredImage?: {
      sys?: { id?: string };
    };
  };
}

interface ContentfulAsset {
  sys: { id: string };
  fields: {
    file?: { url?: string };
    title?: string;
  };
}

interface ContentfulResponse {
  items: ContentfulArticle[];
  includes?: {
    Asset?: ContentfulAsset[];
  };
}

async function fetchArticleFromContentful(slug: string): Promise<{ title: string; summary: string; imageUrl: string; date?: string; author?: string; category?: string } | null> {
  // Try multiple slug variations for flexible matching
  const slugVariations = [
    slug,
    slug.toLowerCase(),
    slug.replace(/-/g, ' '),
    slug.toLowerCase().replace(/-/g, ' '),
  ];
  
  const url = new URL(`https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE}/environments/master/entries`);
  url.searchParams.set("access_token", CONTENTFUL_TOKEN);
  url.searchParams.set("content_type", "article");
  url.searchParams.set("limit", "10");
  url.searchParams.set("include", "2");
  url.searchParams.set("select", "fields.title,fields.summary,fields.slug,fields.featuredImage,fields.date,fields.category,fields.authur");

  try {
    const response = await fetch(url.toString(), {
      headers: { "Accept": "application/json" },
    });

    if (!response.ok) {
      console.error("Contentful API error:", response.status);
      return null;
    }

    const data: ContentfulResponse = await response.json();
    
    // Find article with matching slug (case-insensitive)
    const article = data.items?.find(item => {
      const articleSlug = item.fields?.slug?.toLowerCase();
      return slugVariations.some(v => v.toLowerCase() === articleSlug);
    });

    if (!article?.fields) {
      console.log("No article found for slug:", slug);
      return null;
    }

    // Resolve featured image from includes
    let imageUrl = "https://about.staydiasports.com/lovable-uploads/c8798285-fc56-4f93-bcbd-5f5d7c06190d.png";
    
    const featuredImageId = article.fields.featuredImage?.sys?.id;
    if (featuredImageId && data.includes?.Asset) {
      const asset = data.includes.Asset.find((a) => a.sys.id === featuredImageId);
      if (asset?.fields?.file?.url) {
        let assetUrl = asset.fields.file.url;
        if (assetUrl.startsWith("//")) {
          assetUrl = "https:" + assetUrl;
        } else if (!assetUrl.startsWith("http")) {
          assetUrl = "https://" + assetUrl.replace(/^\/+/, "");
        }
        // Add Contentful image optimization params
        if (assetUrl.includes("images.ctfassets.net")) {
          assetUrl += (assetUrl.includes("?") ? "&" : "?") + "fm=jpg&q=85&w=1200&h=630&fit=fill&f=center";
        }
        imageUrl = assetUrl;
      }
    }

    return {
      title: article.fields.title || slug,
      summary: article.fields.summary || "Read the latest updates from Staydia Sports.",
      imageUrl,
      date: article.fields.date,
      author: article.fields.authur,
      category: article.fields.category,
    };
  } catch (error) {
    console.error("Error fetching from Contentful:", error);
    return null;
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(request: Request, context: Context) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Only handle /news/:slug routes
  if (!pathname.startsWith("/news/") || pathname === "/news/" || pathname === "/news") {
    return context.next();
  }

  // Check if request is from a social media/SEO bot
  const userAgent = request.headers.get("user-agent") || "";
  const isBot = BOT_UA_PATTERN.test(userAgent);

  if (!isBot) {
    // Regular users get the normal SPA
    return context.next();
  }

  // Extract slug from URL
  const slug = decodeURIComponent(pathname.replace(/^\/news\//, "").replace(/\/+$/, ""));

  if (!slug) {
    return context.next();
  }

  // Fetch article data from Contentful
  const article = await fetchArticleFromContentful(slug);

  if (!article) {
    // Article not found, let the SPA handle it
    return context.next();
  }

  const canonicalUrl = `https://about.staydiasports.com/news/${slug}`;
  const safeTitle = escapeHtml(article.title);
  const safeSummary = escapeHtml(article.summary);
  const safeImageUrl = escapeHtml(article.imageUrl);

  // Build HTML response with proper Open Graph tags for social media
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${safeTitle} | Staydia Sports</title>
  <meta name="description" content="${safeSummary}">
  <meta name="author" content="${escapeHtml(article.author || "Staydia Sports")}">
  <meta name="keywords" content="${escapeHtml(article.category || "News")}, Sports News">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${canonicalUrl}">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Staydia Sports">
  <meta property="og:title" content="${safeTitle}">
  <meta property="og:description" content="${safeSummary}">
  <meta property="og:image" content="${safeImageUrl}">
  <meta property="og:image:url" content="${safeImageUrl}">
  <meta property="og:image:secure_url" content="${safeImageUrl}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:alt" content="${safeTitle}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:locale" content="en_US">
  ${article.author ? `<meta property="article:author" content="${escapeHtml(article.author)}">` : ""}
  ${article.date ? `<meta property="article:published_time" content="${escapeHtml(article.date)}">` : ""}
  ${article.category ? `<meta property="article:section" content="${escapeHtml(article.category)}">` : ""}

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@staydiasports">
  <meta name="twitter:creator" content="@staydiasports">
  <meta name="twitter:title" content="${safeTitle}">
  <meta name="twitter:description" content="${safeSummary}">
  <meta name="twitter:image" content="${safeImageUrl}">
  <meta name="twitter:image:alt" content="${safeTitle}">

  <!-- Favicon -->
  <link rel="icon" href="/lovable-uploads/70c0f6fc-7382-4387-80d3-bae9fc4609e7.png" type="image/png">
  <link rel="apple-touch-icon" href="/lovable-uploads/70c0f6fc-7382-4387-80d3-bae9fc4609e7.png">

  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${safeTitle.replace(/"/g, '\\"')}",
    "description": "${safeSummary.replace(/"/g, '\\"')}",
    "url": "${canonicalUrl}",
    ${article.date ? `"datePublished": "${article.date}",` : ""}
    ${article.date ? `"dateModified": "${article.date}",` : ""}
    "author": {
      "@type": "Organization",
      "name": "${escapeHtml(article.author || "Staydia Sports").replace(/"/g, '\\"')}"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Staydia Sports",
      "logo": {
        "@type": "ImageObject",
        "url": "https://about.staydiasports.com/lovable-uploads/70c0f6fc-7382-4387-80d3-bae9fc4609e7.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "${canonicalUrl}"
    },
    "image": {
      "@type": "ImageObject",
      "url": "${safeImageUrl}",
      "width": 1200,
      "height": 630
    }
    ${article.category ? `,"articleSection": "${escapeHtml(article.category).replace(/"/g, '\\"')}"` : ""}
  }
  </script>

  <style>
    body { background: #111; color: #fff; font-family: system-ui, sans-serif; margin: 0; padding: 2rem; }
    .container { max-width: 800px; margin: 0 auto; }
    h1 { color: #DAA520; font-size: 2rem; margin-bottom: 1rem; }
    .meta { color: #9ca3af; font-size: 0.9rem; margin-bottom: 1.5rem; }
    p { color: #d1d5db; line-height: 1.6; }
    img { width: 100%; border-radius: 8px; margin-bottom: 1.5rem; }
    a { color: #DAA520; }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <a href="https://about.staydiasports.com">
        <img src="/lovable-uploads/f7690435-d61e-4b90-8008-5e6981cb119d.png" alt="Staydia Sports" width="150" style="width:150px;height:auto;margin-bottom:2rem;">
      </a>
    </header>
    <article>
      <h1>${safeTitle}</h1>
      <p class="meta">${article.date ? new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : ""} ${article.category ? `• ${escapeHtml(article.category)}` : ""}</p>
      <img src="${safeImageUrl}" alt="${safeTitle}" width="1200" height="630">
      <p>${safeSummary}</p>
      <p><a href="${canonicalUrl}">Read full article →</a></p>
    </article>
    <footer style="margin-top:3rem;padding-top:1.5rem;border-top:1px solid #333;">
      <p style="color:#6b7280;font-size:0.875rem;">© 2025 Staydia Sports. All rights reserved.</p>
    </footer>
  </div>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "X-Robots-Tag": "index, follow",
    },
  });
}

export const config = {
  path: "/news/*",
};
