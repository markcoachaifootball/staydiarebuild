import React from 'react';
import { Card } from './ui/card';

const LiveMatches = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="staydia-container">
        <h2 className="section-title text-center">Live Matches</h2>
        <p className="section-subtitle text-center">
          Watch live matches from your favorite teams
        </p>
        
        <div className="mt-8">
          <Card className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
            {/* Match listing content */}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LiveMatches;
