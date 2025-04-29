
import React from 'react';
import SportIcon from './SportIcon';
import { Dumbbell } from 'lucide-react';

export const FootballIcon = () => (
  <SportIcon 
    icon={
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-staydia-gold">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a9.96 9.96 0 0 0-7.071 2.929A9.96 9.96 0 0 0 2 12c0 5.523 4.477 10 10 10a9.96 9.96 0 0 0 7.071-2.929A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
        <path d="m7.5 4.2 9 5.6-3 10.8-9-5.6Z"/>
        <path d="m7.5 4.2 9 5.6-6 3-9-5.6Z"/>
        <path d="M10.5 20.6 16.5 9.8l3-1.8" />
      </svg>
    }
  />
);

export const RugbyIcon = () => (
  <SportIcon 
    icon={
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-staydia-gold">
        <ellipse cx="12" cy="12" rx="9" ry="6" />
        <path d="M7 10c-.7 0-1.5.1-2.3.3a4.3 4.3 0 0 0-2.4 1.9c-.3.5-.3 1.1-.3 1.8 0 .7 0 1.3.3 1.8.3.9 1 1.4 1.7 1.7.7.3 1.7.5 2.7.5" />
        <path d="M7 14h1" />
        <path d="M17 10c.7 0 1.5.1 2.3.3.7.2 1.4.6 1.9 1.2.3.5.8 1.3.8 2.5 0 .7 0 1.3-.3 1.8-.3.9-1 1.4-1.7 1.7-.7.3-1.7.5-2.7.5" />
        <path d="M17 14h-1" />
        <path d="M12 6v12" />
        <path d="M8 9h8" />
        <path d="M8 15h8" />
      </svg>
    }
  />
);

export const HockeyIcon = () => (
  <SportIcon 
    icon={
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
    }
  />
);

export const BasketballIcon = () => (
  <SportIcon 
    icon={
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-staydia-gold">
        <circle cx="12" cy="12" r="10" />
        <path d="M4.9 4.9a20 20 0 0 1 14.2 14.2" />
        <path d="M19.1 19.1a20 20 0 0 1-14.2-14.2" />
        <path d="M12 2v20" />
        <path d="M2 12h20" />
      </svg>
    }
  />
);
