
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import DemoForm from '../DemoForm';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DemoButton: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  return (
    <div className="flex items-center">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 font-medium">
            Book Demo
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-4">Book a Demo</DialogTitle>
          </DialogHeader>
          <DemoForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DemoButton;
