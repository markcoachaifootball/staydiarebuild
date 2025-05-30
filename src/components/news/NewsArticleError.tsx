
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface NewsArticleErrorProps {
  error: string;
}

const NewsArticleError: React.FC<NewsArticleErrorProps> = ({ error }) => {
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="staydia-container py-24">
        <div className="bg-staydia-black border border-staydia-lightgray p-10 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">
            {error || 'Article not found'}
          </h2>
          <p className="text-gray-300">
            Sorry, we couldn't find the article you're looking for.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsArticleError;
