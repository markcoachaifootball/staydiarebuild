
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import LiveMatches from '@/components/LiveMatches';
import Technology from '@/components/Technology';
import HowItWorks from '@/components/HowItWorks';

const Index = () => {
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <Hero />
      <Features />
      <LiveMatches />
      <Technology />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
