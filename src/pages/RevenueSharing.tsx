import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Coins, LucideMonitorPlay, Users, DollarSign, PiggyBank, Handshake } from "lucide-react";
import StepsTimelineSection from '@/components/sports/StepsTimelineSection';
import FeaturesSection from '@/components/sports/FeaturesSection';
import RevenueHero from '@/components/revenue-sharing/RevenueHero';
import WhyItWorksSection from '@/components/revenue-sharing/WhyItWorksSection';
import RevenueCTA from '@/components/revenue-sharing/RevenueCTA';
import BenefitsSection from '@/components/revenue-sharing/BenefitsSection';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const RevenueSharing = () => {
  useScrollToTop();
  
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
        <RevenueHero />
        
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
        <BenefitsSection features={benefitsFeatures} />
        
        {/* Why This Model Works */}
        <WhyItWorksSection />
        
        {/* CTA Section */}
        <RevenueCTA />
      </main>
      <Footer />
    </div>
  );
};

export default RevenueSharing;
