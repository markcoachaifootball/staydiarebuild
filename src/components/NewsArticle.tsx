
import React from 'react';
import { useMetaTags } from '@/hooks/useMetaTags';
import { useNewsArticle } from '@/hooks/useNewsArticle';
import NewsArticleLayout from './news/NewsArticleLayout';
import NewsArticleLoading from './news/NewsArticleLoading';
import NewsArticleError from './news/NewsArticleError';

const NewsArticlePage: React.FC = () => {
  const { article, isLoading, error, slug } = useNewsArticle();

  // Get the proper image URL for meta tags
  const getMetaImageUrl = () => {
    if (!article?.fields?.featuredImage?.fields?.file?.url) {
      console.log('No featured image found for meta tags');
      return undefined;
    }
    
    const imageUrl = article.fields.featuredImage.fields.file.url;
    console.log('Meta image URL from article:', imageUrl);
    
    // Ensure proper URL format
    if (imageUrl.startsWith('//')) {
      return `https:${imageUrl}`;
    }
    return imageUrl.startsWith('http') ? imageUrl : `https:${imageUrl}`;
  };

  // Use meta tags hook for social sharing
  useMetaTags({
    title: article?.fields?.title,
    description: article?.fields?.summary,
    image: getMetaImageUrl(),
    url: `https://about.staydiasports.com/news/${slug}`
  });

  if (isLoading) {
    return <NewsArticleLoading />;
  }

  if (error || !article) {
    return <NewsArticleError error={error || 'Article not found'} />;
  }

  return <NewsArticleLayout article={article} />;
};

export default NewsArticlePage;
