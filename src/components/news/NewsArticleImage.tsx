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

  if (!hasValidFeaturedImage()) return null;

  // Always supply alt text and full https:// URL for the image and analytics-friendly loading params
  const fileUrl = article.fields.featuredImage.fields.file.url;
  const imageUrl = fileUrl.startsWith('http')
    ? fileUrl
    : fileUrl.startsWith('//')
      ? `https:${fileUrl}`
      : `https://${fileUrl.replace(/^\/+/, '')}`;

  const altText =
    article.fields.featuredImage.fields.title ||
    article.fields.title ||
    'Staydia Sports news featured image';

  return (
    <div className="mb-4">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-auto rounded-xl"
        loading="lazy"
        width={getImageWidth()}
        height={getImageHeight()}
        // Add itemProp for Google images in Article
        itemProp="image"
      />
    </div>
  );
};

export default NewsArticleImage;
