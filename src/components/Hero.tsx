
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden relative">
      <div className="staydia-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-white">Can't Make</span>
              <br />
              <span className="text-staydia-gold">The Game?</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-lg">
              Never miss a moment with Staydia's AI-powered sports streaming platform. Watch live games, access on-demand replays, and stay connected to your favorite teams.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 text-lg py-6 px-8">
                Start Free Trial
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:bg-opacity-10 text-lg py-6 px-8">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="bg-gradient-to-br from-staydia-gold/20 to-transparent absolute inset-0 rounded-2xl filter blur-xl"></div>
            <img 
              src="/lovable-uploads/e38d2084-9160-4367-bcc0-77530ccc1a81.png" 
              alt="Staydia Sports Streaming Platform" 
              className="relative z-10 rounded-lg shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
