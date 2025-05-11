
import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DemoForm from '@/components/DemoForm';

const ConsultationCTA: React.FC = () => {
  return (
    <div className="bg-staydia-darkgray/50 border border-staydia-gold/20 rounded-xl p-8 text-center max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">Ready to transform your club?</h3>
      <p className="text-gray-300 mb-6">
        Schedule a consultation to learn how Staydia can help capture every match at your club automatically.
      </p>
      
      <Dialog>
        <DialogTrigger asChild>
          <Button 
            className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 font-medium px-8 py-6 text-lg"
          >
            Book a Club Consultation
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-4">Book a Consultation</DialogTitle>
          </DialogHeader>
          <DemoForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ConsultationCTA;
