
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Camera, Users, Activity } from "lucide-react";
import DemoForm from './DemoForm';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Hero: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
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
            <span className="text-white">AI-Powered</span>
            <br />
            <span className="text-staydia-gold">Sports Broadcasting</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Zero investment, automated camera systems with revenue sharing for amateur and grassroots clubs across Ireland and the UK.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-staydia-gold/20 rounded-full flex items-center justify-center">
                <Camera className="h-5 w-5 text-staydia-gold" />
              </div>
              <p className="text-gray-300">Free Camera Installation</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-staydia-gold/20 rounded-full flex items-center justify-center">
                <Activity className="h-5 w-5 text-staydia-gold" />
              </div>
              <p className="text-gray-300">All Sports Coverage</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-staydia-gold/20 rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-staydia-gold" />
              </div>
              <p className="text-gray-300">Revenue Sharing Model</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 text-lg h-14 px-8">
                  Book Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-4">Book a Demo</DialogTitle>
                </DialogHeader>
                <DemoForm />
              </DialogContent>
            </Dialog>

            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 text-lg h-14 px-8"
              onClick={() => window.open('https://staydiasports.com/', '_blank')}
            >
              Watch Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
