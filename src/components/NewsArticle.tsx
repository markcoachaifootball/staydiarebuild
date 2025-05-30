
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleBySlug, NewsArticle } from '@/utils/contentful';
import { CalendarIcon } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NewsArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getArticle = async () => {
      try {
        setIsLoading(true);
        if (!slug) {
          setError('Article not found');
          return;
        }
        
        const fetchedArticle = await fetchArticleBySlug(slug);
        
        if (fetchedArticle) {
          setArticle(fetchedArticle);
          setError(null);
        } else {
          setError('Article not found');
        }
      } catch (err) {
        setError('Failed to load article. Please try again later.');
        console.error('Error loading article:', err);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      getArticle();
    }
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-staydia-black text-white">
        <Header />
        <div className="staydia-container py-24">
          <Skeleton className="h-10 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/4 mb-10" />
          <Skeleton className="h-96 w-full mb-10" />
          <div className="space-y-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !article) {
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
  }

  // Get image dimensions safely with fallbacks
  const getImageWidth = () => {
    try {
      return article?.fields.featuredImage?.fields.file?.details?.image?.width || 800;
    } catch {
      return 800;
    }
  };

  const getImageHeight = () => {
    try {
      return article?.fields.featuredImage?.fields.file?.details?.image?.height || 600;
    } catch {
      return 600;
    }
  };

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="staydia-container py-24">
        <article>
          <h1 className="text-4xl font-bold mb-4 text-white">{article.fields.title}</h1>
          <div className="flex items-center text-gray-400 mb-10">
            <CalendarIcon className="h-4 w-4 mr-2" />
            {new Date(article.fields.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            <span className="mx-2">•</span>
            <span className="bg-staydia-gold text-staydia-black px-3 py-1 text-xs font-bold rounded">
              {article.fields.category}
            </span>
          </div>

          {article.fields.featuredImage && (
            <div className="mb-10">
              <img
                src={`https:${article.fields.featuredImage.fields.file.url}`}
                alt={article.fields.featuredImage.fields.title || article.fields.title}
                className="w-full h-auto rounded-xl"
                loading="lazy"
                width={getImageWidth()}
                height={getImageHeight()}
              />
            </div>
          )}

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 text-lg">{article.fields.summary}</p>
            <p className="text-gray-300">Full article content would be rendered here using Contentful's rich text renderer.</p>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default NewsArticlePage;
