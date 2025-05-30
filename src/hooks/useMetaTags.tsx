
import { useEffect } from 'react';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const useMetaTags = ({ title, description, image, url }: MetaTagsProps) => {
  useEffect(() => {
    console.log('Setting meta tags with:', { title, description, image, url });

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
        console.log(`Updated existing meta tag: ${property} = ${content}`);
      } else {
        element = document.createElement('meta');
        if (useProperty) {
          element.setAttribute('property', property);
        } else {
          element.setAttribute('name', property);
        }
        element.setAttribute('content', content);
        document.head.appendChild(element);
        console.log(`Created new meta tag: ${property} = ${content}`);
      }
    };

    // Clear any existing dynamic meta tags first
    const existingTags = [
      'meta[property="og:title"]',
      'meta[property="og:description"]', 
      'meta[property="og:image"]',
      'meta[property="og:url"]',
      'meta[property="og:type"]',
      'meta[name="description"]',
      'meta[name="twitter:title"]',
      'meta[name="twitter:description"]',
      'meta[name="twitter:image"]'
    ];
    
    existingTags.forEach(selector => {
      const element = document.querySelector(selector);
      if (element) {
        element.remove();
      }
    });

    // Set basic meta description first
    if (description) {
      updateMetaTag('description', description, false);
    }

    // Update Open Graph meta tags (required for WhatsApp)
    if (title) {
      updateMetaTag('og:title', title, true);
    }

    if (description) {
      updateMetaTag('og:description', description, true);
    }

    if (image) {
      const fullImageUrl = image.startsWith('http') ? image : `https:${image}`;
      updateMetaTag('og:image', fullImageUrl, true);
      updateMetaTag('og:image:width', '1200', true);
      updateMetaTag('og:image:height', '630', true);
      updateMetaTag('og:image:type', 'image/jpeg', true);
      console.log('Set og:image to:', fullImageUrl);
    }

    if (url) {
      updateMetaTag('og:url', url, true);
    }

    // Set required Open Graph properties for WhatsApp
    updateMetaTag('og:type', 'article', true);
    updateMetaTag('og:site_name', 'Staydia Sports', true);
    
    // Set Twitter card meta tags (fallback for some platforms)
    if (title) {
      updateMetaTag('twitter:title', title, false);
    }
    if (description) {
      updateMetaTag('twitter:description', description, false);
    }
    if (image) {
      const fullImageUrl = image.startsWith('http') ? image : `https:${image}`;
      updateMetaTag('twitter:image', fullImageUrl, false);
      updateMetaTag('twitter:image:alt', title || 'Staydia Sports Article', false);
    }
    updateMetaTag('twitter:card', 'summary_large_image', false);
    updateMetaTag('twitter:site', '@staydiasports', false);

    // Log all meta tags after setting them
    console.log('All meta tags after update:');
    document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"], meta[name="description"]').forEach(tag => {
      const prop = tag.getAttribute('property') || tag.getAttribute('name');
      const content = tag.getAttribute('content');
      console.log(`${prop}: ${content}`);
    });

    // Cleanup function
    return () => {
      document.title = 'Staydia Sports';
    };
  }, [title, description, image, url]);
};
