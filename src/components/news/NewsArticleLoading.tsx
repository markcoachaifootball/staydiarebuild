import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { isSeoBotUserAgent } from '@/utils/isSeoBot';

const NewsArticleLoading: React.FC = () => {
  const isBot = isSeoBotUserAgent();

  // For SEO bots: Show real content instead of skeletons to avoid "soft 404"
  if (isBot) {
    return (
      <div className="min-h-screen bg-staydia-black text-white">
        <Header />
        <main className="staydia-container py-24">
          <article>
            <h1 className="text-4xl font-bold mb-4 text-white">
              Staydia Sports News
            </h1>
            <p className="text-gray-300 mb-8">
              Stay updated with the latest news from Staydia Sports - AI-powered solutions 
              for sports clubs worldwide. Our platform helps clubs engage fans, optimize 
              revenue, and transform their digital presence.
            </p>
            <section className="prose prose-invert max-w-none">
              <h2>About Staydia Sports</h2>
              <p>
                Staydia Sports is revolutionizing how sports clubs connect with their fans. 
                Our AI-powered platform provides comprehensive solutions for fan engagement, 
                ticketing, merchandise, and revenue optimization.
              </p>
              <h2>Featured Solutions</h2>
              <ul>
                <li>AI-powered fan engagement tools</li>
                <li>Revenue optimization for sports clubs</li>
                <li>Digital transformation solutions</li>
                <li>Multi-sport platform support</li>
              </ul>
            </section>
          </article>
        </main>
        <Footer />
      </div>
    );
  }

  // For regular users: Show loading skeletons
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
};

export default NewsArticleLoading;
