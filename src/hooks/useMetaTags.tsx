
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

    // Only proceed if we have actual content (not just fallbacks)
    if (!title || !description) {
      console.log('⚠️ No title or description provided, skipping meta tag updates');
      return;
    }

    // Update document title
    document.title = `${title} - Staydia Sports`;
    console.log('Set document title to:', document.title);

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

    const finalUrl = url || window.location.href;

    // Basic meta description
    updateMetaTag('description', description, false);

    // Open Graph tags
    updateMetaTag('og:type', 'article', true);
    updateMetaTag('og:site_name', 'Staydia Sports', true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', finalUrl, true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', false);
    updateMetaTag('twitter:site', '@staydiasports', false);
    updateMetaTag('twitter:title', title, false);
    updateMetaTag('twitter:description', description, false);

    // Handle image if provided
    if (image) {
      console.log('🖼️ Processing image:', image);
      
      // Ensure proper URL format
      let fullImageUrl = image;
      if (image.startsWith('//')) {
        fullImageUrl = `https:${image}`;
      } else if (!image.startsWith('http')) {
        fullImageUrl = `https:${image}`;
      }
      
      // Add image optimization for Contentful images
      if (fullImageUrl.includes('images.ctfassets.net')) {
        fullImageUrl += '?fm=jpg&q=85&w=1200&h=630&fit=fill&f=center';
      }
      
      console.log('📸 Final image URL:', fullImageUrl);
      
      // Set comprehensive image meta tags
      updateMetaTag('og:image', fullImageUrl, true);
      updateMetaTag('og:image:url', fullImageUrl, true);
      updateMetaTag('og:image:secure_url', fullImageUrl, true);
      updateMetaTag('og:image:width', '1200', true);
      updateMetaTag('og:image:height', '630', true);
      updateMetaTag('og:image:type', 'image/jpeg', true);
      updateMetaTag('og:image:alt', title, true);
      updateMetaTag('twitter:image', fullImageUrl, false);
      updateMetaTag('twitter:image:alt', title, false);
    } else {
      console.log('⚠️ No image provided for meta tags');
    }

    // Article-specific meta tags
    updateMetaTag('article:author', 'Staydia Sports', true);
    updateMetaTag('article:published_time', new Date().toISOString(), true);
    updateMetaTag('article:section', 'Sports', true);
    updateMetaTag('article:tag', 'Sports News', true);

    // Additional SEO and social tags
    updateMetaTag('robots', 'index,follow', false);
    updateMetaTag('author', 'Staydia Sports', false);

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
