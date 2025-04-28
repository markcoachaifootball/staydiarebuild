
import React from 'react';
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Technology: React.FC = () => {
  return (
    <section id="technology" className="py-24">
      <div className="staydia-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h2 className="section-title text-left">Innovative Broadcasting Technology</h2>
            <p className="text-gray-300 text-lg mb-8">
              Our smart camera systems and streaming platform make professional-quality sports coverage 
              accessible to teams and leagues at every level.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Smart multi-camera production system",
                "High-quality live streaming platform",
                "Custom branded viewing experience",
                "Real-time analytics dashboard",
                "Intelligent match highlights",
                "Social media content automation"
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <Check className="text-staydia-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90">
              Book a Demo
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              <div className="bg-gradient-to-tr from-staydia-gold/20 to-transparent absolute inset-0 rounded-2xl filter blur-xl"></div>
              <img 
                src="/lovable-uploads/40ee1851-41aa-41d7-946b-7eb893affa64.png" 
                alt="Staydia Broadcasting Platform" 
                className="relative z-10 rounded-lg shadow-xl w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-80 p-3 rounded-lg border border-staydia-gold text-sm">
                Smart Broadcasting Platform
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
