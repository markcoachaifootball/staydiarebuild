
import React from 'react';

const ClubsHero: React.FC = () => {
  return (
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
    </div>
  );
};

export default ClubsHero;
