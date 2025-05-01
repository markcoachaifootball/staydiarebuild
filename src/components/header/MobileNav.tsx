
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { socialLinks } from './SocialLinks';
import { resourceLinks } from './ResourceLinks';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import { Button } from '../ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger
} from '@/components/ui/drawer';
import { ScrollArea } from '../ui/scroll-area';

const MobileNav: React.FC = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [resourcesOpen, setResourcesOpen] = React.useState(false);
  const [communityOpen, setCommunityOpen] = React.useState(false);
  
  const handleGetStarted = () => {
    navigate('/contact');
  };
  
  // Prevent body scroll when menu is open
  React.useEffect(() => {
    return () => {
      // Re-enable scrolling when component unmounts
      document.body.style.overflow = '';
    };
  }, []);
  
  const handleOpenChange = (open: boolean) => {
    // Disable or enable scrolling based on menu state
    document.body.style.overflow = open ? 'hidden' : '';
  };
  
  const MobileMenuContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-staydia-lightgray flex-shrink-0">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img 
              src="/lovable-uploads/f7690435-d61e-4b90-8008-5e6981cb119d.png" 
              alt="Staydia Sports Logo" 
              className="h-8 w-auto"
            />
          </Link>
        </div>
      </div>
      
      <ScrollArea className="flex-1 overflow-y-auto">
        <div className="px-4 py-2">
          <Collapsible
            open={resourcesOpen}
            onOpenChange={setResourcesOpen}
            className="border-b border-staydia-lightgray py-2"
          >
            <CollapsibleTrigger asChild>
              <button className="flex items-center justify-between w-full text-xl font-medium text-white py-3 hover:text-staydia-gold transition-colors">
                <span>Resources</span>
                <ChevronDown size={20} className={`transition-transform duration-200 ${resourcesOpen ? "transform rotate-180" : ""}`} />
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-2 pb-3">
              <ul className="space-y-3">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="flex items-center space-x-3 text-gray-300 hover:text-staydia-gold py-2"
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
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible
            open={communityOpen}
            onOpenChange={setCommunityOpen}
            className="border-b border-staydia-lightgray py-2"
          >
            <CollapsibleTrigger asChild>
              <button className="flex items-center justify-between w-full text-xl font-medium text-white py-3 hover:text-staydia-gold transition-colors">
                <span>Community</span>
                <ChevronDown size={20} className={`transition-transform duration-200 ${communityOpen ? "transform rotate-180" : ""}`} />
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-2 pb-3">
              <ul className="space-y-3">
                <li>
                  <Link to="/news" className="block text-gray-300 hover:text-staydia-gold py-2">Newsroom</Link>
                </li>
                <li>
                  <Link to="/fan-engagement" className="block text-gray-300 hover:text-staydia-gold py-2">Fan Engagement</Link>
                </li>
                {socialLinks.map((social, index) => (
                  <li key={index}>
                    <a 
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-300 hover:text-staydia-gold py-2"
                    >
                      <span className="text-staydia-gold">{social.icon}</span>
                      <span>{social.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
          
          <div className="border-b border-staydia-lightgray py-2">
            <Link to="/about" className="block text-xl font-medium text-white py-3 hover:text-staydia-gold transition-colors">
              About Us
            </Link>
          </div>
          
          <div className="border-b border-staydia-lightgray py-2">
            <Link to="/contact" className="block text-xl font-medium text-white py-3 hover:text-staydia-gold transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </ScrollArea>
      
      <div className="p-4 mt-auto flex-shrink-0">
        <Button 
          className="w-full py-6 bg-staydia-gold text-black hover:bg-opacity-90 text-lg"
          onClick={handleGetStarted}
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );

  return (
    <div className="md:hidden flex items-center">
      {isMobile ? (
        <Drawer>
          <DrawerTrigger asChild>
            <button className="text-gray-300 hover:text-staydia-gold p-2">
              <Menu size={24} />
              <span className="sr-only">Menu</span>
            </button>
          </DrawerTrigger>
          <DrawerContent className="bg-staydia-black max-h-[90vh] rounded-t-xl border-none">
            <div className="absolute right-4 top-4">
              <DrawerClose className="text-white hover:text-staydia-gold">
                <X size={24} />
              </DrawerClose>
            </div>
            <MobileMenuContent />
          </DrawerContent>
        </Drawer>
      ) : (
        <Sheet onOpenChange={handleOpenChange}>
          <SheetTrigger asChild>
            <button className="text-gray-300 hover:text-staydia-gold p-2">
              <Menu size={24} />
              <span className="sr-only">Menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-staydia-black border-staydia-lightgray p-0 w-full max-w-[400px] h-full overflow-hidden">
            <MobileMenuContent />
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
};

export default MobileNav;
