
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Handshake, Building, Briefcase, Globe, Link as LinkIcon, Users, Component } from "lucide-react";
import { Link } from 'react-router-dom';

const Partnerships = () => {
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="staydia-container pb-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Handshake className="text-staydia-gold h-8 w-8" />
              <h1 className="text-4xl md:text-5xl font-bold">Partnerships</h1>
            </div>
            <h2 className="text-2xl font-medium text-staydia-gold mb-6">
              Building the Future of Grassroots Sports — Together
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              At Staydia Sports, we believe the future of sport is connected, accessible, and powered by community. 
              That's why we're partnering with forward-thinking organisations to help clubs, leagues, and fans thrive 
              through smart technology and sustainable revenue models.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Whether you're a governing body, league official, technology provider, sponsor, or installer — 
              if you believe in transforming grassroots sport, there's a place for you in our growing ecosystem.
            </p>
          </div>
        </section>
        
        {/* Who We Partner With */}
        <section className="py-16 bg-staydia-darkgray/50">
          <div className="staydia-container">
            <h2 className="text-3xl font-bold mb-12">💼 Who We Partner With</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Partner Card 1 */}
              <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
                <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                  <Users className="h-6 w-6 text-staydia-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Leagues & Governing Bodies</h3>
                <p className="text-gray-300">
                  We work directly with leagues to roll out camera systems across entire divisions — 
                  creating unified streaming, development, and monetisation platforms.
                </p>
              </div>
              
              {/* Partner Card 2 */}
              <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
                <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                  <Building className="h-6 w-6 text-staydia-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Sports Facilities & Venue Owners</h3>
                <p className="text-gray-300">
                  From schools to stadiums, we help facility owners turn their spaces into broadcast-ready 
                  venues with no upfront cost.
                </p>
              </div>
              
              {/* Partner Card 3 */}
              <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
                <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                  <Handshake className="h-6 w-6 text-staydia-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Strategic Sponsors & Advertisers</h3>
                <p className="text-gray-300">
                  We offer unique in-game and digital advertising opportunities to brands that want to 
                  support local sports and connect with hyper-engaged audiences.
                </p>
              </div>
              
              {/* Partner Card 4 */}
              <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
                <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                  <Briefcase className="h-6 w-6 text-staydia-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Hardware Installers & Network Providers</h3>
                <p className="text-gray-300">
                  We collaborate with local contractors and internet providers across Ireland & the UK 
                  to power our on-site camera installations.
                </p>
              </div>
              
              {/* Partner Card 5 */}
              <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
                <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
                  <Globe className="h-6 w-6 text-staydia-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Tech & Integration Partners</h3>
                <p className="text-gray-300">
                  From data analytics to streaming enhancements, we're open to tech collaborations 
                  that help enhance club and fan experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Partner with Staydia */}
        <section className="py-16">
          <div className="staydia-container">
            <h2 className="text-3xl font-bold mb-6">🎯 Why Partner with Staydia Sports?</h2>
            
            <ul className="space-y-4 max-w-3xl mb-10">
              <li className="flex items-start gap-3">
                <div className="bg-staydia-gold/20 p-1 rounded-full mt-1">
                  <div className="bg-staydia-gold rounded-full w-3 h-3"></div>
                </div>
                <p className="text-lg text-gray-300">
                  <span className="font-bold text-white">Impact at Scale</span> – Deliver real value to grassroots clubs across all levels
                </p>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="bg-staydia-gold/20 p-1 rounded-full mt-1">
                  <div className="bg-staydia-gold rounded-full w-3 h-3"></div>
                </div>
                <p className="text-lg text-gray-300">
                  <span className="font-bold text-white">Zero Upfront Club Costs</span> – Our model removes financial barriers to access
                </p>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="bg-staydia-gold/20 p-1 rounded-full mt-1">
                  <div className="bg-staydia-gold rounded-full w-3 h-3"></div>
                </div>
                <p className="text-lg text-gray-300">
                  <span className="font-bold text-white">Revenue Generation</span> – Clubs earn from every stream, every sponsor, every month
                </p>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="bg-staydia-gold/20 p-1 rounded-full mt-1">
                  <div className="bg-staydia-gold rounded-full w-3 h-3"></div>
                </div>
                <p className="text-lg text-gray-300">
                  <span className="font-bold text-white">Tech-Driven Delivery</span> – From installation to streaming, we manage the full journey
                </p>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="bg-staydia-gold/20 p-1 rounded-full mt-1">
                  <div className="bg-staydia-gold rounded-full w-3 h-3"></div>
                </div>
                <p className="text-lg text-gray-300">
                  <span className="font-bold text-white">High Visibility</span> – Partners benefit from branding, reach, and alignment with innovation in sport
                </p>
              </li>
            </ul>
          </div>
        </section>
        
        {/* Let's Grow Together */}
        <section className="py-16 bg-staydia-darkgray/50">
          <div className="staydia-container text-center">
            <h2 className="text-3xl font-bold mb-4">🚀 Let's Grow Together</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Staydia Sports is growing rapidly across Ireland and the UK — and we're just getting started. 
              If you're passionate about improving access, visibility, and sustainability in sport, we'd love to talk.
            </p>
            
            <div className="max-w-md mx-auto bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
              <h3 className="text-xl font-bold mb-4">📩 Interested in partnering?</h3>
              <p className="mb-6 text-gray-300">Drop us a line: <a href="mailto:info@staydiasports.com" className="text-staydia-gold hover:underline">info@staydiasports.com</a></p>
              
              <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 w-full">
                Book a Call
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partnerships;
