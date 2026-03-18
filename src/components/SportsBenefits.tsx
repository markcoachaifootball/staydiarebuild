
import React from 'react';
import { BarChart3, Banknote, Camera, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const SportsBenefits = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      title: t('sportsPage.benefit1Title'),
      description: t('sportsPage.benefit1Desc'),
      icon: Camera,
    },
    {
      title: t('sportsPage.benefit2Title'),
      description: t('sportsPage.benefit2Desc'),
      icon: Banknote,
    },
    {
      title: t('sportsPage.benefit3Title'),
      description: t('sportsPage.benefit3Desc'),
      icon: Users,
    },
    {
      title: t('sportsPage.benefit4Title'),
      description: t('sportsPage.benefit4Desc'),
      icon: BarChart3,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-staydia-black/50">
      <div className="staydia-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('sportsPage.whyTitle')}</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          {t('sportsPage.whySubtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="p-6 rounded-lg border border-staydia-lightgray hover:border-staydia-gold transition-colors">
              <benefit.icon className="w-12 h-12 text-staydia-gold mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
