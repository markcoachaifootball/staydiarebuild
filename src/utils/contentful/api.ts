
import { contentfulClient, previewClient } from './client';
import { NewsArticle } from './types';
import { getExampleArticles, getExampleArticleBySlug } from './mockData';
import { generateSlug, normalizeSlug } from '../slugify';

// Function to fetch news articles
export async function fetchNewsArticles(limit: number = 4, preview: boolean = false): Promise<NewsArticle[]> {
  try {
    const client = preview ? previewClient : contentfulClient;
    
    console.log('Fetching news articles from Contentful...');
    console.log('Using space ID:', import.meta.env.VITE_CONTENTFUL_SPACE_ID || 'qo4q4xk8vua7');
    console.log('Using access token:', (import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || '9r0ya2DRB2KRdn8Jqr2xQpu8n8mBC56Mz0Dn7Q-1TzU').substring(0, 5) + '...');
    
    // First, let's try to list all available content types to debug
    const contentTypes = await client.getContentTypes();
    console.log('Available content types in Contentful space:', contentTypes.items.map(type => type.sys.id));
    
    // Try to get entries with the 'article' content type with no includes to avoid truncation
    const response = await client.getEntries({
      content_type: 'article',
      order: ['-fields.date'],
      limit,
      include: 0, // No includes to avoid max depth issues
    });
    
    console.log('Contentful response (no includes):', response);
    
    if (response.items.length > 0) {
      // Now fetch assets separately for each article that has a featured image
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
              console.log('Fetched image asset:', imageAsset);
              
              // Replace the link with the full asset
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
    
    // If no results with 'article', try other common content types
    const commonContentTypes = ['blogPost', 'post', 'news'];
    for (const type of commonContentTypes) {
      try {
        console.log(`Trying content type: ${type}`);
        const fallbackResponse = await client.getEntries({
          content_type: type,
          order: ['-fields.date'],
          limit,
          include: 0,
        });
        
        if (fallbackResponse.items.length > 0) {
          console.log(`Found entries with content type: ${type}`, fallbackResponse);
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
    
    // Normalize the slug to handle encoding issues
    const normalizedSlug = normalizeSlug(slug);
    console.log(`Fetching article by slug: ${slug} (normalized: ${normalizedSlug})`);
    
    // Try to detect content type first
    const contentTypes = await client.getContentTypes();
    console.log('Available content types for article lookup:', contentTypes.items.map(type => type.sys.id));
    
    // Try common content types for articles
    const commonContentTypes = ['article', 'blogPost', 'post', 'news'];
    
    for (const type of commonContentTypes) {
      try {
        console.log(`Trying to fetch ${normalizedSlug} from content type: ${type}`);
        // Try both the normalized slug and original slug
        const response = await client.getEntries({
          content_type: type,
          'fields.slug[in]': `${normalizedSlug},${slug}`,
          limit: 1,
          include: 0, // No includes to avoid truncation
        });
        
        console.log(`Response for ${type}:`, response);
        
        if (response.items.length > 0) {
          const article = response.items[0] as unknown as NewsArticle;
          console.log(`✅ Found article with slug ${normalizedSlug} in content type ${type}`);
          
          // Ensure the article has a clean slug
          if (article.fields?.title && (!article.fields.slug || article.fields.slug !== normalizedSlug)) {
            article.fields.slug = normalizedSlug;
          }
          
          console.log('Article data:', article);
          console.log('Featured image data:', article.fields?.featuredImage);
          
          // If we have a featured image with sys.id, fetch it separately to get complete data
          if (article.fields?.featuredImage?.sys?.id) {
            try {
              console.log('Attempting to fetch image asset separately with ID:', article.fields.featuredImage.sys.id);
              const imageAsset = await client.getAsset(article.fields.featuredImage.sys.id);
              console.log('Separately fetched image asset:', imageAsset);
              
              // Replace the truncated image data with the complete asset
              article.fields.featuredImage = imageAsset as any;
              console.log('Updated article with complete image data:', article.fields.featuredImage);
            } catch (imgError) {
              console.log('Could not fetch image asset separately:', imgError);
            }
          } else {
            console.log('No sys.id found in featured image or featured image missing');
          }
          
          return article;
        }
        
        // If no match by slug, try to match by title
        console.log(`No slug match, trying to match by title for ${type}`);
        const titleResponse = await client.getEntries({
          content_type: type,
          limit: 100, // Get more articles to search through
          include: 0,
        });
        
        // Find article where generated slug from title matches our slug
        const matchedArticle = titleResponse.items.find((item: any) => {
          if (item.fields?.title) {
            const generatedSlug = generateSlug(item.fields.title);
            console.log(`Comparing generated slug "${generatedSlug}" with "${normalizedSlug}"`);
            return generatedSlug === normalizedSlug;
          }
          return false;
        });
        
        if (matchedArticle) {
          console.log(`✅ Found article by title match in content type ${type}`);
          const article = matchedArticle as unknown as NewsArticle;
          
          // Set the normalized slug
          article.fields.slug = normalizedSlug;
          
          console.log('Article data:', article);
          console.log('Featured image data:', article.fields?.featuredImage);
          
          // If we have a featured image with sys.id, fetch it separately to get complete data
          if (article.fields?.featuredImage?.sys?.id) {
            try {
              console.log('Attempting to fetch image asset separately with ID:', article.fields.featuredImage.sys.id);
              const imageAsset = await client.getAsset(article.fields.featuredImage.sys.id);
              console.log('Separately fetched image asset:', imageAsset);
              
              // Replace the truncated image data with the complete asset
              article.fields.featuredImage = imageAsset as any;
              console.log('Updated article with complete image data:', article.fields.featuredImage);
            } catch (imgError) {
              console.log('Could not fetch image asset separately:', imgError);
            }
          } else {
            console.log('No sys.id found in featured image or featured image missing');
          }
          
          return article;
        }
      } catch (err) {
        console.log(`Error fetching from content type ${type}:`, err);
        // Continue to next type
      }
    }
    
    console.log(`❌ Article with slug ${slug} not found in any content type`);
    // If not found in any content type, return example
    return getExampleArticleBySlug(slug);
  } catch (error) {
    console.error('Error fetching article from Contentful:', error);
    return getExampleArticleBySlug(slug);
  }
}
