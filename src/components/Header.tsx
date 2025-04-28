
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 border-b border-staydia-lightgray">
      <div className="staydia-container flex items-center justify-between">
        <div className="flex items-center">
          <LogoIcon className="w-32 h-auto" />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-white hover:text-staydia-gold transition-colors">Features</a>
          <a href="#technology" className="text-white hover:text-staydia-gold transition-colors">Technology</a>
          <a href="#how-it-works" className="text-white hover:text-staydia-gold transition-colors">How It Works</a>
          <a href="#community" className="text-white hover:text-staydia-gold transition-colors">Community</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button className="bg-transparent text-white hover:text-staydia-gold hover:bg-transparent border-none">
            Login
          </Button>
          <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

const LogoIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      className={cn("fill-white", className)} 
      viewBox="0 0 200 50" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* This is a simplified logo representation */}
      <path 
        d="M20,10 C30,5 50,5 60,10 C80,20 80,30 60,40 C50,45 30,45 20,40 C0,30 0,20 20,10 Z" 
        fill="currentColor" 
        stroke="#F0BE5A" 
        strokeWidth="2"
      />
      <text 
        x="70" 
        y="30" 
        fill="currentColor" 
        fontSize="20" 
        fontWeight="bold"
      >
        STAYDIA
      </text>
      <text 
        x="150" 
        y="42" 
        fill="currentColor" 
        fontSize="14"
      >
        SPORTS
      </text>
    </svg>
  );
};

export default Header;
