import React from 'react';
import { Building, Users, ChartBar } from "lucide-react";

export const Features: React.FC = () => {
  const features = [
    {
      title: "Enterprise-Grade Infrastructure",
      description: "Reliable, scalable technology built for professional sports organizations with dedicated support.",
      icon: Building
    },
    {
      title: "Automated Production",
      description: "Cut operational costs with AI-powered cameras that capture every angle without manual operation.",
      icon: Users
    },
    {
      title: "Revenue Generation",
      description: "Create new revenue streams through professional broadcast quality content and streaming.",
      icon: ChartBar
    }
  ];

  return (
    <section id="features" className="py-24 bg-staydia-darkgray">
      <div className="staydia-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Enterprise Solutions</h2>
          <p className="section-subtitle">
            Professional-grade broadcasting technology designed for clubs and leagues.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-staydia-black p-8 rounded-xl card-hover animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-staydia-gold/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
