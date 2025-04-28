
import React from 'react';
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const matches = [
  {
    team1: "Aston Villa FC",
    team2: "AC Milan",
    category: "Boys U12 Football",
    location: "Birmingham, ENG",
    time: "8:57 PM",
    date: "Apr 27"
  },
  {
    team1: "Burnley FC",
    team2: "Newcastle FC",
    category: "Boys U12 Football",
    location: "Burnley, ENG",
    time: "1:02 PM",
    date: "Apr 27"
  },
  {
    team1: "AC Milan",
    team2: "Wolverhampton Wanderers FC",
    category: "Boys U12 Football",
    location: "Dublin, IRL",
    time: "8:59 PM",
    date: "Apr 26"
  },
  {
    team1: "Shamrock Rovers FC",
    team2: "Newcastle FC",
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
                  <p className="text-gray-400 mb-6">Stream every match live and on demand from clubs across Ireland, Wales, and England.</p>
                  <Button className="w-full bg-staydia-gold text-staydia-black hover:bg-opacity-90">
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
                      <img 
                        src={index === 0 ? "/lovable-uploads/e05d29b7-a543-4295-acfb-6e514a6edd53.png" : "/lovable-uploads/9b492957-6b80-4fda-88a3-906ca42d553a.png"} 
                        alt={`${match.team1} vs ${match.team2}`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-black/70 text-white text-xs py-1 px-3 rounded-full">
                        {match.category}
                      </div>
                      <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/70 text-white text-xs py-1 px-3 rounded-full">
                        {match.date} | {match.time}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="font-medium text-white mb-1">{match.team1}</div>
                      <div className="font-medium text-white mb-3">{match.team2}</div>
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
