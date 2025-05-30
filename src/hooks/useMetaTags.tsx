
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
      'meta[property^="og:"]',
      'meta[name^="twitter:"]',
      'meta[name="description"]',
      'meta[property="article:"]'
    ];
    
    console.log('🧹 Clearing existing meta tags...');
    existingTags.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        console.log(`Removed: ${element.getAttribute('property') || element.getAttribute('name')}`);
        element.remove();
      });
    });

    // Set fallback values
    const finalTitle = title || 'Staydia Sports';
    const finalDescription = description || 'Leading sports technology and streaming platform connecting fans with their favorite teams and leagues.';
    const finalUrl = url || window.location.href;

    // Basic meta description
    updateMetaTag('description', finalDescription, false);

    // Open Graph tags
    updateMetaTag('og:type', 'article', true);
    updateMetaTag('og:site_name', 'Staydia Sports', true);
    updateMetaTag('og:title', finalTitle, true);
    updateMetaTag('og:description', finalDescription, true);
    updateMetaTag('og:url', finalUrl, true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', false);
    updateMetaTag('twitter:site', '@staydiasports', false);
    updateMetaTag('twitter:title', finalTitle, false);
    updateMetaTag('twitter:description', finalDescription, false);

    // Handle image with proper fallback
    let finalImage = image;
    if (!finalImage) {
      // Use a default image if no featured image is provided
      finalImage = 'https://about.staydiasports.com/placeholder.svg';
    }

    if (finalImage) {
      console.log('🖼️ Processing image:', finalImage);
      
      // Ensure proper URL format
      let fullImageUrl = finalImage;
      if (finalImage.startsWith('//')) {
        fullImageUrl = `https:${finalImage}`;
      } else if (!finalImage.startsWith('http') && !finalImage.includes('placeholder.svg')) {
        fullImageUrl = `https:${finalImage}`;
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
      updateMetaTag('og:image:alt', finalTitle, true);
      updateMetaTag('twitter:image', fullImageUrl, false);
      updateMetaTag('twitter:image:alt', finalTitle, false);
    }

    // Article-specific meta tags
    if (title && description) {
      updateMetaTag('article:author', 'Staydia Sports', true);
      updateMetaTag('article:published_time', new Date().toISOString(), true);
      updateMetaTag('article:section', 'Sports', true);
      updateMetaTag('article:tag', 'Sports News', true);
    }

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
