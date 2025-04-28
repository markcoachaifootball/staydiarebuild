import { createClient } from 'contentful';
import { ContentTypeProps, EntryCollection } from 'contentful';

// Define the interface for the fields in our NewsArticle content type
export interface NewsArticleFields {
  title: string;
  slug: string;
  category: string;
  date: string;
  featuredImage: {
    fields: {
      file: {
        url: string;
      };
      title: string;
    };
  };
  summary: string;
  bodyContent: any; // Rich text content
}

// Define our NewsArticle type
export interface NewsArticle {
  sys: {
    id: string;
    // other sys properties that might be used
  };
  fields: NewsArticleFields;
}

// Contentful client setup with proper error handling for missing environment variables
const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

// Validate environment variables
if (!spaceId || !accessToken) {
  console.error('Missing Contentful environment variables. Please set VITE_CONTENTFUL_SPACE_ID and VITE_CONTENTFUL_ACCESS_TOKEN.');
}

// Create client with default values to prevent runtime errors
export const contentfulClient = createClient({
  space: spaceId || 'placeholder-space-id',
  accessToken: accessToken || 'placeholder-access-token',
});

// Function to fetch news articles
export async function fetchNewsArticles(limit: number = 4): Promise<NewsArticle[]> {
  try {
    if (!spaceId || !accessToken) {
      console.error('Contentful credentials are not set properly.');
      return [];
    }
    
    const response = await contentfulClient.getEntries({
      content_type: 'newsArticle',
      order: ['-fields.date'],
      limit,
    });
    
    return response.items as unknown as NewsArticle[];
  } catch (error) {
    console.error('Error fetching news articles from Contentful:', error);
    return [];
  }
}
