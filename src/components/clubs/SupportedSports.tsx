
import React from 'react';

const SupportedSports: React.FC = () => {
  return (
    <div className="mb-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Built for All Levels</h2>
      <p className="text-gray-300 mb-8">
        Whether you're a junior grassroots team or a senior club in a national league, 
        Staydia Sports helps you shine on and off the field.
      </p>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {["Football", "Rugby", "Hockey", "Basketball"].map((sport, index) => (
          <div key={index} className="bg-staydia-darkgray text-center p-6 rounded-lg border border-staydia-lightgray">
            <div className="text-3xl mb-2">{
              sport === "Football" ? "⚽" : 
              sport === "Rugby" ? "🏉" : 
              sport === "Hockey" ? "🏑" : 
              "🏀"
            }</div>
            <h4 className="font-medium">{sport}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportedSports;
