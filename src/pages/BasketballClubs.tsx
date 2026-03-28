
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Camera, Video, DollarSign, Users, BarChart3, Play } from "lucide-react";
import HeroSection from '@/components/sports/HeroSection';
import FeaturesSection from '@/components/sports/FeaturesSection';
import TestimonialsSection from '@/components/sports/TestimonialsSection';
import StepsTimelineSection from '@/components/sports/StepsTimelineSection';
import CallToActionSection from '@/components/sports/CallToActionSection';
import WhyChooseSection from '@/components/sports/WhyChooseSection';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const BasketballClubs: React.FC = () => {
  useScrollToTop();
  
  const features = [
    {
      icon: <Camera className="h-8 w-8 text-staydia-gold" />,
      title: "Free AI Camera Installation",
      description: "We install a smart camera in your gym or sports hall — positioned to automatically capture all court activity."
    },
    {
      icon: <Play className="h-8 w-8 text-staydia-gold" />,
      title: "Seamless Match Livestreaming",
      description: "Every home fixture is streamed live and made available for replay. No camera operator required, just pure game-time coverage."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-staydia-gold" />,
      title: "Earn While You Play",
      description: "Generate recurring income through fan subscriptions and branded sponsor placements during each broadcast."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-staydia-gold" />,
      title: "Instant Video Access for Coaches & Players",
      description: "Download footage, clip highlights, and use it to support coaching, performance reviews, and recruitment."
    },
    {
      icon: <Users className="h-8 w-8 text-staydia-gold" />,
      title: "Club-Wide Access",
      description: "From underage squads to senior men's and women's teams — every group using the court benefits."
    },
    {
      icon: <Video className="h-8 w-8 text-staydia-gold" />,
      title: "100% Managed by Staydia",
      description: "We handle the install, maintenance, streaming, and platform management — you stay focused on basketball."
    }
  ];

  const whyChooseItems = [
    "No upfront equipment or setup costs",
    "Full access to match footage — anytime",
    "Hands-off solution — no staff or filming needed",
    "Grow community engagement and fan loyalty",
    "Attract sponsors and highlight your club's impact",
    "Enhance player development with easy video review"
  ];

  const testimonials = [
    {
      initials: "DC",
      clubName: "Dublin Comets",
      location: "Dublin, Ireland",
      quote: "\"Staydia has transformed how we engage with our members and develop our players. The footage has been invaluable for coaching.\""
    },
    {
      initials: "BC",
      clubName: "Belfast Blazers",
      location: "Belfast, Northern Ireland",
      quote: "\"The automated camera system provides professional-quality coverage without any effort from our volunteers. Parents and players love it.\""
    },
    {
      initials: "GW",
      clubName: "Glasgow Warriors",
      location: "Glasgow, Scotland",
      quote: "\"We've seen a boost in sponsorship interest since adding Staydia's livestreaming. Local businesses are eager to get involved.\""
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Enquire",
      description: "See if your court qualifies"
    },
    {
      number: 2,
      title: "Install",
      description: "AI camera installed in 1 visit"
    },
    {
      number: 3,
      title: "Stream",
      description: "Your next game is live"
    },
    {
      number: 4,
      title: "Earn",
      description: "Subscriptions and sponsors do the work"
    }
  ];

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      
      <HeroSection 
        title="For Basketball Clubs"
        subtitle="Stream Every Game. Elevate Every Team. No Equipment Costs."
        description="Staydia Sports brings elite-level livestreaming to grassroots basketball — at no cost to your club. Our fixed AI-powered camera captures every game on your home court, helping you grow your club, boost player development, and unlock new revenue — all without the need for filming crews or tech know-how."
      />
      
      <FeaturesSection 
        title="🏀 What You Get as a Staydia Basketball Partner"
        features={features}
      />
      
      <WhyChooseSection 
        title="Why Basketball Clubs Choose Staydia"
        items={whyChooseItems}
      />
      
      <TestimonialsSection 
        title="Clubs Already Benefiting"
        description="Basketball clubs across Ireland and the UK are embracing Staydia Sports — using our tech to support development pathways, increase visibility, and drive new revenue."
        testimonials={testimonials}
      />
      
      <StepsTimelineSection 
        title="🏁 How to Get Started"
        steps={steps}
      />
      
      <CallToActionSection 
        title="📞 Ready to elevate your court?"
        subtitle="Let's talk about getting your basketball club set up with Staydia."
        primaryButtonText="Book a Call"
        secondaryButtonText="Apply Now"
        secondaryButtonLink="/contact"
      />
      
      <Footer />
    </div>
  );
};

export default BasketballClubs;
