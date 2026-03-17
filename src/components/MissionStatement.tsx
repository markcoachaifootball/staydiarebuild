import React from 'react';
import { useTranslation } from 'react-i18next';

const MissionStatement: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-20 bg-staydia-black border-b border-staydia-lightgray/20">
      <div className="staydia-container max-w-4xl mx-auto text-center px-6">
        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-200">
          {t('mission.line1')}{' '}
          <span className="text-staydia-gold font-semibold">{t('mission.neverSeen')}</span>,{' '}
          <span className="text-staydia-gold font-semibold">{t('mission.neverMonetised')}</span>, and{' '}
          <span className="text-staydia-gold font-semibold">{t('mission.neverRemembered')}</span> {t('mission.beyondTouchline')}
        </p>
        <p className="mt-6 text-lg md:text-xl lg:text-2xl leading-relaxed text-white font-medium">
          {t('mission.existsToChange')}
        </p>
        <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-300">
          {t('mission.description')}
        </p>
      </div>
    </section>
  );
};

export default MissionStatement;
