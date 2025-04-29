
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Facebook, Instagram, Twitter } from 'lucide-react';
import {
  NavigationMenuLink
} from "@/components/ui/navigation-menu";

export const socialLinks = [
  { name: "Instagram", icon: <Instagram className="h-4 w-4 text-staydia-gold" />, url: "https://www.instagram.com/staydiasports/" },
  { name: "Twitter", icon: <Twitter className="h-4 w-4 text-staydia-gold" />, url: "https://x.com/staydiasports?s=21&t=Vfehwxe3dkb4DvSbxUA3Vg" },
  { name: "Facebook", icon: <Facebook className="h-4 w-4 text-staydia-gold" />, url: "https://www.facebook.com/share/161h1JreRk/?mibextid=wwXIfr" },
  { name: "YouTube", icon: <Youtube className="h-4 w-4 text-staydia-gold" />, url: "https://youtube.com/@staydiasports-uy7rd?feature=shared" },
  { name: "LinkedIn", icon: <Linkedin className="h-4 w-4 text-staydia-gold" />, url: "https://www.linkedin.com/company/staydiasports/people/" }
];

const SocialLinkItem: React.FC<{ social: typeof socialLinks[0] }> = ({ social }) => {
  return (
    <li className="row-span-1">
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
  );
};

export const SocialLinksMenu: React.FC = () => {
  return (
    <>
      {socialLinks.map((social, index) => (
        <SocialLinkItem key={index} social={social} />
      ))}
    </>
  );
};

export default SocialLinksMenu;
