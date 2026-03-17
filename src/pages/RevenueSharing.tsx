import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Coins, LucideMonitorPlay, Users, DollarSign, PiggyBank, Handshake } from "lucide-react";
import StepsTimelineSection from '@/components/sports/StepsTimelineSection';
import FeaturesSection from '@/components/sports/FeaturesSection';
import RevenueHero from '@/components/revenue-sharing/RevenueHero';
import WhyItWorksSection from '@/components/revenue-sharing/WhyItWorksSection';
import RevenueCTA from '@/components/revenue-sharing/RevenueCTA';
import BenefitsSection from '@/components/revenue-sharing/BenefitsSection';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useMetaTags } from '@/hooks/useMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import { usePrerenderReady } from '@/hooks/usePrerenderReady';
import { useTranslation } from 'react-i18next';

const RevenueSharing = () => {
  useScrollToTop();
  usePrerenderReady();
  const { t } = useTranslation();
  useMetaTags({ title: 'Revenue Sharing Model - Zero Cost Sports Broadcasting Solutions', description: 'Learn about Staydia Sports\' revolutionary revenue sharing model.', url: 'https://about.staydiasports.com/revenue-sharing', type: 'website', tags: ['Revenue Sharing'] });
  useStructuredData({ type: 'WebSite', title: 'Revenue Sharing Model - Staydia Sports', description: 'Revolutionary revenue sharing model.', url: 'https://about.staydiasports.com/revenue-sharing' });

  const howItWorksSteps = [
    { number: 1, title: t('revenueSharing.step1'), description: t('revenueSharing.step1Desc') },
    { number: 2, title: t('revenueSharing.step2'), description: t('revenueSharing.step2Desc') },
    { number: 3, title: t('revenueSharing.step3'), description: t('revenueSharing.step3Desc') },
    { number: 4, title: t('revenueSharing.step4'), description: t('revenueSharing.step4Desc') },
  ];

  const additionalEarningsFeatures = [
    { icon: <DollarSign className="h-6 w-6 text-staydia-gold" />, title: t('revenueSharing.sponsorPlacements'), description: t('revenueSharing.sponsorPlacementsDesc') },
    { icon: <LucideMonitorPlay className="h-6 w-6 text-staydia-gold" />, title: t('revenueSharing.premiumContent'), description: t('revenueSharing.premiumContentDesc') },
    { icon: <PiggyBank className="h-6 w-6 text-staydia-gold" />, title: t('revenueSharing.monthlyRevenue'), description: t('revenueSharing.monthlyRevenueDesc') },
  ];

  const benefitsFeatures = [
    { icon: <Handshake className="h-6 w-6 text-staydia-gold" />, title: t('revenueSharing.clubs'), description: t('revenueSharing.clubsDesc') },
    { icon: <Users className="h-6 w-6 text-staydia-gold" />, title: t('revenueSharing.leagues'), description: t('revenueSharing.leaguesDesc') },
    { icon: <Coins className="h-6 w-6 text-staydia-gold" />, title: t('revenueSharing.sponsors'), description: t('revenueSharing.sponsorsDesc') },
  ];

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <main className="pt-32">
        <RevenueHero />
        <StepsTimelineSection title={t('revenueSharing.howItWorks')} steps={howItWorksSteps} />
        <FeaturesSection title={t('revenueSharing.additionalEarnings')} features={additionalEarningsFeatures} />
        <BenefitsSection features={benefitsFeatures} />
        <WhyItWorksSection />
        <RevenueCTA />
      </main>
      <Footer />
    </div>
  );
};

export default RevenueSharing;
