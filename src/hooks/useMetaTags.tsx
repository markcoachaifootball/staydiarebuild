
import { useEffect } from 'react';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const useMetaTags = ({ title, description, image, url }: MetaTagsProps) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = `${title} - Staydia Sports`;
    }

    // Helper function to update or create meta tags
    const updateMetaTag = (property: string, content: string, useProperty = false) => {
      const selector = useProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
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
      }
    };

    // Update basic meta tags
    if (title) {
      updateMetaTag('og:title', title, true);
      updateMetaTag('twitter:title', title, false);
    }

    if (description) {
      updateMetaTag('description', description, false);
      updateMetaTag('og:description', description, true);
      updateMetaTag('twitter:description', description, false);
    }

    if (image) {
      const fullImageUrl = image.startsWith('http') ? image : `https:${image}`;
      updateMetaTag('og:image', fullImageUrl, true);
      updateMetaTag('og:image:width', '1200', true);
      updateMetaTag('og:image:height', '630', true);
      updateMetaTag('twitter:image', fullImageUrl, false);
      updateMetaTag('twitter:image:alt', title || 'Staydia Sports Article', false);
    }

    if (url) {
      updateMetaTag('og:url', url, true);
      updateMetaTag('canonical', url, false);
    }

    // Set required Open Graph properties
    updateMetaTag('og:type', 'article', true);
    updateMetaTag('og:site_name', 'Staydia Sports', true);
    
    // Set Twitter card type
    updateMetaTag('twitter:card', 'summary_large_image', false);
    updateMetaTag('twitter:site', '@staydiasports', false);

    // Cleanup function to reset to default values when component unmounts
    return () => {
      document.title = 'Staydia Sports';
      // Remove dynamic meta tags to prevent conflicts
      const dynamicTags = [
        'meta[property="og:title"]',
        'meta[property="og:description"]', 
        'meta[property="og:image"]',
        'meta[property="og:url"]',
        'meta[name="twitter:title"]',
        'meta[name="twitter:description"]',
        'meta[name="twitter:image"]'
      ];
      
      dynamicTags.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
          element.remove();
        }
      });
    };
  }, [title, description, image, url]);
};
