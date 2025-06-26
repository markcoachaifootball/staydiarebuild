
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoForm from '@/components/DemoForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from "@/components/ui/button";
import { MessageCircle } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const BookDemo = () => {
  useScrollToTop();
  
  const handleWhatsAppClick = () => {
    const phoneNumber = "353899754690"; // Updated phone number
    const message = encodeURIComponent("Hi, I'm interested in learning more about Staydia Sports.");
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-32 pb-20 staydia-container">
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch with Staydia Sports</h1>
          <p className="text-gray-300 text-lg mb-6">
            Choose your preferred way to connect with our team
          </p>
          
          {/* WhatsApp Direct Contact Option */}
          <div className="bg-green-600/10 border border-green-600/20 p-8 rounded-xl mb-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-3 text-white">
              <MessageCircle className="inline-block mr-2 h-6 w-6" />
              Contact via WhatsApp
            </h2>
            <p className="text-gray-300 mb-6 max-w-lg">
              Include your club/league name for more info. We typically respond within minutes during business hours.
            </p>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg flex items-center gap-2"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="h-5 w-5" />
              Contact via WhatsApp
            </Button>
          </div>
        </div>
        
        {/* Form Option (Optional) */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-black text-center">Or Complete Our Form</h2>
          <DemoForm />
        </div>
      </div>
      <Footer />
      <WhatsAppButton expanded={true} />
    </div>
  );
};

export default BookDemo;
