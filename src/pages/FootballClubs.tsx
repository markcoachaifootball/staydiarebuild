
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Camera, Play, TrendingUp, Banknote, Video, Users } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import DemoForm from '@/components/DemoForm';

const FootballClubs: React.FC = () => {
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 staydia-container">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">For Football Clubs</h1>
          <h2 className="text-2xl font-medium text-staydia-gold mb-8">
            Stream Every Game. Build Your Club. All at No Cost.
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Staydia Sports gives football clubs across Ireland and the UK the tools to automatically livestream 
            every home match — with no camera operators, no upfront costs, and no technical hassle.
          </p>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-staydia-darkgray/50">
        <div className="staydia-container">
          <h2 className="text-3xl font-bold mb-10">⚽ What You Get as a Staydia Club Partner</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
              <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                <Camera className="h-8 w-8 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Free AI-Powered Camera System</h3>
              <p className="text-gray-300">
                We install a fixed, intelligent camera at your pitch that automatically captures every game — no crew, no effort.
              </p>
            </div>
            
            <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
              <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                <Play className="h-8 w-8 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Broadcast Your Matches Live & On-Demand</h3>
              <p className="text-gray-300">
                Home games are streamed live to fans, families, and scouts. Missed it live? Fans can watch it back anytime.
              </p>
            </div>
            
            <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
              <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                <TrendingUp className="h-8 w-8 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Grow Your Fanbase & Club Identity</h3>
              <p className="text-gray-300">
                Clubs use Staydia to connect with their community, attract new players, and promote their teams on and off the pitch.
              </p>
            </div>
            
            <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
              <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                <Banknote className="h-8 w-8 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Earn Revenue While You Play</h3>
              <p className="text-gray-300">
                Generate income through fan subscriptions and local sponsor placements in each broadcast — turning your games into a valuable club asset.
              </p>
            </div>
            
            <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
              <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                <Video className="h-8 w-8 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Highlight & Clip Tools for Coaching</h3>
              <p className="text-gray-300">
                Coaches and admins get access to footage downloads and highlight clipping — perfect for player development and social media content.
              </p>
            </div>
            
            <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
              <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                <Users className="h-8 w-8 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">No Tech Skills Required</h3>
              <p className="text-gray-300">
                Our cameras are "set and forget." We handle the install, onboarding, and ongoing support — your club focuses on football.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 staydia-container">
        <h2 className="text-3xl font-bold mb-8">Real Clubs. Real Results.</h2>
        <p className="text-xl text-gray-300 mb-10">
          Lucan United, Home Farm FC, Greystones Utd, and more have already joined Staydia Sports to stream games, 
          engage fans, and unlock revenue — all without paying for equipment.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-staydia-darkgray p-6 rounded-lg border border-staydia-lightgray">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-staydia-gold rounded-full flex items-center justify-center text-staydia-black font-bold text-lg">
                LU
              </div>
              <div className="ml-4">
                <h3 className="font-bold">Lucan United</h3>
                <p className="text-sm text-gray-400">Dublin, Ireland</p>
              </div>
            </div>
            <p className="text-gray-300 italic">
              "The Staydia camera system has transformed how we connect with our community. Parents who can't make mid-week games can now watch live."
            </p>
          </div>
          
          <div className="bg-staydia-darkgray p-6 rounded-lg border border-staydia-lightgray">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-staydia-gold rounded-full flex items-center justify-center text-staydia-black font-bold text-lg">
                HF
              </div>
              <div className="ml-4">
                <h3 className="font-bold">Home Farm FC</h3>
                <p className="text-sm text-gray-400">Dublin, Ireland</p>
              </div>
            </div>
            <p className="text-gray-300 italic">
              "We've seen a boost in sponsorship interest since adding Staydia's automated camera system. Local businesses love the exposure."
            </p>
          </div>
          
          <div className="bg-staydia-darkgray p-6 rounded-lg border border-staydia-lightgray">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-staydia-gold rounded-full flex items-center justify-center text-staydia-black font-bold text-lg">
                GU
              </div>
              <div className="ml-4">
                <h3 className="font-bold">Greystones Utd</h3>
                <p className="text-sm text-gray-400">Wicklow, Ireland</p>
              </div>
            </div>
            <p className="text-gray-300 italic">
              "Our coaches use the footage and analytics for player development. It's been a game-changer for our training sessions."
            </p>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-staydia-darkgray/50">
        <div className="staydia-container">
          <h2 className="text-3xl font-bold mb-8">How To Get Started</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[22px] top-8 bottom-0 w-1 bg-staydia-gold/30 hidden md:block"></div>
            
            <div className="space-y-12">
              {/* Steps */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-staydia-gold text-staydia-black flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Express interest</h3>
                  <p className="text-gray-300">Reply to us or book a quick intro call</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-staydia-gold text-staydia-black flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">We handle the install</h3>
                  <p className="text-gray-300">Including setup & testing</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-staydia-gold text-staydia-black flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">You go live</h3>
                  <p className="text-gray-300">Your club's matches are streamed automatically</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-staydia-gold text-staydia-black flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Start earning & growing</h3>
                  <p className="text-gray-300">From subscriptions & sponsorships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 staydia-container text-center">
        <h2 className="text-2xl font-bold mb-4">📞 Want to see if your club qualifies for a free camera install?</h2>
        <p className="text-xl text-gray-300 mb-8">Let's chat.</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 font-medium px-8 py-6 text-lg"
              >
                Book a Call
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-4">Book a Consultation</DialogTitle>
              </DialogHeader>
              <DemoForm />
            </DialogContent>
          </Dialog>
          
          <Button 
            variant="outline" 
            className="border-staydia-gold text-staydia-gold hover:bg-staydia-gold/10 font-medium px-8 py-6 text-lg"
            asChild
          >
            <Link to="/contact">Apply Now</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FootballClubs;
