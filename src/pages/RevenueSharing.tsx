import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Coins, LucideMonitorPlay, Users, DollarSign, PiggyBank, Handshake } from "lucide-react";
import { Link } from 'react-router-dom';
import DemoForm from '@/components/DemoForm';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import CallToActionSection from '@/components/sports/CallToActionSection';
import StepsTimelineSection from '@/components/sports/StepsTimelineSection';
import FeaturesSection from '@/components/sports/FeaturesSection';

const RevenueSharing = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Define the steps for the revenue sharing model
  const howItWorksSteps = [
    {
      number: 1,
      title: "We Install the Camera — For Free",
      description: "You pay nothing for your smart AI-powered camera and setup. We cover the hardware and install it at your ground."
    },
    {
      number: 2,
      title: "Your Matches Are Streamed",
      description: "Every home game played on your main pitch or court is automatically captured and streamed to your club's fanbase via Staydia's platform."
    },
    {
      number: 3,
      title: "Fans Subscribe to Watch",
      description: "Supporters subscribe monthly to watch your matches live and on-demand. Each fan subscription directly supports your club."
    },
    {
      number: 4,
      title: "Revenue Is Shared",
      description: "We split the subscription income with your club — every month. As your viewership grows, so does your revenue."
    }
  ];
  
  // Define the additional club earnings features
  const additionalEarningsFeatures = [
    {
      icon: <DollarSign className="h-6 w-6 text-staydia-gold" />,
      title: "In-Game Sponsor Placements",
      description: "Insert your club's local sponsors directly into the livestream — static or rotating ads. Sponsors love the exposure. You keep the revenue."
    },
    {
      icon: <LucideMonitorPlay className="h-6 w-6 text-staydia-gold" />,
      title: "Premium Content Access",
      description: "Clubs have the option to offer exclusive highlight reels, behind-the-scenes content, or coaching footage for added income streams."
    },
    {
      icon: <PiggyBank className="h-6 w-6 text-staydia-gold" />,
      title: "Monthly Subscription Revenue",
      description: "Earn recurring revenue from fan subscriptions to watch your matches, building a stable income stream for your club."
    }
  ];
  
  // Define the benefits for different stakeholders
  const benefitsFeatures = [
    {
      icon: <Handshake className="h-6 w-6 text-staydia-gold" />,
      title: "Clubs",
      description: "Earn monthly income with no upfront investment. Build a stronger connection with your fanbase."
    },
    {
      icon: <Users className="h-6 w-6 text-staydia-gold" />,
      title: "Leagues",
      description: "Build a sustainable media presence and unlock new sponsorship value across all member clubs."
    },
    {
      icon: <Coins className="h-6 w-6 text-staydia-gold" />,
      title: "Sponsors",
      description: "Reach loyal local audiences in a brand-safe, high-impact environment with measurable engagement."
    }
  ];

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="staydia-container pb-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Coins className="text-staydia-gold h-8 w-8" />
              <h1 className="text-4xl md:text-5xl font-bold">Revenue Sharing Model</h1>
            </div>
            <h2 className="text-2xl font-medium text-staydia-gold mb-6">
              Turning Matches into Money — For Your Club
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              At Staydia Sports, we don't just provide cameras — we help your club unlock a brand new, sustainable revenue stream through our automated AI-powered livestreaming platform.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Our revenue-sharing model is simple, transparent, and built with one goal in mind: to financially support clubs at every level.
            </p>
            <Alert className="bg-staydia-darkgray border border-staydia-gold text-gray-300 mb-8">
              <AlertTitle className="text-white">No upfront costs. No hidden fees.</AlertTitle>
              <AlertDescription>
                We cover all equipment and installation costs. You only share revenue when your club starts earning.
              </AlertDescription>
            </Alert>
          </div>
        </section>
        
        {/* How It Works Section */}
        <StepsTimelineSection 
          title="📊 How It Works"
          steps={howItWorksSteps}
        />
        
        {/* Additional Club Earnings */}
        <FeaturesSection
          title="💥 Additional Club Earnings"
          features={additionalEarningsFeatures}
        />
        
        {/* Who Benefits */}
        <section className="py-16">
          <div className="staydia-container">
            <h2 className="text-3xl font-bold mb-10">⚽ Who Benefits?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefitsFeatures.map((feature, index) => (
                <div key={index} className="bg-staydia-black p-6 rounded-lg border border-staydia-lightgray">
                  <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why This Model Works */}
        <section className="py-16 bg-staydia-darkgray/50">
          <div className="staydia-container">
            <h2 className="text-3xl font-bold mb-8">🧠 Why This Model Works</h2>
            
            <ul className="space-y-4 max-w-3xl">
              <li className="flex items-start gap-3">
                <div className="bg-staydia-gold/20 p-1 rounded-full mt-1">
                  <div className="bg-staydia-gold rounded-full w-3 h-3"></div>
                </div>
                <p className="text-lg text-gray-300">
                  No capital cost or upfront investment from clubs
                </p>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="bg-staydia-gold/20 p-1 rounded-full mt-1">
                  <div className="bg-staydia-gold rounded-full w-3 h-3"></div>
                </div>
                <p className="text-lg text-gray-300">
                  Aligned incentives: the more your fans watch, the more your club earns
                </p>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="bg-staydia-gold/20 p-1 rounded-full mt-1">
                  <div className="bg-staydia-gold rounded-full w-3 h-3"></div>
                </div>
                <p className="text-lg text-gray-300">
                  Simple, automated payouts — no extra admin
                </p>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="bg-staydia-gold/20 p-1 rounded-full mt-1">
                  <div className="bg-staydia-gold rounded-full w-3 h-3"></div>
                </div>
                <p className="text-lg text-gray-300">
                  Allows clubs to reinvest in development, equipment, coaching, and facilities
                </p>
              </li>
            </ul>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 staydia-container text-center">
          <h2 className="text-3xl font-bold mb-4">📞 Ready to Earn from Every Game?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Your club is already putting in the work on the pitch. Let's help you get rewarded off it.
          </p>
          
          <Button 
            className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 font-medium px-8 py-6 text-lg"
            onClick={() => setIsDialogOpen(true)}
          >
            Book a Call
          </Button>
        </section>

      </main>
      <Footer />

      {/* Demo Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-4">Book a Consultation</DialogTitle>
          </DialogHeader>
          <DemoForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RevenueSharing;
