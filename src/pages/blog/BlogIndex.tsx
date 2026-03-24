import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useAIMetaTags } from '@/hooks/useAIMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import { Link } from 'react-router-dom';
import { blogPosts } from './blogPosts';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

const BlogIndex: React.FC = () => {
  useScrollToTop();
  useAIMetaTags({
    title: 'Staydia Sports Blog: Sports Streaming, AI Cameras & Club Management',
    description: 'Read the latest guides on live streaming grassroots sports, AI camera technology, club management, and fan engagement from Staydia Sports.',
    keywords: 'sports streaming blog, grassroots sports guides, AI cameras, sports technology, club management',
    category: 'blog',
  });
  useStructuredData({ type: 'Organization' });

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-32 staydia-container">
        <div className="max-w-6xl mx-auto mb-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Staydia Sports Blog</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert guides on live streaming grassroots sports, AI camera technology, club management, and how to build fan communities that generate revenue.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {blogPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                <div className="h-full bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-8 hover:border-staydia-gold transition-colors duration-300 cursor-pointer flex flex-col">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-staydia-gold/20 text-staydia-gold text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-3 text-white line-clamp-2 flex-grow">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-300 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-6 flex-wrap">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-staydia-gold font-semibold">
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Additional Blog CTA */}
          <div className="bg-gradient-to-r from-staydia-gold/20 to-staydia-gold/10 border border-staydia-gold/30 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Want More Content?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to the Staydia newsletter for weekly tips on sports streaming, AI camera technology, and grassroots club management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-grow px-4 py-3 bg-staydia-darkgray border border-staydia-lightgray rounded-lg focus:ring-2 focus:ring-staydia-gold focus:border-transparent"
              />
              <button className="px-6 py-3 bg-staydia-gold text-staydia-black font-semibold rounded-lg hover:bg-opacity-90 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogIndex;
