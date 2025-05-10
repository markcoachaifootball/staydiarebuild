
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SportsGrid } from '@/components/SportsGrid';
import { SportsBenefits } from '@/components/SportsBenefits';
import { SportsTestimonials } from '@/components/SportsTestimonials';
import { Button } from '@/components/ui/button';
import DemoForm from '@/components/DemoForm';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Link } from 'react-router-dom';

const Sports = () => {
  useScrollToTop();
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-20">
        <SportsGrid />
        <SportsBenefits />
        <SportsTestimonials />
        
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="staydia-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Club?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join our growing network of clubs and become a showcase partner as Staydia expands
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 font-medium px-8 py-6 text-lg">
                    Book a Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold mb-4">Book a Demo</DialogTitle>
                  </DialogHeader>
                  <DemoForm />
                </DialogContent>
              </Dialog>
              
              <Button 
                className="border-staydia-gold text-staydia-gold hover:bg-staydia-gold/10 font-medium px-8 py-6 text-lg" 
                variant="outline"
                asChild
              >
                <Link to="/book-demo">Direct Booking Link</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Sports;
