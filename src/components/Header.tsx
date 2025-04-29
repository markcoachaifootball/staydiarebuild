import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import DemoForm from './DemoForm';
import { Linkedin, Youtube, Slack, Github, Facebook, Instagram, Twitter } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Header: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
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
          <Link to="/" className="text-gray-300 hover:text-staydia-gold transition-colors font-medium">
            Home
          </Link>
          <Link to="/technology" className="text-gray-300 hover:text-staydia-gold transition-colors font-medium">Technology</Link>
          <Link to="/sports" className="text-gray-300 hover:text-staydia-gold transition-colors font-medium">Sports</Link>
          <Link to="/solutions" className="text-gray-300 hover:text-staydia-gold transition-colors font-medium">For Clubs</Link>
          
          <NavigationMenu className="z-50">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-staydia-gold transition-colors font-medium">Community</NavigationMenuTrigger>
                <NavigationMenuContent className="w-[320px]">
                  <ul className="grid gap-2 p-4 bg-staydia-black border border-staydia-lightgray">
                    <li className="row-span-1">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/news"
                          className="flex items-center p-3 space-x-3 rounded-md hover:bg-staydia-darkgray group"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-staydia-gold flex items-center justify-center rounded-full">
                            <span className="text-staydia-black font-bold">N</span>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-white group-hover:text-staydia-gold">Newsroom</h4>
                            <p className="text-xs text-gray-400">Latest updates and announcements</p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li className="row-span-1">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/community"
                          className="flex items-center p-3 space-x-3 rounded-md hover:bg-staydia-darkgray group"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-staydia-gold flex items-center justify-center rounded-full">
                            <span className="text-staydia-black font-bold">C</span>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-white group-hover:text-staydia-gold">Social Media</h4>
                            <p className="text-xs text-gray-400">Join our online community</p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li className="row-span-1">
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <a href="https://www.linkedin.com/company/staydiasports/people/" target="_blank" rel="noopener noreferrer" 
                          className="flex items-center p-2 space-x-2 rounded-md hover:bg-staydia-darkgray">
                          <Linkedin className="h-4 w-4 text-staydia-gold" />
                          <span className="text-xs">LinkedIn</span>
                        </a>
                        <a href="https://youtube.com/@staydiasports-uy7rd?feature=shared" target="_blank" rel="noopener noreferrer" 
                          className="flex items-center p-2 space-x-2 rounded-md hover:bg-staydia-darkgray">
                          <Youtube className="h-4 w-4 text-staydia-gold" />
                          <span className="text-xs">YouTube</span>
                        </a>
                        <a href="https://www.instagram.com/staydiasports/" target="_blank" rel="noopener noreferrer" 
                          className="flex items-center p-2 space-x-2 rounded-md hover:bg-staydia-darkgray">
                          <Instagram className="h-4 w-4 text-staydia-gold" />
                          <span className="text-xs">Instagram</span>
                        </a>
                        <a href="https://www.facebook.com/share/161h1JreRk/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" 
                          className="flex items-center p-2 space-x-2 rounded-md hover:bg-staydia-darkgray">
                          <Facebook className="h-4 w-4 text-staydia-gold" />
                          <span className="text-xs">Facebook</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link to="/about" className="text-gray-300 hover:text-staydia-gold transition-colors font-medium">About Us</Link>
          <Link to="/contact" className="text-gray-300 hover:text-staydia-gold transition-colors font-medium">Contact</Link>
        </nav>
        
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
      </div>
    </header>
  );
};

export default Header;
