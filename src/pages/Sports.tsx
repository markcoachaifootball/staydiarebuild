
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SportsGrid } from '@/components/SportsGrid';

const Sports = () => {
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-20">
        <SportsGrid />
      </div>
      <Footer />
    </div>
  );
};

export default Sports;
