
import React from 'react';
import { Coins } from "lucide-react";
import { 
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

const RevenueHero = () => {
  return (
    <section className="staydia-container pb-16">
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-4">
          <Coins className="text-staydia-gold h-8 w-8" />
          <h1 className="text-4xl md:text-5xl font-bold">Revenue Sharing Model</h1>
        </div>
        <h2 className="text-2xl font-medium text-staydia-gold mb-6">
          Turning Matches into Money — For Your Club
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          At Staydia Sports, we don't just provide cameras — we help your club unlock a brand new, sustainable revenue stream through our automated AI-powered livestreaming platform.
        </p>
        <p className="text-lg text-gray-300 mb-8">
          Our revenue-sharing model is simple, transparent, and built with one goal in mind: to financially support clubs at every level.
        </p>
        <Alert className="bg-staydia-darkgray border border-staydia-gold text-gray-300 mb-8">
          <AlertTitle className="text-white">No upfront costs. No hidden fees.</AlertTitle>
          <AlertDescription>
            We cover all equipment and installation costs. You only share revenue when your club starts earning.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};

export default RevenueHero;
