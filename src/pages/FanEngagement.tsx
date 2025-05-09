import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import DemoForm from '@/components/DemoForm';
import { Check } from "lucide-react";
import { useScrollToTop } from '@/hooks/useScrollToTop';

const FanEngagement = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-staydia-black flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 staydia-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Fan Engagement</h1>
          <h2 className="text-2xl md:text-3xl text-staydia-gold font-semibold mb-8">
            Turn Every Game into a Club-Wide Event
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mb-10">
            At Staydia Sports, we believe fan engagement isn't just about viewership — it's about connection. 
            Our AI-powered streaming platform helps clubs of all sizes build deeper relationships with their supporters, 
            attract new fans, and grow stronger communities around their sport.
          </p>
        </section>
        
        {/* Features Section */}
        <section className="py-12 bg-staydia-darkgray/50">
          <div className="staydia-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-staydia-black border border-staydia-lightgray rounded-lg p-8 hover:border-staydia-gold transition-colors">
                <div className="text-4xl mb-4">📺</div>
                <h3 className="text-xl font-bold mb-3">Live & On-Demand Streaming</h3>
                <p className="text-gray-300">
                  We broadcast every home game in high-definition — automatically. This means fans never miss a moment, whether they're watching live or catching up later. From parents abroad to local supporters at home, everyone gets front-row access.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-staydia-black border border-staydia-lightgray rounded-lg p-8 hover:border-staydia-gold transition-colors">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold mb-3">Social Media-Ready Content</h3>
                <p className="text-gray-300">
                  We provide clubs with highlight clips, big moments, and custom visuals that can be posted straight to social media. It's never been easier to keep your online community active, engaged, and growing — without needing a media team.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-staydia-black border border-staydia-lightgray rounded-lg p-8 hover:border-staydia-gold transition-colors">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold mb-3">Data-Driven Insights</h3>
                <p className="text-gray-300">
                  Our platform tracks viewer activity, showing which matches drive the most attention and where your supporters are tuning in from. Use this to better target your communications, sponsorships, and club promotions.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-staydia-black border border-staydia-lightgray rounded-lg p-8 hover:border-staydia-gold transition-colors">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold mb-3">Strengthen Community Ties</h3>
                <p className="text-gray-300">
                  By livestreaming all games — from youth fixtures to senior matches — you bring your entire club into the spotlight. Families stay connected, alumni stay invested, and new fans feel welcome from the first stream.
                </p>
              </div>
              
              {/* Feature 5 */}
              <div className="bg-staydia-black border border-staydia-lightgray rounded-lg p-8 hover:border-staydia-gold transition-colors">
                <div className="text-4xl mb-4">💸</div>
                <h3 className="text-xl font-bold mb-3">Boost Revenue Through Engagement</h3>
                <p className="text-gray-300">
                  More engaged fans means more subscriptions, more sponsor visibility, and more opportunities to support the club. Staydia turns every view into value.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 staydia-container">
          <h2 className="text-3xl font-bold mb-8">Why Clubs Choose Staydia for Fan Engagement:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {[
              'Expand your supporter base',
              'Reach fans globally',
              'Keep players and families connected',
              'Create sponsor-ready content',
              'Build a consistent digital presence',
              'Celebrate every team, not just the first XI'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 text-staydia-gold">
                  <Check size={20} />
                </div>
                <p className="text-lg text-gray-200">{benefit}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-staydia-darkgray/30 border border-staydia-lightgray rounded-lg max-w-3xl">
            <div className="text-4xl mb-4">📣</div>
            <h3 className="text-2xl font-bold mb-4">Let Your Fans Be There, Even When They Can't Be</h3>
            <p className="text-lg text-gray-300 mb-6">
              Whether it's raining sideways or a packed weekend, your fans can still be part of the action — every game, every team, every goal.
            </p>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 staydia-container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to grow your fanbase?</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 font-medium px-8 py-6 text-lg"
                >
                  Book a Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-4">Book a Demo</DialogTitle>
                </DialogHeader>
                <DemoForm />
              </DialogContent>
            </Dialog>
            
            <Button 
              variant="outline" 
              className="border-staydia-gold text-staydia-gold hover:bg-staydia-gold/10 font-medium px-8 py-6 text-lg"
              asChild
            >
              <a href="https://staydiasports.com" target="_blank" rel="noopener noreferrer">Join Staydia Today</a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FanEngagement;
