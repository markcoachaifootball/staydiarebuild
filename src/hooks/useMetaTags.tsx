
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
    if (!title || !description) {
      console.log('⚠️ No title or description provided for social sharing');
      return;
    }

    // --- ENFORCE that the canonical/og:url always matches the full article URL ---
    // If url provided isn't absolute or doesn't look like a news article, force it
    let finalUrl = url;
    const appDomain = 'about.staydiasports.com';

    // If the URL is missing /news/, try to detect & append it from window location as fallback
    const likelyIsHomepage = !finalUrl || finalUrl.endsWith(appDomain) || finalUrl.endsWith(appDomain + '/');
    if (likelyIsHomepage && typeof window !== 'undefined') {
      // try to use the current pathname
      finalUrl = `https://${appDomain.replace(/^https?:\/\//, '')}${window.location.pathname}`;
    } else if (finalUrl && !finalUrl.startsWith('http')) {
      // If url is a path, prepend with https domain
      finalUrl = `https://${appDomain.replace(/^https?:\/\//, '')}${finalUrl.startsWith('/') ? '' : '/'}${finalUrl}`;
    }

    if (!finalUrl) {
      // fallback to window.location.href if nothing is provided (should not generally happen)
      finalUrl = typeof window !== "undefined" ? window.location.href : `https://${appDomain}/`;
    }

    // Sanity check
    console.log('[META_TAGS]: Determined canonical/og:url:', finalUrl);

    document.documentElement.lang = 'en';
    document.title = title ? `${title} | Staydia Sports` : 'Staydia Sports';

    const createdMetaTags: string[] = [];
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

    updateMetaTag('meta[name="description"]', 'description', description);
    updateMetaTag('meta[name="keywords"]', 'keywords', tags?.join(', ') || 'Staydia Sports, Sports News');

    // --- SOCIAL: Open Graph (Facebook/LinkedIn)
    updateMetaTag('meta[property="og:locale"]', 'og:locale', 'en_US', true);
    updateMetaTag('meta[property="og:type"]', 'og:type', type, true);
    updateMetaTag('meta[property="og:site_name"]', 'og:site_name', 'Staydia Sports', true);
    updateMetaTag('meta[property="og:title"]', 'og:title', title, true);
    updateMetaTag('meta[property="og:description"]', 'og:description', description, true);
    updateMetaTag('meta[property="og:url"]', 'og:url', finalUrl, true);

    // --- SOCIAL: Twitter/X
    updateMetaTag('meta[name="twitter:card"]', 'twitter:card', 'summary_large_image');
    updateMetaTag('meta[name="twitter:site"]', 'twitter:site', '@staydiasports');
    updateMetaTag('meta[name="twitter:creator"]', 'twitter:creator', '@staydiasports');
    updateMetaTag('meta[name="twitter:title"]', 'twitter:title', title);
    updateMetaTag('meta[name="twitter:description"]', 'twitter:description', description);

    // --- IMAGES (always full URL, always specify og + twitter tags)
    if (image) {
      let optimizedImageUrl = image;
      if (optimizedImageUrl.startsWith('//')) {
        optimizedImageUrl = `https:${optimizedImageUrl}`;
      } else if (!optimizedImageUrl.startsWith('http')) {
        optimizedImageUrl = `https://${optimizedImageUrl.replace(/^\/+/, '')}`;
      }
      if (optimizedImageUrl.includes('images.ctfassets.net')) {
        const sep = optimizedImageUrl.includes('?') ? '&' : '?';
        optimizedImageUrl += `${sep}fm=jpg&q=85&w=1200&h=630&fit=fill&f=center`;
      }
      updateMetaTag('meta[property="og:image"]', 'og:image', optimizedImageUrl, true);
      updateMetaTag('meta[property="og:image:url"]', 'og:image:url', optimizedImageUrl, true);
      updateMetaTag('meta[property="og:image:secure_url"]', 'og:image:secure_url', optimizedImageUrl, true);
      updateMetaTag('meta[property="og:image:width"]', 'og:image:width', '1200', true);
      updateMetaTag('meta[property="og:image:height"]', 'og:image:height', '630', true);
      updateMetaTag('meta[property="og:image:type"]', 'og:image:type', 'image/jpeg', true);
      updateMetaTag('meta[property="og:image:alt"]', 'og:image:alt', title, true);
      updateMetaTag('meta[name="twitter:image"]', 'twitter:image', optimizedImageUrl);
      updateMetaTag('meta[name="twitter:image:alt"]', 'twitter:image:alt', title);
    }

    // Article-specific
    if (type === 'article') {
      updateMetaTag('meta[property="article:author"]', 'article:author', author || 'Staydia Sports', true);
      if (publishedTime) updateMetaTag('meta[property="article:published_time"]', 'article:published_time', publishedTime, true);
      if (section) updateMetaTag('meta[property="article:section"]', 'article:section', section, true);
    }

    // Canonical URL <link> - always points to absolute article/page URL only!
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

    // Cleanup (restore base title and remove ONLY those we created)
    return () => {
      document.title = 'Staydia Sports - AI-Powered Sports Club Management';
      previousMetaTags.current.forEach(selector => {
        const element = document.querySelector(selector);
        if (element && element.parentNode) element.parentNode.removeChild(element);
      });
    };
  }, [title, description, image, url, type, publishedTime, author, section, tags]);
};
