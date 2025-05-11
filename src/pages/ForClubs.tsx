
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
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
