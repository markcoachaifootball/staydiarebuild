import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useAIMetaTags } from '@/hooks/useAIMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import { Link } from 'react-router-dom';

const StaydiaVsVeo: React.FC = () => {
  useScrollToTop();
  useAIMetaTags({
    title: 'Staydia vs Veo - AI Sports Camera Comparison 2026',
    description: 'Compare Staydia vs Veo for grassroots sports streaming. Free AI cameras vs paid alternatives. See why clubs choose Staydia over Veo.',
    keywords: 'Staydia vs Veo, Veo alternative, AI sports camera comparison, grassroots streaming, free sports camera'
  });
  useStructuredData({ type: 'Organization' });

  const features = [
    { feature: 'Camera Cost', staydia: 'FREE', competitor: 'â¬590-â¬999' },
    { feature: 'Installation', staydia: 'FREE professional install', competitor: 'Self-setup required' },
    { feature: 'Revenue to Club', staydia: 'Ad revenue to club', competitor: 'Platform takes percentage' },
    { feature: 'Subscription Price', staydia: '£6.99/â¬6.99 per month', competitor: 'Higher per-match fees' },
    { feature: 'AI Tracking', staydia: 'Yes - included', competitor: 'Yes - basic' },
    { feature: 'Maintenance', staydia: 'Included free', competitor: 'User responsibility' },
    { feature: 'Minimum Contract', staydia: 'No lock-in', competitor: '12+ month contracts' },
    { feature: 'Target Market', staydia: 'Grassroots & amateur', competitor: 'Semi-pro & amateur' },
  ];

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Staydia vs <span className="text-staydia-gold">Veo</span>: Which Is Better for Your Club?
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Compare Staydia and Veo side by side. See why grassroots clubs across Europe choose Staydia's free AI camera with direct sponsorship revenue.
          </p>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-staydia-gold text-center">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead><tr className="border-b border-staydia-gold/30"><th className="py-4 px-4 text-gray-300">Feature</th><th className="py-4 px-4 text-staydia-gold">Staydia</th><th className="py-4 px-4 text-gray-400">Veo</th></tr></thead>
              <tbody>{features.map((row, idx) => (<tr key={idx} className="border-b border-gray-800"><td className="py-4 px-4 font-medium">{row.feature}</td><td className="py-4 px-4 text-staydia-gold">{row.staydia}</td><td className="py-4 px-4 text-gray-400">{row.competitor}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-staydia-gold/10 border-t border-b border-staydia-gold/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-staydia-gold">Ready to Switch to Staydia?</h2>
          <p className="text-xl text-gray-300 mb-8">No upfront costs. No long-term contracts. Sponsorship revenue goes to your club.</p>
          <Link to="/book-demo" className="inline-block px-10 py-4 bg-staydia-gold text-staydia-black font-bold text-lg rounded-lg hover:bg-yellow-400 transition">Book Free Demo</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default StaydiaVsVeo;
