
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoForm from '@/components/DemoForm';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const BookDemo = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-32 pb-20 staydia-container">
        <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-black text-center">Book a Demo with Staydia Sports</h1>
          <p className="text-gray-600 mb-8 text-center">
            Fill in your details below and our team will be in touch to schedule your personalized demo
          </p>
          <DemoForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookDemo;
