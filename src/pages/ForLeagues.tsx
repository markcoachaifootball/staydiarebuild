import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Globe, TrendingUp, BarChart, Users, CalendarDays, Link as LinkIcon } from "lucide-react";
import HeroSection from '@/components/sports/HeroSection';
import FeaturesSection from '@/components/sports/FeaturesSection';
import WhyChooseSection from '@/components/sports/WhyChooseSection';
import StepsTimelineSection from '@/components/sports/StepsTimelineSection';
import CallToActionSection from '@/components/sports/CallToActionSection';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { usePrerenderReady } from '@/hooks/usePrerenderReady';
import { useTranslation } from 'react-i18next';

const ForLeagues: React.FC = () => {
  useScrollToTop();
  usePrerenderReady();
  const { t } = useTranslation();

  const features = [
    { icon: <Globe className="h-8 w-8 text-staydia-gold" />, title: t('forLeagues.centralised'), description: t('forLeagues.centralisedDesc') },
    { icon: <TrendingUp className="h-8 w-8 text-staydia-gold" />, title: t('forLeagues.sponsorship'), description: t('forLeagues.sponsorshipDesc') },
    { icon: <BarChart className="h-8 w-8 text-staydia-gold" />, title: t('forLeagues.scalable'), description: t('forLeagues.scalableDesc') },
    { icon: <Users className="h-8 w-8 text-staydia-gold" />, title: t('forLeagues.visibility'), description: t('forLeagues.visibilityDesc') },
    { icon: <CalendarDays className="h-8 w-8 text-staydia-gold" />, title: t('forLeagues.support'), description: t('forLeagues.supportDesc') },
    { icon: <LinkIcon className="h-8 w-8 text-staydia-gold" />, title: t('forLeagues.integration'), description: t('forLeagues.integrationDesc') },
  ];

  const whyChooseItems = [
    t('forLeagues.whyItem1'), t('forLeagues.whyItem2'), t('forLeagues.whyItem3'),
    t('forLeagues.whyItem4'), t('forLeagues.whyItem5'), t('forLeagues.whyItem6'),
  ];

  const steps = [
    { number: 1, title: t('forLeagues.step1'), description: t('forLeagues.step1Desc') },
    { number: 2, title: t('forLeagues.step2'), description: t('forLeagues.step2Desc') },
    { number: 3, title: t('forLeagues.step3'), description: t('forLeagues.step3Desc') },
    { number: 4, title: t('forLeagues.step4'), description: t('forLeagues.step4Desc') },
  ];

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <HeroSection title={t('forLeagues.title')} subtitle={t('forLeagues.subtitle')} description={t('forLeagues.description')} />
      <WhyChooseSection title={t('forLeagues.whyPartner')} items={whyChooseItems} />
      <FeaturesSection title={t('forLeagues.benefitsTitle')} features={features} />
      <StepsTimelineSection title={t('forLeagues.howItWorks')} steps={steps} />
      <CallToActionSection title={t('forLeagues.ctaTitle')} subtitle={t('forLeagues.ctaSubtitle')} primaryButtonText={t('forLeagues.scheduleCall')} secondaryButtonText={t('forLeagues.contactUs')} secondaryButtonLink="/contact" />
      <Footer />
    </div>
  );
};

export default ForLeagues;
