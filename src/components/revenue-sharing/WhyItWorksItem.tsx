
import React from 'react';
import { Check } from "lucide-react";

interface WhyItWorksItemProps {
  text: string;
}

const WhyItWorksItem = ({ text }: WhyItWorksItemProps) => {
  return (
    <li className="flex items-start gap-3">
      <div className="text-staydia-gold mt-1">
        <Check size={20} />
      </div>
      <p className="text-lg text-gray-300">
        {text}
      </p>
    </li>
  );
};

export default WhyItWorksItem;
