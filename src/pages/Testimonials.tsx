
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClubTestimonials from '@/components/ClubTestimonials';
import { SportsTestimonials } from '@/components/SportsTestimonials';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const Testimonials = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      
      <section className="pt-24 pb-16">
        <div className="staydia-container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            What Our Partners Say
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Discover how Staydia Sports has transformed clubs and leagues across Ireland, Wales, and England with our AI-powered broadcasting technology.
          </p>
        </div>
      </section>

      {/* Club Testimonials */}
      <section className="py-16 border-t border-staydia-lightgray">
        <div className="staydia-container">
          <h2 className="text-3xl font-bold text-center mb-12 text-staydia-gold">Club Partners</h2>
          <ClubTestimonials />
        </div>
      </section>

      {/* Sports Testimonials */}
      <section className="py-16 border-t border-staydia-lightgray">
        <div className="staydia-container">
          <SportsTestimonials />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
