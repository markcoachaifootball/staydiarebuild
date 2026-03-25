
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const partnerFaqItems = [
  {
    question: "What's the catch? How can this be free for our club?",
    answer: "Staydia Sports invests in your club by providing the AI camera and platform. We generate revenue through affordable subscriptions for fans who want to watch your games live and on-demand. Your club benefits from professional broadcasting at no cost and earns from any in-game advertising you secure on your streams."
  },
  {
    question: "Is the long term partnership a concern? What if our needs change?",
    answer: "Our partnership agreement signifies our commitment to a long-term partnership and continuous improvement of the platform. It allows us to make the upfront investment in technology for your club. We aim to grow with you and are always open to discussing evolving needs."
  },
  {
    question: "How difficult is the installation and maintenance?",
    answer: "Installation is straightforward, and our team provides full support. The AI camera system is designed for minimal maintenance, and we offer ongoing technical assistance to ensure everything runs smoothly. It's truly a 'set and forget' solution for most operations."
  },
  {
    question: "What are our obligations as a partner club?",
    answer: "Your main role is to champion the service to your fans and community, and to work with us to schedule broadcasts. We handle the technology and streaming. The more you promote, the more potential for fan subscriptions and your own advertising revenue."
  },
  {
    question: "What kind of advertising can we do?",
    answer: "You have full control over the advertising displayed during your club's live streams. This can include local business sponsorships, club announcements, or any other promotions you secure. We provide the platform; you reap the advertising rewards."
  },
  {
    question: "What about data privacy and footage ownership?",
    answer: "Staydia is fully GDPR compliant for EU/UK regulations. Your club retains ownership rights to all match footage, while we maintain a license to use footage for platform improvements and promotional purposes. We take data privacy seriously and ensure all user information is securely stored and properly managed."
  }
];

const PartnerFAQ: React.FC = () => {
  return (
    <section className="py-12 bg-staydia-darkgray">
      <div className="staydia-container">
        <div className="flex items-center gap-3 mb-8">
          <MessageCircle className="text-staydia-gold h-7 w-7" />
          <h2 className="text-3xl font-bold">How We Partner</h2>
        </div>
        
        <p className="text-gray-300 text-lg mb-8 max-w-4xl">
          We understand you might have questions about how our partnership works. Here are answers to the most common questions we receive from clubs considering Staydia Sports.
        </p>
        
        <div className="max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            {partnerFaqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-staydia-lightgray"
              >
                <AccordionTrigger className="text-left font-medium py-4 hover:text-staydia-gold text-white">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PartnerFAQ;
