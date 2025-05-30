
import { useEffect, useRef } from 'react';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export const useMetaTags = ({ 
  title, 
  description, 
  image, 
  url, 
  type = 'article',
  publishedTime,
  author,
  section,
  tags = []
}: MetaTagsProps) => {
  const previousMetaTags = useRef<string[]>([]);

  useEffect(() => {
    // Only proceed if we have actual content for social sharing
    if (!title || !description) {
      console.log('⚠️ No title or description provided for social sharing');
      return;
    }

    console.log('🔄 Updating meta tags for social sharing:', { title, description, image });

    const createdMetaTags: string[] = [];
    const finalUrl = url || window.location.href;

    // Update document title
    document.title = `${title} | Staydia Sports`;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, property: string, content: string, useProperty = false) => {
      let element = document.querySelector(selector);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        if (useProperty) {
          element.setAttribute('property', property);
        } else {
          element.setAttribute('name', property);
        }
        element.setAttribute('content', content);
        document.head.appendChild(element);
        createdMetaTags.push(selector);
      }
    };

    // Basic meta tags
    updateMetaTag('meta[name="description"]', 'description', description);
    
    // Open Graph tags for Facebook/LinkedIn
    updateMetaTag('meta[property="og:type"]', 'og:type', type, true);
    updateMetaTag('meta[property="og:site_name"]', 'og:site_name', 'Staydia Sports', true);
    updateMetaTag('meta[property="og:title"]', 'og:title', title, true);
    updateMetaTag('meta[property="og:description"]', 'og:description', description, true);
    updateMetaTag('meta[property="og:url"]', 'og:url', finalUrl, true);

    // Twitter Card tags
    updateMetaTag('meta[name="twitter:card"]', 'twitter:card', 'summary_large_image');
    updateMetaTag('meta[name="twitter:site"]', 'twitter:site', '@staydiasports');
    updateMetaTag('meta[name="twitter:title"]', 'twitter:title', title);
    updateMetaTag('meta[name="twitter:description"]', 'twitter:description', description);

    // Handle featured image for social sharing
    if (image) {
      let optimizedImageUrl = image;
      
      // Ensure HTTPS
      if (image.startsWith('//')) {
        optimizedImageUrl = `https:${image}`;
      } else if (!image.startsWith('http')) {
        optimizedImageUrl = `https:${image}`;
      }
      
      // Optimize Contentful images for social sharing (1200x630 is ideal for OG)
      if (optimizedImageUrl.includes('images.ctfassets.net')) {
        const separator = optimizedImageUrl.includes('?') ? '&' : '?';
        optimizedImageUrl += `${separator}fm=jpg&q=85&w=1200&h=630&fit=fill&f=center`;
      }
      
      console.log('📸 Using optimized image for social sharing:', optimizedImageUrl);
      
      // Set Open Graph image tags
      updateMetaTag('meta[property="og:image"]', 'og:image', optimizedImageUrl, true);
      updateMetaTag('meta[property="og:image:url"]', 'og:image:url', optimizedImageUrl, true);
      updateMetaTag('meta[property="og:image:secure_url"]', 'og:image:secure_url', optimizedImageUrl, true);
      updateMetaTag('meta[property="og:image:width"]', 'og:image:width', '1200', true);
      updateMetaTag('meta[property="og:image:height"]', 'og:image:height', '630', true);
      updateMetaTag('meta[property="og:image:type"]', 'og:image:type', 'image/jpeg', true);
      updateMetaTag('meta[property="og:image:alt"]', 'og:image:alt', title, true);
      
      // Set Twitter image tags
      updateMetaTag('meta[name="twitter:image"]', 'twitter:image', optimizedImageUrl);
      updateMetaTag('meta[name="twitter:image:alt"]', 'twitter:image:alt', title);
    }

    // Article-specific tags
    if (type === 'article') {
      updateMetaTag('meta[property="article:author"]', 'article:author', author || 'Staydia Sports', true);
      if (publishedTime) {
        updateMetaTag('meta[property="article:published_time"]', 'article:published_time', publishedTime, true);
      }
      if (section) {
        updateMetaTag('meta[property="article:section"]', 'article:section', section, true);
      }
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', finalUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', finalUrl);
      document.head.appendChild(canonicalLink);
    }

    previousMetaTags.current = createdMetaTags;

    console.log('✅ Meta tags updated for social sharing');

    // Cleanup function
    return () => {
      document.title = 'Staydia Sports - AI-Powered Sports Club Management';
      
      previousMetaTags.current.forEach(selector => {
        const element = document.querySelector(selector);
        if (element && element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
    };
  }, [title, description, image, url, type, publishedTime, author, section, tags]);
};
