import React, { useEffect, useState } from 'react';
import { fetchNewsArticles, NewsArticle } from '@/utils/contentful';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { CalendarIcon, ArrowRightIcon } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';

const Newsroom: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getArticles = async () => {
    try {
      setIsLoading(true);
      console.log('Fetching news articles from Contentful...');
      
      // Pass preview mode to force latest content if needed
      const newsArticles = await fetchNewsArticles(4);
      setArticles(newsArticles);
      setError(null);
      
      // Show toast if articles are fetched from Contentful
      if (newsArticles.length > 0) {
        if (!newsArticles[0].sys.id.startsWith('example')) {
          toast.success("Latest articles loaded from Contentful");
          console.log('Loaded real Contentful articles', newsArticles);
        } else {
          console.log('Loaded example articles (no Contentful data found)');
        }
      }
    } catch (err) {
      setError('Failed to load news articles. Please try again later.');
      console.error('Error loading news articles:', err);
      toast.error("Failed to load news articles");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  const formatArticleDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return formatDistanceToNow(date, { addSuffix: true });
    } catch (err) {
      return dateString;
    }
  };

  const getImageUrl = (article: NewsArticle) => {
    try {
      return article.fields.featuredImage?.fields.file?.url
        ? `https:${article.fields.featuredImage.fields.file.url}`
        : 'https://via.placeholder.com/600x400?text=Staydia+News';
    } catch (err) {
      return 'https://via.placeholder.com/600x400?text=Staydia+News';
    }
  };

  return (
    <div className="mt-16 pt-16 border-t border-staydia-lightgray" id="newsroom">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold text-staydia-gold">Latest News</h2>
        <div className="flex items-center gap-4">
          <Link to="/news">
            <Button variant="ghost" className="text-staydia-gold hover:text-white">
              View All <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <Link to={`/news/${article.fields.slug}`} key={article.sys.id} className="no-underline">
              <Card 
                className="bg-staydia-black border border-staydia-lightgray overflow-hidden hover:border-staydia-gold transition-all duration-300"
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
  );
};

export default Newsroom;
