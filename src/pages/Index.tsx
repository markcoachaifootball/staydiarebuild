
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Technology from '@/components/Technology';
import HowItWorks from '@/components/HowItWorks';
import TrustedPartners from '@/components/TrustedPartners';

const Index = () => {
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <Hero />
      <Features />
      <TrustedPartners />
      <Technology />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
