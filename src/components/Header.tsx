
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-staydia-black/80 backdrop-blur-lg border-b border-staydia-lightgray">
      <div className="staydia-container flex items-center justify-between h-20">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/lovable-uploads/f7690435-d61e-4b90-8008-5e6981cb119d.png" 
              alt="Staydia Sports Logo" 
              className="h-10 w-auto"
            />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/features" className="text-gray-300 hover:text-staydia-gold transition-colors font-medium">Features</Link>
          <Link to="/technology" className="text-gray-300 hover:text-staydia-gold transition-colors font-medium">Technology</Link>
          <Link to="/sports" className="text-gray-300 hover:text-staydia-gold transition-colors font-medium">Sports</Link>
          <Link to="/solutions" className="text-gray-300 hover:text-staydia-gold transition-colors font-medium">For Clubs</Link>
          <Link to="/about" className="text-gray-300 hover:text-staydia-gold transition-colors font-medium">About Us</Link>
          <Link to="/contact" className="text-gray-300 hover:text-staydia-gold transition-colors font-medium">Contact</Link>
        </nav>
        
        <div className="flex items-center">
          <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 font-medium">
            Book Club Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
