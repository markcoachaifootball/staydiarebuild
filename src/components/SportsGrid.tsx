
import React from 'react';
import { Activity, BarChart3, Target } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const sports = [
  {
    name: 'Football',
    icon: Activity,
    description: 'Advanced analytics and streaming solutions for football clubs and leagues.',
  },
  {
    name: 'Rugby',
    icon: Activity,
    description: 'Complete performance tracking and analysis tools for rugby teams.',
  },
  {
    name: 'Hockey',
    icon: Target,
    description: 'Real-time stats and video analysis for hockey organizations.',
  },
  {
    name: 'Basketball',
    icon: BarChart3,
    description: 'Comprehensive basketball analytics and streaming platform.',
  },
];

export const SportsGrid = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="staydia-container">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Sports We Work With</h1>
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
                <p className="text-gray-400 text-center">{sport.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
