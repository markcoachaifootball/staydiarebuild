
import React from 'react';
import WhyItWorksItem from './WhyItWorksItem';

const WhyItWorksSection = () => {
  const points = [
    "No capital cost or upfront investment from clubs",
    "Aligned incentives: the more your fans watch, the more your club earns",
    "Simple, automated payouts — no extra admin",
    "Allows clubs to reinvest in development, equipment, coaching, and facilities"
  ];

  return (
    <section className="py-16 bg-staydia-darkgray/50">
      <div className="staydia-container">
        <h2 className="text-3xl font-bold mb-8">🧠 Why This Model Works</h2>
        
        <ul className="space-y-4 max-w-3xl">
          {points.map((point, index) => (
            <WhyItWorksItem key={index} text={point} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyItWorksSection;
