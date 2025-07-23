import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { fetchNewsArticles, NewsArticle } from '@/utils/contentful';
import { generateSlug } from '@/utils/slugify';

const NewsCarousel: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const fetchedArticles = await fetchNewsArticles(3);
        setArticles(fetchedArticles);
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getArticles();
  }, []);

  const formatArticleDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  const getImageUrl = (article: NewsArticle): string => {
    if (article.fields.featuredImage?.fields?.file?.url) {
      const baseUrl = article.fields.featuredImage.fields.file.url;
      return baseUrl.startsWith('//') ? `https:${baseUrl}` : baseUrl;
    }
    return '/placeholder.svg';
  };

  if (isLoading) {
    return (
      <section className="py-16 staydia-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest News</h2>
        </div>
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {[1, 2, 3].map((i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-staydia-darkgray/50 rounded-xl overflow-hidden animate-pulse">
                  <div className="aspect-video bg-gray-700"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-700 rounded mb-2"></div>
                    <div className="h-6 bg-gray-700 rounded mb-4"></div>
                    <div className="h-4 bg-gray-700 rounded"></div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    );
  }

  return (
    <section className="py-16 staydia-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Latest News</h2>
        <p className="text-gray-300 text-lg">Stay updated with the latest from Staydia</p>
      </div>
      
      <Carousel className="w-full max-w-6xl mx-auto">
        <CarouselContent>
          {articles.map((article) => (
            <CarouselItem key={article.sys.id} className="md:basis-1/2 lg:basis-1/3">
              <Link 
                to={`/news/${generateSlug(article.fields.title)}`}
                className="block bg-staydia-darkgray/50 rounded-xl overflow-hidden hover:bg-staydia-darkgray/70 transition-all duration-300 group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={getImageUrl(article)} 
                    alt={article.fields.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-staydia-gold mb-2">
                    <span className="capitalize">{article.fields.category || 'News'}</span>
                    {article.fields.date && (
                      <>
                        <span>•</span>
                        <span>{formatArticleDate(article.fields.date)}</span>
                      </>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-staydia-gold transition-colors line-clamp-2">
                    {article.fields.title}
                  </h3>
                  
                  {article.fields.summary && (
                    <p className="text-gray-300 text-sm line-clamp-3">
                      {article.fields.summary}
                    </p>
                  )}
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
};

export default NewsCarousel;