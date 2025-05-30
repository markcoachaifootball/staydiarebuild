
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NewsArticleLoading: React.FC = () => {
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
