
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Globe, TrendingUp, Users } from "lucide-react";
import { useScrollToTop } from '@/hooks/useScrollToTop';

const AboutUs = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-32 staydia-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-5xl font-bold mb-8">Our Story</h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At Staydia Sports, our passion drives everything we do. We believe every club, no matter its size, deserves professional-quality broadcasting capabilities to showcase their talent and connect with their community.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Founded with a mission to democratise sports broadcasting, we've built a platform that transforms how clubs share their games, engage with fans, and grow their presence.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-tr from-staydia-gold/20 to-transparent absolute inset-0 rounded-2xl filter blur-xl"></div>
              <img 
                src="/lovable-uploads/1dc0acaf-a439-4151-aa5b-d1c6062e4728.png"
                alt="Staydia team working"
                className="relative z-10 rounded-lg w-full shadow-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-staydia-darkgray p-8 rounded-lg border border-staydia-lightgray">
              <div className="w-12 h-12 bg-staydia-gold/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-staydia-gold h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To empower sports clubs with accessible, professional-quality broadcasting technology that helps them grow and engage their community.
              </p>
            </div>
            <div className="bg-staydia-darkgray p-8 rounded-lg border border-staydia-lightgray">
              <div className="w-12 h-12 bg-staydia-gold/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-staydia-gold h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Community</h3>
              <p className="text-gray-300">
                We're proud to serve a growing network of clubs across Ireland, Wales, and England, helping them share their sporting moments with fans worldwide.
              </p>
            </div>
            <div className="bg-staydia-darkgray p-8 rounded-lg border border-staydia-lightgray">
              <div className="w-12 h-12 bg-staydia-gold/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-staydia-gold h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Impact</h3>
              <p className="text-gray-300">
                Through our AI-powered platform, we're helping clubs increase their visibility, generate revenue, and build stronger connections with their supporters.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Founders</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-24 h-24 bg-staydia-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-staydia-gold h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">Steve Silva</h3>
                <p className="text-staydia-gold font-medium">CEO & Co-founder</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-staydia-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-staydia-gold h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mark McGrory</h3>
                <p className="text-staydia-gold font-medium">CTO & Co-founder</p>
              </div>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-6">Join the Future of Sports Broadcasting</h2>
            <p className="text-gray-300 text-lg mb-8">
              Whether you're a small local club or a regional league, our technology is designed to help you reach new heights. Let's grow together.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
