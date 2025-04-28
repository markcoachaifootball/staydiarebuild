
import { createClient } from 'contentful';
import { EntrySkeletonType, Entry } from 'contentful';

// Define our NewsArticle interface that matches Contentful's EntrySkeletonType
export interface NewsArticle extends Entry<{
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
}> {}

// Contentful client setup with proper error handling for missing environment variables
const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

// Validate environment variables
if (!spaceId || !accessToken) {
  console.error('Missing Contentful environment variables. Please set VITE_CONTENTFUL_SPACE_ID and VITE_CONTENTFUL_ACCESS_TOKEN.');
}

// Create client with proper validation
export const contentfulClient = createClient({
  space: spaceId || '',
  accessToken: accessToken || '',
});

// Function to fetch news articles
export async function fetchNewsArticles(limit: number = 4): Promise<NewsArticle[]> {
  try {
    if (!spaceId || !accessToken) {
      console.error('Contentful credentials are not set properly.');
      return [];
    }
    
    const response = await contentfulClient.getEntries<NewsArticle['fields']>({
      content_type: 'newsArticle',
      order: '-fields.date',
      limit,
    });
    
    return response.items as unknown as NewsArticle[];
  } catch (error) {
    console.error('Error fetching news articles from Contentful:', error);
    return [];
  }
}
