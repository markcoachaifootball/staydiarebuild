
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleBySlug, NewsArticle } from '@/utils/contentful';

export const useNewsArticle = () => {
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
        
        console.log('Fetching article with slug:', slug);
        const fetchedArticle = await fetchArticleBySlug(slug);
        
        if (fetchedArticle) {
          console.log('Article loaded:', fetchedArticle);
          console.log('Article fields:', fetchedArticle.fields);
          console.log('Featured image:', fetchedArticle.fields?.featuredImage);
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

  return { article, isLoading, error, slug };
};
