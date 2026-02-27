import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Clock, Database, Link, ZapIcon, Camera, Play } from "lucide-react";
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { usePrerenderReady } from '@/hooks/usePrerenderReady';
import { useTranslation } from 'react-i18next';

const Solutions = () => {
  useScrollToTop();
  usePrerenderReady();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-32 pb-20 staydia-container">
        <h1 className="text-5xl font-bold mb-8">{t('solutions.title')}</h1>
        
        {/* Enterprise-Grade Broadcasting Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">{t('solutions.enterpriseTitle')}</h2>
          <p className="text-gray-300 text-lg mb-8">
            {t('solutions.enterpriseDesc')}
          </p>
          
          <div className="space-y-4 mb-10">
            {[
              t('solutions.enterpriseList.item1'),
              t('solutions.enterpriseList.item2'),
              t('solutions.enterpriseList.item3'),
              t('solutions.enterpriseList.item4'),
              t('solutions.enterpriseList.item5'),
              t('solutions.enterpriseList.item6')
            ].map((item, i) => (
              <div key={i} className="flex items-start">
                <div className="text-staydia-gold mr-3 mt-1">✓</div>
                <span>{item}</span>
              </div>
            ))}
          </div>
          
          <Button 
            className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 font-medium mb-12"
            onClick={() => window.location.href = '/contact'}
          >
            {t('solutions.requestEnterpriseDemo')}
          </Button>
          
          {/* Video Section */}
          <div className="mb-16">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-staydia-lightgray">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/LlAfWzJP3co?autoplay=1&mute=1" 
                title="How Staydia Works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-staydia-darkgray p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">{t('solutions.forClubs')}</h2>
            <ul className="space-y-4 text-gray-300">
              <li>• {t('solutions.forClubsList.item1')}</li>
              <li>• {t('solutions.forClubsList.item2')}</li>
              <li>• {t('solutions.forClubsList.item3')}</li>
              <li>• {t('solutions.forClubsList.item4')}</li>
            </ul>
          </div>
          <div className="bg-staydia-darkgray p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">{t('solutions.forLeagues')}</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <Camera className="h-5 w-5 text-staydia-gold shrink-0 mt-0.5" />
                <span>{t('solutions.forLeaguesList.item1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <Database className="h-5 w-5 text-staydia-gold shrink-0 mt-0.5" />
                <span>{t('solutions.forLeaguesList.item2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <ZapIcon className="h-5 w-5 text-staydia-gold shrink-0 mt-0.5" />
                <span>{t('solutions.forLeaguesList.item3')}</span>
              </li>
              <li className="flex items-start gap-3">
                <Link className="h-5 w-5 text-staydia-gold shrink-0 mt-0.5" />
                <span>{t('solutions.forLeaguesList.item4')}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-staydia-darkgray/50 border border-staydia-gold/20 rounded-xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">{t('solutions.readyToTransform')}</h3>
          <p className="text-gray-300 mb-6">
            {t('solutions.readyToTransformDesc')}
          </p>
          <Button 
            className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 font-medium px-8 py-6 text-lg"
            onClick={() => window.location.href = '/contact'}
          >
            {t('solutions.bookLeagueConsultation')}
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Solutions;
