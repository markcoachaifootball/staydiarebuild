
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
    const updateMetaTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) || 
                   document.querySelector(`meta[name="${property}"]`);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        if (property.startsWith('og:') || property.startsWith('twitter:')) {
          element.setAttribute('property', property);
        } else {
          element.setAttribute('name', property);
        }
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Update meta tags
    if (title) {
      updateMetaTag('og:title', title);
      updateMetaTag('twitter:title', title);
    }

    if (description) {
      updateMetaTag('description', description);
      updateMetaTag('og:description', description);
      updateMetaTag('twitter:description', description);
    }

    if (image) {
      const fullImageUrl = image.startsWith('http') ? image : `https:${image}`;
      updateMetaTag('og:image', fullImageUrl);
      updateMetaTag('twitter:image', fullImageUrl);
    }

    if (url) {
      updateMetaTag('og:url', url);
    }

    // Set card type for Twitter
    updateMetaTag('twitter:card', 'summary_large_image');

    // Cleanup function to reset to default values when component unmounts
    return () => {
      document.title = 'Staydia Sports';
    };
  }, [title, description, image, url]);
};
