
import React, { useState } from 'react';
import { Check, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Technology: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section id="technology" className="py-24">
      <div className="staydia-container">
        <div className="mb-16">
          <div className="space-y-6">
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
            
            <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 mb-12">
              Book a Demo
            </Button>
          </div>
        </div>

        {/* Video Section with heading */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-6 text-white">See How It Works</h3>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-staydia-lightgray">
            {isPlaying ? (
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/LlAfWzJP3co?autoplay=1" 
                title="How Staydia Works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            ) : (
              <div 
                className="absolute inset-0 cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <img 
                  src="https://img.youtube.com/vi/LlAfWzJP3co/maxresdefault.jpg" 
                  alt="How Staydia Works Video Thumbnail" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                  <div className="w-20 h-20 bg-staydia-gold rounded-full flex items-center justify-center">
                    <Play className="h-10 w-10 text-staydia-black" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
