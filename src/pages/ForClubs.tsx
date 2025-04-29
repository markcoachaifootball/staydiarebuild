
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Camera, Banknote, Users, Play, ShieldCheck, Zap, AreaChart, ThumbsUp } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import DemoForm from '@/components/DemoForm';

const ForClubs = () => {
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-32 pb-20 staydia-container">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The Smartest Way to Capture, Stream & Grow Your Club</h1>
          <h2 className="text-2xl text-staydia-gold mb-12">With No Upfront Costs</h2>
          
          <p className="text-gray-300 text-lg mb-12">
            At Staydia Sports, we're on a mission to give every sports club—big or small—the tools to grow, 
            connect, and succeed through cutting-edge AI-powered technology.
          </p>
          
          <p className="text-gray-300 text-lg mb-16">
            We install professional-grade, fixed-position AI cameras at no cost to your club, allowing you to 
            automatically capture every home game without needing a cameraman, editing software, or technical know-how.
          </p>
          
          <div className="relative mb-16 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
              alt="Club match with Staydia camera system" 
              className="w-full h-auto rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-staydia-black/90"></div>
            <div className="absolute bottom-10 left-10">
              <h3 className="text-2xl font-bold mb-2">Capture Every Moment</h3>
              <p className="text-staydia-gold">Automated. Professional. Reliable.</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-10">⚽ What You Get:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-staydia-darkgray p-8 rounded-xl border border-staydia-lightgray hover:border-staydia-gold/50 transition-colors">
              <div className="w-12 h-12 bg-staydia-gold/10 rounded-lg flex items-center justify-center mb-6">
                <Camera className="h-6 w-6 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Free AI Camera Installation</h3>
              <p className="text-gray-300">
                We sponsor your club with a high-end AI camera system that captures every match on your main pitch 
                or court—fully automated, 24/7 ready.
              </p>
            </div>
            
            <div className="bg-staydia-darkgray p-8 rounded-xl border border-staydia-lightgray hover:border-staydia-gold/50 transition-colors">
              <div className="w-12 h-12 bg-staydia-gold/10 rounded-lg flex items-center justify-center mb-6">
                <Play className="h-6 w-6 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Livestream Every Game</h3>
              <p className="text-gray-300">
                Games are streamed to your fans via our Staydia platform or can be integrated with existing broadcast 
                tools like Joymo or Basketball Ireland systems.
              </p>
            </div>
            
            <div className="bg-staydia-darkgray p-8 rounded-xl border border-staydia-lightgray hover:border-staydia-gold/50 transition-colors">
              <div className="w-12 h-12 bg-staydia-gold/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Highlights & Clips</h3>
              <p className="text-gray-300">
                Use our dashboard to instantly create highlight reels, training clips, or social media content with ease.
              </p>
            </div>
            
            <div className="bg-staydia-darkgray p-8 rounded-xl border border-staydia-lightgray hover:border-staydia-gold/50 transition-colors">
              <div className="w-12 h-12 bg-staydia-gold/10 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-staydia-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Automated, Hands-Free Setup</h3>
              <p className="text-gray-300">
                Once installed, our system requires zero effort from club volunteers. It runs automatically for every 
                home game or training session.
              </p>
            </div>
          </div>
          
          <div className="bg-staydia-darkgray border border-staydia-gold/30 p-8 rounded-xl mb-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Banknote className="h-6 w-6 text-staydia-gold" />
              <span>New Revenue Streams</span>
            </h3>
            <p className="text-gray-300 mb-6">Clubs can generate income via:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 text-staydia-gold">✓</div>
                <span><strong>Fan Subscriptions</strong> - Allow supporters to watch from anywhere</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-staydia-gold">✓</div>
                <span><strong>Sponsorship Overlays</strong> - Display logos on every stream</span>
              </li>
            </ul>
          </div>
          
          <h2 className="text-3xl font-bold mb-8">Why Clubs Partner with Staydia</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            <div className="flex items-start gap-4">
              <ThumbsUp className="h-6 w-6 text-staydia-gold shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">No Cost to Club</h4>
                <p className="text-gray-300 text-sm">We invest in your growth.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <ThumbsUp className="h-6 w-6 text-staydia-gold shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">No Tech Hassle</h4>
                <p className="text-gray-300 text-sm">We handle install, support, and automation.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <ThumbsUp className="h-6 w-6 text-staydia-gold shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">No Missed Moments</h4>
                <p className="text-gray-300 text-sm">Every match, automatically captured from the perfect vantage point.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <ThumbsUp className="h-6 w-6 text-staydia-gold shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">No Limits</h4>
                <p className="text-gray-300 text-sm">Use for livestreaming, analysis, community building, and monetisation.</p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Built for All Levels</h2>
            <p className="text-gray-300 mb-8">
              Whether you're a junior grassroots team or a senior club in a national league, 
              Staydia Sports helps you shine on and off the field.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["Football", "Rugby", "Hockey", "Basketball"].map((sport, index) => (
                <div key={index} className="bg-staydia-darkgray text-center p-6 rounded-lg border border-staydia-lightgray">
                  <div className="text-3xl mb-2">{
                    sport === "Football" ? "⚽" : 
                    sport === "Rugby" ? "🏉" : 
                    sport === "Hockey" ? "🏑" : 
                    "🏀"
                  }</div>
                  <h4 className="font-medium">{sport}</h4>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-staydia-darkgray/50 border border-staydia-gold/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to transform your club?</h3>
            <p className="text-gray-300 mb-6">
              Schedule a consultation to learn how Staydia can help capture every match at your club automatically.
            </p>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 font-medium px-8 py-6 text-lg"
                >
                  Book a Club Consultation
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-4">Book a Consultation</DialogTitle>
                </DialogHeader>
                <DemoForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForClubs;
