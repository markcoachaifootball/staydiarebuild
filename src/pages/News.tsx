
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { fetchNewsArticles, NewsArticle } from '@/utils/contentful';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const News: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        setIsLoading(true);
        const newsArticles = await fetchNewsArticles(12); // Get more articles for the full page
        setArticles(newsArticles);
        setError(null);
      } catch (err) {
        setError('Failed to load news articles. Please try again later.');
        console.error('Error loading news articles:', err);
      } finally {
        setIsLoading(false);
      }
    };

    getArticles();
  }, []);

  // Format the date to standard format
  const formatArticleDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch (err) {
      return dateString;
    }
  };

  // Fallback image if Contentful image is not available
  const getImageUrl = (article: NewsArticle) => {
    try {
      return `https:${article.fields.featuredImage.fields.file.url}`;
    } catch (err) {
      return 'https://via.placeholder.com/600x400?text=Staydia+News';
    }
  };

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="staydia-container py-24">
        <div className="text-center mb-16">
          <h1 className="section-title">Latest News</h1>
          <p className="section-subtitle">Stay updated with the latest from Staydia Sports</p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(9)].map((_, index) => (
              <Card key={index} className="bg-staydia-black border border-staydia-lightgray overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardHeader>
                  <Skeleton className="h-4 w-20 mb-2" />
                  <Skeleton className="h-6 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-10 bg-staydia-black border border-staydia-lightgray rounded-xl">
            <p className="text-red-400">{error}</p>
            <Button 
              onClick={() => window.location.reload()} 
              className="mt-4 bg-staydia-gold text-staydia-black hover:bg-opacity-90"
            >
              Retry
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link to={`/news/${article.fields.slug}`} key={article.sys.id} className="no-underline">
                <Card 
                  className="bg-staydia-black border border-staydia-lightgray overflow-hidden hover:border-staydia-gold transition-all duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={getImageUrl(article)} 
                      alt={article.fields.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-0 left-0 bg-staydia-gold text-staydia-black px-3 py-1 text-xs font-bold">
                      {article.fields.category}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center text-gray-400 text-xs mb-2">
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      {formatArticleDate(article.fields.date)}
                    </div>
                    <h3 className="text-lg font-bold line-clamp-2 hover:text-staydia-gold transition-colors">
                      {article.fields.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-400 line-clamp-3">
                      {article.fields.summary}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="link" 
                      className="text-staydia-gold hover:text-white p-0 h-auto"
                    >
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default News;
