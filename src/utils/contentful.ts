
import { createClient } from 'contentful';
import { ContentType, EntryCollection } from 'contentful';

// Define the interface for the fields in our NewsArticle content type
export interface NewsArticleFields {
  title: string;
  slug: string;
  category?: string; // Made optional since it might be missing
  date?: string;     // Made optional since it might be missing
  featuredImage?: {  // Made optional since it might be missing
    fields: {
      file: {
        url: string;
      };
      title?: string;
    };
  };
  summary?: string;  // Made optional since it might be missing
  bodyContent?: any; // Rich text content, optional
}

// Define our NewsArticle type
export interface NewsArticle {
  sys: {
    id: string;
    // other sys properties that might be used
  };
  fields: NewsArticleFields;
}

// Contentful client setup with credentials from the code sample
const spaceId = 'qo4q4xk8vua7';
const accessToken = '9r0ya2DRB2KRdn8Jqr2xQpu8n8mBC56Mz0Dn7Q-1TzU';
const previewAccessToken = 'kJwRZ_fMX_lF4oq7TVmE8dg4MevbU026TocqU';

// Check if environment variables are available (for future flexibility)
const envSpaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const envAccessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

// Create client with the provided values or fallback to environment variables if available
export const contentfulClient = createClient({
  space: envSpaceId || spaceId,
  accessToken: envAccessToken || accessToken,
  environment: 'master', // Explicitly set the environment as specified in the sample
});

// Create preview client for draft content
export const previewClient = createClient({
  space: envSpaceId || spaceId,
  accessToken: previewAccessToken,
  host: 'preview.contentful.com',
  environment: 'master', // Explicitly set the environment
});

// Function to fetch news articles
export async function fetchNewsArticles(limit: number = 4, preview: boolean = false): Promise<NewsArticle[]> {
  try {
    const client = preview ? previewClient : contentfulClient;
    
    console.log('Fetching news articles from Contentful...');
    console.log('Using space ID:', envSpaceId || spaceId);
    console.log('Using access token:', accessToken.substring(0, 5) + '...');
    
    // First, let's try to list all available content types to debug
    const contentTypes = await client.getContentTypes();
    console.log('Available content types in Contentful space:', contentTypes.items.map(type => type.sys.id));
    
    // Now try to get entries without specifying content type to see what's available
    const allEntries = await client.getEntries({
      limit: 10,
    });
    console.log('All available entries:', allEntries);
    
    // Try to get a specific entry mentioned in the code sample
    try {
      const specificEntry = await client.getEntry('wYpXUJAU5yTq06YiqA95o');
      console.log('Specific entry from code sample:', specificEntry);
    } catch (err) {
      console.log('Could not find the specific entry mentioned in the code sample:', err);
    }
    
    // If we found entries, extract the content type from the first one
    let contentTypeName = 'article'; // Default fallback
    if (allEntries.items.length > 0 && allEntries.items[0].sys.contentType) {
      contentTypeName = allEntries.items[0].sys.contentType.sys.id;
      console.log('Detected content type from entries:', contentTypeName);
    }
    
    // Now try to fetch with the detected content type
    const response = await client.getEntries({
      content_type: contentTypeName,
      order: ['-fields.date'],
      limit,
    });
    
    console.log('Contentful response with detected content type:', response);
    
    if (response.items.length > 0) {
      return response.items as unknown as NewsArticle[];
    }
    
    // If still no results, try both common fallback content types
    const commonContentTypes = ['article', 'blogPost', 'post', 'news'];
    for (const type of commonContentTypes) {
      try {
        console.log(`Trying content type: ${type}`);
        const fallbackResponse = await client.getEntries({
          content_type: type,
          order: ['-fields.date'],
          limit,
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
    },
    {
      sys: { id: "example4" },
      fields: {
        title: "Grassroots Sports Clubs See 40% Increase in Attendance with Staydia",
        slug: "grassroots-attendance-increase",
        category: "SUCCESS",
        date: "2025-03-28",
        featuredImage: {
          fields: {
            file: { url: "//images.unsplash.com/photo-1605810230434-7631ac76ec81" },
            title: "Grassroots Sports"
          }
        },
        summary: "Local sports clubs implementing Staydia's streaming platform have reported significant growth in attendance and community engagement over the past six months.",
        bodyContent: {}
      }
    },
    {
      sys: { id: "example5" },
      fields: {
        title: "New Mobile App Features Released for Enhanced Viewing Experience",
        slug: "mobile-app-features",
        category: "PRODUCT",
        date: "2025-03-20",
        featuredImage: {
          fields: {
            file: { url: "//images.unsplash.com/photo-1488590528505-98d2b5aba04b" },
            title: "Mobile App Features"
          }
        },
        summary: "Staydia's latest app update introduces multi-angle viewing, instant replays, and personalized highlights to give fans unprecedented control over their viewing experience.",
        bodyContent: {}
      }
    },
    {
      sys: { id: "example6" },
      fields: {
        title: "Staydia Launches AI-Powered Coaching Tools for Youth Sports",
        slug: "ai-coaching-tools",
        category: "LAUNCH",
        date: "2025-03-15",
        featuredImage: {
          fields: {
            file: { url: "//images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
            title: "AI Coaching Tools"
          }
        },
        summary: "Our new coaching platform uses computer vision and machine learning to provide personalized training insights and development plans for young athletes.",
        bodyContent: {}
      }
    },
    {
      sys: { id: "example7" },
      fields: {
        title: "The Future of Sports Broadcasting: Staydia's Vision for 2026",
        slug: "future-sports-broadcasting",
        category: "VISION",
        date: "2025-03-10",
        featuredImage: {
          fields: {
            file: { url: "//images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
            title: "Future of Broadcasting"
          }
        },
        summary: "CEO Jennifer Reese outlines Staydia's ambitious roadmap for the next year, including expanded coverage, new technology partnerships, and innovative viewing features.",
        bodyContent: {}
      }
    },
    {
      sys: { id: "example8" },
      fields: {
        title: "Case Study: How Regional League Increased Revenue by 25% with Staydia",
        slug: "regional-league-case-study",
        category: "CASE STUDY",
        date: "2025-03-05",
        featuredImage: {
          fields: {
            file: { url: "//images.unsplash.com/photo-1649972904349-6e44c42644a7" },
            title: "Regional League Case Study"
          }
        },
        summary: "This in-depth analysis shows how implementing Staydia's platform helped one regional league increase sponsorship revenue and grow its fanbase significantly.",
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

// Get example article by slug
function getExampleArticleBySlug(slug: string): NewsArticle | null {
  const articles = getExampleArticles(8);
  return articles.find(article => article.fields.slug === slug) || null;
}
