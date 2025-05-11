
import React from 'react';
import { Camera, Play, Zap, ShieldCheck } from "lucide-react";

const ClubBenefits: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">⚽ What You Get:</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-staydia-darkgray p-8 rounded-xl border border-staydia-lightgray hover:border-staydia-gold/50 transition-colors">
          <div className="w-12 h-12 bg-staydia-gold/10 rounded-lg flex items-center justify-center mb-6">
            <Camera className="h-6 w-6 text-staydia-gold" />
          </div>
          <h3 className="text-xl font-bold mb-3">Free AI Camera Installation</h3>
          <p className="text-gray-300">
            We sponsor your club with a high-end AI camera system that captures every match on your main pitch 
            or court—fully automated, 24/7 ready.
          </p>
        </div>
        
        <div className="bg-staydia-darkgray p-8 rounded-xl border border-staydia-lightgray hover:border-staydia-gold/50 transition-colors">
          <div className="w-12 h-12 bg-staydia-gold/10 rounded-lg flex items-center justify-center mb-6">
            <Play className="h-6 w-6 text-staydia-gold" />
          </div>
          <h3 className="text-xl font-bold mb-3">Livestream Every Game</h3>
          <p className="text-gray-300">
            Games are streamed to your fans via our Staydia platform or can be integrated with existing broadcast 
            tools like Joymo or Basketball Ireland systems.
          </p>
        </div>
        
        <div className="bg-staydia-darkgray p-8 rounded-xl border border-staydia-lightgray hover:border-staydia-gold/50 transition-colors">
          <div className="w-12 h-12 bg-staydia-gold/10 rounded-lg flex items-center justify-center mb-6">
            <Zap className="h-6 w-6 text-staydia-gold" />
          </div>
          <h3 className="text-xl font-bold mb-3">Smart Highlights & Clips</h3>
          <p className="text-gray-300">
            Use our dashboard to instantly create highlight reels, training clips, or social media content with ease.
          </p>
        </div>
        
        <div className="bg-staydia-darkgray p-8 rounded-xl border border-staydia-lightgray hover:border-staydia-gold/50 transition-colors">
          <div className="w-12 h-12 bg-staydia-gold/10 rounded-lg flex items-center justify-center mb-6">
            <ShieldCheck className="h-6 w-6 text-staydia-gold" />
          </div>
          <h3 className="text-xl font-bold mb-3">Automated, Hands-Free Setup</h3>
          <p className="text-gray-300">
            Once installed, our system requires zero effort from club volunteers. It runs automatically for every 
            home game or training session.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClubBenefits;
