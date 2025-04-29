
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import DemoForm from './DemoForm';
import { Linkedin, Youtube, Facebook, Instagram, Twitter, Football, Users } from 'lucide-react';
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
  
  const socialLinks = [
    { name: "Instagram", icon: <Instagram className="h-4 w-4 text-staydia-gold" />, url: "https://www.instagram.com/staydiasports/" },
    { name: "Twitter", icon: <Twitter className="h-4 w-4 text-staydia-gold" />, url: "https://x.com/staydiasports?s=21&t=Vfehwxe3dkb4DvSbxUA3Vg" },
    { name: "Facebook", icon: <Facebook className="h-4 w-4 text-staydia-gold" />, url: "https://www.facebook.com/share/161h1JreRk/?mibextid=wwXIfr" },
    { name: "YouTube", icon: <Youtube className="h-4 w-4 text-staydia-gold" />, url: "https://youtube.com/@staydiasports-uy7rd?feature=shared" },
    { name: "LinkedIn", icon: <Linkedin className="h-4 w-4 text-staydia-gold" />, url: "https://www.linkedin.com/company/staydiasports/people/" }
  ];
  
  const resourceLinks = [
    { name: "For Clubs", description: "Solutions for sports clubs", path: "/solutions", icon: <Users className="h-4 w-4 text-staydia-gold" /> },
    { name: "For Leagues", description: "Products for leagues and competitions", path: "/leagues", icon: <Users className="h-4 w-4 text-staydia-gold" /> },
    { name: "Football", description: "Football analytics and data", path: "/sports/football", icon: <Football className="h-4 w-4 text-staydia-gold" /> },
    { name: "Rugby", description: "Rugby performance tracking", path: "/sports/rugby", icon: <Football className="h-4 w-4 text-staydia-gold" rotate={90} /> },
    { name: "Hockey", description: "Hockey analysis solutions", path: "/sports/hockey", icon: <Football className="h-4 w-4 text-staydia-gold" /> },
    { name: "Basketball", description: "Basketball statistics and tracking", path: "/sports/basketball", icon: <Football className="h-4 w-4 text-staydia-gold" /> }
  ];
  
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
          
          <NavigationMenu className="z-50">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-staydia-gold transition-colors font-medium">Resources</NavigationMenuTrigger>
                <NavigationMenuContent className="w-[320px]">
                  <ul className="grid gap-2 p-4 bg-staydia-black border border-staydia-lightgray">
                    {resourceLinks.map((resource, index) => (
                      <li className="row-span-1" key={index}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={resource.path}
                            className="flex items-center p-3 space-x-3 rounded-md hover:bg-staydia-darkgray group"
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-staydia-gold flex items-center justify-center rounded-full">
                              {resource.icon || <span className="text-staydia-black font-bold">{resource.name.charAt(0)}</span>}
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-white group-hover:text-staydia-gold">{resource.name}</h4>
                              <p className="text-xs text-gray-400">{resource.description}</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
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
                    {socialLinks.map((social, index) => (
                      <li className="row-span-1" key={index}>
                        <NavigationMenuLink asChild>
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-3 space-x-3 rounded-md hover:bg-staydia-darkgray group"
                          >
                            <div className="flex items-center justify-center">
                              {social.icon}
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-white group-hover:text-staydia-gold">{social.name}</h4>
                              <p className="text-xs text-gray-400">Follow us on {social.name}</p>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
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
