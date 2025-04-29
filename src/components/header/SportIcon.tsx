
import React from 'react';

interface SportIconProps {
  icon: React.ReactNode;
}

const SportIcon: React.FC<SportIconProps> = ({ icon }) => {
  return (
    <div className="w-8 h-8 bg-staydia-black border border-staydia-lightgray rounded-full flex items-center justify-center">
      {icon}
    </div>
  );
};

export default SportIcon;
