
import React, { ReactNode } from 'react';
import FeatureCard from './FeatureCard';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  title: string;
  features: Feature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ title, features }) => {
  return (
    <section className="py-16 bg-staydia-darkgray/50">
      <div className="staydia-container">
        <h2 className="text-3xl font-bold mb-10">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
