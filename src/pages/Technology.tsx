
import React from 'react';
import Header from '@/components/Header';
import { Technology as TechnologySection } from '@/components/Technology';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useMetaTags } from '@/hooks/useMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';

const Technology = () => {
  useScrollToTop();
  
  useMetaTags({
    title: 'AI Sports Technology - Automated Cameras & Broadcasting Solutions',
    description: 'Discover Staydia Sports\' cutting-edge AI technology. Automated camera systems, intelligent tracking, live streaming, and advanced tools for sports clubs.',
    url: 'https://about.staydiasports.com/technology',
    type: 'website',
    tags: ['AI Technology', 'Automated Cameras', 'Sports Broadcasting', 'Intelligent Tracking', 'Live Streaming', 'Sports Technology']
  });

  useStructuredData({
    type: 'WebSite',
    title: 'AI Sports Technology - Staydia Sports',
    description: 'Advanced AI technology powering automated camera systems, intelligent tracking, and live streaming solutions for sports broadcasting.',
    url: 'https://about.staydiasports.com/technology'
  });
  
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
