
import React, { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-staydia-black p-8 rounded-lg border border-staydia-lightgray">
      <div className="mb-4 bg-staydia-gold/10 p-3 inline-block rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
