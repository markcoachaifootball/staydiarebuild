
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Technology from '@/components/Technology';
import HowItWorks from '@/components/HowItWorks';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <Hero />
      <Features />
      <Technology />
      <HowItWorks />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
