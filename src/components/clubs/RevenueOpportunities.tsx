
import React from 'react';
import { Banknote } from "lucide-react";

const RevenueOpportunities: React.FC = () => {
  return (
    <div className="bg-staydia-darkgray border border-staydia-gold/30 p-8 rounded-xl mb-16 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <Banknote className="h-6 w-6 text-staydia-gold" />
        <span>New Revenue Streams</span>
      </h3>
      <p className="text-gray-300 mb-6">Clubs can generate income via:</p>
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <div className="mt-1 text-staydia-gold">✓</div>
          <span><strong>Fan Subscriptions</strong> - Allow supporters to watch from anywhere</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="mt-1 text-staydia-gold">✓</div>
          <span><strong>Sponsorship Overlays</strong> - Display logos on every stream</span>
        </li>
      </ul>
    </div>
  );
};

export default RevenueOpportunities;
