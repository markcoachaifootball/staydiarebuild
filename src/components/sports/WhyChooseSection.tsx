
import React from 'react';

interface WhyChooseSectionProps {
  title: string;
  items: string[];
}

const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ title, items }) => {
  return (
    <section className="py-16 bg-staydia-darkgray/50">
      <div className="staydia-container">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 text-staydia-gold text-3xl">✓</div>
              <p className="text-gray-200">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
