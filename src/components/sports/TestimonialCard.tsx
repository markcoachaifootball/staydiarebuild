
import React from 'react';

interface TestimonialCardProps {
  initials: string;
  clubName: string;
  location: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ initials, clubName, location, quote }) => {
  return (
    <div className="bg-staydia-darkgray p-6 rounded-lg border border-staydia-lightgray">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-staydia-gold rounded-full flex items-center justify-center text-staydia-black font-bold text-lg">
          {initials}
        </div>
        <div className="ml-4">
          <h3 className="font-bold">{clubName}</h3>
          <p className="text-sm text-gray-400">{location}</p>
        </div>
      </div>
      <p className="text-gray-300 italic">
        {quote}
      </p>
    </div>
  );
};

export default TestimonialCard;
