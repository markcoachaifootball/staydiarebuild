
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Camera, Video, DollarSign, Users } from "lucide-react";
import HeroSection from '@/components/sports/HeroSection';
import FeaturesSection from '@/components/sports/FeaturesSection';
import WhyChooseSection from '@/components/sports/WhyChooseSection';
import StepsTimelineSection from '@/components/sports/StepsTimelineSection';
import CallToActionSection from '@/components/sports/CallToActionSection';
import TestimonialsSection from '@/components/sports/TestimonialsSection';

const HockeyClubs: React.FC = () => {
  const features = [
    {
      icon: <Camera className="h-8 w-8 text-staydia-gold" />,
      title: "Free AI Camera Installation",
      description: "We provide and install a fixed, intelligent camera system on your home pitch — completely free for the club."
    },
    {
      icon: <Video className="h-8 w-8 text-staydia-gold" />,
      title: "Stream Every Match, Automatically",
      description: "No camera operator required. Every home fixture is streamed live and available on-demand — accessible to fans, families, and coaches anywhere."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-staydia-gold" />,
      title: "Built-In Revenue Model",
      description: "You earn from fan subscriptions and in-game sponsor placements. Staydia manages it all — you focus on hockey."
    },
    {
      icon: <Video className="h-8 w-8 text-staydia-gold" />,
      title: "Access to Full Game Footage",
      description: "Ideal for training reviews, analysis, and player development. Download, clip, and replay matches with ease."
    },
    {
      icon: <Users className="h-8 w-8 text-staydia-gold" />,
      title: "All Teams Benefit",
      description: "From underage to senior squads — if they play on your main pitch, they're covered."
    },
    {
      icon: <Users className="h-8 w-8 text-staydia-gold" />,
      title: "End-to-End Managed Setup",
      description: "We handle everything — install, support, streaming, platform, and sponsor tooling."
    }
  ];

  const whyChooseItems = [
    "No upfront cost",
    "No tech or filming experience needed",
    "Adds real value for members and local sponsors",
    "Supports retention, recruitment, and club pride",
    "Simple setup with immediate results"
  ];

  const testimonials = [
    {
      initials: "FO",
      clubName: "Folkestone Optimist Hockey Club",
      location: "Kent, UK",
      quote: "\"Implementing Staydia has transformed how our club connects with the wider community. Our members love being able to watch matches they couldn't attend in person.\""
    },
    {
      initials: "PH",
      clubName: "Pembroke Hockey Club",
      location: "Dublin, Ireland",
      quote: "\"The quality of the automated camera tracking is impressive. It's become an invaluable tool for both our coaches and supporters.\""
    },
    {
      initials: "CH",
      clubName: "Cork Harlequins",
      location: "Cork, Ireland",
      quote: "\"The additional revenue stream has made a real difference to our club finances, while providing a professional viewing experience for our community.\""
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Register Interest",
      description: "See if your pitch qualifies"
    },
    {
      number: 2,
      title: "Installation",
      description: "We install the camera in 1 day"
    },
    {
      number: 3,
      title: "Go Live",
      description: "Matches are streamed instantly"
    },
    {
      number: 4,
      title: "Earn & Grow",
      description: "Subscriptions and sponsors do the rest"
    }
  ];

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      
      <HeroSection 
        title="For Hockey Clubs"
        subtitle="Capture Every Goal. Grow Your Club. No Cost. No Hassle."
        description="Staydia Sports delivers professional-grade livestreaming to hockey clubs — with zero cost to you. We install a smart AI-powered camera on your main pitch to automatically capture every game, engage your community, and unlock new revenue."
      />
      
      <FeaturesSection 
        title="🏑 What You Get as a Staydia Hockey Partner"
        features={features}
      />
      
      <WhyChooseSection 
        title="Why Clubs Choose Staydia"
        items={whyChooseItems}
      />
      
      <TestimonialsSection 
        title="Clubs Already On Board"
        description="Clubs like Folkestone Optimist Hockey Club are embracing Staydia to modernise operations, generate revenue, and create lasting digital assets for their community."
        testimonials={testimonials}
      />
      
      <StepsTimelineSection 
        title="🚀 How to Get Started"
        steps={steps}
      />
      
      <CallToActionSection 
        title="📞 Let's bring your pitch to life."
        subtitle="Get in touch today to see how Staydia can support your hockey club's future."
        primaryButtonText="Book a Call"
        secondaryButtonText="Apply Now"
        secondaryButtonLink="/contact"
      />
      
      <Footer />
    </div>
  );
};

export default HockeyClubs;
