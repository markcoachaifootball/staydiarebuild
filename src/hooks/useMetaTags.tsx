
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
    console.log('=== META TAGS DEBUG START ===');
    console.log('Input values:', { title, description, image, url, type });

    // Only proceed if we have actual content
    if (!title || !description) {
      console.log('⚠️ No title or description provided, skipping meta tag updates');
      return;
    }

    // Store meta tags we're about to create for cleanup
    const createdMetaTags: string[] = [];

    // Update document title with better formatting
    const fullTitle = `${title} | Staydia Sports`;
    document.title = fullTitle;
    console.log('Set document title to:', document.title);

    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, property: string, content: string, useProperty = false) => {
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
        createdMetaTags.push(selector);
        console.log(`✅ Created new meta tag: ${property} = ${content}`);
      }
    };

    const finalUrl = url || window.location.href;

    // Basic meta tags
    updateMetaTag('meta[name="description"]', 'description', description);
    updateMetaTag('meta[name="author"]', 'author', author || 'Staydia Sports');
    
    // Add keywords if tags are provided
    if (tags.length > 0) {
      updateMetaTag('meta[name="keywords"]', 'keywords', tags.join(', '));
    }

    // Open Graph tags
    updateMetaTag('meta[property="og:type"]', 'og:type', type, true);
    updateMetaTag('meta[property="og:site_name"]', 'og:site_name', 'Staydia Sports', true);
    updateMetaTag('meta[property="og:title"]', 'og:title', title, true);
    updateMetaTag('meta[property="og:description"]', 'og:description', description, true);
    updateMetaTag('meta[property="og:url"]', 'og:url', finalUrl, true);
    updateMetaTag('meta[property="og:locale"]', 'og:locale', 'en_US', true);

    // Twitter Card tags
    updateMetaTag('meta[name="twitter:card"]', 'twitter:card', 'summary_large_image');
    updateMetaTag('meta[name="twitter:site"]', 'twitter:site', '@staydiasports');
    updateMetaTag('meta[name="twitter:title"]', 'twitter:title', title);
    updateMetaTag('meta[name="twitter:description"]', 'twitter:description', description);

    // Handle image with better optimization
    if (image) {
      console.log('🖼️ Processing image:', image);
      
      let fullImageUrl = image;
      // Ensure HTTPS
      if (image.startsWith('//')) {
        fullImageUrl = `https:${image}`;
      } else if (!image.startsWith('http')) {
        fullImageUrl = image.startsWith('/') ? `https://about.staydiasports.com${image}` : `https://${image}`;
      }
      
      // Optimize Contentful images
      if (fullImageUrl.includes('images.ctfassets.net')) {
        const separator = fullImageUrl.includes('?') ? '&' : '?';
        fullImageUrl += `${separator}fm=jpg&q=85&w=1200&h=630&fit=fill&f=center`;
      }
      
      console.log('📸 Final optimized image URL:', fullImageUrl);
      
      // Set comprehensive image meta tags
      updateMetaTag('meta[property="og:image"]', 'og:image', fullImageUrl, true);
      updateMetaTag('meta[property="og:image:url"]', 'og:image:url', fullImageUrl, true);
      updateMetaTag('meta[property="og:image:secure_url"]', 'og:image:secure_url', fullImageUrl, true);
      updateMetaTag('meta[property="og:image:width"]', 'og:image:width', '1200', true);
      updateMetaTag('meta[property="og:image:height"]', 'og:image:height', '630', true);
      updateMetaTag('meta[property="og:image:type"]', 'og:image:type', 'image/jpeg', true);
      updateMetaTag('meta[property="og:image:alt"]', 'og:image:alt', title, true);
      updateMetaTag('meta[name="twitter:image"]', 'twitter:image', fullImageUrl);
      updateMetaTag('meta[name="twitter:image:alt"]', 'twitter:image:alt', title);
    }

    // Article-specific meta tags for news articles
    if (type === 'article') {
      updateMetaTag('meta[property="article:author"]', 'article:author', author || 'Staydia Sports', true);
      if (publishedTime) {
        updateMetaTag('meta[property="article:published_time"]', 'article:published_time', publishedTime, true);
      }
      updateMetaTag('meta[property="article:section"]', 'article:section', section || 'Sports', true);
      
      // Add article tags
      if (tags.length > 0) {
        tags.forEach((tag, index) => {
          updateMetaTag(`meta[property="article:tag"]:nth-of-type(${index + 1})`, 'article:tag', tag, true);
        });
      }
    }

    // SEO and accessibility tags
    updateMetaTag('meta[name="robots"]', 'robots', 'index,follow');

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

    // Store created tags for cleanup
    previousMetaTags.current = createdMetaTags;

    // Debug final state
    setTimeout(() => {
      console.log('=== FINAL META TAGS ===');
      document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"], meta[name="description"]').forEach(tag => {
        const prop = tag.getAttribute('property') || tag.getAttribute('name');
        const content = tag.getAttribute('content');
        console.log(`${prop}: ${content}`);
      });
      console.log('=== META TAGS DEBUG END ===');
    }, 100);

    // Cleanup function - reset to defaults when component unmounts
    return () => {
      document.title = 'Staydia Sports - AI-Powered Sports Club Management';
      
      // Remove dynamically created meta tags
      previousMetaTags.current.forEach(selector => {
        const element = document.querySelector(selector);
        if (element && element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
    };
  }, [title, description, image, url, type, publishedTime, author, section, tags]);
};
