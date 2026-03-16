import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Technology from '@/components/Technology';
import HowItWorks from '@/components/HowItWorks';
import Community from '@/components/Community';
import MissionStatement from '@/components/MissionStatement';

import PartnersSlider from '@/components/PartnersSlider';
import NewsCarousel from '@/components/NewsCarousel';
import WhatsAppButton from '@/components/WhatsAppButton';
import IntroLoader from '@/components/IntroLoader';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useStructuredData } from '@/hooks/useStructuredData';
import { useAIMetaTags } from '@/hooks/useAIMetaTags';
import { usePrerenderReady } from '@/hooks/usePrerenderReady';
import { isSeoBotUserAgent } from '@/utils/isSeoBot';

const Index = () => {
  const isSeoBot = isSeoBotUserAgent();
  const [showIntro, setShowIntro] = useState(() => !isSeoBot);
  const [isReadyForPrerender, setIsReadyForPrerender] = useState(false);

  useScrollToTop();

  // IMPORTANT: don't mark prerender ready while the intro keeps the page hidden (opacity-0)
  useEffect(() => {
    if (isSeoBot) {
      // Give async content (e.g. carousels) a moment to hydrate during bot snapshots.
      const t = window.setTimeout(() => setIsReadyForPrerender(true), 2000);
      return () => window.clearTimeout(t);
    }

    setIsReadyForPrerender(!showIntro);
  }, [isSeoBot, showIntro]);

  usePrerenderReady(isReadyForPrerender);

  // Add structured data for the main website
  useStructuredData({
    type: 'Organization',
  });

  // Optimize meta tags for AI search engines
  useAIMetaTags({
    title: 'Staydia Sports | AI-Powered Sports Broadcasting Platform',
    description:
      'Staydia Sports is the official AI-powered sports broadcasting platform. Zero-cost cameras, live streaming & fan engagement for football, rugby, basketball & hockey clubs.',
    keywords:
      'Staydia Sports, Staydia, AI sports broadcasting, sports club streaming, live match streaming, automated sports cameras, fan engagement platform, football clubs, basketball clubs, rugby clubs, hockey clubs',
    category: 'sports-technology',
    content:
      'Staydia Sports provides AI-powered broadcasting solutions for sports clubs worldwide. Our automated camera systems capture every game, stream live to fans, and generate revenue through our revenue-sharing model. Perfect for football, basketball, rugby, and hockey clubs of all sizes.',
    url: 'https://about.staydiasports.com/',
    image: 'https://about.staydiasports.com/lovable-uploads/c8798285-fc56-4f93-bcbd-5f5d7c06190d.png',
  });

  return (
    <>
      <AnimatePresence>
        {!isSeoBot && showIntro && <IntroLoader onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <div
        className={`min-h-screen bg-staydia-black text-white ${showIntro ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
      >
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
