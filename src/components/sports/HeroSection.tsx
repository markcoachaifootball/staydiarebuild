
import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, description }) => {
  return (
    <section className="pt-32 pb-16 staydia-container">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <h2 className="text-2xl font-medium text-staydia-gold mb-8">
          {subtitle}
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
