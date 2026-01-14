import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface NewsArticleErrorProps {
  error: string;
}

const NewsArticleError: React.FC<NewsArticleErrorProps> = ({ error }) => {
  // For SEO: Return proper 404-like content that tells Google this is intentional
  // Include links to valid content to help crawlers find real pages
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <main className="staydia-container py-24">
        <article className="bg-staydia-black border border-staydia-lightgray p-10 rounded-xl text-center">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Article Not Found
          </h1>
          <p className="text-gray-300 mb-6">
            The article you're looking for may have been moved or removed.
          </p>
          
          {/* SEO: Provide clear navigation to valid content */}
          <nav className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link 
              to="/news" 
              className="inline-flex items-center justify-center px-6 py-3 bg-staydia-green text-black font-semibold rounded-lg hover:bg-staydia-green/90 transition-colors"
            >
              Browse All News
            </Link>
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-6 py-3 border border-staydia-lightgray text-white font-semibold rounded-lg hover:bg-white/5 transition-colors"
            >
              Return Home
            </Link>
          </nav>

          {/* SEO: Additional context for crawlers */}
          <section className="mt-12 text-left max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Explore Staydia Sports
            </h2>
            <p className="text-gray-400 mb-4">
              Staydia Sports provides AI-powered solutions for sports clubs, including fan engagement, 
              revenue optimization, and digital transformation tools.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><Link to="/for-clubs" className="text-staydia-green hover:underline">Solutions for Clubs</Link></li>
              <li><Link to="/technology" className="text-staydia-green hover:underline">Our Technology</Link></li>
              <li><Link to="/sports" className="text-staydia-green hover:underline">Sports We Support</Link></li>
              <li><Link to="/about-us" className="text-staydia-green hover:underline">About Staydia</Link></li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default NewsArticleError;
