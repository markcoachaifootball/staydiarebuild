
// Define the interface for the fields in our NewsArticle content type
export interface NewsArticleFields {
  title: string;
  slug: string;
  category?: string; 
  date?: string;
  authur?: string; // Fixed to match actual Contentful field name (note the typo)
  featuredImage?: {
    sys?: {
      id: string;
      type: string;
    };
    fields: {
      file: {
        url: string;
        details?: {
          image?: {
            width?: number;
            height?: number;
          };
        };
      };
      title?: string;
    };
  };
  summary?: string;
  bodyContent?: any; // Rich text content
}

// Define our NewsArticle type
export interface NewsArticle {
  sys: {
    id: string;
    // other sys properties that might be used
  };
  fields: NewsArticleFields;
}
