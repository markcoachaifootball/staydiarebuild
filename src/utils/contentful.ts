
import { createClient } from 'contentful';
import { ContentType, EntryCollection } from 'contentful';

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
      return getExampleArticles(limit); // Use example articles when credentials are missing
    }
    
    const response = await contentfulClient.getEntries({
      content_type: 'newsArticle',
      order: ['-fields.date'],
      limit,
    });
    
    return response.items.length > 0
      ? response.items as unknown as NewsArticle[]
      : getExampleArticles(limit); // Fallback to example articles if no content
  } catch (error) {
    console.error('Error fetching news articles from Contentful:', error);
    return getExampleArticles(limit); // Fallback to example articles on error
  }
}

// Example articles for demonstration purposes
function getExampleArticles(limit: number): NewsArticle[] {
  const exampleArticles: NewsArticle[] = [
    {
      sys: { id: "example1" },
      fields: {
        title: "Staydia Sports Announces New Partnership with Major League",
        slug: "staydia-sports-partnership",
        category: "NEWS",
        date: "2025-04-15",
        featuredImage: {
          fields: {
            file: { url: "//images.unsplash.com/photo-1461749280684-dccba630e2f6" },
            title: "Partnership Announcement"
          }
        },
        summary: "Staydia Sports has formed a groundbreaking partnership with Major League to revolutionize sports analytics and fan engagement through our advanced AI technology.",
        bodyContent: {}
      }
    },
    {
      sys: { id: "example2" },
      fields: {
        title: "How AI is Transforming the Sports Industry",
        slug: "ai-transforming-sports",
        category: "FEATURE",
        date: "2025-04-10",
        featuredImage: {
          fields: {
            file: { url: "//images.unsplash.com/photo-1518770660439-4636190af475" },
            title: "AI in Sports"
          }
        },
        summary: "Artificial intelligence is changing how teams analyze performance, engage fans, and optimize training. Discover how Staydia is leading this revolution.",
        bodyContent: {}
      }
    },
    {
      sys: { id: "example3" },
      fields: {
        title: "Staydia Technology Enhances Fan Experience at Championship Games",
        slug: "fan-experience-enhancement",
        category: "NEWS",
        date: "2025-04-05",
        featuredImage: {
          fields: {
            file: { url: "//images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
            title: "Fan Experience"
          }
        },
        summary: "Our latest deployment at the championship games provided fans with real-time statistics, personalized content, and interactive experiences that set new standards for engagement.",
        bodyContent: {}
      }
    }
  ];

  return exampleArticles.slice(0, limit);
}

// Function to fetch a specific news article by slug
export async function fetchArticleBySlug(slug: string): Promise<NewsArticle | null> {
  try {
    if (!spaceId || !accessToken) {
      console.error('Contentful credentials are not set properly.');
      return getExampleArticleBySlug(slug); // Use example articles when credentials are missing
    }
    
    const response = await contentfulClient.getEntries({
      content_type: 'newsArticle',
      'fields.slug': slug,
      limit: 1,
    });
    
    return response.items.length > 0
      ? response.items[0] as unknown as NewsArticle
      : getExampleArticleBySlug(slug); // Fallback to example article if not found
  } catch (error) {
    console.error('Error fetching article from Contentful:', error);
    return getExampleArticleBySlug(slug); // Fallback to example article on error
  }
}

// Get example article by slug
function getExampleArticleBySlug(slug: string): NewsArticle | null {
  const articles = getExampleArticles(3);
  return articles.find(article => article.fields.slug === slug) || null;
}
