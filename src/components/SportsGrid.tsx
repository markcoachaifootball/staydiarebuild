
import React from 'react';
import { Activity, BarChart3, Target } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const sports = [
  {
    name: 'Football',
    icon: Activity,
    description: 'Staydia Sports for Football',
    features: [
      'Automatic video capture',
      'Live match streaming',
      'Highlight generation',
      'Download match footage'
    ]
  },
  {
    name: 'Rugby',
    icon: Activity,
    description: 'Staydia Sports for Rugby',
    features: [
      'Wide-angle coverage',
      'Download game footage',
      'Simple video review',
      'Shareable content'
    ]
  },
  {
    name: 'Hockey',
    icon: Target,
    description: 'Staydia Sports for Hockey',
    features: [
      'Full match recording',
      'Download full games',
      'Simple play review',
      'Team content sharing'
    ]
  },
  {
    name: 'Basketball',
    icon: BarChart3,
    description: 'Staydia Sports for Basketball',
    features: [
      'Complete game recording',
      'Download match footage',
      'Game content for sharing',
      'Highlight clips'
    ]
  },
];

export const SportsGrid = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="staydia-container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Sports We Work With</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Delivering cutting-edge sports technology solutions across multiple disciplines
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
