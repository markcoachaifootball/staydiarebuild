
import { contentfulClient, previewClient } from './client';
import { NewsArticle } from './types';
import { getExampleArticles, getExampleArticleBySlug } from './mockData';

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
    
    // Try to get entries with the 'article' content type and include assets
    const response = await client.getEntries({
      content_type: 'article',
      order: ['-fields.date'],
      limit,
      include: 2, // This includes linked assets and entries
    });
    
    console.log('Contentful response with assets:', response);
    
    if (response.items.length > 0) {
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
          include: 2, // Include linked assets
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
    
    // Try to detect content type first
    const contentTypes = await client.getContentTypes();
    console.log('Available content types for article lookup:', contentTypes.items.map(type => type.sys.id));
    
    // Try common content types for articles
    const commonContentTypes = ['article', 'blogPost', 'post', 'news'];
    
    for (const type of commonContentTypes) {
      try {
        const response = await client.getEntries({
          content_type: type,
          'fields.slug': slug,
          limit: 1,
          include: 2, // Include linked assets
        });
        
        if (response.items.length > 0) {
          console.log(`Found article with slug ${slug} in content type ${type}`);
          return response.items[0] as unknown as NewsArticle;
        }
      } catch (err) {
        // Continue to next type
      }
    }
    
    // If not found in any content type, return example
    return getExampleArticleBySlug(slug);
  } catch (error) {
    console.error('Error fetching article from Contentful:', error);
    return getExampleArticleBySlug(slug);
  }
}
