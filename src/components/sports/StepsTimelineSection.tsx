
import React from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface StepsTimelineSectionProps {
  title: string;
  steps: Step[];
}

const StepsTimelineSection: React.FC<StepsTimelineSectionProps> = ({ title, steps }) => {
  return (
    <section className="py-16 bg-staydia-darkgray/50">
      <div className="staydia-container">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[22px] top-8 bottom-0 w-1 bg-staydia-gold/30 hidden md:block"></div>
          
          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-staydia-gold text-staydia-black flex items-center justify-center font-bold text-xl">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsTimelineSection;
