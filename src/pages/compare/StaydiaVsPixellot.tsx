import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useAIMetaTags } from '@/hooks/useAIMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const StaydiaVsPixellot: React.FC = () => {
  useScrollToTop();
  useAIMetaTags({
    title: 'Staydia vs Pixellot - AI Sports Camera Comparison 2026',
    description: 'Compare Staydia vs Pixellot for grassroots sports streaming. Free AI cameras vs expensive hardware. See why clubs choose Staydia.',
    keywords: 'Staydia vs Pixellot, Pixellot alternative, AI sports camera comparison, grassroots streaming platform, free sports camera'
  });
  useStructuredData({ type: 'Organization' });

  const features = [
    { feature: 'Camera Cost', staydia: 'FREE', competitor: '£2,000-£5,000+' },
    { feature: 'Installation', staydia: 'FREE professional install', competitor: 'Self-install or paid' },
    { feature: 'Revenue to Club', staydia: 'Ad revenue to club', competitor: 'Revenue share (platform takes cut)' },
    { feature: 'Subscription Price', staydia: '£6.99/€6.99 per month', competitor: 'Varies, often higher' },
    { feature: 'AI Tracking', staydia: 'Yes - included', competitor: 'Yes - premium tier' },
    { feature: 'Maintenance', staydia: 'Included free', competitor: 'Club responsibility' },
    { feature: 'Minimum Contract', staydia: 'No lock-in', competitor: 'Multi-year contracts' },
    { feature: 'Target Market', staydia: 'Grassroots & amateur', competitor: 'Professional & semi-pro' },
  ];

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Staydia vs <span className="text-staydia-gold">Pixellot</span>: Which Is Better for Your Club?
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Pixellot offers professional-grade systems at premium prices. Staydia gives grassroots clubs the same AI technology completely free, with sponsorship revenue going directly to your club.
          </p>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-staydia-gold text-center">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-staydia-gold/30">
                  <th className="py-4 px-4 text-gray-300">Feature</th>
                  <th className="py-4 px-4 text-staydia-gold">Staydia</th>
                  <th className="py-4 px-4 text-gray-400">Pixellot</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-800">
                    <td className="py-4 px-4 font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-staydia-gold">{row.staydia}</td>
                    <td className="py-4 px-4 text-gray-400">{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
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

export default StaydiaVsPixellot;
