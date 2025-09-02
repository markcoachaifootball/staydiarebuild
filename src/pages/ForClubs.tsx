
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useMetaTags } from '@/hooks/useMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import ClubsHero from '@/components/clubs/ClubsHero';
import ClubBenefits from '@/components/clubs/ClubBenefits';
import RevenueOpportunities from '@/components/clubs/RevenueOpportunities';
import PartnerBenefits from '@/components/clubs/PartnerBenefits';
import SupportedSports from '@/components/clubs/SupportedSports';
import ConsultationCTA from '@/components/clubs/ConsultationCTA';
import PartnersSlider from '@/components/PartnersSlider';
import PartnershipFAQ from '@/components/PartnershipFAQ';

const ForClubs = () => {
  useScrollToTop();
  
  useMetaTags({
    title: 'For Sports Clubs - AI Broadcasting Solutions with Zero Upfront Costs',
    description: 'Transform your sports club with AI-powered broadcasting. Automated cameras, live streaming, fan engagement, and revenue sharing. No upfront costs.',
    url: 'https://about.staydiasports.com/for-clubs',
    type: 'website',
    tags: ['Sports Clubs', 'AI Broadcasting', 'Revenue Sharing', 'Club Management', 'Zero Cost Solutions']
  });

  useStructuredData({
    type: 'WebSite',
    title: 'AI Broadcasting Solutions for Sports Clubs',
    description: 'Comprehensive broadcasting and club management solutions with zero upfront costs and revenue sharing model.',
    url: 'https://about.staydiasports.com/for-clubs'
  });
  
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-32 pb-20 staydia-container">
        <ClubsHero />
        <ClubBenefits />
        <RevenueOpportunities />
        <PartnerBenefits />
        <SupportedSports />
        <ConsultationCTA />
      </div>
      
      {/* Partner Logos Slider */}
      <PartnersSlider />
      
      <div className="py-16 staydia-container">
        <PartnerBenefits />
      </div>
      
      {/* Adding the FAQ section */}
      <PartnershipFAQ />
      
      <Footer />
    </div>
  );
};

export default ForClubs;
