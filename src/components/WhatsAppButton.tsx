
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  expanded?: boolean;
}

const WhatsAppButton = ({ expanded = false }: WhatsAppButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Show the button after a short delay for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleWhatsAppClick = () => {
    const phoneNumber = "353899754690"; // Updated phone number
    const message = encodeURIComponent("Hi, I'm interested in learning more about Staydia Sports.");
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  
  if (!isVisible) return null;
  
  if (expanded) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        {/* Pulse animation ring */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>
        
        {/* Button */}
        <button
          onClick={handleWhatsAppClick}
          className="relative flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-105"
          title="Chat with us on WhatsApp"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="font-medium">Chat on WhatsApp</span>
        </button>
      </div>
    );
  }
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulse animation ring */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>
      
      {/* Button */}
      <button
        onClick={handleWhatsAppClick}
        className="relative flex items-center justify-center w-16 h-16 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
