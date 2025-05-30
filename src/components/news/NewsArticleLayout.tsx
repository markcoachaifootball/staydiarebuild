
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsArticleHeader from './NewsArticleHeader';
import NewsArticleImage from './NewsArticleImage';
import NewsArticleContent from './NewsArticleContent';
import { NewsArticle } from '@/utils/contentful';

interface NewsArticleLayoutProps {
  article: NewsArticle;
}

const NewsArticleLayout: React.FC<NewsArticleLayoutProps> = ({ article }) => {
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="staydia-container py-24">
        <article>
          <NewsArticleHeader article={article} />
          <NewsArticleImage article={article} />
          <NewsArticleContent article={article} />
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default NewsArticleLayout;
