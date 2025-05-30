
import React from 'react';
import { useMetaTags } from '@/hooks/useMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import { useNewsArticle } from '@/hooks/useNewsArticle';
import NewsArticleLayout from './news/NewsArticleLayout';
import NewsArticleLoading from './news/NewsArticleLoading';
import NewsArticleError from './news/NewsArticleError';

const NewsArticlePage: React.FC = () => {
  const { article, isLoading, error, slug } = useNewsArticle();

  // Get the proper image URL for social sharing
  const getOptimizedImageUrl = () => {
    if (!article?.fields?.featuredImage?.fields?.file?.url) {
      return undefined;
    }
    
    const imageUrl = article.fields.featuredImage.fields.file.url;
    // Ensure we have the full URL with https
    return imageUrl.startsWith('//') ? `https:${imageUrl}` : 
           imageUrl.startsWith('http') ? imageUrl : `https:${imageUrl}`;
  };

  const articleUrl = `https://about.staydiasports.com/news/${slug}`;
  const socialImageUrl = getOptimizedImageUrl();
  
  // Set up meta tags for social sharing when article is loaded
  useMetaTags({
    title: article?.fields?.title,
    description: article?.fields?.summary,
    image: socialImageUrl,
    url: articleUrl,
    type: 'article',
    publishedTime: article?.fields?.date,
    author: 'Staydia Sports',
    section: article?.fields?.category || 'Sports',
    tags: article?.fields?.category ? [article.fields.category, 'Sports News'] : ['Sports News']
  });

  // Set up structured data for SEO
  useStructuredData({
    type: 'Article',
    title: article?.fields?.title,
    description: article?.fields?.summary,
    image: socialImageUrl,
    url: articleUrl,
    author: 'Staydia Sports',
    publishedDate: article?.fields?.date,
    section: article?.fields?.category || 'Sports'
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
