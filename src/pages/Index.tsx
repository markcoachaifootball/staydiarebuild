
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Technology from '@/components/Technology';
import HowItWorks from '@/components/HowItWorks';
import Community from '@/components/Community';

import PartnersSlider from '@/components/PartnersSlider';
import NewsCarousel from '@/components/NewsCarousel';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useStructuredData } from '@/hooks/useStructuredData';

const Index = () => {
  useScrollToTop();
  
  // Add structured data for the main website
  useStructuredData({
    type: 'Organization'
  });
  
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <Hero />
      <div className="text-center py-8">
        <a href="/auth" className="inline-flex items-center px-6 py-3 bg-staydia-gold text-staydia-black font-semibold rounded-lg hover:bg-staydia-gold/90 transition-colors">
          Digital Contract System →
        </a>
      </div>
      <NewsCarousel />
      <PartnersSlider />
      <Features />
      <Technology />
      <HowItWorks />
      <Community />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
