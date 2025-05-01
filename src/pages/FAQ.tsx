
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-32 pb-16 staydia-container">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Frequently Asked Questions</h1>
          <p className="text-gray-300 mb-12 text-lg">
            Find answers to the most common questions about Staydia Sports.
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-staydia-lightgray">
              <AccordionTrigger className="text-xl font-medium text-white hover:text-staydia-gold">
                How does Staydia's camera technology work?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base">
                Our AI-powered camera system uses computer vision to automatically track the action on the field or court. 
                The cameras are installed at optimal viewing positions and require no human operator. 
                The system identifies players, follows the ball, and automatically produces a broadcast-quality stream.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-staydia-lightgray">
              <AccordionTrigger className="text-xl font-medium text-white hover:text-staydia-gold">
                Is there any cost for clubs to install the system?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base">
                No, there's no cost to clubs for installation or maintenance. Staydia covers all hardware, 
                installation, and ongoing maintenance costs. Our partnership model is based on revenue sharing 
                from subscriptions and advertising.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-staydia-lightgray">
              <AccordionTrigger className="text-xl font-medium text-white hover:text-staydia-gold">
                How do clubs make money with Staydia?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base">
                Clubs earn revenue through our partnership program in several ways: a share of subscription fees from viewers,
                advertising during broadcasts, and increased sponsorship opportunities. Many clubs also see increased matchday 
                attendance and merchandise sales as their community engagement grows.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-staydia-lightgray">
              <AccordionTrigger className="text-xl font-medium text-white hover:text-staydia-gold">
                What sports does Staydia currently support?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base">
                We currently support football (soccer), rugby, hockey, and basketball. Our technology is designed to work 
                with multiple sports, and we're continuously expanding our capabilities. If your sport isn't listed, 
                please contact us to discuss possibilities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-staydia-lightgray">
              <AccordionTrigger className="text-xl font-medium text-white hover:text-staydia-gold">
                How can fans watch the matches?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base">
                Fans can watch matches live or on-demand through the Staydia Sports platform, accessible via web browsers 
                or our mobile apps. Subscriptions allow viewers to follow specific clubs or access all content across the platform.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-staydia-lightgray">
              <AccordionTrigger className="text-xl font-medium text-white hover:text-staydia-gold">
                How long does installation take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base">
                A typical installation takes just one day, with minimal disruption to your facility. Our team handles everything,
                from mounting cameras to setting up the network connection and configuring the system.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-staydia-lightgray">
              <AccordionTrigger className="text-xl font-medium text-white hover:text-staydia-gold">
                Can coaches and players access match footage?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base">
                Yes! Clubs get full access to all their footage. Coaches can review games, create clips for analysis,
                and share highlights with players. This is a powerful tool for player development and tactical analysis.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
