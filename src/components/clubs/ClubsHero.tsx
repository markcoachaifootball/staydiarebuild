
import React from 'react';
import { useTranslation } from 'react-i18next';

const ClubsHero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('forClubs.heroTitle')}</h1>
      <h2 className="text-2xl text-staydia-gold mb-12">{t('forClubs.heroSubtitle')}</h2>
      <p className="text-gray-300 text-lg mb-12">{t('forClubs.heroDesc1')}</p>
      <p className="text-gray-300 text-lg mb-16">{t('forClubs.heroDesc2')}</p>
      <div className="relative mb-16 rounded-xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Club match with Staydia camera system" className="w-full h-auto rounded-xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-staydia-black/90"></div>
        <div className="absolute bottom-10 left-10">
          <h3 className="text-2xl font-bold mb-2">{t('forClubs.captureEveryMoment')}</h3>
          <p className="text-staydia-gold">{t('forClubs.automated')}</p>
        </div>
      </div>
    </div>
  );
};
export default ClubsHero;
