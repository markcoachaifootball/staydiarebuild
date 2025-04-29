
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

// Contentful client setup with credentials
// Using the values provided by the user
const spaceId = 'qo4q4xk8vua7';
const accessToken = 'UgwiWiX1rnUpxqbjMdTqUgJPj6wl4aRqzlUYaBjI958';
const previewAccessToken = 'kJwRInLWzRZ_fMX_lF4oq7TVmE8dg4MevbU026TocqU';

// Check if environment variables are available (for future flexibility)
const envSpaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const envAccessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

// Create client with the provided values or fallback to environment variables if available
export const contentfulClient = createClient({
  space: envSpaceId || spaceId,
  accessToken: envAccessToken || accessToken,
});

// Create preview client for draft content
export const previewClient = createClient({
  space: envSpaceId || spaceId,
  accessToken: previewAccessToken,
  host: 'preview.contentful.com'
});

// Function to fetch news articles
export async function fetchNewsArticles(limit: number = 4, preview: boolean = false): Promise<NewsArticle[]> {
  try {
    const client = preview ? previewClient : contentfulClient;
    
    const response = await client.getEntries({
      content_type: 'newsArticle',
      order: ['-fields.date'],
      limit,
    });
    
    console.log('Contentful response:', response);
    
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
export async function fetchArticleBySlug(slug: string, preview: boolean = false): Promise<NewsArticle | null> {
  try {
    const client = preview ? previewClient : contentfulClient;
    
    const response = await client.getEntries({
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
