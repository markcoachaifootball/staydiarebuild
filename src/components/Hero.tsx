
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden relative">
      <div className="staydia-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-white">Elevate Your</span>
              <br />
              <span className="text-staydia-gold">Sports Coverage</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-lg">
              Transform your club or league's broadcasting capabilities with Staydia's enterprise-grade AI camera technology and streaming platform.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 text-lg py-6 px-8">
                Book a Demo
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:bg-opacity-10 text-lg py-6 px-8">
                View Solutions
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="bg-gradient-to-br from-staydia-gold/20 to-transparent absolute inset-0 rounded-2xl filter blur-xl"></div>
            <img 
              src="/lovable-uploads/75c4e662-1f6d-40da-b80e-d03748c43719.png" 
              alt="Staydia Enterprise Camera System" 
              className="relative z-10 rounded-lg shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
