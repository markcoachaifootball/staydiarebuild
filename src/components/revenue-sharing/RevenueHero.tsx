
import React from 'react';
import { Coins } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useTranslation } from 'react-i18next';

const RevenueHero = () => {
  const { t } = useTranslation();
  return (
    <section className="staydia-container pb-16">
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-4">
          <Coins className="text-staydia-gold h-8 w-8" />
          <h1 className="text-4xl md:text-5xl font-bold">{t('revenueSharing.heroTitle')}</h1>
        </div>
        <h2 className="text-2xl font-medium text-staydia-gold mb-6">{t('revenueSharing.heroSubtitle')}</h2>
        <p className="text-xl text-gray-300 mb-8">{t('revenueSharing.heroDesc1')}</p>
        <p className="text-lg text-gray-300 mb-8">{t('revenueSharing.heroDesc2')}</p>
        <Alert className="bg-staydia-darkgray border border-staydia-gold text-gray-300 mb-8">
          <AlertTitle className="text-white">{t('revenueSharing.noUpfront')}</AlertTitle>
          <AlertDescription>{t('revenueSharing.noUpfrontDesc')}</AlertDescription>
        </Alert>
      </div>
    </section>
  );
};
export default RevenueHero;
