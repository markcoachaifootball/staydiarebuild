import { useEffect } from 'react';

interface AdvancedSEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  tags?: string[];
  canonical?: string;
  locale?: string;
  alternateLanguages?: { href: string; hreflang: string }[];
  breadcrumbs?: { name: string; url: string }[];
  faqSchema?: { question: string; answer: string }[];
  organizationSchema?: {
    name: string;
    url: string;
    logo: string;
    description: string;
    address?: {
      streetAddress: string;
      addressLocality: string;
      addressCountry: string;
    };
  };
}

export const useAdvancedSEO = (props: AdvancedSEOProps) => {
  useEffect(() => {
    const {
      title,
      description,
      url = window.location.href,
      image = 'https://about.staydiasports.com/lovable-uploads/c8798285-fc56-4f93-bcbd-5f5d7c06190d.png',
      type = 'website',
      author,
      publishedTime,
      tags = [],
      canonical,
      locale = 'en_US',
      alternateLanguages = [],
      breadcrumbs = [],
      faqSchema = [],
      organizationSchema
    } = props;

    // Update document title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, attribute: string, content: string, isProperty = false) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        if (isProperty) {
          tag.setAttribute('property', attribute);
        } else {
          tag.setAttribute('name', attribute);
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('meta[name="description"]', 'description', description);
    updateMetaTag('meta[name="keywords"]', 'keywords', tags.join(', '));
    updateMetaTag('meta[name="robots"]', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('meta[name="googlebot"]', 'googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('meta[name="bingbot"]', 'bingbot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    
    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical || url);

    // Open Graph tags
    updateMetaTag('meta[property="og:type"]', 'og:type', type, true);
    updateMetaTag('meta[property="og:title"]', 'og:title', title, true);
    updateMetaTag('meta[property="og:description"]', 'og:description', description, true);
    updateMetaTag('meta[property="og:url"]', 'og:url', url, true);
    updateMetaTag('meta[property="og:site_name"]', 'og:site_name', 'Staydia Sports', true);
    updateMetaTag('meta[property="og:locale"]', 'og:locale', locale, true);
    updateMetaTag('meta[property="og:image"]', 'og:image', image, true);
    updateMetaTag('meta[property="og:image:width"]', 'og:image:width', '1200', true);
    updateMetaTag('meta[property="og:image:height"]', 'og:image:height', '630', true);
    updateMetaTag('meta[property="og:image:alt"]', 'og:image:alt', title, true);

    // Twitter/X Card tags
    updateMetaTag('meta[name="twitter:card"]', 'twitter:card', 'summary_large_image');
    updateMetaTag('meta[name="twitter:site"]', 'twitter:site', '@staydiasports');
    updateMetaTag('meta[name="twitter:creator"]', 'twitter:creator', '@staydiasports');
    updateMetaTag('meta[name="twitter:title"]', 'twitter:title', title);
    updateMetaTag('meta[name="twitter:description"]', 'twitter:description', description);
    updateMetaTag('meta[name="twitter:image"]', 'twitter:image', image);
    updateMetaTag('meta[name="twitter:image:alt"]', 'twitter:image:alt', title);

    // Article-specific meta tags
    if (type === 'article' && author) {
      updateMetaTag('meta[name="author"]', 'author', author);
      updateMetaTag('meta[property="article:author"]', 'article:author', author, true);
    }
    if (publishedTime) {
      updateMetaTag('meta[property="article:published_time"]', 'article:published_time', publishedTime, true);
    }

    // AI-friendly meta tags
    updateMetaTag('meta[name="ai-summary"]', 'ai-summary', description);
    updateMetaTag('meta[name="topic"]', 'topic', 'sports technology, AI broadcasting, club management');
    updateMetaTag('meta[name="industry"]', 'industry', 'Sports Technology, Broadcasting, SaaS');
    updateMetaTag('meta[name="AI-readable"]', 'AI-readable', 'true');

    // Mobile optimization
    updateMetaTag('meta[name="theme-color"]', 'theme-color', '#DAA520');
    updateMetaTag('meta[name="msapplication-TileColor"]', 'msapplication-TileColor', '#DAA520');

    // Alternate language tags
    alternateLanguages.forEach(lang => {
      let linkTag = document.querySelector(`link[hreflang="${lang.hreflang}"]`);
      if (!linkTag) {
        linkTag = document.createElement('link');
        linkTag.setAttribute('rel', 'alternate');
        linkTag.setAttribute('hreflang', lang.hreflang);
        document.head.appendChild(linkTag);
      }
      linkTag.setAttribute('href', lang.href);
    });

    // Structured Data - Breadcrumbs
    if (breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url
        }))
      };

      let breadcrumbScript = document.querySelector('script[data-schema="breadcrumb"]');
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.setAttribute('type', 'application/ld+json');
        breadcrumbScript.setAttribute('data-schema', 'breadcrumb');
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    }

    // Structured Data - FAQ
    if (faqSchema.length > 0) {
      const faqSchemaData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqSchema.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      };

      let faqScript = document.querySelector('script[data-schema="faq"]');
      if (!faqScript) {
        faqScript = document.createElement('script');
        faqScript.setAttribute('type', 'application/ld+json');
        faqScript.setAttribute('data-schema', 'faq');
        document.head.appendChild(faqScript);
      }
      faqScript.textContent = JSON.stringify(faqSchemaData);
    }

    // Structured Data - Organization
    if (organizationSchema) {
      const orgSchemaData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: organizationSchema.name,
        url: organizationSchema.url,
        logo: organizationSchema.logo,
        description: organizationSchema.description,
        ...(organizationSchema.address && { address: organizationSchema.address })
      };

      let orgScript = document.querySelector('script[data-schema="organization"]');
      if (!orgScript) {
        orgScript = document.createElement('script');
        orgScript.setAttribute('type', 'application/ld+json');
        orgScript.setAttribute('data-schema', 'organization');
        document.head.appendChild(orgScript);
      }
      orgScript.textContent = JSON.stringify(orgSchemaData);
    }

    // Performance hints
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdn.jsdelivr.net'
    ];

    preconnectDomains.forEach(domain => {
      if (!document.querySelector(`link[rel="preconnect"][href="${domain}"]`)) {
        const preconnectLink = document.createElement('link');
        preconnectLink.setAttribute('rel', 'preconnect');
        preconnectLink.setAttribute('href', domain);
        preconnectLink.setAttribute('crossorigin', '');
        document.head.appendChild(preconnectLink);
      }
    });

    // Cleanup function
    return () => {
      // Remove dynamic schema scripts on unmount
      const dynamicSchemas = document.querySelectorAll('script[data-schema]');
      dynamicSchemas.forEach(script => {
        if (script.getAttribute('data-schema') !== 'main-organization') {
          script.remove();
        }
      });
    };
  }, [props]);
};