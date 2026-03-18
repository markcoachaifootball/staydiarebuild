
import React from 'react';
import { Activity, BarChart3, Target } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

export const SportsGrid = () => {
  const { t } = useTranslation();

  const sports = [
    {
      name: t('sportsPage.football'),
      icon: Activity,
      description: t('sportsPage.footballDesc'),
      features: [
        t('sportsPage.footballF1'),
        t('sportsPage.footballF2'),
        t('sportsPage.footballF3'),
        t('sportsPage.footballF4'),
      ]
    },
    {
      name: t('sportsPage.rugby'),
      icon: Activity,
      description: t('sportsPage.rugbyDesc'),
      features: [
        t('sportsPage.rugbyF1'),
        t('sportsPage.rugbyF2'),
        t('sportsPage.rugbyF3'),
        t('sportsPage.rugbyF4'),
      ]
    },
    {
      name: t('sportsPage.hockey'),
      icon: Target,
      description: t('sportsPage.hockeyDesc'),
      features: [
        t('sportsPage.hockeyF1'),
        t('sportsPage.hockeyF2'),
        t('sportsPage.hockeyF3'),
        t('sportsPage.hockeyF4'),
      ]
    },
    {
      name: t('sportsPage.basketball'),
      icon: BarChart3,
      description: t('sportsPage.basketballDesc'),
      features: [
        t('sportsPage.basketballF1'),
        t('sportsPage.basketballF2'),
        t('sportsPage.basketballF3'),
        t('sportsPage.basketballF4'),
      ]
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="staydia-container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">{t('sportsPage.title')}</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          {t('sportsPage.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sports.map((sport) => (
            <Card key={sport.name} className="bg-staydia-black border border-staydia-lightgray hover:border-staydia-gold transition-colors">
              <CardHeader className="text-center pt-8">
                <sport.icon className="w-16 h-16 mx-auto mb-4 text-staydia-gold" />
                <h3 className="text-xl font-semibold text-white">{sport.name}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-center mb-4">{sport.description}</p>
                <ul className="space-y-2">
                  {sport.features.map((feature) => (
                    <li key={feature} className="text-gray-300 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-staydia-gold rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
