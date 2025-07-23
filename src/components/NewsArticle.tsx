
import React from 'react';
import { useMetaTags } from '@/hooks/useMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import { useNewsArticle } from '@/hooks/useNewsArticle';
import NewsArticleLayout from './news/NewsArticleLayout';
import NewsArticleLoading from './news/NewsArticleLoading';
import NewsArticleError from './news/NewsArticleError';

// Default fallback assets
const DEFAULT_IMAGE =
  "https://about.staydiasports.com/lovable-uploads/70c0f6fc-7382-4387-80d3-bae9fc4609e7.png";
const DEFAULT_DESCRIPTION =
  "Staydia Sports: AI-powered sports club management and the latest news in sports technology and innovation.";

const NewsArticlePage: React.FC = () => {
  const { article, isLoading, error, slug } = useNewsArticle();


  // Compute fallbacks, always safe!
  const getOptimizedImageUrl = React.useCallback(() => {
    const fileUrl = article?.fields?.featuredImage?.fields?.file?.url;
    if (!fileUrl) return undefined;
    let imageUrl: string = fileUrl.startsWith('//')
      ? `https:${fileUrl}`
      : fileUrl.startsWith('http')
      ? fileUrl
      : `https:${fileUrl}`;
    if (imageUrl.includes('images.ctfassets.net')) {
      const sep = imageUrl.includes('?') ? '&' : '?';
      imageUrl += `${sep}fm=jpg&q=85&w=1200&h=630&fit=fill&f=center`;
    }
    return imageUrl;
  }, [article]);

  // Only determine articleUrl, image, summary when we actually have article loaded:
  const articleUrl = article ? `https://about.staydiasports.com/news/${article.fields.slug}` : undefined;
  const socialImageUrl = getOptimizedImageUrl() || DEFAULT_IMAGE;
  const summary = (article?.fields?.summary && article.fields.summary.trim().length > 0)
    ? article.fields.summary
    : DEFAULT_DESCRIPTION;

  // --- Fix: Always call the hooks, pass sensible fallbacks to avoid accessing undefined ---

  useMetaTags({
    title: article?.fields?.title || "Staydia Sports News",
    description: summary,
    image: socialImageUrl,
    url: articleUrl,
    type: 'article',
    publishedTime: article?.fields?.date,
    author: article?.fields?.authur || 'Staydia Sports',
    section: article?.fields?.category || 'Sports',
    tags: article?.fields?.category ? [article.fields.category, 'Sports News'] : ['Sports News'],
  });

  useStructuredData({
    type: 'Article',
    title: article?.fields?.title || "Staydia Sports News",
    description: summary,
    image: socialImageUrl,
    url: articleUrl,
    author: article?.fields?.authur || 'Staydia Sports',
    publishedDate: article?.fields?.date,
    section: article?.fields?.category || 'Sports',
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
