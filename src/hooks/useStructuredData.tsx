import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'Article' | 'WebSite';
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  section?: string;
}

export const useStructuredData = ({
  type,
  title,
  description,
  image,
  url,
  author,
  publishedDate,
  modifiedDate,
  section
}: StructuredDataProps) => {
  useEffect(() => {
    console.log('=== STRUCTURED DATA DEBUG ===');
    console.log('Creating JSON-LD for type:', type);

    const removeOldScript = () => {
      const scriptId = 'staydia-structured-data';
      const oldScript = document.getElementById(scriptId);
      if (oldScript) oldScript.remove();
    };
    removeOldScript();

    let structuredData: any = { "@context": "https://schema.org" };
    const appDomain = 'about.staydiasports.com';
    const finalUrl = url 
      ? (url.startsWith('http') ? url : `https://${appDomain.replace(/^https?:\/\//, '')}${url.startsWith('/') ? '' : '/'}${url}`) 
      : window.location.href;
    const finalImage = image
      ? (image.startsWith('http') ? image : `https://${image.replace(/^\/+/, '')}`)
      : undefined;

    switch (type) {
      case 'Organization':
        structuredData = {
          ...structuredData,
          "@type": "Organization",
          "name": "Staydia Sports",
          "description": "AI-powered sports broadcasting and club management solutions for sports clubs. Automated camera systems, live streaming, fan engagement, and revenue generation through cutting-edge technology.",
          "url": "https://about.staydiasports.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://about.staydiasports.com/lovable-uploads/70c0f6fc-7382-4387-80d3-bae9fc4609e7.png",
            "width": 512,
            "height": 512
          },
          "sameAs": [
            "https://twitter.com/staydiasports",
            "https://linkedin.com/company/staydiasports"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "hello@staydiasports.com",
            "areaServed": "Global",
            "availableLanguage": "English"
          },
          "foundingDate": "2023",
          "numberOfEmployees": "10-50",
          "industry": "Sports Technology",
          "knowsAbout": [
            "AI-powered sports broadcasting",
            "Sports club management",
            "Live streaming technology",
            "Fan engagement platforms",
            "Revenue generation for sports clubs",
            "Automated camera systems",
            "Sports analytics",
            "Club administration software"
          ],
          "offers": {
            "@type": "Service",
            "name": "AI-Powered Sports Broadcasting Platform",
            "description": "Complete solution for sports clubs including automated cameras, live streaming, fan engagement tools, and revenue sharing opportunities.",
            "serviceType": "Sports Technology Platform",
            "areaServed": "Global"
          }
        };
        break;

      case 'Article':
        if (title && description) {
          structuredData = {
            ...structuredData,
            "@type": "Article",
            "headline": title,
            "description": description,
            "url": finalUrl,
            "datePublished": publishedDate || new Date().toISOString(),
            "dateModified": modifiedDate || publishedDate || new Date().toISOString(),
            "author": {
              "@type": "Organization",
              "name": author || "Staydia Sports"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Staydia Sports",
              "logo": {
                "@type": "ImageObject",
                "url": "https://about.staydiasports.com/lovable-uploads/70c0f6fc-7382-4387-80d3-bae9fc4609e7.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": finalUrl
            }
          };
          if (finalImage) {
            structuredData.image = {
              "@type": "ImageObject",
              "url": finalImage,
              "width": 1200,
              "height": 630
            };
          }
          if (section) structuredData.articleSection = section;
        }
        break;

      case 'WebSite':
        structuredData = {
          ...structuredData,
          "@type": "WebSite",
          "name": "Staydia Sports",
          "description": "AI-powered sports club management platform",
          "url": "https://about.staydiasports.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://about.staydiasports.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };
        break;
    }

    // Add the script with unique id so we can only clean up our own
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'staydia-structured-data';
    script.text = JSON.stringify(structuredData, null, 2);
    document.head.appendChild(script);

    console.log('✅ Added structured data:', structuredData);
    console.log('=== STRUCTURED DATA DEBUG END ===');

    // Cleanup function
    return removeOldScript;
  }, [type, title, description, image, url, author, publishedDate, modifiedDate, section]);
};
