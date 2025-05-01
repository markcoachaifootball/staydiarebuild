
import React, { ReactNode } from 'react';

interface BenefitFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  features: BenefitFeature[];
}

const BenefitsSection = ({ features }: BenefitsSectionProps) => {
  return (
    <section className="py-16">
      <div className="staydia-container">
        <h2 className="text-3xl font-bold mb-10">⚽ Who Benefits?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-staydia-black p-6 rounded-lg border border-staydia-lightgray">
              <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
