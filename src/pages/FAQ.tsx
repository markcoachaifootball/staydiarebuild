
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-32 pb-16 staydia-container">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Frequently Asked Questions</h1>
          <p className="text-gray-300 mb-8 text-lg">
            Find answers to the most common questions about Staydia Sports.
          </p>

          <Tabs defaultValue="general" className="mb-12">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-staydia-darkgray">
              <TabsTrigger value="general" className="text-base">General FAQ</TabsTrigger>
              <TabsTrigger value="clubs" className="text-base">For Clubs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general">
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
            </TabsContent>
            
            <TabsContent value="clubs">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="club-1" className="border-staydia-lightgray">
                  <AccordionTrigger className="text-xl font-medium text-white hover:text-staydia-gold">
                    📷 What is Staydia Sports?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base">
                    Staydia Sports provides AI-powered, fixed-position cameras and a streaming platform that allows clubs to 
                    automatically capture, livestream, and monetise their games — all at no cost to the club.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="club-2" className="border-staydia-lightgray">
                  <AccordionTrigger className="text-xl font-medium text-white hover:text-staydia-gold">
                    💰 Is there any cost to the club?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base">
                    No. We supply and install the camera system free of charge. Clubs do not pay for the hardware, setup, or software.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="club-3" className="border-staydia-lightgray">
                  <AccordionTrigger className="text-xl font-medium text-white hover:text-staydia-gold">
                    ⚙️ What does the club need to provide?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base">
                    <p>The club needs to:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Provide access to install the camera</li>
                      <li>Ensure a stable internet connection at the venue</li>
                      <li>Help promote the streaming platform to members and fans</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="club-4" className="border-staydia-lightgray">
                  <AccordionTrigger className="text-xl font-medium text-white hover:text-staydia-gold">
                    🌍 Who can watch the games?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base">
                    Anyone with internet access. Fans, family members, scouts, and coaches can subscribe to view live 
                    matches and replays from anywhere in the world.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="club-5" className="border-staydia-lightgray">
                  <AccordionTrigger className="text-xl font-medium text-white hover:text-staydia-gold">
                    💸 How does the club make money?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base">
                    <p>Clubs earn revenue from:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>A share of fan subscription income</li>
                      <li>In-stream sponsorship ads and branding</li>
                      <li>Additional content (e.g., highlights, coaching packages)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="club-6" className="border-staydia-lightgray">
                  <AccordionTrigger className="text-xl font-medium text-white hover:text-staydia-gold">
                    🤝 Can all teams in the club use the camera?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base">
                    Yes. Any team playing on the main pitch or court where the camera is installed can use it — from underage teams to senior squads.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="club-7" className="border-staydia-lightgray">
                  <AccordionTrigger className="text-xl font-medium text-white hover:text-staydia-gold">
                    📶 What kind of internet connection is needed?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base">
                    We recommend a minimum upload speed of 10 Mbps. We can work with your existing broadband or help recommend an upgrade if needed.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="club-8" className="border-staydia-lightgray">
                  <AccordionTrigger className="text-xl font-medium text-white hover:text-staydia-gold">
                    🎞️ Can coaches use the footage for training?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base">
                    Yes. Coaches and club admins get access to full match footage, highlights tools, and clip download features for analysis and development.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="club-9" className="border-staydia-lightgray">
                  <AccordionTrigger className="text-xl font-medium text-white hover:text-staydia-gold">
                    🔐 Who owns the footage?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base">
                    Clubs retain rights to use their own footage for coaching, promotional content, and internal use. Staydia retains rights for platform distribution and monetisation.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="club-10" className="border-staydia-lightgray">
                  <AccordionTrigger className="text-xl font-medium text-white hover:text-staydia-gold">
                    🛠️ Who installs and maintains the camera?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base">
                    Our team arranges the full installation and provides remote support. It's a hands-off setup for your club.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="club-11" className="border-staydia-lightgray">
                  <AccordionTrigger className="text-xl font-medium text-white hover:text-staydia-gold">
                    📅 How long does it take to get set up?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base">
                    Once your club is approved, installation is typically completed within 2–4 weeks, depending on availability and internet readiness.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="club-12" className="border-staydia-lightgray">
                  <AccordionTrigger className="text-xl font-medium text-white hover:text-staydia-gold">
                    📢 Do we have to replace other solutions (e.g. Veo)?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base">
                    No — Staydia can complement your existing solutions. Many clubs use Staydia for livestreaming and other tools (e.g., Veo) for portable use.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="club-13" className="border-staydia-lightgray">
                  <AccordionTrigger className="text-xl font-medium text-white hover:text-staydia-gold">
                    🚀 How do we get started?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base">
                    <p>Easy! Just get in touch and we'll walk you through the next steps.</p>
                    <div className="mt-4 flex gap-4">
                      <Button 
                        className="bg-staydia-gold text-staydia-black hover:bg-opacity-90"
                        asChild
                      >
                        <Link to="/contact">Book a Call</Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-staydia-gold text-staydia-gold hover:bg-staydia-gold/10"
                        asChild
                      >
                        <Link to="/for-clubs">Apply Now</Link>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
