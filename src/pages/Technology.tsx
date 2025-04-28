
import React from 'react';
import Header from '@/components/Header';
import { Technology as TechnologySection } from '@/components/Technology';
import Footer from '@/components/Footer';

const Technology = () => {
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-20">
        <TechnologySection />
      </div>
      <Footer />
    </div>
  );
};

export default Technology;
