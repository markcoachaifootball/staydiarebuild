import React from 'react';
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const matches = [
  {
    team1: { name: "Aston Villa FC", logo: "/lovable-uploads/3217f48a-1102-4f9b-8cce-ff4984fd5e4d.png" },
    team2: { name: "AC Milan", logo: "/lovable-uploads/8f4bbea6-85fc-451e-93da-15416813d362.png" },
    category: "Boys U12 Football",
    location: "Birmingham, ENG",
    time: "8:57 PM",
    date: "Apr 27"
  },
  {
    team1: { name: "Burnley FC", logo: "/lovable-uploads/1dc0acaf-a439-4151-aa5b-d1c6062e4728.png" },
    team2: { name: "Newcastle FC", logo: "/lovable-uploads/b8a51730-da8b-48f6-8992-94d2997a5c6a.png" },
    category: "Boys U12 Football",
    location: "Burnley, ENG",
    time: "1:02 PM",
    date: "Apr 27"
  },
  {
    team1: { name: "AC Milan", logo: "/lovable-uploads/8f4bbea6-85fc-451e-93da-15416813d362.png" },
    team2: { name: "Wolverhampton Wanderers FC", logo: "/lovable-uploads/9b492957-6b80-4fda-88a3-906ca42d553a.png" },
    category: "Boys U12 Football",
    location: "Dublin, IRL",
    time: "8:59 PM",
    date: "Apr 26"
  },
  {
    team1: { name: "Shamrock Rovers FC", logo: "/lovable-uploads/9b492957-6b80-4fda-88a3-906ca42d553a.png" },
    team2: { name: "Newcastle FC", logo: "/lovable-uploads/b8a51730-da8b-48f6-8992-94d2997a5c6a.png" },
    category: "Boys U12 Football",
    location: "Dublin, IRL",
    time: "8:19 PM",
    date: "Apr 26"
  },
];

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
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="relative flex flex-col h-full">
                <div className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Calendar className="text-staydia-gold" />
                  <span>Featured Matches</span>
                </div>
                <div className="flex-1 bg-staydia-black rounded-lg p-6 border border-staydia-lightgray">
                  <h3 className="text-lg font-medium mb-4">Get full access to Staydia Sports</h3>
                  <p className="text-gray-400 mb-6">Stream every match live and on demand from clubs across EU and UK.</p>
                  <Button 
                    className="w-full bg-staydia-gold text-staydia-black hover:bg-opacity-90"
                    onClick={() => window.open('https://staydiasports.com/', '_blank')}
                  >
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </CarouselItem>
            
            {matches.map((match, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="h-full">
                  <div className="bg-black rounded-lg overflow-hidden border border-staydia-lightgray h-full">
                    <div className="relative">
                      <div className="w-full h-48 bg-[#1a202c] flex items-center justify-center relative">
                        <div className="flex items-center justify-between w-full px-8">
                          <div className="w-20 h-20">
                            <img 
                              src={match.team1.logo} 
                              alt={match.team1.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="text-2xl font-bold text-white">VS</div>
                          <div className="w-20 h-20">
                            <img 
                              src={match.team2.logo} 
                              alt={match.team2.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-3 left-3 bg-black/70 text-white text-xs py-1 px-3 rounded-full">
                        {match.category}
                      </div>
                      <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/70 text-white text-xs py-1 px-3 rounded-full">
                        {match.date} | {match.time}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="font-medium text-white mb-1">{match.team1.name}</div>
                      <div className="font-medium text-white mb-3">{match.team2.name}</div>
                      <div className="flex items-center text-xs text-gray-400">
                        <span>{match.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
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
