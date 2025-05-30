
import React from 'react';
import { NewsArticle } from '@/utils/contentful';
import { renderRichText } from '@/utils/richTextRenderer';

interface NewsArticleContentProps {
  article: NewsArticle;
}

const NewsArticleContent: React.FC<NewsArticleContentProps> = ({ article }) => {
  return (
    <div className="prose prose-invert prose-lg max-w-none">
      <p className="text-gray-300 text-lg mb-8">{article.fields.summary}</p>
      
      {article.fields.bodyContent ? (
        <div className="rich-text-content">
          {renderRichText(article.fields.bodyContent)}
        </div>
      ) : (
        <p className="text-gray-500 italic">No content available for this article.</p>
      )}
    </div>
  );
};

export default NewsArticleContent;
