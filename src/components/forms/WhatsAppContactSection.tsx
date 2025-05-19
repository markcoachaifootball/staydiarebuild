
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle } from 'lucide-react';

const WhatsAppContactSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "353861935525"; // Irish number format without +
    const message = encodeURIComponent("Hi, I'm interested in learning more about Staydia Sports.");
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="mb-6 p-4 bg-green-600/10 border border-green-600/30 rounded-lg">
      <h3 className="text-lg font-semibold text-green-600 mb-2">Contact via WhatsApp</h3>
      <p className="text-gray-700 mb-3">Include your club/league name for more info. We typically respond within minutes during business hours.</p>
      <Button 
        onClick={handleWhatsAppClick}
        className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white mb-4"
        type="button"
      >
        <MessageCircle className="h-5 w-5" />
        Contact via WhatsApp
      </Button>
      <p className="text-sm text-gray-600 text-center">or fill in the form below</p>
    </div>
  );
};

export default WhatsAppContactSection;
