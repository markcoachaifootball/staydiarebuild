
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import DemoForm from '../DemoForm';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface DemoButtonProps {
  showDirectLink?: boolean;
}

const DemoButton: React.FC<DemoButtonProps> = ({ showDirectLink = false }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  if (showDirectLink) {
    return (
      <div className="flex items-center">
        <Button 
          className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 font-medium"
          asChild
        >
          <Link to="/book-demo">Book Demo</Link>
        </Button>
      </div>
    );
  }
  
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
