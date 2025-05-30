
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

    // Remove existing structured data script
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    let structuredData: any = {
      "@context": "https://schema.org"
    };

    const finalUrl = url || window.location.href;
    const finalImage = image ? (image.startsWith('http') ? image : `https://about.staydiasports.com${image}`) : undefined;

    switch (type) {
      case 'Organization':
        structuredData = {
          ...structuredData,
          "@type": "Organization",
          "name": "Staydia Sports",
          "description": "AI-powered sports club management platform",
          "url": "https://about.staydiasports.com",
          "logo": "https://about.staydiasports.com/lovable-uploads/70c0f6fc-7382-4387-80d3-bae9fc4609e7.png",
          "sameAs": [
            "https://twitter.com/staydiasports"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": "English"
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
            "dateModified": modifiedDate || new Date().toISOString(),
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

          if (section) {
            structuredData.articleSection = section;
          }
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

    // Create and append the script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData, null, 2);
    document.head.appendChild(script);

    console.log('✅ Added structured data:', structuredData);
    console.log('=== STRUCTURED DATA DEBUG END ===');

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, title, description, image, url, author, publishedDate, modifiedDate, section]);
};
