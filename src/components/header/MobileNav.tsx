
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { socialLinks } from './SocialLinks';
import { resourceLinks } from './ResourceLinks';

const MobileNav: React.FC = () => {
  return (
    <div className="md:hidden flex items-center">
      <Sheet>
        <SheetTrigger asChild>
          <button className="text-gray-300 hover:text-staydia-gold p-2">
            <Menu size={24} />
            <span className="sr-only">Menu</span>
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-staydia-black border-staydia-lightgray p-0 w-[300px]">
          <div className="flex flex-col h-full">
            <div className="p-6">
              <div className="flex flex-col space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-staydia-gold mb-3">Resources</h3>
                  <ul className="space-y-3">
                    {resourceLinks.map((link, index) => (
                      <li key={index}>
                        <Link 
                          to={link.path}
                          className="flex items-center space-x-3 text-gray-300 hover:text-staydia-gold"
                        >
                          <div className="flex-shrink-0 w-7 h-7 bg-staydia-gold flex items-center justify-center rounded-full">
                            {link.icon ? (
                              link.icon
                            ) : (
                              <span className="text-staydia-black font-bold">{link.name.charAt(0)}</span>
                            )}
                          </div>
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-staydia-gold mb-3">Navigation</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/about" className="text-gray-300 hover:text-staydia-gold">About Us</Link>
                    </li>
                    <li>
                      <Link to="/contact" className="text-gray-300 hover:text-staydia-gold">Contact</Link>
                    </li>
                    <li>
                      <Link to="/news" className="text-gray-300 hover:text-staydia-gold">Newsroom</Link>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-staydia-gold mb-3">Connect</h3>
                  <ul className="space-y-3">
                    {socialLinks.map((social, index) => (
                      <li key={index}>
                        <a 
                          href={social.url} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 text-gray-300 hover:text-staydia-gold"
                        >
                          <span className="text-staydia-gold">{social.icon}</span>
                          <span>{social.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
