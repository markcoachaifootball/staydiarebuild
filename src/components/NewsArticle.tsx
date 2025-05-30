import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleBySlug, NewsArticle } from '@/utils/contentful';
import { CalendarIcon } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { useMetaTags } from '@/hooks/useMetaTags';

const NewsArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Use meta tags hook for social sharing
  useMetaTags({
    title: article?.fields?.title,
    description: article?.fields?.summary,
    image: article?.fields?.featuredImage?.fields?.file?.url,
    url: `https://about.staydiasports.com/news/${slug}`
  });

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

  // Rich text rendering options
  const richTextOptions = {
    renderMark: {
      [MARKS.BOLD]: (text: any) => <strong className="font-bold">{text}</strong>,
      [MARKS.ITALIC]: (text: any) => <em className="italic">{text}</em>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p className="mb-4 text-gray-300">{children}</p>,
      [BLOCKS.HEADING_1]: (node: any, children: any) => <h1 className="text-3xl font-bold mb-6 text-staydia-gold">{children}</h1>,
      [BLOCKS.HEADING_2]: (node: any, children: any) => <h2 className="text-2xl font-bold mb-4 text-staydia-gold">{children}</h2>,
      [BLOCKS.HEADING_3]: (node: any, children: any) => <h3 className="text-xl font-bold mb-3 text-staydia-gold">{children}</h3>,
      [BLOCKS.UL_LIST]: (node: any, children: any) => <ul className="list-disc ml-6 mb-4 text-gray-300">{children}</ul>,
      [BLOCKS.OL_LIST]: (node: any, children: any) => <ol className="list-decimal ml-6 mb-4 text-gray-300">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => <li className="mb-1">{children}</li>,
    },
  };

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
  };

  // Get image dimensions safely with fallbacks
  const getImageWidth = () => {
    try {
      return article?.fields?.featuredImage?.fields?.file?.details?.image?.width || 800;
    } catch {
      return 800;
    }
  };

  const getImageHeight = () => {
    try {
      return article?.fields?.featuredImage?.fields?.file?.details?.image?.height || 600;
    } catch {
      return 600;
    }
  };

  // Check if featured image and its file exist
  const hasValidFeaturedImage = () => {
    return article?.fields?.featuredImage?.fields?.file?.url;
  };

  console.log('Full article fields:', article.fields); // Debug log
  console.log('Extracted author name:', getAuthorName()); // Debug log

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="staydia-container py-24">
        <article>
          <h1 className="text-4xl font-bold mb-4 text-staydia-gold">{article.fields.title}</h1>
          <div className="flex items-center text-gray-300 mb-10">
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

          {hasValidFeaturedImage() && (
            <div className="mb-4">
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

          <div className="mb-10">
            <p className="text-gray-300 text-sm">
              By {getAuthorName()}
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 text-lg mb-8">{article.fields.summary}</p>
            
            {article.fields.bodyContent ? (
              <div className="rich-text-content">
                {documentToReactComponents(article.fields.bodyContent, richTextOptions)}
              </div>
            ) : (
              <p className="text-gray-500 italic">No content available for this article.</p>
            )}
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default NewsArticlePage;
