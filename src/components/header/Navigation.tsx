
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import ResourceLinksMenu from './ResourceLinks';
import SocialLinksMenu from './SocialLinks';

const Navigation: React.FC = () => {
  return (
    <nav className="hidden md:flex items-center">
      <div className="flex items-center space-x-8">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-staydia-gold transition-colors font-medium text-base px-0 py-1">Resources</NavigationMenuTrigger>
              <NavigationMenuContent className="w-[320px] max-h-[calc(100vh-5rem)] overflow-y-auto">
                <ul className="grid gap-2 p-4 bg-staydia-black border border-staydia-lightgray">
                  <ResourceLinksMenu />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-staydia-gold transition-colors font-medium text-base px-0 py-1">Community</NavigationMenuTrigger>
              <NavigationMenuContent className="w-[320px] max-h-[calc(100vh-5rem)] overflow-y-auto">
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
                        to="/fan-engagement"
                        className="flex items-center p-3 space-x-3 rounded-md hover:bg-staydia-darkgray group"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-staydia-gold flex items-center justify-center rounded-full">
                          <span className="text-staydia-black font-bold">F</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-white group-hover:text-staydia-gold">Fan Engagement</h4>
                          <p className="text-xs text-gray-400">Connect with your fans</p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <SocialLinksMenu />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <Link to="/about" className="text-gray-300 hover:text-staydia-gold transition-colors font-medium text-base">
          About Us
        </Link>
        
        <Link to="/contact" className="text-gray-300 hover:text-staydia-gold transition-colors font-medium text-base">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
