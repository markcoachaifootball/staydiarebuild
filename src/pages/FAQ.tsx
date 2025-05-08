
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import PartnerFAQ from '@/components/PartnerFAQ';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const FAQ = () => {
  const generalFAQs = [
    {
      question: "How does Staydia's camera technology work?",
      answer: "Our AI-powered cameras use advanced computer vision to automatically track the ball and action during matches. The system operates autonomously without the need for a camera operator, capturing high-quality footage of every game."
    },
    {
      question: "Is there any cost for clubs to install the system?",
      answer: "No, there is zero upfront investment required from clubs. We install and maintain all the necessary equipment at our own cost. Clubs can focus on what they do best while we handle the technology."
    },
    {
      question: "How do clubs make money with Staydia?",
      answer: "Clubs can generate revenue through fan subscriptions to watch matches and through in-stream sponsorship opportunities. All advertising revenue secured by the club stays 100% with the club."
    },
    {
      question: "What sports does Staydia currently support?",
      answer: "We currently support football (soccer), rugby, hockey, and basketball, with plans to expand to additional sports in the future."
    },
    {
      question: "How can fans watch the matches?",
      answer: "Fans can watch live streams and replays through the Staydia platform, accessible via web browsers on any device. We also offer mobile apps for iOS and Android for an optimized viewing experience."
    },
    {
      question: "How long does installation take?",
      answer: "Typical installation takes 1-2 days. Our team works around your club's schedule to ensure minimal disruption."
    },
    {
      question: "Can coaches and players access match footage?",
      answer: "Yes, authorized club personnel receive premium access to all match footage for training and analysis purposes at no additional cost."
    }
  ];

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      
      <div className="pt-32 pb-16 staydia-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 mb-12">
            Find answers to the most common questions about Staydia Sports.
          </p>
          
          <Tabs defaultValue="general" className="mb-16">
            <TabsList className="w-full mb-8 bg-staydia-darkgray border border-staydia-lightgray">
              <TabsTrigger value="general" className="flex-1">General FAQ</TabsTrigger>
              <TabsTrigger value="clubs" className="flex-1">For Clubs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general">
              <Accordion type="single" collapsible className="w-full">
                {generalFAQs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-b border-staydia-lightgray"
                  >
                    <AccordionTrigger className="text-left font-medium py-4 hover:text-staydia-gold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
            
            <TabsContent value="clubs">
              <PartnerFAQ />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;
