import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useToast } from "@/hooks/use-toast";
import { MessageCircle } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import { usePrerenderReady } from '@/hooks/usePrerenderReady';

const Contact = () => {
  useScrollToTop();
  usePrerenderReady();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    organisation: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulated form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll be in touch soon.",
      });
      
      setFormData({
        organisation: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleWhatsAppClick = () => {
    // Updated WhatsApp number
    const phoneNumber = "353899754690"; // Updated phone number
    const message = encodeURIComponent("Hi, I'm interested in learning more about Staydia Sports.");
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-32 staydia-container">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-8">Get in Touch</h1>
          <p className="text-gray-300 mb-8 text-lg">
            Ready to transform your sports broadcasting capabilities? Our team is here to help you get started.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2">Organisation Name</label>
                  <input 
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    className="w-full p-3 bg-staydia-darkgray border border-staydia-lightgray rounded-lg focus:ring-2 focus:ring-staydia-gold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-staydia-darkgray border border-staydia-lightgray rounded-lg focus:ring-2 focus:ring-staydia-gold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 bg-staydia-darkgray border border-staydia-lightgray rounded-lg focus:ring-2 focus:ring-staydia-gold"
                    required
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-staydia-gold text-staydia-black hover:bg-opacity-90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            {/* Alternative Contact Methods */}
            <div className="bg-staydia-darkgray/50 border border-staydia-lightgray rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Alternative ways to reach us</h2>
              
              {/* WhatsApp - Now more prominent */}
              <div className="mb-8 bg-green-600/10 p-6 rounded-lg border border-green-600/30">
                <h3 className="text-xl font-medium mb-3 text-green-500">WhatsApp (Fastest Response)</h3>
                <p className="text-gray-300 mb-4">
                  Include your club/league name for more info. We typically respond within minutes during business hours.
                </p>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white w-full justify-center py-3"
                >
                  <MessageCircle className="h-5 w-5" />
                  Contact via WhatsApp
                </Button>
              </div>
              
              {/* Email */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-3 text-staydia-gold">Email</h3>
                <p className="text-gray-300 mb-2">
                  Send us an email directly:
                </p>
                <a 
                  href="mailto:info@staydiasports.com" 
                  className="text-staydia-gold hover:underline"
                >
                  info@staydiasports.com
                </a>
              </div>
              
              {/* Office Hours */}
              <div>
                <h3 className="text-lg font-medium mb-3 text-staydia-gold">Office Hours</h3>
                <p className="text-gray-300">
                  Monday to Friday: 9:00 AM - 5:00 PM GMT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
