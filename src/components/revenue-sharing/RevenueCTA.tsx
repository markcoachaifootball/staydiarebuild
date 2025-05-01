
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DemoForm from '@/components/DemoForm';

const RevenueCTA = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  return (
    <>
      <section className="py-16 staydia-container text-center">
        <h2 className="text-3xl font-bold mb-4">📞 Ready to Earn from Every Game?</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Your club is already putting in the work on the pitch. Let's help you get rewarded off it.
        </p>
        
        <Button 
          className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 font-medium px-8 py-6 text-lg"
          onClick={() => setIsDialogOpen(true)}
        >
          Book a Call
        </Button>
      </section>

      {/* Demo Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-4">Book a Consultation</DialogTitle>
          </DialogHeader>
          <DemoForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RevenueCTA;
