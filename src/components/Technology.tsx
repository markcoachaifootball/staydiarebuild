
import React from 'react';
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Technology: React.FC = () => {
  return (
    <section id="technology" className="py-24">
      <div className="staydia-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h2 className="section-title text-left">AI-Powered Camera Technology</h2>
            <p className="text-gray-300 text-lg mb-8">
              Our innovative camera systems use advanced artificial intelligence to autonomously track the action, 
              providing professional-quality broadcasts without the need for camera operators.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Automatically follows the ball and key action",
                "Multiple angle capture for comprehensive coverage",
                "Weatherproof design for any playing conditions",
                "Simple installation at any sports venue",
                "Seamless integration with our streaming platform"
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <Check className="text-staydia-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90">
              Schedule a Demo
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              <div className="bg-gradient-to-tr from-staydia-gold/20 to-transparent absolute inset-0 rounded-2xl filter blur-xl"></div>
              <img 
                src="/lovable-uploads/75c4e662-1f6d-40da-b80e-d03748c43719.png" 
                alt="Staydia AI Camera" 
                className="relative z-10 rounded-lg shadow-xl w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-80 p-3 rounded-lg border border-staydia-gold text-sm">
                AI-powered tracking technology
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
