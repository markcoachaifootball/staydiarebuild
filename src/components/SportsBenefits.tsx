
import React from 'react';
import { BarChart3, Banknote, Camera, Users } from 'lucide-react';

const benefits = [
  {
    title: "Zero Investment Required",
    description: "Free AI camera installation and setup at your club venue with no upfront costs.",
    icon: Camera,
  },
  {
    title: "Revenue Generation",
    description: "Earn from fan subscriptions and in-stream sponsorship opportunities.",
    icon: Banknote,
  },
  {
    title: "Enhanced Fan Engagement",
    description: "Stay connected with your community by allowing supporters to watch live and on demand, from anywhere.",
    icon: Users,
  },
  {
    title: "Performance Analysis",
    description: "Access match footage for team training and strategic analysis.",
    icon: BarChart3,
  },
];

export const SportsBenefits = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-staydia-black/50">
      <div className="staydia-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Staydia?</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Join the future of sports technology with our innovative solutions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="p-6 rounded-lg border border-staydia-lightgray hover:border-staydia-gold transition-colors">
              <benefit.icon className="w-12 h-12 text-staydia-gold mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
