
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import { useTranslation } from 'react-i18next';

const PartnershipFAQ: React.FC = () => {
  const { t } = useTranslation();
  const faqKeys = ['faq1', 'faq2', 'faq3', 'faq4', 'faq5', 'faq6'];
  return (
    <div className="bg-staydia-darkgray py-16">
      <div className="staydia-container">
        <div className="flex items-center gap-3 mb-10">
          <MessageCircle className="text-staydia-gold h-7 w-7" />
          <h2 className="text-3xl font-bold">{t('forClubs.partnershipFaqTitle')}</h2>
        </div>
        <p className="text-gray-300 text-lg mb-8 max-w-4xl">{t('forClubs.partnershipFaqDesc')}</p>
        <div className="max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            {faqKeys.map((key, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-staydia-lightgray">
                <AccordionTrigger className="text-left font-medium py-4 hover:text-staydia-gold text-white">{t(`forClubs.${key}q`)}</AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6">{t(`forClubs.${key}a`)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default PartnershipFAQ;
