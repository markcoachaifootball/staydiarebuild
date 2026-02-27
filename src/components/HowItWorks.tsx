
import React, { useState } from 'react';
import { Check, Play } from "lucide-react";
import DemoForm from './DemoForm';
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const HowItWorks: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { t } = useTranslation();

  const steps = [
    { number: "01", title: t('howItWorks.step1Title'), description: t('howItWorks.step1Desc') },
    { number: "02", title: t('howItWorks.step2Title'), description: t('howItWorks.step2Desc') },
    { number: "03", title: t('howItWorks.step3Title'), description: t('howItWorks.step3Desc') },
    { number: "04", title: t('howItWorks.step4Title'), description: t('howItWorks.step4Desc') }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-staydia-darkgray">
      <div className="staydia-container">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('howItWorks.title')}</h2>
          <p className="section-subtitle">{t('howItWorks.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-staydia-black p-8 rounded-xl border border-staydia-lightgray animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -top-4 -left-4 bg-staydia-gold text-staydia-black w-10 h-10 flex items-center justify-center rounded-lg font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white mt-4">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Video Section */}
        <div className="mt-16 pt-16 border-t border-staydia-lightgray">
          <h3 className="text-2xl font-semibold text-staydia-gold mb-6 inline-flex items-center">
            <Play className="mr-2 h-5 w-5" />
            {t('howItWorks.videoTitle')}
          </h3>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-staydia-lightgray">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/AANBHlCBxPo?autoplay=1&mute=1" 
              title={t('howItWorks.videoTitle')}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <div className="mt-20 bg-black/50 border border-staydia-lightgray p-8 md:p-12 rounded-xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">{t('howItWorks.ctaTitle')}</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">{t('howItWorks.ctaDesc')}</p>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90">{t('howItWorks.bookDemo')}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-4">{t('howItWorks.bookDemo')}</DialogTitle>
              </DialogHeader>
              <DemoForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
