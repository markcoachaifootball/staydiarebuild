
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './header/Navigation';
import DemoButton from './header/DemoButton';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-staydia-black/80 backdrop-blur-lg border-b border-staydia-lightgray">
      <div className="staydia-container flex items-center justify-between h-20">
        <div className="flex items-center gap-16">
          <Link to="/">
            <img 
              src="/lovable-uploads/f7690435-d61e-4b90-8008-5e6981cb119d.png" 
              alt="Staydia Sports Logo" 
              className="h-10 w-auto"
            />
          </Link>
          <Navigation />
        </div>
        <DemoButton />
      </div>
    </header>
  );
};

export default Header;
