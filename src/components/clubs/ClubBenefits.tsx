
import React from 'react';
import { Camera, Play, Zap, ShieldCheck } from "lucide-react";
import { useTranslation } from 'react-i18next';

const ClubBenefits: React.FC = () => {
  const { t } = useTranslation();
  const benefits = [
    { icon: Camera, title: t('forClubs.freeCamera'), desc: t('forClubs.freeCameraDesc') },
    { icon: Play, title: t('forClubs.livestream'), desc: t('forClubs.livestreamDesc') },
    { icon: Zap, title: t('forClubs.smartHighlights'), desc: t('forClubs.smartHighlightsDesc') },
    { icon: ShieldCheck, title: t('forClubs.automatedSetup'), desc: t('forClubs.automatedSetupDesc') },
  ];
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">{t('forClubs.whatYouGet')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {benefits.map((b, i) => (
          <div key={i} className="bg-staydia-darkgray p-8 rounded-xl border border-staydia-lightgray hover:border-staydia-gold/50 transition-colors">
            <div className="w-12 h-12 bg-staydia-gold/10 rounded-lg flex items-center justify-center mb-6">
              <b.icon className="h-6 w-6 text-staydia-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3">{b.title}</h3>
            <p className="text-gray-300">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ClubBenefits;
