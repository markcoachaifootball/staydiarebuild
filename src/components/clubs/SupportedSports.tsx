
import React from 'react';
import { useTranslation } from 'react-i18next';

const SupportedSports: React.FC = () => {
  const { t } = useTranslation();
  const sports = [
    { key: 'football', emoji: '⚽' },
    { key: 'rugby', emoji: '🏉' },
    { key: 'hockey', emoji: '🏑' },
    { key: 'basketball', emoji: '🏀' },
  ];
  return (
    <div className="mb-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">{t('forClubs.builtForAll')}</h2>
      <p className="text-gray-300 mb-8">{t('forClubs.builtForAllDesc')}</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {sports.map((sport, index) => (
          <div key={index} className="bg-staydia-darkgray text-center p-6 rounded-lg border border-staydia-lightgray">
            <div className="text-3xl mb-2">{sport.emoji}</div>
            <h4 className="font-medium">{t(`features.sports.${sport.key}`)}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SupportedSports;
