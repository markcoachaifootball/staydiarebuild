
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-32 staydia-container">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Get in Touch</h1>
          <p className="text-gray-300 mb-8 text-lg">
            Ready to transform your sports broadcasting capabilities? Our team is here to help you get started.
          </p>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Organization Name</label>
              <input 
                type="text"
                className="w-full p-3 bg-staydia-darkgray border border-staydia-lightgray rounded-lg focus:ring-2 focus:ring-staydia-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email"
                className="w-full p-3 bg-staydia-darkgray border border-staydia-lightgray rounded-lg focus:ring-2 focus:ring-staydia-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full p-3 bg-staydia-darkgray border border-staydia-lightgray rounded-lg focus:ring-2 focus:ring-staydia-gold"
              ></textarea>
            </div>
            <Button className="w-full bg-staydia-gold text-staydia-black hover:bg-opacity-90">
              Send Message
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
