
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { "rugby-ball" as RugbyBall, Users, Video, Calendar, "dollar-sign" as DollarSign, Camera } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import DemoForm from '@/components/DemoForm';

const RugbyClubs: React.FC = () => {
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 staydia-container">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">For Rugby Clubs</h1>
          <h2 className="text-2xl font-medium text-staydia-gold mb-8">
            Every Match Captured. Every Fan Connected. Zero Cost to Your Club.
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Staydia Sports helps rugby clubs livestream every home game with ease. We provide and install an AI-powered camera 
            at no cost — enabling your club to stream, promote, and monetise your rugby like never before.
          </p>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-staydia-darkgray/50">
        <div className="staydia-container">
          <h2 className="text-3xl font-bold mb-10">🏉 What You Get as a Staydia Rugby Club Partner</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
              <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                <Camera className="h-8 w-8 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Free AI-Driven Camera System</h3>
              <p className="text-gray-300">
                We install a fixed smart camera at your ground to automatically film and stream matches — no operators needed.
              </p>
            </div>
            
            <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
              <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                <Video className="h-8 w-8 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Livestream Every Home Fixture</h3>
              <p className="text-gray-300">
                Matches are streamed live or watched back later, giving fans, families, and coaches access from anywhere.
              </p>
            </div>
            
            <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
              <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                <DollarSign className="h-8 w-8 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Generate Revenue with Every Broadcast</h3>
              <p className="text-gray-300">
                Clubs earn money through fan subscriptions and match sponsor placements — with zero setup cost.
              </p>
            </div>
            
            <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
              <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                <Users className="h-8 w-8 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Great for All Levels</h3>
              <p className="text-gray-300">
                From Minis and Youths to Senior Men's and Women's, Staydia covers every level that plays on your main pitch.
              </p>
            </div>
            
            <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
              <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                <Video className="h-8 w-8 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Coaching & Development Benefits</h3>
              <p className="text-gray-300">
                All games are saved and downloadable. Coaches can review footage, build highlights, and support player improvement.
              </p>
            </div>
            
            <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
              <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                <Users className="h-8 w-8 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fully Managed & Supported</h3>
              <p className="text-gray-300">
                We handle the full installation, onboarding, and support — there's no technical burden on the club.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 staydia-container">
        <h2 className="text-3xl font-bold mb-8">Rugby Clubs Already Benefiting</h2>
        <p className="text-xl text-gray-300 mb-10">
          Clubs like Malahide RFC and others across Ireland have joined the Staydia Sports Partner Program — 
          giving their members, coaches, and fans professional-quality livestreams with no investment required.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-staydia-darkgray p-6 rounded-lg border border-staydia-lightgray">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-staydia-gold rounded-full flex items-center justify-center text-staydia-black font-bold text-lg">
                MR
              </div>
              <div className="ml-4">
                <h3 className="font-bold">Malahide RFC</h3>
                <p className="text-sm text-gray-400">Dublin, Ireland</p>
              </div>
            </div>
            <p className="text-gray-300 italic">
              "The Staydia system has transformed how we engage with our members. Families now follow matches from anywhere."
            </p>
          </div>
          
          <div className="bg-staydia-darkgray p-6 rounded-lg border border-staydia-lightgray">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-staydia-gold rounded-full flex items-center justify-center text-staydia-black font-bold text-lg">
                BR
              </div>
              <div className="ml-4">
                <h3 className="font-bold">Ballina RFC</h3>
                <p className="text-sm text-gray-400">Mayo, Ireland</p>
              </div>
            </div>
            <p className="text-gray-300 italic">
              "Our coaches use the match footage to enhance training sessions and player development. It's been invaluable."
            </p>
          </div>
          
          <div className="bg-staydia-darkgray p-6 rounded-lg border border-staydia-lightgray">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-staydia-gold rounded-full flex items-center justify-center text-staydia-black font-bold text-lg">
                CR
              </div>
              <div className="ml-4">
                <h3 className="font-bold">Clontarf RFC</h3>
                <p className="text-sm text-gray-400">Dublin, Ireland</p>
              </div>
            </div>
            <p className="text-gray-300 italic">
              "Local businesses love the exposure from our match broadcasts. It's created a new revenue stream for the club."
            </p>
          </div>
        </div>
      </section>
      
      {/* Why Choose Section */}
      <section className="py-16 bg-staydia-darkgray/50">
        <div className="staydia-container">
          <h2 className="text-3xl font-bold mb-8">Why Rugby Clubs Choose Staydia</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 text-staydia-gold text-3xl">✓</div>
              <p className="text-gray-200">No upfront cost for cameras or equipment</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 text-staydia-gold text-3xl">✓</div>
              <p className="text-gray-200">Fan engagement that builds stronger club culture</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 text-staydia-gold text-3xl">✓</div>
              <p className="text-gray-200">Added value for sponsors and local businesses</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 text-staydia-gold text-3xl">✓</div>
              <p className="text-gray-200">A modern tool to support development and retention</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 text-staydia-gold text-3xl">✓</div>
              <p className="text-gray-200">Simple setup and full support</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 staydia-container">
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
                <h3 className="text-xl font-bold mb-1">Reach out or apply</h3>
                <p className="text-gray-300">Quick qualification process</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-staydia-gold text-staydia-black flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">We install and test</h3>
                <p className="text-gray-300">All handled by our team</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-staydia-gold text-staydia-black flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Your matches go live</h3>
                <p className="text-gray-300">Automated and seamless</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-staydia-gold text-staydia-black flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">You earn and grow</h3>
                <p className="text-gray-300">Revenue + fanbase + visibility</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 staydia-container text-center">
        <h2 className="text-2xl font-bold mb-4">📞 Interested in bringing Staydia Sports to your club?</h2>
        <p className="text-xl text-gray-300 mb-8">Let's set up a quick chat.</p>
        
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

export default RugbyClubs;
