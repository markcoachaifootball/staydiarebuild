
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { Camera } from "lucide-react";
import { FootballIcon, RugbyIcon, HockeyIcon, BasketballIcon } from './SportsIcons';
import SportIcon from './SportIcon';

// Camera icon component for resources
const CameraIcon = () => (
  <SportIcon 
    icon={
      <Camera className="h-4 w-4 text-staydia-gold" />
    }
  />
);

export const resourceLinks = [
  { name: "FAQ's", description: "Frequently Asked Questions", path: "/faq", icon: <CameraIcon /> },
  { name: "For Clubs", description: "Solutions for sports clubs", path: "/for-clubs", icon: <CameraIcon /> },
  { name: "For Leagues", description: "Products for leagues and competitions", path: "/for-leagues", icon: <CameraIcon /> },
  { name: "Football", description: "Staydia Sports for Football", path: "/sports/football", icon: <FootballIcon /> },
  { name: "Rugby", description: "Staydia Sports for Rugby", path: "/sports/rugby", icon: <RugbyIcon /> },
  { name: "Hockey", description: "Staydia Sports for Hockey", path: "/sports/hockey", icon: <HockeyIcon /> },
  { name: "Basketball", description: "Staydia Sports for Basketball", path: "/sports/basketball", icon: <BasketballIcon /> }
];

interface ResourceLinkItemProps {
  resource: typeof resourceLinks[0];
}

const ResourceLinkItem: React.FC<ResourceLinkItemProps> = ({ resource }) => {
  return (
    <li className="row-span-1">
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
  );
};

export const ResourceLinksMenu: React.FC = () => {
  return (
    <>
      {resourceLinks.map((resource, index) => (
        <ResourceLinkItem key={index} resource={resource} />
      ))}
    </>
  );
};

export default ResourceLinksMenu;
