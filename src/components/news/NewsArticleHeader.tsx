
import React from 'react';
import { CalendarIcon } from 'lucide-react';
import { NewsArticle } from '@/utils/contentful';

interface NewsArticleHeaderProps {
  article: NewsArticle;
}

const NewsArticleHeader: React.FC<NewsArticleHeaderProps> = ({ article }) => {
  // Function to extract author name - simplified to use the correct field name
  const getAuthorName = () => {
    // Use the correct field name 'authur' (matching Contentful typo)
    const authorField = article?.fields?.authur;

    console.log('Author field value:', authorField); // Debug log

    if (typeof authorField === 'string' && authorField.trim()) {
      return authorField;
    }

    return 'Unknown Author';
  };

  const dateLabel = (() => {
    const raw = (article as any)?.fields?.date;
    if (!raw) return 'Date unavailable';
    try {
      const d = new Date(raw);
      if (Number.isNaN(d.getTime())) return 'Date unavailable';
      return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return 'Date unavailable';
    }
  })();

  const categoryLabel = (article as any)?.fields?.category || 'Sports';

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 text-staydia-gold">{article.fields.title}</h1>
      <div className="flex items-center text-gray-300 mb-10">
        <CalendarIcon className="h-4 w-4 mr-2" />
        {dateLabel}
        <span className="mx-2">•</span>
        <span className="bg-staydia-gold text-staydia-black px-3 py-1 text-xs font-bold rounded">
          {categoryLabel}
        </span>
      </div>
      <div className="mb-10">
        <p className="text-gray-300 text-sm">By {getAuthorName()}</p>
      </div>
    </div>
  );
};

export default NewsArticleHeader;
