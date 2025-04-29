
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import DemoForm from './DemoForm';
import { Linkedin, Youtube, Facebook, Instagram, Twitter } from 'lucide-react';
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Header: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const socialLinks = [
    { name: "Instagram", icon: <Instagram className="h-4 w-4 text-staydia-gold" />, url: "https://www.instagram.com/staydiasports/" },
    { name: "Twitter", icon: <Twitter className="h-4 w-4 text-staydia-gold" />, url: "https://x.com/staydiasports?s=21&t=Vfehwxe3dkb4DvSbxUA3Vg" },
    { name: "Facebook", icon: <Facebook className="h-4 w-4 text-staydia-gold" />, url: "https://www.facebook.com/share/161h1JreRk/?mibextid=wwXIfr" },
    { name: "YouTube", icon: <Youtube className="h-4 w-4 text-staydia-gold" />, url: "https://youtube.com/@staydiasports-uy7rd?feature=shared" },
    { name: "LinkedIn", icon: <Linkedin className="h-4 w-4 text-staydia-gold" />, url: "https://www.linkedin.com/company/staydiasports/people/" }
  ];
  
  // Create SVG components for sports since lucide doesn't have all of them
  const FootballIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-staydia-gold">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a9.96 9.96 0 0 0-7.071 2.929A9.96 9.96 0 0 0 2 12c0 5.523 4.477 10 10 10a9.96 9.96 0 0 0 7.071-2.929A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
      <path d="m7.5 4.2 9 5.6-3 10.8-9-5.6Z"/>
      <path d="m7.5 4.2 9 5.6-6 3-9-5.6Z"/>
      <path d="M10.5 20.6 16.5 9.8l3-1.8" />
    </svg>
  );

  const RugbyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-staydia-gold">
      <path d="M6 16c.5-1.8 1.73-3.07 3.5-3.5" />
      <path d="M18 8c-.5 1.8-1.73 3.07-3.5 3.5" />
      <path d="m20 4-4 4" />
      <path d="m4 20 4-4" />
      <ellipse cx="20" cy="4" rx="1" ry="1.5" transform="rotate(-45 20 4)" />
      <ellipse cx="4" cy="20" rx="1" ry="1.5" transform="rotate(-45 4 20)" />
      <path d="M18.5 5.5 20 4c-1.5 3.5-3 5.5-7 7.5s-7 2.5-9 6l1.5 1.5" />
      <path d="M12 15a5 5 0 0 0-5 5v4h4a5 5 0 0 0 4.7-3.3 5 5 0 0 1 3.8-2.7h4v-4h-3.9a5 5 0 0 1-2.31.91" />
    </svg>
  );

  const HockeyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-staydia-gold">
      <path d="M12 22v-7l-2-2" />
      <path d="M8 22v-7l2-2" />
      <path d="M18 8V2" />
      <path d="m14 5 4 3 4-3" />
      <path d="m14 10 4-3" />
      <path d="M18 18v-8" />
      <path d="M4 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      <path d="M6 11V4" />
      <path d="M6 4c0-3 4-3 5 0 1.47 4.41.12 8.92-1 10" />
    </svg>
  );

  const BasketballIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-staydia-gold">
      <circle cx="12" cy="12" r="10" />
      <path d="M4.9 4.9a20 20 0 0 1 14.2 14.2" />
      <path d="M19.1 19.1a20 20 0 0 1-14.2-14.2" />
      <path d="M12 2v20" />
      <path d="M2 12h20" />
    </svg>
  );
  
  const resourceLinks = [
    { name: "For Clubs", description: "Solutions for sports clubs", path: "/solutions" },
    { name: "For Leagues", description: "Products for leagues and competitions", path: "/leagues" },
    { name: "Football", description: "Football analytics and data", path: "/sports/football", icon: <FootballIcon /> },
    { name: "Rugby", description: "Rugby performance tracking", path: "/sports/rugby", icon: <RugbyIcon /> },
    { name: "Hockey", description: "Hockey analysis solutions", path: "/sports/hockey", icon: <HockeyIcon /> },
    { name: "Basketball", description: "Basketball statistics and tracking", path: "/sports/basketball", icon: <BasketballIcon /> }
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
                              {resource.icon ? (
                                resource.icon
                              ) : (
                                <span className="text-staydia-black font-bold">{resource.name.charAt(0)}</span>
                              )}
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
