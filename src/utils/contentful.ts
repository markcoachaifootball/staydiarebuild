
import { createClient } from 'contentful';

// Contentful client setup
export const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || '',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || '',
});

// Types for our News Article content type
export interface NewsArticle {
  sys: {
    id: string;
  };
  fields: {
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
  };
}

// Function to fetch news articles
export async function fetchNewsArticles(limit: number = 4): Promise<NewsArticle[]> {
  try {
    const response = await contentfulClient.getEntries<NewsArticle>({
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
