
import React from 'react';
import WhyItWorksItem from './WhyItWorksItem';
import { useTranslation } from 'react-i18next';

const WhyItWorksSection = () => {
  const { t } = useTranslation();
  const points = [
    t('revenueSharing.whyItem1'), t('revenueSharing.whyItem2'),
    t('revenueSharing.whyItem3'), t('revenueSharing.whyItem4'),
  ];
  return (
    <section className="py-16 bg-staydia-darkgray/50">
      <div className="staydia-container">
        <h2 className="text-3xl font-bold mb-8">{t('revenueSharing.whyWorks')}</h2>
        <ul className="space-y-4 max-w-3xl">
          {points.map((point, index) => (<WhyItWorksItem key={index} text={point} />))}
        </ul>
      </div>
    </section>
  );
};
export default WhyItWorksSection;
