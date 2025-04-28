
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Solutions = () => {
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-32 staydia-container">
        <h1 className="text-5xl font-bold mb-8">Enterprise Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <li>• Multi-venue management</li>
              <li>• Centralized content control</li>
              <li>• Broadcasting rights management</li>
              <li>• Analytics dashboard</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Solutions;
