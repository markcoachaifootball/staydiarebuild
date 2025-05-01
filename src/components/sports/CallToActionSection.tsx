
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import DemoForm from '@/components/DemoForm';

interface CallToActionSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  secondaryButtonLink
}) => {
  return (
    <section className="py-16 staydia-container text-center">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-xl text-gray-300 mb-8">{subtitle}</p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 font-medium px-8 py-6 text-lg"
            >
              {primaryButtonText}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-4">Book a Consultation</DialogTitle>
            </DialogHeader>
            <DemoForm />
          </DialogContent>
        </Dialog>
        
        <Button 
          variant="outline" 
          className="border-staydia-gold text-staydia-gold hover:bg-staydia-gold/10 font-medium px-8 py-6 text-lg"
          asChild
        >
          <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;
