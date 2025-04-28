
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-staydia-black/80 backdrop-blur-lg border-b border-staydia-lightgray">
      <div className="staydia-container flex items-center justify-between h-20">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/f7690435-d61e-4b90-8008-5e6981cb119d.png" 
            alt="Staydia Sports Logo" 
            className="h-8 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-staydia-gold transition-colors font-medium">Features</a>
          <a href="#technology" className="text-gray-300 hover:text-staydia-gold transition-colors font-medium">Technology</a>
          <a href="#how-it-works" className="text-gray-300 hover:text-staydia-gold transition-colors font-medium">How It Works</a>
          <a href="#community" className="text-gray-300 hover:text-staydia-gold transition-colors font-medium">Community</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-gray-300 hover:text-staydia-gold hover:bg-transparent">
            Login
          </Button>
          <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 font-medium">
            Book Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
