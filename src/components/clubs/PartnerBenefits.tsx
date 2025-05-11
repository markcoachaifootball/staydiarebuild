
import React from 'react';
import { ThumbsUp } from "lucide-react";

const PartnerBenefits: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Why Clubs Partner with Staydia</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <div className="flex items-start gap-4">
          <ThumbsUp className="h-6 w-6 text-staydia-gold shrink-0 mt-1" />
          <div>
            <h4 className="font-bold mb-1">No Cost to Club</h4>
            <p className="text-gray-300 text-sm">We invest in your growth.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <ThumbsUp className="h-6 w-6 text-staydia-gold shrink-0 mt-1" />
          <div>
            <h4 className="font-bold mb-1">No Tech Hassle</h4>
            <p className="text-gray-300 text-sm">We handle install, support, and automation.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <ThumbsUp className="h-6 w-6 text-staydia-gold shrink-0 mt-1" />
          <div>
            <h4 className="font-bold mb-1">No Missed Moments</h4>
            <p className="text-gray-300 text-sm">Every match, automatically captured from the perfect vantage point.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <ThumbsUp className="h-6 w-6 text-staydia-gold shrink-0 mt-1" />
          <div>
            <h4 className="font-bold mb-1">No Limits</h4>
            <p className="text-gray-300 text-sm">Use for livestreaming, analysis, community building, and monetisation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerBenefits;
