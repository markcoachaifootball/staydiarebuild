import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
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
import IntroLoader from '@/components/IntroLoader';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useStructuredData } from '@/hooks/useStructuredData';
import { useAIMetaTags } from '@/hooks/useAIMetaTags';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  
  useScrollToTop();
  
  // Add structured data for the main website
  useStructuredData({
    type: 'Organization'
  });

  // Optimize meta tags for AI search engines
  useAIMetaTags({
    title: 'Staydia Sports - AI-Powered Sports Broadcasting Platform',
    description: 'Revolutionise Your Club\'s Reach & Revenue with AI-powered broadcasting, automated camera systems, live streaming, and fan engagement tools. Zero upfront costs for sports clubs.',
    keywords: 'AI sports broadcasting, sports club management, automated cameras, live streaming, fan engagement, revenue sharing, football clubs, basketball clubs, rugby clubs, hockey clubs, sports technology platform',
    category: 'sports-technology',
    content: 'Staydia Sports provides AI-powered broadcasting solutions for sports clubs worldwide. Our automated camera systems capture every game, stream live to fans, and generate revenue through our revenue-sharing model. Perfect for football, basketball, rugby, and hockey clubs of all sizes.',
    url: 'https://about.staydiasports.com/',
    image: 'https://about.staydiasports.com/lovable-uploads/c8798285-fc56-4f93-bcbd-5f5d7c06190d.png'
  });
  
  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroLoader onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>
      
      <div className={`min-h-screen bg-staydia-black text-white ${showIntro ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Header />
        <Hero />
        <NewsCarousel />
        <PartnersSlider />
        <Features />
        <Technology />
        <HowItWorks />
        <Community />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
