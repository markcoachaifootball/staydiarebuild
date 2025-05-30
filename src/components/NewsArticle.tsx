
import React from 'react';
import { useMetaTags } from '@/hooks/useMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import { useNewsArticle } from '@/hooks/useNewsArticle';
import NewsArticleLayout from './news/NewsArticleLayout';
import NewsArticleLoading from './news/NewsArticleLoading';
import NewsArticleError from './news/NewsArticleError';

const NewsArticlePage: React.FC = () => {
  const { article, isLoading, error, slug } = useNewsArticle();

  // Get the proper image URL for meta tags
  const getMetaImageUrl = () => {
    if (!article?.fields?.featuredImage?.fields?.file?.url) {
      return undefined;
    }
    
    const imageUrl = article.fields.featuredImage.fields.file.url;
    return imageUrl.startsWith('//') ? `https:${imageUrl}` : 
           imageUrl.startsWith('http') ? imageUrl : `https:${imageUrl}`;
  };

  // Only use meta tags and structured data when article is loaded
  const articleUrl = `https://about.staydiasports.com/news/${slug}`;
  const metaImageUrl = getMetaImageUrl();
  
  useMetaTags({
    title: article?.fields?.title,
    description: article?.fields?.summary,
    image: metaImageUrl,
    url: articleUrl,
    type: 'article',
    publishedTime: article?.fields?.date,
    author: 'Staydia Sports',
    section: article?.fields?.category || 'Sports',
    tags: article?.fields?.category ? [article.fields.category, 'Sports News'] : ['Sports News']
  });

  useStructuredData({
    type: 'Article',
    title: article?.fields?.title,
    description: article?.fields?.summary,
    image: metaImageUrl,
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
