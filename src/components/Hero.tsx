
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-staydia-black via-staydia-black/95 to-transparent z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
          poster="/lovable-uploads/40ee1851-41aa-41d7-946b-7eb893affa64.png"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-excited-crowd-in-stadium-4839-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="staydia-container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-white">Enterprise-Grade</span>
            <br />
            <span className="text-staydia-gold">Sports Broadcasting</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Transform your club or league's broadcasting capabilities with AI-powered camera systems and professional streaming technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 text-lg h-14 px-8">
              Book Enterprise Demo
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg h-14 px-8">
              View Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
