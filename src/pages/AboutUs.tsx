import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Globe, TrendingUp, Users } from "lucide-react";
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useMetaTags } from '@/hooks/useMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import { usePrerenderReady } from '@/hooks/usePrerenderReady';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  useScrollToTop();
  usePrerenderReady();
  const { t } = useTranslation();
  useMetaTags({ title: 'About Staydia Sports', description: 'Meet the team behind Staydia Sports.', url: 'https://about.staydiasports.com/about-us', type: 'website', tags: ['About Us'] });
  useStructuredData({ type: 'Organization', title: 'About Staydia Sports', description: 'AI-powered broadcasting solutions.', url: 'https://about.staydiasports.com/about-us' });

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-32 staydia-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-5xl font-bold mb-8">{t('about.ourStory')}</h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">{t('about.storyDesc1')}</p>
              <p className="text-gray-300 text-lg leading-relaxed">{t('about.storyDesc2')}</p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-tr from-staydia-gold/20 to-transparent absolute inset-0 rounded-2xl filter blur-xl"></div>
              <img src="/lovable-uploads/1dc0acaf-a439-4151-aa5b-d1c6062e4728.png" alt="Staydia team working" className="relative z-10 rounded-lg w-full shadow-xl" loading="lazy" decoding="async" />
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">{t('about.meetFounders')}</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-24 h-24 bg-staydia-gold/20 rounded-full flex items-center justify-center mx-auto mb-4"><Users className="text-staydia-gold h-12 w-12" /></div>
                <h3 className="text-xl font-bold mb-2">Steve Silva</h3>
                <p className="text-staydia-gold font-medium">{t('about.ceo')}</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-staydia-gold/20 rounded-full flex items-center justify-center mx-auto mb-4"><TrendingUp className="text-staydia-gold h-12 w-12" /></div>
                <h3 className="text-xl font-bold mb-2">Mark McGrory</h3>
                <p className="text-staydia-gold font-medium">{t('about.cto')}</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-staydia-darkgray p-8 rounded-lg border border-staydia-lightgray">
              <div className="w-12 h-12 bg-staydia-gold/20 rounded-lg flex items-center justify-center mb-4"><Globe className="text-staydia-gold h-6 w-6" /></div>
              <h3 className="text-xl font-bold mb-4">{t('about.ourMission')}</h3>
              <p className="text-gray-300">{t('about.missionDesc')}</p>
            </div>
            <div className="bg-staydia-darkgray p-8 rounded-lg border border-staydia-lightgray">
              <div className="w-12 h-12 bg-staydia-gold/20 rounded-lg flex items-center justify-center mb-4"><Users className="text-staydia-gold h-6 w-6" /></div>
              <h3 className="text-xl font-bold mb-4">{t('about.ourCommunity')}</h3>
              <p className="text-gray-300">{t('about.communityDesc')}</p>
            </div>
            <div className="bg-staydia-darkgray p-8 rounded-lg border border-staydia-lightgray">
              <div className="w-12 h-12 bg-staydia-gold/20 rounded-lg flex items-center justify-center mb-4"><TrendingUp className="text-staydia-gold h-6 w-6" /></div>
              <h3 className="text-xl font-bold mb-4">{t('about.ourImpact')}</h3>
              <p className="text-gray-300">{t('about.impactDesc')}</p>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-6">{t('about.joinFuture')}</h2>
            <p className="text-gray-300 text-lg mb-8">{t('about.joinFutureDesc')}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
