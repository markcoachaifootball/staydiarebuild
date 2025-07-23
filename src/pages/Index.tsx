
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Technology from '@/components/Technology';
import HowItWorks from '@/components/HowItWorks';
import Community from '@/components/Community';
import Newsroom from '@/components/Newsroom';
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
      <NewsCarousel />
      <PartnersSlider />
      <Features />
      <Technology />
      <HowItWorks />
      <Community />
      <Newsroom />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
