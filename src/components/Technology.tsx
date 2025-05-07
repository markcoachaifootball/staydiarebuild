
import React, { useState } from 'react';
import { Check, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import ClubTestimonials from './ClubTestimonials';
import DemoForm from './DemoForm';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Technology: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="technology" className="py-24">
      <div className="staydia-container">
        <div className="mb-16">
          <div className="space-y-6">
            <h2 className="section-title text-left">Revolutionising Sports Streaming with AI</h2>
            <p className="text-gray-300 text-lg mb-8">
              Staydia Sports brings professional-quality broadcasting to clubs and leagues of all levels-effortlessly and at no cost.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "AI-Powered Smart Camera System – Fully automated, fixed cameras that capture every game without a cameraman.",
                "High-Quality Livestreaming Platform – Stream matches live or on-demand to fans anywhere.",
                "Custom Club-Branded Experience – Your club's colors, logos, and identity front and center for fans.",
                "Revenue Generation – Create new income streams through fan subscriptions and in-stream sponsorship opportunities.",
                "Highlights & Tactical Clipping – Tactical & highlight clips created with easy to use tool.",
                "Seamless Social Media Integration – Instantly create and share video content across your club's channels."
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <Check className="text-staydia-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <p className="text-staydia-gold text-lg font-medium mb-8">
              Staydia Sports: Where technology powers your club's growth.
            </p>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 mb-12">
                  Book a Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-4">Book a Demo</DialogTitle>
                </DialogHeader>
                <DemoForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Club Testimonials Slider */}
        <ClubTestimonials />

        {/* Video Section with more seamless heading */}
        <div className="mt-12 border-t border-staydia-lightgray pt-12">
          <h3 className="text-2xl font-semibold text-staydia-gold mb-2">
            <Play className="mr-2 h-5 w-5 inline" />
            See How It Works
          </h3>
          <p className="text-gray-400 mb-6">No cameraman needed</p>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-staydia-lightgray">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/LlAfWzJP3co?autoplay=1&mute=1" 
              title="How Staydia Works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
