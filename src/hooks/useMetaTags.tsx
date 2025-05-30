
import { useEffect } from 'react';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const useMetaTags = ({ title, description, image, url }: MetaTagsProps) => {
  useEffect(() => {
    console.log('=== META TAGS DEBUG START ===');
    console.log('Input values:', { title, description, image, url });

    // Update document title
    if (title) {
      document.title = `${title} - Staydia Sports`;
      console.log('Set document title to:', document.title);
    }

    // Helper function to update or create meta tags
    const updateMetaTag = (property: string, content: string, useProperty = false) => {
      const selector = useProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let element = document.querySelector(selector);
      
      if (element) {
        element.setAttribute('content', content);
        console.log(`✅ Updated existing meta tag: ${property} = ${content}`);
      } else {
        element = document.createElement('meta');
        if (useProperty) {
          element.setAttribute('property', property);
        } else {
          element.setAttribute('name', property);
        }
        element.setAttribute('content', content);
        document.head.appendChild(element);
        console.log(`✅ Created new meta tag: ${property} = ${content}`);
      }
    };

    // Clear existing meta tags first
    const existingTags = [
      'meta[property="og:title"]',
      'meta[property="og:description"]', 
      'meta[property="og:image"]',
      'meta[property="og:url"]',
      'meta[property="og:type"]',
      'meta[property="og:site_name"]',
      'meta[name="description"]',
      'meta[name="twitter:title"]',
      'meta[name="twitter:description"]',
      'meta[name="twitter:image"]',
      'meta[name="twitter:card"]'
    ];
    
    console.log('🧹 Clearing existing meta tags...');
    existingTags.forEach(selector => {
      const element = document.querySelector(selector);
      if (element) {
        console.log(`Removed: ${selector}`);
        element.remove();
      }
    });

    // Always set these base tags
    updateMetaTag('og:type', 'article', true);
    updateMetaTag('og:site_name', 'Staydia Sports', true);
    updateMetaTag('twitter:card', 'summary_large_image', false);
    updateMetaTag('twitter:site', '@staydiasports', false);

    // Set basic meta description
    if (description) {
      updateMetaTag('description', description, false);
      updateMetaTag('og:description', description, true);
      updateMetaTag('twitter:description', description, false);
    }

    // Set title
    if (title) {
      updateMetaTag('og:title', title, true);
      updateMetaTag('twitter:title', title, false);
    }

    // Handle image - this is critical for WhatsApp
    if (image) {
      console.log('🖼️ Processing image:', image);
      
      // Handle Contentful URLs properly
      let fullImageUrl = image;
      if (image.startsWith('//')) {
        fullImageUrl = `https:${image}`;
      } else if (!image.startsWith('http')) {
        fullImageUrl = `https:${image}`;
      }
      
      // Add image optimization for better compatibility
      if (fullImageUrl.includes('images.ctfassets.net')) {
        fullImageUrl += '?fm=jpg&q=80&w=1200&h=630&fit=fill';
      }
      
      console.log('📸 Final image URL:', fullImageUrl);
      
      updateMetaTag('og:image', fullImageUrl, true);
      updateMetaTag('og:image:width', '1200', true);
      updateMetaTag('og:image:height', '630', true);
      updateMetaTag('og:image:type', 'image/jpeg', true);
      updateMetaTag('twitter:image', fullImageUrl, false);
      updateMetaTag('twitter:image:alt', title || 'Staydia Sports Article', false);
    }

    // Set URL
    if (url) {
      updateMetaTag('og:url', url, true);
    }

    // Wait a moment then log all final meta tags
    setTimeout(() => {
      console.log('=== FINAL META TAGS ===');
      document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"], meta[name="description"]').forEach(tag => {
        const prop = tag.getAttribute('property') || tag.getAttribute('name');
        const content = tag.getAttribute('content');
        console.log(`${prop}: ${content}`);
      });
      console.log('=== META TAGS DEBUG END ===');
    }, 100);

    // Cleanup function
    return () => {
      document.title = 'Staydia Sports';
    };
  }, [title, description, image, url]);
};
