import React, { useState } from 'react';
import { Camera, Banknote, Users, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import DemoForm from './DemoForm';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Features: React.FC = () => {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const features = [
    {
      title: t('features.zeroInvestment.title'),
      description: t('features.zeroInvestment.description'),
      icon: Camera
    },
    {
      title: t('features.revenue.title'),
      description: t('features.revenue.description'),
      icon: Banknote
    },
    {
      title: t('features.fanEngagement.title'),
      description: t('features.fanEngagement.description'),
      icon: Users
    },
    {
      title: t('features.streaming.title'),
      description: t('features.streaming.description'),
      icon: Play
    }
  ];

  const sports = [
    { name: t('features.sports.football'), icon: "⚽" },
    { name: t('features.sports.rugby'), icon: "🏉" },
    { name: t('features.sports.basketball'), icon: "🏀" },
    { name: t('features.sports.hockey'), icon: "🏑" }
  ];

  return (
    <section id="features" className="py-24 bg-staydia-darkgray">
      <div className="staydia-container">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('features.title')}</h2>
          <p className="section-subtitle">
            {t('features.subtitle')}
          </p>
          
          {/* Updated FAQ Button to yellow */}
          <div className="mt-4 mb-8">
            <Button 
              className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 font-medium px-8 py-2"
              asChild
            >
              <Link to="/faq">{t('features.faqButton')}</Link>
            </Button>
          </div>
          
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
            {t('features.becomePartner')}
          </Button>
        </div>
        
        <div className="mt-16 pt-10 border-t border-staydia-lightgray">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('features.platform.title')}</h3>
              <p className="text-gray-300 mb-6">
                {t('features.platform.description')}
              </p>
              <ul className="space-y-3">
                {[t('features.platform.features.liveMatches'), t('features.platform.features.replays'), t('features.platform.features.highlights'), t('features.platform.features.clipping'), t('features.platform.features.sponsorship')].map((item, i) => (
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
                      loading="lazy"
                      decoding="async"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="/lovable-uploads/902d2d1a-be94-49ac-96ae-86a3752ffbfd.png" 
                      alt="Staydia streaming platform match listing" 
                      className="w-full h-auto"
                      loading="lazy"
                      decoding="async"
                    />
                  </CarouselItem>
                </CarouselContent>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                  <CarouselPrevious className="h-8 w-8 rounded-full bg-black/50 border border-white/20 p-1.5 relative static translate-y-0" />
                  <CarouselNext className="h-8 w-8 rounded-full bg-black/50 border border-white/20 p-1.5 relative static translate-y-0" />
                </div>
              </Carousel>
              <div className="bg-staydia-black/80 p-4">
                <p className="text-center text-sm text-gray-400">{t('features.platform.caption')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-4">{t('features.becomePartner')}</DialogTitle>
          </DialogHeader>
          <DemoForm />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Features;
