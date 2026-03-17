import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PartnerFAQ from '@/components/PartnerFAQ';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { usePrerenderReady } from '@/hooks/usePrerenderReady';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  useScrollToTop();
  usePrerenderReady();
  const { t } = useTranslation();

  const generalFAQs = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
    { question: t('faq.q6'), answer: t('faq.a6') },
    { question: t('faq.q7'), answer: t('faq.a7') },
  ];

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-32 pb-16 staydia-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('faq.title')}</h1>
          <p className="text-xl text-gray-300 mb-12">{t('faq.subtitle')}</p>
          <Tabs defaultValue="general" className="mb-16">
            <TabsList className="w-full mb-8 bg-staydia-darkgray border border-staydia-lightgray">
              <TabsTrigger value="general" className="flex-1">{t('faq.generalTab')}</TabsTrigger>
              <TabsTrigger value="clubs" className="flex-1">{t('faq.clubsTab')}</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <Accordion type="single" collapsible className="w-full">
                {generalFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-staydia-lightgray">
                    <AccordionTrigger className="text-left font-medium py-4 hover:text-staydia-gold">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-300 pb-6">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
            <TabsContent value="clubs"><PartnerFAQ /></TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
