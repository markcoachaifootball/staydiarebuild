import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import DemoForm from '@/components/DemoForm';
import { Check } from "lucide-react";
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useTranslation } from 'react-i18next';

const FanEngagement = () => {
  useScrollToTop();
  const { t } = useTranslation();

  const features = [
    { emoji: '📺', title: t('fanEngagement.liveStreaming'), desc: t('fanEngagement.liveStreamingDesc') },
    { emoji: '📱', title: t('fanEngagement.socialMedia'), desc: t('fanEngagement.socialMediaDesc') },
    { emoji: '🧠', title: t('fanEngagement.dataInsights'), desc: t('fanEngagement.dataInsightsDesc') },
    { emoji: '💬', title: t('fanEngagement.communityTies'), desc: t('fanEngagement.communityTiesDesc') },
    { emoji: '💸', title: t('fanEngagement.boostRevenue'), desc: t('fanEngagement.boostRevenueDesc') },
  ];

  const benefits = [
    t('fanEngagement.benefit1'), t('fanEngagement.benefit2'), t('fanEngagement.benefit3'),
    t('fanEngagement.benefit4'), t('fanEngagement.benefit5'), t('fanEngagement.benefit6'),
  ];

  return (
    <div className="min-h-screen bg-staydia-black flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-16 staydia-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('fanEngagement.title')}</h1>
          <h2 className="text-2xl md:text-3xl text-staydia-gold font-semibold mb-8">{t('fanEngagement.subtitle')}</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mb-10">{t('fanEngagement.description')}</p>
        </section>

        <section className="py-12 bg-staydia-darkgray/50">
          <div className="staydia-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <div key={i} className="bg-staydia-black border border-staydia-lightgray rounded-lg p-8 hover:border-staydia-gold transition-colors">
                  <div className="text-4xl mb-4">{f.emoji}</div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-gray-300">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 staydia-container">
          <h2 className="text-3xl font-bold mb-8">{t('fanEngagement.whyChoose')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 text-staydia-gold"><Check size={20} /></div>
                <p className="text-lg text-gray-200">{benefit}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-8 bg-staydia-darkgray/30 border border-staydia-lightgray rounded-lg max-w-3xl">
            <div className="text-4xl mb-4">📣</div>
            <h3 className="text-2xl font-bold mb-4">{t('fanEngagement.letFansBeThere')}</h3>
            <p className="text-lg text-gray-300 mb-6">{t('fanEngagement.letFansDesc')}</p>
          </div>
        </section>

        <section className="py-16 staydia-container text-center">
          <h2 className="text-3xl font-bold mb-6">{t('fanEngagement.readyToGrow')}</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 font-medium px-8 py-6 text-lg">{t('solutions.bookDemo')}</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader><DialogTitle className="text-2xl font-bold mb-4">{t('solutions.bookDemo')}</DialogTitle></DialogHeader>
                <DemoForm />
              </DialogContent>
            </Dialog>
            <Button variant="outline" className="border-staydia-gold text-staydia-gold hover:bg-staydia-gold/10 font-medium px-8 py-6 text-lg" asChild>
              <a href="https://staydiasports.com" target="_blank" rel="noopener noreferrer">{t('fanEngagement.joinToday')}</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FanEngagement;
