
import React from 'react';
import { ArrowRight } from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      title: "AI-Automated Camera Technology",
      description: "Our state-of-the-art cameras capture every angle of the game without requiring camera operators.",
      image: "/lovable-uploads/75c4e662-1f6d-40da-b80e-d03748c43719.png"
    },
    {
      title: "Live & On-Demand Streaming",
      description: "Watch matches live or catch up later with full game replays and highlights.",
      image: "/lovable-uploads/40ee1851-41aa-41d7-946b-7eb893affa64.png"
    },
    {
      title: "Multi-Device Access",
      description: "Stream from any device - mobile, tablet, desktop or smart TV.",
      image: "/lovable-uploads/e38d2084-9160-4367-bcc0-77530ccc1a81.png"
    }
  ];

  return (
    <section id="features" className="py-24 bg-staydia-darkgray">
      <div className="staydia-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Revolutionary Sports Streaming</h2>
          <p className="section-subtitle">
            Combining cutting-edge AI technology with seamless streaming to deliver the ultimate sports viewing experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-staydia-black p-6 rounded-xl card-hover animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video mb-6 overflow-hidden rounded-lg">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>
              <a href="#" className="flex items-center text-staydia-gold hover:underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
