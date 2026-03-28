
import { NewsArticle } from './types';

// Example articles for demonstration purposes
export function getExampleArticles(limit: number): NewsArticle[] {
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
        summary: "Artificial intelligence is changing how teams engage fans and optimise performance. Discover how Staydia is leading this revolution.",
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
        summary: "Our new coaching platform uses computer vision and machine learning to provide personalised development plans for young athletes.",
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

// Get example article by slug
export function getExampleArticleBySlug(slug: string): NewsArticle | null {
  const articles = getExampleArticles(8);
  return articles.find(article => article.fields.slug === slug) || null;
}
