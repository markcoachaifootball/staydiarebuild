import React from 'react';
import { Calendar, Play, Tv } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const LiveMatches: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-staydia-black to-staydia-darkgray">
      <div className="staydia-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Live & On-Demand Matches</h2>
          <p className="section-subtitle">
            Our platform hosts hundreds of matches across multiple sports and age groups
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Matches Card */}
          <Card className="bg-staydia-black border border-staydia-lightgray overflow-hidden h-[500px]">
            <div className="h-full flex flex-col">
              <div 
                className="p-8 h-[60%] flex flex-col justify-center relative"
                style={{
                  background: 'linear-gradient(135deg, #1a1f2c 0%, #2C3545 50%, #364153 100%)',
                  boxShadow: 'inset 0 0 60px rgba(240, 190, 90, 0.1)'
                }}
              >
                <div className="absolute top-0 left-0 w-full h-full opacity-10"
                     style={{
                       backgroundImage: 'radial-gradient(circle at 50% 50%, #F0BE5A 0%, transparent 60%)'
                     }}
                />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4 text-gradient">Featured Matches</h3>
                  <p className="text-xl mb-4">Get full access to Staydia Sports</p>
                  <p className="text-gray-300 mb-6">Stream every match live and on demand from clubs across EU and UK.</p>
                  <Button 
                    className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 w-fit"
                    onClick={() => window.open('https://staydiasports.com/', '_blank')}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Start Free Trial
                  </Button>
                </div>
              </div>
              <div className="bg-[#111520] p-8 flex-grow flex items-center justify-center">
                <img 
                  src="/lovable-uploads/afbf084c-fa36-4c9b-bce5-cff061e453c3.png"
                  alt="Staydia streaming interface"
                  className="max-h-full object-contain rounded-md shadow-lg"
                />
              </div>
            </div>
          </Card>
          
          {/* Match Highlights Card */}
          <Card className="bg-staydia-black border border-staydia-lightgray overflow-hidden h-[500px]">
            <div className="h-full flex flex-col">
              <div className="relative h-[60%] overflow-hidden">
                <img 
                  src="/lovable-uploads/902d2d1a-be94-49ac-96ae-86a3752ffbfd.png"
                  alt="Match highlights"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Match Highlights</h3>
                    <p className="text-gray-200">Access full-length matches and highlights</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#111520] p-8 flex-grow flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-staydia-black/50 rounded-full flex items-center justify-center border border-staydia-lightgray">
                      <Calendar className="w-5 h-5 text-staydia-gold" />
                    </div>
                    <span>Weekly updates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-staydia-black/50 rounded-full flex items-center justify-center border border-staydia-lightgray">
                      <Tv className="w-5 h-5 text-staydia-gold" />
                    </div>
                    <span>HD Quality</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Supporting amateur and grassroots clubs across multiple sports</p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-staydia-black/50 rounded-full flex items-center justify-center border border-staydia-lightgray mb-2">
                <span className="text-2xl">⚽</span>
              </div>
              <span className="text-sm">Football</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-staydia-black/50 rounded-full flex items-center justify-center border border-staydia-lightgray mb-2">
                <span className="text-2xl">🏉</span>
              </div>
              <span className="text-sm">Rugby</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-staydia-black/50 rounded-full flex items-center justify-center border border-staydia-lightgray mb-2">
                <span className="text-2xl">🏑</span>
              </div>
              <span className="text-sm">Hockey</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-staydia-black/50 rounded-full flex items-center justify-center border border-staydia-lightgray mb-2">
                <span className="text-2xl">🏀</span>
              </div>
              <span className="text-sm">Basketball</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-staydia-black/50 rounded-full flex items-center justify-center border border-staydia-lightgray mb-2">
                <span className="text-2xl">🇮🇪</span>
              </div>
              <span className="text-sm">GAA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveMatches;
