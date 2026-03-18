import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SportsGrid } from '@/components/SportsGrid';
import { SportsBenefits } from '@/components/SportsBenefits';
import { SportsTestimonials } from '@/components/SportsTestimonials';
import { Button } from '@/components/ui/button';
import DemoForm from '@/components/DemoForm';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useMetaTags } from '@/hooks/useMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import { Link } from 'react-router-dom';
import { usePrerenderReady } from '@/hooks/usePrerenderReady';
import { useTranslation } from 'react-i18next';

const Sports = () => {
  const { t } = useTranslation();
  useScrollToTop();
  usePrerenderReady();
  useMetaTags({
    title: 'Sports Broadcasting Solutions - Football, Basketball, Rugby & Hockey',
    description: 'Discover AI-powered broadcasting solutions for football, basketball, rugby, and hockey clubs. Automated cameras, live streaming, and fan engagement tools.',
    url: 'https://about.staydiasports.com/sports',
    type: 'website',
    tags: ['Sports Broadcasting', 'Football Clubs', 'Basketball Clubs', 'Rugby Clubs', 'Hockey Clubs', 'AI Technology']
  });

  useStructuredData({
    type: 'WebSite',
    title: 'Sports Broadcasting Solutions',
    description: 'Comprehensive AI-powered broadcasting solutions for sports clubs across football, basketball, rugby, and hockey.',
    url: 'https://about.staydiasports.com/sports'
  });
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-20">
        <SportsGrid />
        <SportsBenefits />
        <SportsTestimonials />
        
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="staydia-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('sportsPage.ctaTitle')}</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              {t('sportsPage.ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 font-medium px-8 py-6 text-lg">
                    {t('sportsPage.bookDemo')}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold mb-4">{t('sportsPage.bookDemo')}</DialogTitle>
                  </DialogHeader>
                  <DemoForm />
                </DialogContent>
              </Dialog>
              
              <Button 
                className="border-staydia-gold text-staydia-gold hover:bg-staydia-gold/10 font-medium px-8 py-6 text-lg" 
                variant="outline"
                asChild
              >
                <Link to="/book-demo">{t('sportsPage.directBooking')}</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Sports;
