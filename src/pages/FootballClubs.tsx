
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Camera, Play, TrendingUp, Banknote, Video, Users } from "lucide-react";
import HeroSection from '@/components/sports/HeroSection';
import FeaturesSection from '@/components/sports/FeaturesSection';
import TestimonialsSection from '@/components/sports/TestimonialsSection';
import StepsTimelineSection from '@/components/sports/StepsTimelineSection';
import CallToActionSection from '@/components/sports/CallToActionSection';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const FootballClubs: React.FC = () => {
  useScrollToTop();
  
  const features = [
    {
      icon: <Camera className="h-8 w-8 text-staydia-gold" />,
      title: "Free AI-Powered Camera System",
      description: "We install a fixed, intelligent camera at your pitch that automatically captures every game — no crew, no effort."
    },
    {
      icon: <Play className="h-8 w-8 text-staydia-gold" />,
      title: "Broadcast Your Matches Live & On-Demand",
      description: "Home games are streamed live to fans, families, and scouts. Missed it live? Fans can watch it back anytime."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-staydia-gold" />,
      title: "Grow Your Fanbase & Club Identity",
      description: "Clubs use Staydia to connect with their community, attract new players, and promote their teams on and off the pitch."
    },
    {
      icon: <Banknote className="h-8 w-8 text-staydia-gold" />,
      title: "Earn Revenue While You Play",
      description: "Generate income through fan subscriptions and local sponsor placements in each broadcast — turning your games into a valuable club asset."
    },
    {
      icon: <Video className="h-8 w-8 text-staydia-gold" />,
      title: "Highlight & Clip Tools for Coaching",
      description: "Coaches and admins get access to footage downloads and highlight clipping — perfect for player development and social media content."
    },
    {
      icon: <Users className="h-8 w-8 text-staydia-gold" />,
      title: "No Tech Skills Required",
      description: "Our cameras are \"set and forget.\" We handle the install, onboarding, and ongoing support — your club focuses on football."
    }
  ];

  const testimonials = [
    {
      initials: "LU",
      clubName: "Lucan United",
      location: "Dublin, Ireland",
      quote: "\"The Staydia camera system has transformed how we connect with our community. Parents who can't make mid-week games can now watch live.\""
    },
    {
      initials: "HF",
      clubName: "Home Farm FC",
      location: "Dublin, Ireland",
      quote: "\"We've seen a boost in sponsorship interest since adding Staydia's automated camera system. Local businesses love the exposure.\""
    },
    {
      initials: "GU",
      clubName: "Greystones Utd",
      location: "Wicklow, Ireland",
      quote: "\"Our coaches use the footage for player development. It's been a game-changer for our training sessions.\""
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Express interest",
      description: "Reply to us or book a quick intro call"
    },
    {
      number: 2,
      title: "We handle the install",
      description: "Including setup & testing"
    },
    {
      number: 3,
      title: "You go live",
      description: "Your club's matches are streamed automatically"
    },
    {
      number: 4,
      title: "Start earning & growing",
      description: "From subscriptions & sponsorships"
    }
  ];

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      
      <HeroSection 
        title="For Football Clubs"
        subtitle="Stream Every Game. Build Your Club. All at No Cost."
        description="Staydia Sports gives football clubs across Ireland and the UK the tools to automatically livestream every home match — with no camera operators, no upfront costs, and no technical hassle."
      />
      
      <FeaturesSection 
        title="⚽ What You Get as a Staydia Club Partner"
        features={features}
      />
      
      <TestimonialsSection 
        title="Real Clubs. Real Results."
        description="Lucan United, Home Farm FC, Greystones Utd, and more have already joined Staydia Sports to stream games, engage fans, and unlock revenue — all without paying for equipment."
        testimonials={testimonials}
      />
      
      <StepsTimelineSection 
        title="How To Get Started"
        steps={steps}
      />
      
      <CallToActionSection 
        title="📞 Want to see if your club qualifies for a free camera install?"
        subtitle="Let's chat."
        primaryButtonText="Book a Call"
        secondaryButtonText="Apply Now"
        secondaryButtonLink="/contact"
      />
      
      <Footer />
    </div>
  );
};

export default FootballClubs;
