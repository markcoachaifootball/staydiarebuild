
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Technology from '@/components/Technology';
import HowItWorks from '@/components/HowItWorks';
import Newsroom from '@/components/Newsroom';
import Community from '@/components/Community';

const Index = () => {
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <Hero />
      <Features />
      <Technology />
      <HowItWorks />
      <Newsroom />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
