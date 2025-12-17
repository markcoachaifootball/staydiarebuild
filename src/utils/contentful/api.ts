import { contentfulClient, previewClient } from './client';
import { NewsArticle } from './types';
import { getExampleArticles, getExampleArticleBySlug } from './mockData';
import { generateSlug, normalizeSlug } from '../slugify';

const isPrerenderUserAgent = () => {
  if (typeof navigator === 'undefined') return false;
  return /HeadlessChrome|Prerender|Googlebot|Rendertron|Slackbot|Discordbot|Twitterbot|facebookexternalhit/i.test(
    navigator.userAgent
  );
};

// Function to fetch news articles
export async function fetchNewsArticles(limit: number = 4, preview: boolean = false): Promise<NewsArticle[]> {
  try {
    const client = preview ? previewClient : contentfulClient;
    const isPrerender = isPrerenderUserAgent();

    console.log('Fetching news articles from Contentful...');

    // Expensive debug call (can slow down prerender timeouts)
    if (!isPrerender) {
      try {
        const contentTypes = await client.getContentTypes();
        console.log('Available content types in Contentful space:', contentTypes.items.map((type) => type.sys.id));
      } catch (e) {
        console.log('Could not list content types:', e);
      }
    }

    // For prerender bots, request includes to avoid extra asset calls and reduce round-trips.
    const response = await client.getEntries({
      content_type: 'article',
      order: ['-fields.date'],
      limit,
      include: isPrerender ? 1 : 0,
    });

    if (response.items.length > 0) {
      // Keep existing asset-enrichment behavior for normal users.
      if (!isPrerender) {
        const articlesWithImages = await Promise.all(
          response.items.map(async (article: any) => {
            // Generate clean slug if missing or problematic
            if (article.fields?.title && (!article.fields.slug || article.fields.slug.includes('%'))) {
              article.fields.slug = generateSlug(article.fields.title);
              console.log('Generated clean slug for article:', article.fields.title, '->', article.fields.slug);
            }

            if (article.fields?.featuredImage?.sys?.id) {
              try {
                console.log('Fetching image asset for article:', article.fields.title);
                const imageAsset = await client.getAsset(article.fields.featuredImage.sys.id);
                article.fields.featuredImage = imageAsset;
              } catch (imgError) {
                console.log('Could not fetch image asset:', imgError);
              }
            }
            return article;
          })
        );

        return articlesWithImages as unknown as NewsArticle[];
      }

      return response.items as unknown as NewsArticle[];
    }

    // If no results with 'article', try other common content types
    const commonContentTypes = ['blogPost', 'post', 'news'];
    for (const type of commonContentTypes) {
      try {
        console.log(`Trying content type: ${type}`);
        const fallbackResponse = await client.getEntries({
          content_type: type,
          order: ['-fields.date'],
          limit,
          include: isPrerender ? 1 : 0,
        });

        if (fallbackResponse.items.length > 0) {
          console.log(`Found entries with content type: ${type}`);
          return fallbackResponse.items as unknown as NewsArticle[];
        }
      } catch (err) {
        console.log(`No entries found with content type: ${type}`);
      }
    }

    // If all else fails, return example articles
    return getExampleArticles(limit);
  } catch (error) {
    console.error('Error fetching news articles from Contentful:', error);
    return getExampleArticles(limit); // Fallback to example articles on error
  }
}

// Function to fetch a specific news article by slug
export async function fetchArticleBySlug(slug: string, preview: boolean = false): Promise<NewsArticle | null> {
  try {
    const client = preview ? previewClient : contentfulClient;
    const isPrerender = isPrerenderUserAgent();

    // Normalize the slug to handle encoding issues
    const normalizedSlug = normalizeSlug(slug);
    console.log(`Fetching article by slug: ${slug} (normalized: ${normalizedSlug})`);

    // Try common content types for articles
    const commonContentTypes = ['article', 'blogPost', 'post', 'news'];

    // Prerender mode: keep it FAST and deterministic to avoid Netlify Prerender timeouts.
    // We query the primary content type first ("article") with includes so title + featured image resolve.
    if (isPrerender) {
      try {
        const response = await client.getEntries({
          content_type: 'article',
          'fields.slug[in]': `${normalizedSlug},${slug}`,
          limit: 1,
          include: 2,
        });

        if (response.items.length > 0) {
          const article = response.items[0] as unknown as NewsArticle;
          console.log(`✅ Found article with slug ${normalizedSlug} in content type article (prerender)`);

          if (article.fields?.title && (!article.fields.slug || article.fields.slug !== normalizedSlug)) {
            article.fields.slug = normalizedSlug;
          }

          return article;
        }
      } catch (err) {
        console.log('Error fetching article (prerender):', err);
      }

      // If not found quickly, fall back to example article rather than spending more network time.
      console.log(`❌ Article with slug ${slug} not found (prerender fast path)`);
      return getExampleArticleBySlug(slug);
    }

    // Normal mode: sequential fallback + title-match fallback (kept for compatibility)
    for (const type of commonContentTypes) {
      try {
        console.log(`Trying to fetch ${normalizedSlug} from content type: ${type}`);

        const response = await client.getEntries({
          content_type: type,
          'fields.slug[in]': `${normalizedSlug},${slug}`,
          limit: 1,
          include: 0,
        });

        if (response.items.length > 0) {
          const article = response.items[0] as unknown as NewsArticle;
          console.log(`✅ Found article with slug ${normalizedSlug} in content type ${type}`);

          // Ensure the article has a clean slug
          if (article.fields?.title && (!article.fields.slug || article.fields.slug !== normalizedSlug)) {
            article.fields.slug = normalizedSlug;
          }

          if (!isPrerender && (article as any).fields?.featuredImage?.sys?.id) {
            try {
              const imageAsset = await client.getAsset((article as any).fields.featuredImage.sys.id);
              (article as any).fields.featuredImage = imageAsset as any;
            } catch (imgError) {
              console.log('Could not fetch image asset separately:', imgError);
            }
          }

          return article;
        }

        console.log(`No slug match, trying to match by title for ${type}`);
        const titleResponse = await client.getEntries({
          content_type: type,
          limit: 100,
          include: 0,
        });

        const matchedArticle = titleResponse.items.find((item: any) => {
          if (item.fields?.title) {
            const generatedSlug = generateSlug(item.fields.title);
            return generatedSlug === normalizedSlug;
          }
          return false;
        });

        if (matchedArticle) {
          const article = matchedArticle as unknown as NewsArticle;
          (article as any).fields.slug = normalizedSlug;

          if ((article as any).fields?.featuredImage?.sys?.id) {
            try {
              const imageAsset = await client.getAsset((article as any).fields.featuredImage.sys.id);
              (article as any).fields.featuredImage = imageAsset as any;
            } catch (imgError) {
              console.log('Could not fetch image asset separately:', imgError);
            }
          }

          return article;
        }
      } catch (err) {
        console.log(`Error fetching from content type ${type}:`, err);
        // Continue to next type
      }
    }

    console.log(`❌ Article with slug ${slug} not found in any content type`);
    return getExampleArticleBySlug(slug);
  } catch (error) {
    console.error('Error fetching article from Contentful:', error);
    return getExampleArticleBySlug(slug);
  }
}

