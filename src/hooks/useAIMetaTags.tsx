import { useEffect } from 'react';

interface AIMetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  category?: string;
  content?: string;
  url?: string;
  image?: string;
  author?: string;
  publishedTime?: string;
  section?: string;
}

export const useAIMetaTags = (props: AIMetaTagsProps) => {
  useEffect(() => {
    const {
      title,
      description,
      keywords,
      category,
      content,
      url = window.location.href,
      image,
      author = "Staydia Sports",
      publishedTime,
      section
    } = props;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, property: string, content: string, useProperty = false) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        if (useProperty) {
          tag.setAttribute('property', property);
        } else {
          tag.setAttribute('name', property);
        }
        document.head.appendChild(tag);
        tag.setAttribute('data-ai-meta', 'true');
      }
      tag.setAttribute('content', content);
    };

    // Set document title
    document.title = title;

    // Basic meta tags optimized for AI
    updateMetaTag('meta[name="description"]', 'description', description);
    updateMetaTag('meta[name="robots"]', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    
    if (keywords) {
      updateMetaTag('meta[name="keywords"]', 'keywords', keywords);
    }

    // AI-specific meta tags
    updateMetaTag('meta[name="ai-summary"]', 'ai-summary', description);
    updateMetaTag('meta[name="content-type"]', 'content-type', category || 'business');
    updateMetaTag('meta[name="topic"]', 'topic', 'sports technology, AI broadcasting, club management');
    updateMetaTag('meta[name="subject"]', 'subject', 'AI-powered sports broadcasting and club management solutions');
    
    // Content classification for AI
    if (content) {
      updateMetaTag('meta[name="content-summary"]', 'content-summary', content.substring(0, 300) + '...');
    }
    
    // Organization info for AI understanding
    updateMetaTag('meta[name="organization"]', 'organization', 'Staydia Sports');
    updateMetaTag('meta[name="company"]', 'company', 'Staydia Sports');
    updateMetaTag('meta[name="industry"]', 'industry', 'Sports Technology, Broadcasting, SaaS');
    updateMetaTag('meta[name="business-type"]', 'business-type', 'B2B Sports Technology Platform');
    
    // Enhanced Open Graph for AI
    updateMetaTag('meta[property="og:title"]', 'og:title', title, true);
    updateMetaTag('meta[property="og:description"]', 'og:description', description, true);
    updateMetaTag('meta[property="og:url"]', 'og:url', url, true);
    updateMetaTag('meta[property="og:type"]', 'og:type', 'website', true);
    updateMetaTag('meta[property="og:site_name"]', 'og:site_name', 'Staydia Sports', true);
    
    if (image) {
      updateMetaTag('meta[property="og:image"]', 'og:image', image, true);
      updateMetaTag('meta[property="og:image:alt"]', 'og:image:alt', title, true);
    }
    
    // Article-specific meta tags
    if (author) {
      updateMetaTag('meta[name="author"]', 'author', author);
      updateMetaTag('meta[property="article:author"]', 'article:author', author, true);
    }
    
    if (publishedTime) {
      updateMetaTag('meta[property="article:published_time"]', 'article:published_time', publishedTime, true);
    }
    
    if (section) {
      updateMetaTag('meta[property="article:section"]', 'article:section', section, true);
    }
    
    // Twitter Cards
    updateMetaTag('meta[name="twitter:card"]', 'twitter:card', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'twitter:title', title);
    updateMetaTag('meta[name="twitter:description"]', 'twitter:description', description);
    updateMetaTag('meta[name="twitter:site"]', 'twitter:site', '@staydiasports');
    
    if (image) {
      updateMetaTag('meta[name="twitter:image"]', 'twitter:image', image);
      updateMetaTag('meta[name="twitter:image:alt"]', 'twitter:image:alt', title);
    }

    // AI-friendly structured information
    updateMetaTag('meta[name="AI-readable"]', 'AI-readable', 'true');
    updateMetaTag('meta[name="AI-indexable"]', 'AI-indexable', 'true');
    updateMetaTag('meta[name="AI-category"]', 'AI-category', 'sports-technology');
    
    // Cleanup function
    return () => {
      // Remove AI-specific meta tags when component unmounts
      const aiTags = document.querySelectorAll('meta[data-ai-meta="true"]');
      aiTags.forEach(tag => tag.remove());
    };
  }, [props]);
};