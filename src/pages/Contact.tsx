import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useToast } from "@/hooks/use-toast";
import { MessageCircle } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import { usePrerenderReady } from '@/hooks/usePrerenderReady';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  useScrollToTop();
  usePrerenderReady();
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ organisation: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({ title: t('contact.messageSent'), description: t('contact.messageSentDesc') });
      setFormData({ organisation: '', email: '', message: '' });
    } catch (error) {
      toast({ title: t('common.error'), description: t('contact.messageError'), variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "353899754690";
    const message = encodeURIComponent("Hi, I'm interested in learning more about Staydia Sports.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-32 staydia-container">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-8">{t('contact.title')}</h1>
          <p className="text-gray-300 mb-8 text-lg">{t('contact.subtitle')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">{t('contact.sendMessage')}</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.organisation')}</label>
                  <input type="text" name="organisation" value={formData.organisation} onChange={handleChange} className="w-full p-3 bg-staydia-darkgray border border-staydia-lightgray rounded-lg focus:ring-2 focus:ring-staydia-gold" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.email')}</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-staydia-darkgray border border-staydia-lightgray rounded-lg focus:ring-2 focus:ring-staydia-gold" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.message')}</label>
                  <textarea rows={4} name="message" value={formData.message} onChange={handleChange} className="w-full p-3 bg-staydia-darkgray border border-staydia-lightgray rounded-lg focus:ring-2 focus:ring-staydia-gold" required></textarea>
                </div>
                <Button type="submit" className="w-full bg-staydia-gold text-staydia-black hover:bg-opacity-90" disabled={isSubmitting}>
                  {isSubmitting ? t('contact.sending') : t('contact.sendButton')}
                </Button>
              </form>
            </div>
            <div className="bg-staydia-darkgray/50 border border-staydia-lightgray rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6">{t('contact.alternativeTitle')}</h2>
              <div className="mb-8 bg-green-600/10 p-6 rounded-lg border border-green-600/30">
                <h3 className="text-xl font-medium mb-3 text-green-500">{t('contact.whatsappTitle')}</h3>
                <p className="text-gray-300 mb-4">{t('contact.whatsappDesc')}</p>
                <Button onClick={handleWhatsAppClick} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white w-full justify-center py-3">
                  <MessageCircle className="h-5 w-5" />{t('contact.whatsappButton')}
                </Button>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-3 text-staydia-gold">{t('contact.emailTitle')}</h3>
                <p className="text-gray-300 mb-2">{t('contact.emailDesc')}</p>
                <a href="mailto:info@staydiasports.com" className="text-staydia-gold hover:underline">info@staydiasports.com</a>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3 text-staydia-gold">{t('contact.officeHours')}</h3>
                <p className="text-gray-300">{t('contact.officeHoursValue')}</p>
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
