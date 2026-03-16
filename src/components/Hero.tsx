
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Camera, Users, Activity } from "lucide-react";
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DemoForm from './DemoForm';
import { AISearchBar } from './AIChat';

interface HeroProps {
  onOpenChat?: (query?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenChat }) => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLDivElement | null>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoVisible(true);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" ref={videoRef}>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-staydia-black/80 via-staydia-black/50 to-transparent z-10"></div>
        <div className="w-full h-full">
          {isVideoVisible ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-90"
              poster="/lovable-uploads/c8798285-fc56-4f93-bcbd-5f5d7c06190d.png"
            >
              <source src="/videos/hero-background.mp4" type="video/mp4" />
              <img
                src="/lovable-uploads/c8798285-fc56-4f93-bcbd-5f5d7c06190d.png"
                alt={t('hero.title')}
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
                decoding="async"
                width="1920"
                height="1080"
              />
            </video>
          ) : (
            <img
              src="/lovable-uploads/c8798285-fc56-4f93-bcbd-5f5d7c06190d.png"
              alt={t('hero.title')}
              className="w-full h-full object-cover opacity-50"
              loading="eager"
              width="1920"
              height="1080"
            />
          )}
        </div>
      </div>

      <div className="staydia-container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-white">{t('hero.heading1')} </span>
            <span className="text-white animate-pulse">{t('hero.heading2')}</span>
            <br />
            <span className="text-staydia-gold">{t('hero.heading3')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            {t('hero.subheading')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-staydia-gold/20 rounded-full flex items-center justify-center">
                <Camera className="h-5 w-5 text-staydia-gold" />
              </div>
              <p className="text-gray-300">{t('hero.bullet1')}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-staydia-gold/20 rounded-full flex items-center justify-center">
                <Activity className="h-5 w-5 text-staydia-gold" />
              </div>
              <p className="text-gray-300">{t('hero.bullet2')}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-staydia-gold/20 rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-staydia-gold" />
              </div>
              <p className="text-gray-300">{t('hero.bullet3')}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 text-lg h-14 px-8"
              asChild
            >
              <Link to="/book-demo">{t('hero.bookDemo')}</Link>
            </Button>

            <Button 
              className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 text-lg h-14 px-8"
              onClick={() => window.open('https://staydiasports.com', '_blank')}
            >
              {t('hero.watchEvents')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
