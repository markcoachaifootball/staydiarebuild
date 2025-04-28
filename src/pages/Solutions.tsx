
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Clock, Database, Link, ZapIcon } from "lucide-react";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-32 pb-20 staydia-container">
        <h1 className="text-5xl font-bold mb-8">Enterprise Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-staydia-darkgray p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">For Clubs</h2>
            <ul className="space-y-4 text-gray-300">
              <li>• Automated production system</li>
              <li>• High-quality streaming platform</li>
              <li>• Fan engagement tools</li>
              <li>• Revenue generation options</li>
            </ul>
          </div>
          <div className="bg-staydia-darkgray p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">For Leagues</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-staydia-gold shrink-0 mt-0.5" />
                <span>Evolve to 21st century with comprehensive match archives</span>
              </li>
              <li className="flex items-start gap-3">
                <Database className="h-5 w-5 text-staydia-gold shrink-0 mt-0.5" />
                <span>Complete match library across all competition levels</span>
              </li>
              <li className="flex items-start gap-3">
                <ZapIcon className="h-5 w-5 text-staydia-gold shrink-0 mt-0.5" />
                <span>Automatic capture technology with zero manual intervention</span>
              </li>
              <li className="flex items-start gap-3">
                <Link className="h-5 w-5 text-staydia-gold shrink-0 mt-0.5" />
                <span>Enhanced engagement across your entire league ecosystem</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-staydia-darkgray/50 border border-staydia-gold/20 rounded-xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ready to transform your league?</h3>
          <p className="text-gray-300 mb-6">
            Schedule a consultation to learn how Staydia can help capture every match across your entire league automatically.
          </p>
          <Button 
            className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 font-medium px-8 py-6 text-lg"
            onClick={() => window.location.href = '/contact'}
          >
            Book a League Consultation
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Solutions;
