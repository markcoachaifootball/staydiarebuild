
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Globe, 
  TrendingUp, 
  BarChart, 
  Users, 
  CheckIcon, 
  CalendarDays, 
  Link as LinkIcon 
} from "lucide-react";

const ForLeagues: React.FC = () => {
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 staydia-container">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">For Leagues</h1>
          <h2 className="text-2xl font-medium text-staydia-gold mb-8">
            Elevate Your Entire League With AI-Powered Broadcasting
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Staydia Sports partners with leagues and federations across Ireland and the UK 
            to deliver professional-quality coverage at scale - without the complexity or cost of traditional production.
          </p>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-staydia-darkgray/50">
        <div className="staydia-container">
          <h2 className="text-3xl font-bold mb-10 flex items-center">
            <CheckIcon className="text-staydia-gold mr-3 h-8 w-8" />
            Why Partner With Staydia?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
              <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                <Globe className="h-8 w-8 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Centralised Streaming Infrastructure</h3>
              <p className="text-gray-300">
                We provide AI-automated cameras to every club in your league — ensuring consistent coverage of every match, across every level.
              </p>
            </div>
            
            <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
              <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                <TrendingUp className="h-8 w-8 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">League-Wide Sponsorship Revenue</h3>
              <p className="text-gray-300">
                Generate new commercial income through dynamic sponsor placements across every livestream. Your league, your sponsors, your revenue.
              </p>
            </div>
            
            <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
              <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                <BarChart className="h-8 w-8 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Scalable & Uniform Broadcasting</h3>
              <p className="text-gray-300">
                No more patchwork livestreams. Staydia delivers a standardised viewing experience for fans, scouts, and media — every game, every week.
              </p>
            </div>
            
            <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
              <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                <Users className="h-8 w-8 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Enhanced Visibility & Engagement</h3>
              <p className="text-gray-300">
                Make your league more visible and valuable. Attract players, retain talent, and showcase your community with every streamed fixture.
              </p>
            </div>
            
            <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
              <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                <CalendarDays className="h-8 w-8 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">End-to-End Support</h3>
              <p className="text-gray-300">
                From installation to monitoring and scheduling games — we handle everything. Your clubs don't need tech skills or media teams to go live.
              </p>
            </div>
            
            <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
              <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                <LinkIcon className="h-8 w-8 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Seamless Integration with Existing Deals</h3>
              <p className="text-gray-300">
                If your league has an existing media or streaming partner, Staydia can still enhance access. We can capture and feed content directly — without disrupting commercial contracts.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 staydia-container">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[22px] top-8 bottom-0 w-1 bg-staydia-gold/30 hidden md:block" />
          
          <div className="space-y-14">
            {[
              {
                title: "We onboard your league & clubs",
                description: "We work with your organization to understand needs and develop a tailored implementation plan."
              },
              {
                title: "Cameras are installed at no cost to clubs",
                description: "Our team handles all technical aspects of installation across all participating venues."
              },
              {
                title: "You gain a fully livestreamed league within weeks",
                description: "Your entire league benefits from professional quality livestreams, all managed automatically."
              },
              {
                title: "Revenue is shared through platform sponsorship and fan subscriptions",
                description: "Generate new revenue streams through your enhanced digital presence and reach."
              }
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-staydia-gold text-staydia-black flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-staydia-darkgray/50">
        <div className="staydia-container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Broadcast Every Match in Your League?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's chat — and bring your league or federation into the future of sports media.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 font-medium px-8 py-6 text-lg"
              onClick={() => window.location.href = '/contact'}
            >
              Schedule a Call
            </Button>
            <Button 
              variant="outline" 
              className="border-staydia-gold text-staydia-gold hover:bg-staydia-gold/10 font-medium px-8 py-6 text-lg"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ForLeagues;
