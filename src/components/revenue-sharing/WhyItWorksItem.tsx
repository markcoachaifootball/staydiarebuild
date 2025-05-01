
import React from 'react';

interface WhyItWorksItemProps {
  text: string;
}

const WhyItWorksItem = ({ text }: WhyItWorksItemProps) => {
  return (
    <li className="flex items-start gap-3">
      <div className="bg-staydia-gold/20 p-1 rounded-full mt-1">
        <div className="bg-staydia-gold rounded-full w-3 h-3"></div>
      </div>
      <p className="text-lg text-gray-300">
        {text}
      </p>
    </li>
  );
};

export default WhyItWorksItem;
