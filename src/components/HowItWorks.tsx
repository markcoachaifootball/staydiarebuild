
import React, { useState } from 'react';
import { Play } from "lucide-react";

const HowItWorks: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "Meet with our team to discuss your organisation's specific broadcasting needs."
    },
    {
      number: "02",
      title: "Custom Solution",
      description: "Receive a tailored proposal designed to meet your venue and budget requirements."
    },
    {
      number: "03",
      title: "Installation",
      description: "Our technical team handles the complete setup and integration of all systems."
    },
    {
      number: "04",
      title: "Support",
      description: "Ongoing dedicated support and maintenance to ensure optimal performance."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-staydia-darkgray">
      <div className="staydia-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Implementation Process</h2>
          <p className="section-subtitle">
            A streamlined approach to elevating your organisation's broadcasting capabilities.
          </p>
        </div>
        
        <div className="mb-16">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-staydia-lightgray">
            {isPlaying ? (
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/LlAfWzJP3co?autoplay=1" 
                title="How Staydia Works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            ) : (
              <div 
                className="absolute inset-0 cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <img 
                  src="https://img.youtube.com/vi/LlAfWzJP3co/maxresdefault.jpg" 
                  alt="How Staydia Works Video Thumbnail" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                  <div className="w-20 h-20 bg-staydia-gold rounded-full flex items-center justify-center">
                    <Play className="h-10 w-10 text-staydia-black" />
                  </div>
                </div>
              </div>
            )}
          </div>
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
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to elevate your sports broadcasting?</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading sports organisations already leveraging Staydia's enterprise solutions.
          </p>
          <button className="btn-primary">Schedule Consultation</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
