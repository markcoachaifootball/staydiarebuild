
import React, { useState, useEffect, useRef } from 'react';
import { Check, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import DemoForm from './DemoForm';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Technology: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const { t } = useTranslation();

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
    <section id="technology" className="py-24">
      <div className="staydia-container">
        <div className="mb-16">
          <div className="space-y-6">
            <h2 className="section-title text-left">{t('solutions.title')}</h2>
            <p className="text-gray-300 text-lg mb-8">
              {t('solutions.description')}
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                t('solutions.smartCamera'),
                t('solutions.livestreaming'),
                t('solutions.clubBranded'),
                t('solutions.revenueGeneration'),
                t('solutions.highlights'),
                t('solutions.socialMedia')
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <Check className="text-staydia-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <p className="text-staydia-gold text-lg font-medium mb-8">
              {t('solutions.tagline')}
            </p>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 mb-12">
                  {t('solutions.bookDemo')}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-4">{t('solutions.bookDemo')}</DialogTitle>
                </DialogHeader>
                <DemoForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-12 border-t border-staydia-lightgray pt-12" ref={videoRef}>
          <h3 className="text-2xl font-semibold text-staydia-gold mb-2">
            <Play className="mr-2 h-5 w-5 inline" />
            {t('solutions.seeHowItWorks')}
          </h3>
          <p className="text-gray-400 mb-6">{t('solutions.noCameraman')}</p>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-staydia-lightgray">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src={isVideoVisible ? "https://www.youtube.com/embed/LlAfWzJP3co?autoplay=1&mute=1" : "about:blank"} 
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
