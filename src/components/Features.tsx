
import React, { useState } from 'react';
import { Camera, Banknote, Users, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import DemoForm from './DemoForm';
import LivestreamingWithAI from './LivestreamingWithAI';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Features: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const features = [
    {
      title: "Zero Investment Required",
      description: "We install and maintain AI-powered cameras at your venue with absolutely no upfront costs to your club.",
      icon: Camera
    },
    {
      title: "Revenue Generation",
      description: "Create new income streams through fan subscriptions and in-stream sponsorship opportunities.",
      icon: Banknote
    },
    {
      title: "Enhanced Fan Engagement",
      description: "Stay connected with your community by allowing supporters to watch live and on demand, from anywhere.",
      icon: Users
    },
    {
      title: "Professional Livestreaming",
      description: "Automated high-quality broadcasting with custom branding and highlight creation tools.",
      icon: Play
    }
  ];

  const sports = [
    { name: "Football", icon: "⚽" },
    { name: "Rugby", icon: "🏉" },
    { name: "Basketball", icon: "🏀" },
    { name: "Hockey", icon: "🏑" }
  ];

  return (
    <section id="features" className="py-24 bg-staydia-darkgray">
      <div className="staydia-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Clubs Choose Staydia</h2>
          <p className="section-subtitle">
            Join many other amateur football, field hockey, rugby, and basketball clubs across the EU & UK partnering with Staydia Sports. We provide the AI camera, the platform, and the expertise – you keep 100% of your ad revenue. It's that simple.
          </p>
          
          {/* Sports we work with */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {sports.map((sport, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 bg-staydia-black px-4 py-2 rounded-full animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-2xl">{sport.icon}</span>
                <span className="text-white font-medium">{sport.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add LivestreamingWithAI section */}
      <LivestreamingWithAI />

      <div className="staydia-container">
        {/* Updated FAQ Button to yellow */}
        <div className="text-center mt-16 mb-8">
          <Button 
            className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 font-medium px-8 py-2"
            asChild
          >
            <Link to="/faq">Frequently Asked Questions</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-staydia-black p-8 rounded-xl card-hover animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-staydia-gold/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Added CTA button */}
        <div className="mt-12 text-center">
          <Button 
            className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 text-lg px-8 py-6"
            onClick={() => setIsDialogOpen(true)}
          >
            Become A Staydia Partner
          </Button>
        </div>
        
        <div className="mt-16 pt-10 border-t border-staydia-lightgray">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Club-Branded Streaming Platform</h3>
              <p className="text-gray-300 mb-6">
                Give your fans a professional viewing experience featuring your club's branding.
              </p>
              <ul className="space-y-3">
                {["Live and upcoming matches", "On-demand replays", "Club highlights", "Clipping tool", "Sponsorship integration"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-staydia-gold rounded-full"></span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg border border-staydia-lightgray">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <img 
                      src="/lovable-uploads/47ff50b1-da9d-4dc9-abac-a04e12b9c502.png" 
                      alt="Staydia streaming platform" 
                      className="w-full h-auto"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="/lovable-uploads/902d2d1a-be94-49ac-96ae-86a3752ffbfd.png" 
                      alt="Staydia streaming platform match listing" 
                      className="w-full h-auto"
                    />
                  </CarouselItem>
                </CarouselContent>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                  <CarouselPrevious className="h-8 w-8 rounded-full bg-black/50 border border-white/20 p-1.5 relative static translate-y-0" />
                  <CarouselNext className="h-8 w-8 rounded-full bg-black/50 border border-white/20 p-1.5 relative static translate-y-0" />
                </div>
              </Carousel>
              <div className="bg-staydia-black/80 p-4">
                <p className="text-center text-sm text-gray-400">Staydia's club-branded streaming interface</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-4">Become A Staydia Partner</DialogTitle>
          </DialogHeader>
          <DemoForm />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Features;
