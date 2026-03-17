
import React from 'react';
import { Banknote } from "lucide-react";
import { useTranslation } from 'react-i18next';

const RevenueOpportunities: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-staydia-darkgray border border-staydia-gold/30 p-8 rounded-xl mb-16 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <Banknote className="h-6 w-6 text-staydia-gold" />
        <span>{t('forClubs.newRevenue')}</span>
      </h3>
      <p className="text-gray-300 mb-6">{t('forClubs.clubsCanGenerate')}</p>
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <div className="mt-1 text-staydia-gold">✓</div>
          <span><strong>{t('forClubs.fanSubscriptions')}</strong> - {t('forClubs.fanSubscriptionsDesc')}</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="mt-1 text-staydia-gold">✓</div>
          <span><strong>{t('forClubs.sponsorshipOverlays')}</strong> - {t('forClubs.sponsorshipOverlaysDesc')}</span>
        </li>
      </ul>
    </div>
  );
};
export default RevenueOpportunities;
