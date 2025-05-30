
import React from 'react';
import { NewsArticle } from '@/utils/contentful';

interface NewsArticleImageProps {
  article: NewsArticle;
}

const NewsArticleImage: React.FC<NewsArticleImageProps> = ({ article }) => {
  // Get image dimensions safely with fallbacks
  const getImageWidth = () => {
    try {
      return article?.fields?.featuredImage?.fields?.file?.details?.image?.width || 800;
    } catch {
      return 800;
    }
  };

  const getImageHeight = () => {
    try {
      return article?.fields?.featuredImage?.fields?.file?.details?.image?.height || 600;
    } catch {
      return 600;
    }
  };

  // Check if featured image and its file exist
  const hasValidFeaturedImage = () => {
    return article?.fields?.featuredImage?.fields?.file?.url;
  };

  if (!hasValidFeaturedImage()) {
    return null;
  }

  return (
    <div className="mb-4">
      <img
        src={`https:${article.fields.featuredImage.fields.file.url}`}
        alt={article.fields.featuredImage.fields.title || article.fields.title}
        className="w-full h-auto rounded-xl"
        loading="lazy"
        width={getImageWidth()}
        height={getImageHeight()}
      />
    </div>
  );
};

export default NewsArticleImage;
