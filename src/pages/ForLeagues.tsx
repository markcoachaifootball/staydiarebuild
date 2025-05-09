import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Globe, 
  TrendingUp, 
  BarChart, 
  Users, 
  CheckIcon, 
  CalendarDays, 
  Link as LinkIcon 
} from "lucide-react";
import HeroSection from '@/components/sports/HeroSection';
import FeaturesSection from '@/components/sports/FeaturesSection';
import WhyChooseSection from '@/components/sports/WhyChooseSection';
import StepsTimelineSection from '@/components/sports/StepsTimelineSection';
import CallToActionSection from '@/components/sports/CallToActionSection';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const ForLeagues: React.FC = () => {
  useScrollToTop();
  
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-staydia-gold" />,
      title: "Centralised Streaming Infrastructure",
      description: "We provide AI-automated cameras to every club in your league — ensuring consistent coverage of every match, across every level."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-staydia-gold" />,
      title: "League-Wide Sponsorship Revenue",
      description: "Generate new commercial income through dynamic sponsor placements across every livestream. Your league, your sponsors, your revenue."
    },
    {
      icon: <BarChart className="h-8 w-8 text-staydia-gold" />,
      title: "Scalable & Uniform Broadcasting",
      description: "No more patchwork livestreams. Staydia delivers a standardised viewing experience for fans, scouts, and media — every game, every week."
    },
    {
      icon: <Users className="h-8 w-8 text-staydia-gold" />,
      title: "Enhanced Visibility & Engagement",
      description: "Make your league more visible and valuable. Attract players, retain talent, and showcase your community with every streamed fixture."
    },
    {
      icon: <CalendarDays className="h-8 w-8 text-staydia-gold" />,
      title: "End-to-End Support",
      description: "From installation to monitoring and scheduling games — we handle everything. Your clubs don't need tech skills or media teams to go live."
    },
    {
      icon: <LinkIcon className="h-8 w-8 text-staydia-gold" />,
      title: "Seamless Integration with Existing Deals",
      description: "If your league has an existing media or streaming partner, Staydia can still enhance access. We can capture and feed content directly — without disrupting commercial contracts."
    }
  ];

  const whyChooseItems = [
    "No upfront cost for cameras or equipment",
    "Fan engagement that builds stronger league culture",
    "Added value for sponsors and local businesses",
    "A modern tool to support development and retention",
    "Simple setup and full support",
    "Increased visibility for the entire league"
  ];

  const steps = [
    {
      number: 1,
      title: "We onboard your league & clubs",
      description: "We work with your organization to understand needs and develop a tailored implementation plan."
    },
    {
      number: 2,
      title: "Cameras are installed at no cost to clubs",
      description: "Our team handles all technical aspects of installation across all participating venues."
    },
    {
      number: 3,
      title: "You gain a fully livestreamed league within weeks",
      description: "Your entire league benefits from professional quality livestreams, all managed automatically."
    },
    {
      number: 4,
      title: "Revenue is shared through platform sponsorship and fan subscriptions",
      description: "Generate new revenue streams through your enhanced digital presence and reach."
    }
  ];

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      
      <HeroSection 
        title="For Leagues"
        subtitle="Elevate Your Entire League With AI-Powered Broadcasting"
        description="Staydia Sports partners with leagues and federations across Ireland and the UK to deliver professional-quality coverage at scale - without the complexity or cost of traditional production."
      />
      
      <WhyChooseSection 
        title="Why Partner With Staydia?"
        items={whyChooseItems}
      />
      
      <FeaturesSection 
        title="League Benefits"
        features={features}
      />
      
      <StepsTimelineSection 
        title="How It Works"
        steps={steps}
      />
      
      <CallToActionSection 
        title="Ready to Broadcast Every Match in Your League?"
        subtitle="Let's chat — and bring your league or federation into the future of sports media."
        primaryButtonText="Schedule a Call"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
      
      <Footer />
    </div>
  );
};

export default ForLeagues;
