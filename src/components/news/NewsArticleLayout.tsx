
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsArticleHeader from './NewsArticleHeader';
import NewsArticleImage from './NewsArticleImage';
import NewsArticleContent from './NewsArticleContent';
import SocialShareButtons from './SocialShareButtons';
import { NewsArticle } from '@/utils/contentful';

interface NewsArticleLayoutProps {
  article: NewsArticle;
}

const NewsArticleLayout: React.FC<NewsArticleLayoutProps> = ({ article }) => {
  const articleUrl = `https://about.staydiasports.com/news/${article.fields.slug}`;

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="staydia-container py-24">
        <div className="flex gap-8 lg:gap-12">
          {/* Main article content */}
          <article className="flex-1 max-w-4xl">
            <NewsArticleHeader article={article} />
            <NewsArticleImage article={article} />
            <NewsArticleContent article={article} />
          </article>
          
          {/* Social sharing sidebar - hidden on mobile */}
          <aside className="hidden lg:block w-48 flex-shrink-0">
            <SocialShareButtons 
              title={article.fields.title} 
              url={articleUrl} 
            />
          </aside>
        </div>
        
        {/* Mobile social sharing - shown on mobile only */}
        <div className="lg:hidden mt-8 pt-8 border-t border-gray-700">
          <SocialShareButtons 
            title={article.fields.title} 
            url={articleUrl} 
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsArticleLayout;
