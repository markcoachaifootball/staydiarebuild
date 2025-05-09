import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Camera, Video, Calendar, Users, DollarSign } from "lucide-react";
import HeroSection from '@/components/sports/HeroSection';
import FeaturesSection from '@/components/sports/FeaturesSection';
import TestimonialsSection from '@/components/sports/TestimonialsSection';
import StepsTimelineSection from '@/components/sports/StepsTimelineSection';
import CallToActionSection from '@/components/sports/CallToActionSection';
import WhyChooseSection from '@/components/sports/WhyChooseSection';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const RugbyClubs: React.FC = () => {
  useScrollToTop();
  
  const features = [
    {
      icon: <Camera className="h-8 w-8 text-staydia-gold" />,
      title: "Free AI-Driven Camera System",
      description: "We install a fixed smart camera at your ground to automatically film and stream matches — no operators needed."
    },
    {
      icon: <Video className="h-8 w-8 text-staydia-gold" />,
      title: "Livestream Every Home Fixture",
      description: "Matches are streamed live or watched back later, giving fans, families, and coaches access from anywhere."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-staydia-gold" />,
      title: "Generate Revenue with Every Broadcast",
      description: "Clubs earn money through fan subscriptions and match sponsor placements — with zero setup cost."
    },
    {
      icon: <Users className="h-8 w-8 text-staydia-gold" />,
      title: "Great for All Levels",
      description: "From Minis and Youths to Senior Men's and Women's, Staydia covers every level that plays on your main pitch."
    },
    {
      icon: <Video className="h-8 w-8 text-staydia-gold" />,
      title: "Coaching & Development Benefits",
      description: "All games are saved and downloadable. Coaches can review footage, build highlights, and support player improvement."
    },
    {
      icon: <Users className="h-8 w-8 text-staydia-gold" />,
      title: "Fully Managed & Supported",
      description: "We handle the full installation, onboarding, and support — there's no technical burden on the club."
    }
  ];

  const testimonials = [
    {
      initials: "MR",
      clubName: "Malahide RFC",
      location: "Dublin, Ireland",
      quote: "\"The Staydia system has transformed how we engage with our members. Families now follow matches from anywhere.\""
    },
    {
      initials: "BR",
      clubName: "Ballina RFC",
      location: "Mayo, Ireland",
      quote: "\"Our coaches use the match footage to enhance training sessions and player development. It's been invaluable.\""
    },
    {
      initials: "CR",
      clubName: "Clontarf RFC",
      location: "Dublin, Ireland",
      quote: "\"Local businesses love the exposure from our match broadcasts. It's created a new revenue stream for the club.\""
    }
  ];

  const whyChooseItems = [
    "No upfront cost for cameras or equipment",
    "Fan engagement that builds stronger club culture",
    "Added value for sponsors and local businesses",
    "A modern tool to support development and retention",
    "Simple setup and full support"
  ];

  const steps = [
    {
      number: 1,
      title: "Reach out or apply",
      description: "Quick qualification process"
    },
    {
      number: 2,
      title: "We install and test",
      description: "All handled by our team"
    },
    {
      number: 3,
      title: "Your matches go live",
      description: "Automated and seamless"
    },
    {
      number: 4,
      title: "You earn and grow",
      description: "Revenue + fanbase + visibility"
    }
  ];

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      
      <HeroSection 
        title="For Rugby Clubs"
        subtitle="Every Match Captured. Every Fan Connected. Zero Cost to Your Club."
        description="Staydia Sports helps rugby clubs livestream every home game with ease. We provide and install an AI-powered camera at no cost — enabling your club to stream, promote, and monetise your rugby like never before."
      />
      
      <FeaturesSection 
        title="🏉 What You Get as a Staydia Rugby Club Partner"
        features={features}
      />
      
      <TestimonialsSection 
        title="Rugby Clubs Already Benefiting"
        description="Clubs like Malahide RFC and others across Ireland have joined the Staydia Sports Partner Program — giving their members, coaches, and fans professional-quality livestreams with no investment required."
        testimonials={testimonials}
      />
      
      <WhyChooseSection
        title="Why Rugby Clubs Choose Staydia"
        items={whyChooseItems}
      />
      
      <StepsTimelineSection 
        title="How To Get Started"
        steps={steps}
      />
      
      <CallToActionSection 
        title="📞 Interested in bringing Staydia Sports to your club?"
        subtitle="Let's set up a quick chat."
        primaryButtonText="Book a Call"
        secondaryButtonText="Apply Now"
        secondaryButtonLink="/contact"
      />
      
      <Footer />
    </div>
  );
};

export default RugbyClubs;
