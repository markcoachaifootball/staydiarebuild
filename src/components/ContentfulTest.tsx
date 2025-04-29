
import React, { useEffect, useState } from 'react';
import { fetchNewsArticles, NewsArticle } from '@/utils/contentful';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

const ContentfulTest: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (preview: boolean = false) => {
    try {
      setIsLoading(true);
      setError(null);
      setIsPreview(preview);
      const data = await fetchNewsArticles(3, preview);
      setArticles(data);
      console.log(`Successfully fetched ${preview ? 'preview' : 'published'} content from Contentful`);
    } catch (err) {
      console.error('Error fetching Contentful data:', err);
      setError('Failed to fetch data from Contentful');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-16 pt-16 border-t border-staydia-lightgray">
      <h2 className="text-2xl font-bold text-staydia-gold mb-6">Contentful Connection Test</h2>
      
      <div className="flex gap-4 mb-8">
        <Button 
          onClick={() => fetchData(false)} 
          className="bg-staydia-gold text-staydia-black hover:bg-opacity-90"
          disabled={isLoading}
        >
          {isLoading && !isPreview ? 'Loading...' : 'Fetch Published Content'}
        </Button>
        <Button
          onClick={() => fetchData(true)}
          variant="outline"
          className="border-staydia-gold text-staydia-gold hover:bg-staydia-gold hover:bg-opacity-10"
          disabled={isLoading}
        >
          {isLoading && isPreview ? 'Loading...' : 'Fetch Preview Content'}
        </Button>
      </div>

      {error && (
        <div className="bg-red-900/20 border border-red-700 p-4 rounded-md mb-6">
          <p>{error}</p>
        </div>
      )}

      <div className="bg-staydia-black border border-staydia-lightgray p-6 rounded-xl mb-8">
        <h3 className="text-lg font-semibold mb-4">Connection Status</h3>
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-gray-400">Space ID</dt>
            <dd className="mt-1 text-sm text-white">{import.meta.env.VITE_CONTENTFUL_SPACE_ID || 'qo4q4xk8vua7'}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-400">Access Token</dt>
            <dd className="mt-1 text-sm text-white">
              {(import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || 'UgwiWiX1rnUpxqbjMdTqUgJPj6wl4aRqzlUYaBjI958').substring(0, 10)}...
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-400">Articles Fetched</dt>
            <dd className="mt-1 text-sm text-white">{articles.length}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-400">Mode</dt>
            <dd className="mt-1 text-sm text-white">
              {isPreview ? 'Preview Content' : 'Published Content'}
            </dd>
          </div>
        </dl>
      </div>

      <h3 className="text-xl font-semibold mb-4">Retrieved Articles</h3>
      
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-staydia-lightgray rounded-xl p-6">
              <Skeleton className="h-4 w-1/3 mb-4" />
              <Skeleton className="h-6 w-full mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.sys.id} className="border border-staydia-lightgray rounded-xl p-6 hover:border-staydia-gold transition-all">
              <div className="text-xs text-gray-400 mb-2">{article.fields.category}</div>
              <h4 className="text-lg font-medium mb-2">{article.fields.title}</h4>
              <p className="text-sm text-gray-300 mb-4">{article.fields.summary}</p>
              <div className="text-xs text-gray-400">
                Published: {new Date(article.fields.date).toLocaleDateString()}
              </div>
              <div className="mt-4 text-xs text-gray-400">
                ID: {article.sys.id.substring(0, 8)}...{' '}
                {article.sys.id === 'example1' || article.sys.id === 'example2' || article.sys.id === 'example3' 
                  ? '(Example Content)' 
                  : '(Contentful Content)'}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentfulTest;
