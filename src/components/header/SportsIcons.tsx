
import React from 'react';
import SportIcon from './SportIcon';
import { Rugby, Dumbbell } from 'lucide-react';

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
    icon={<Rugby className="h-4 w-4 text-staydia-gold" />}
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
