
import React from 'react';
import { Card } from './ui/card';
import { Shield, Clock } from 'lucide-react';

const SAMPLE_MATCHES = [
  {
    homeTeam: "Manchester United",
    awayTeam: "Liverpool",
    time: "19:45",
    date: "Today",
    league: "Premier League"
  },
  {
    homeTeam: "Real Madrid",
    awayTeam: "Barcelona",
    time: "20:00",
    date: "Tomorrow",
    league: "La Liga"
  },
  {
    homeTeam: "Bayern Munich",
    awayTeam: "Borussia Dortmund",
    time: "18:30",
    date: "Saturday",
    league: "Bundesliga"
  }
];

const LiveMatches = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-staydia-black via-staydia-darkgray to-staydia-black">
      <div className="staydia-container">
        <h2 className="section-title text-center">Live Matches</h2>
        <p className="section-subtitle text-center mb-8">
          Watch live matches from your favorite teams in HD quality
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_MATCHES.map((match, index) => (
            <Card key={index} className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-staydia-gold transition-colors card-hover">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-staydia-gold text-sm font-medium">{match.league}</span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{match.time}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between space-x-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-6 h-6 text-staydia-gold" />
                    <span className="font-medium">{match.homeTeam}</span>
                  </div>
                  <span className="text-staydia-gold font-bold">VS</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{match.awayTeam}</span>
                    <Shield className="w-6 h-6 text-staydia-gold" />
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-700">
                  <button className="w-full bg-staydia-gold text-staydia-black font-medium py-2 rounded-md hover:bg-opacity-90 transition-all">
                    Watch Match
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveMatches;
