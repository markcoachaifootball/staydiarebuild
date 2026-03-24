import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useAIMetaTags } from '@/hooks/useAIMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import { blogPosts } from './blogPosts';
import { ArrowLeft, ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  useScrollToTop();

  if (!post) {
    return (
      <div className="min-h-screen bg-staydia-black text-white">
        <Header />
        <div className="pt-32 staydia-container">
          <div className="max-w-4xl mx-auto text-center py-20">
            <h1 className="text-4xl font-bold mb-6">Blog Post Not Found</h1>
            <p className="text-gray-300 mb-8">The article you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90">
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  useAIMetaTags({
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    category: 'blog',
    content: post.excerpt,
    publishedTime: post.publishDate,
    author: post.author,
    section: post.category,
  });

  useStructuredData({
    type: 'Article',
    title: post.title,
    description: post.metaDescription,
    url: `/blog/${post.slug}`,
    author: post.author,
    publishedDate: post.publishDate,
    section: post.category,
  });

  // Find next and previous posts
  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-32 staydia-container">
        <div className="max-w-4xl mx-auto mb-20">
          {/* Back Link */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-staydia-gold hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <div className="mb-12">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-staydia-gold/20 text-staydia-gold text-sm font-semibold rounded-full">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">{post.title}</h1>

            {/* Metadata */}
            <div className="flex flex-wrap gap-6 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-staydia-gold" />
                <span>{new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-staydia-gold" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-staydia-gold" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none mb-20">
            <style>{`
              .prose {
                color: rgba(255, 255, 255, 0.9);
              }
              .prose h2 {
                font-size: 2.25rem;
                font-weight: bold;
                margin-top: 2rem;
                margin-bottom: 1rem;
                color: white;
              }
              .prose h3 {
                font-size: 1.875rem;
                font-weight: bold;
                margin-top: 1.5rem;
                margin-bottom: 0.75rem;
                color: white;
              }
              .prose h4 {
                font-size: 1.25rem;
                font-weight: bold;
                margin-top: 1rem;
                margin-bottom: 0.5rem;
                color: rgba(212, 175, 55, 0.9);
              }
              .prose p {
                margin-bottom: 1rem;
                line-height: 1.75;
              }
              .prose ul, .prose ol {
                margin-bottom: 1rem;
                margin-left: 1.5rem;
              }
              .prose li {
                margin-bottom: 0.5rem;
                line-height: 1.75;
              }
              .prose strong {
                color: rgba(212, 175, 55, 0.9);
                font-weight: 600;
              }
              .prose table {
                border-collapse: collapse;
                width: 100%;
                margin: 1.5rem 0;
              }
              .prose table thead {
                background-color: rgba(26, 26, 26, 0.7);
              }
              .prose table th,
              .prose table td {
                padding: 0.75rem;
                text-align: left;
                border-bottom: 1px solid rgba(51, 51, 51, 0.5);
              }
              .prose table th {
                font-weight: bold;
                color: rgba(212, 175, 55, 0.9);
              }
              .prose hr {
                border: none;
                border-top: 1px solid rgba(51, 51, 51, 0.5);
                margin: 2rem 0;
              }
            `}</style>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Author Bio */}
          <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-8 mb-20">
            <h3 className="text-xl font-bold mb-2">About the Author</h3>
            <p className="text-gray-300">
              {post.author} is committed to democratizing sports broadcasting and helping grassroots clubs succeed. We provide expert insights on streaming technology, club management, and community engagement.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {previousPost ? (
              <Link to={`/blog/${previousPost.slug}`}>
                <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-6 hover:border-staydia-gold transition-colors h-full">
                  <p className="text-staydia-gold text-sm font-semibold mb-2">â Previous Article</p>
                  <h3 className="text-lg font-bold line-clamp-2 mb-2">{previousPost.title}</h3>
                  <p className="text-gray-400 text-sm">{previousPost.readTime}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link to={`/blog/${nextPost.slug}`}>
                <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-6 hover:border-staydia-gold transition-colors h-full">
                  <p className="text-staydia-gold text-sm font-semibold mb-2">Next Article â</p>
                  <h3 className="text-lg font-bold line-clamp-2 mb-2">{nextPost.title}</h3>
                  <p className="text-gray-400 text-sm">{nextPost.readTime}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-staydia-gold/20 to-staydia-gold/10 border border-staydia-gold/30 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Stream Your Matches?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              See how Staydia helps grassroots clubs stream matches, engage fans, and generate revenue. Book a demo today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-demo">
                <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 px-8 py-3 flex items-center gap-2">
                  Book a Demo <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-staydia-gold text-staydia-gold hover:bg-staydia-gold/10 px-8 py-3">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
