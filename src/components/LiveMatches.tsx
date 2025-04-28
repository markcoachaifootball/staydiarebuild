
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
                  background: 'linear-gradient(125deg, #1E1E2E 0%, #2A2A3F 100%)',
                }}
              >
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-full h-full"
                    style={{
                      background: 'radial-gradient(circle at 10% 0%, rgba(240, 190, 90, 0.15), transparent 40%), radial-gradient(circle at 90% 90%, rgba(240, 190, 90, 0.1), transparent 40%)',
                    }}
                  />
                  <div className="absolute top-0 right-0 w-64 h-64 opacity-20"
                    style={{
                      background: 'conic-gradient(from 90deg at 50% 50%, #F0BE5A, #2A2A3F)',
                      filter: 'blur(60px)',
                      transform: 'translate(20%, -30%)',
                    }}
                  />
                </div>
                <div className="relative z-10">
                  <div className="inline-block px-4 py-1 rounded-full bg-staydia-gold/10 border border-staydia-gold/20 text-staydia-gold text-sm mb-6">
                    Premium Access
                  </div>
                  <h3 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Featured Matches
                  </h3>
                  <p className="text-xl mb-4 text-gray-200">Get full access to Staydia Sports</p>
                  <p className="text-gray-400 mb-6">Stream every match live and on demand from clubs across EU and UK.</p>
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
