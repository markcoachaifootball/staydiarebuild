
import React from 'react';
import { ThumbsUp } from "lucide-react";
import { useTranslation } from 'react-i18next';

const PartnerBenefits: React.FC = () => {
  const { t } = useTranslation();
  const items = [
    { title: t('forClubs.noCost'), desc: t('forClubs.noCostDesc') },
    { title: t('forClubs.noTechHassle'), desc: t('forClubs.noTechHassleDesc') },
    { title: t('forClubs.noMissedMoments'), desc: t('forClubs.noMissedMomentsDesc') },
    { title: t('forClubs.noLimits'), desc: t('forClubs.noLimitsDesc') },
  ];
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">{t('forClubs.whyPartner')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            <ThumbsUp className="h-6 w-6 text-staydia-gold shrink-0 mt-1" />
            <div>
              <h4 className="font-bold mb-1">{item.title}</h4>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PartnerBenefits;
