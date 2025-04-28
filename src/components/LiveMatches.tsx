import React from 'react';
import { Calendar, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
        
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2">
              <div className="relative h-[600px] rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/afbf084c-fa36-4c9b-bce5-cff061e453c3.png"
                  alt="Staydia streaming platform"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Featured Matches</h3>
                    <p className="text-lg">Get full access to Staydia Sports</p>
                    <p className="text-gray-300">Stream every match live and on demand from clubs across EU and UK.</p>
                    <Button 
                      className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 mt-4"
                      onClick={() => window.open('https://staydiasports.com/', '_blank')}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Start Free Trial
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
            
            <CarouselItem className="md:basis-1/2">
              <div className="relative h-[600px] rounded-xl overflow-hidden bg-staydia-black border border-staydia-lightgray">
                <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/70 to-transparent">
                  <span className="text-sm bg-black/50 px-3 py-1 rounded-full">Live Now</span>
                </div>
                <div className="h-full flex items-center justify-center p-8">
                  <div className="text-center space-y-8">
                    <div className="flex items-center justify-between gap-8">
                      <div className="flex-1">
                        <img 
                          src="/lovable-uploads/9b492957-6b80-4fda-88a3-906ca42d553a.png"
                          alt="Shamrock Rovers FC"
                          className="w-48 h-48 mx-auto object-contain"
                        />
                        <h4 className="mt-4 text-xl font-bold">Shamrock Rovers FC</h4>
                      </div>
                      <div className="text-3xl font-bold">VS</div>
                      <div className="flex-1">
                        <img 
                          src="/lovable-uploads/6fc52893-fca3-47e1-b26d-64bca2a37a8b.png"
                          alt="UCD AFC"
                          className="w-48 h-48 mx-auto object-contain"
                        />
                        <h4 className="mt-4 text-xl font-bold">UCD AFC</h4>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2 text-staydia-gold">
                        <Calendar className="w-4 h-4" />
                        <span>Today at 8:57 PM</span>
                      </div>
                      <p className="text-gray-400">Boys U12 Football • Dublin, IRL</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static translate-y-0 mx-2" />
            <CarouselNext className="relative static translate-y-0 mx-2" />
          </div>
        </Carousel>
        
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
