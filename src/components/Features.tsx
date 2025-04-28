
import React from 'react';
import { Camera, Banknote, Users, Play } from "lucide-react";

export const Features: React.FC = () => {
  const features = [
    {
      title: "Zero Investment Required",
      description: "We install and maintain AI-powered cameras at your venue with absolutely no upfront costs to your club.",
      icon: Camera
    },
    {
      title: "Revenue Generation",
      description: "Create new income streams through fan subscriptions and in-stream sponsorship opportunities.",
      icon: Banknote
    },
    {
      title: "Enhanced Fan Engagement",
      description: "Allow supporters to watch matches live or on demand, from anywhere, keeping your community connected.",
      icon: Users
    },
    {
      title: "Professional Livestreaming",
      description: "Automated high-quality broadcasting with custom branding and highlights creation tools.",
      icon: Play
    }
  ];

  return (
    <section id="features" className="py-24 bg-staydia-darkgray">
      <div className="staydia-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Clubs Choose Staydia</h2>
          <p className="section-subtitle">
            Join hundreds of amateur and grassroots clubs already benefiting from our technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        
        <div className="mt-16 pt-10 border-t border-staydia-lightgray">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Club-Branded Streaming Platform</h3>
              <p className="text-gray-300 mb-6">
                Give your fans a professional viewing experience with your club's branding, colors, and logo.
              </p>
              <ul className="space-y-3">
                {["Live match streaming", "On-demand replays", "Highlight clips creation", "Team and player stats"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-staydia-gold rounded-full"></span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg border border-staydia-lightgray">
              <img 
                src="/lovable-uploads/d56a6b0f-8cc8-4fd8-98c8-e075077b775a.png" 
                alt="Staydia streaming platform" 
                className="w-full h-auto"
              />
              <div className="bg-staydia-black/80 p-4">
                <p className="text-center text-sm text-gray-400">Staydia's club-branded streaming interface</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
