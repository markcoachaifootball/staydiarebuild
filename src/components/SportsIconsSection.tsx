
import React from 'react';

const SportsIconsSection: React.FC = () => {
  const sports = [
    { name: 'Football', emoji: '⚽' },
    { name: 'Rugby', emoji: '🏉' },
    { name: 'Basketball', emoji: '🏀' },
    { name: 'Hockey', emoji: '🏑' }
  ];

  return (
    <section className="py-12 bg-staydia-darkgray/30">
      <div className="staydia-container">
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-md md:max-w-2xl">
            {sports.map((sport, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="text-4xl mb-1">
                  {sport.emoji}
                </div>
                <span className="text-white font-medium text-sm">
                  {sport.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsIconsSection;
