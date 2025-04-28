
import React from 'react';
import Header from '@/components/Header';
import { Features as FeaturesSection } from '@/components/Features';
import Footer from '@/components/Footer';

const Features = () => {
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-20">
        <FeaturesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Features;
