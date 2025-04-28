
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your Staydia account and choose a subscription plan that fits your needs."
    },
    {
      number: "02",
      title: "Select Your Teams",
      description: "Follow your favorite teams and leagues to personalize your viewing experience."
    },
    {
      number: "03",
      title: "Watch Anywhere",
      description: "Stream games live or on-demand from any device, anytime, anywhere."
    },
    {
      number: "04",
      title: "Share & Connect",
      description: "Join the community to discuss games, share highlights and connect with other fans."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-staydia-darkgray">
      <div className="staydia-container">
        <div className="text-center mb-16">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Get started with Staydia in just a few simple steps and never miss another game.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-staydia-black p-8 rounded-xl border border-staydia-lightgray animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -top-4 -left-4 bg-staydia-gold text-staydia-black w-10 h-10 flex items-center justify-center rounded-lg font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white mt-4">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-black/50 border border-staydia-lightgray p-8 md:p-12 rounded-xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to transform your sports viewing experience?</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of sports fans who are already enjoying unlimited access to their favorite games.
          </p>
          <button className="btn-primary">Start Your Free Trial</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
