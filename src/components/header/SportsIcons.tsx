
import React from 'react';
import SportIcon from './SportIcon';
import { FieldHockeyStick, RugbyBall } from 'lucide-react';

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
    icon={<RugbyBall className="h-4 w-4 text-staydia-gold" />}
  />
);

export const HockeyIcon = () => (
  <SportIcon 
    icon={<FieldHockeyStick className="h-4 w-4 text-staydia-gold" />}
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
