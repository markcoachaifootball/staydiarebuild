import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useAIMetaTags } from '@/hooks/useAIMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import { Link } from 'react-router-dom';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StaydiaVsSportway: React.FC = () => {
  useScrollToTop();
  useAIMetaTags({
    title: 'Staydia vs Sportway: Which Sports Streaming Platform Is Right for Your Club?',
    description: 'Compare Staydia and Sportway sports streaming platforms. Learn why European clubs choose Staydia\'s club-first model and pan-European availability.',
    keywords: 'Sportway alternative, Staydia vs Sportway, sports streaming platform comparison, European sports camera',
    category: 'comparison',
  });
  useStructuredData({ type: 'Organization' });

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-32 staydia-container">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="mb-20 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Staydia vs Sportway: Which Sports Streaming Platform Is Right for Your Club?
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Sportway is a Nordic-focused streaming platform with 20,000+ matches per season and strong federation partnerships in Scandinavia.
              But if your club is outside the Nordic region, or you want more grassroots-focused support, Staydia's pan-European platform and
              club-first model offers a compelling alternative.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="mb-20 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-staydia-darkgray border-b border-staydia-lightgray">
                  <th className="text-left p-4 font-bold text-staydia-gold">Feature</th>
                  <th className="text-center p-4 font-bold">Sportway</th>
                  <th className="text-center p-4 font-bold text-staydia-gold">Staydia</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-staydia-lightgray">
                  <td className="p-4 font-semibold">Primary Markets</td>
                  <td className="text-center p-4">Nordic countries (Norway, Sweden, Denmark)</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">Pan-European (8+ countries)</td>
                </tr>
                <tr className="border-b border-staydia-lightgray bg-staydia-darkgray/30">
                  <td className="p-4 font-semibold">Business Model</td>
                  <td className="text-center p-4">Federation-focused</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">Club-first</td>
                </tr>
                <tr className="border-b border-staydia-lightgray">
                  <td className="p-4 font-semibold">Camera Hardware</td>
                  <td className="text-center p-4">Provided by platform</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">FREE professional AI camera</td>
                </tr>
                <tr className="border-b border-staydia-lightgray bg-staydia-darkgray/30">
                  <td className="p-4 font-semibold">Monthly Cost</td>
                  <td className="text-center p-4">Federation-negotiated</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">£6.99/month</td>
                </tr>
                <tr className="border-b border-staydia-lightgray">
                  <td className="p-4 font-semibold">Revenue Model</td>
                  <td className="text-center p-4">Limited revenue share (federation-based)</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">Ad revenue goes to clubs</td>
                </tr>
                <tr className="border-b border-staydia-lightgray bg-staydia-darkgray/30">
                  <td className="p-4 font-semibold">Matches per Season</td>
                  <td className="text-center p-4">20,000+ (Nordic scale)</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">Growing rapidly (EU-wide)</td>
                </tr>
                <tr className="border-b border-staydia-lightgray">
                  <td className="p-4 font-semibold">Support Structure</td>
                  <td className="text-center p-4">Federation/league-based</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">Direct grassroots support</td>
                </tr>
                <tr className="border-b border-staydia-lightgray bg-staydia-darkgray/30">
                  <td className="p-4 font-semibold">Global Availability</td>
                  <td className="text-center p-4">Nordic region only</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">UK, IE, DE, ES, FR, NL, PT, IT</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Independent Club Control</td>
                  <td className="text-center p-4">Federation-gated</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">Full control & independence</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Key Advantages Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Why European Clubs Choose Staydia Over Sportway</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <Check className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Available in 8+ European Countries</h3>
                    <p className="text-gray-300">
                      Sportway excels in Scandinavia but has limited presence elsewhere in Europe. Staydia operates across the UK, Ireland,
                      Germany, Spain, France, Netherlands, Portugal, and Italy—and expanding. If your federation isn't Nordic, Staydia reaches you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <Check className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Club-First, Not Federation-First</h3>
                    <p className="text-gray-300">
                      Sportway's model prioritizes federations and league partnerships. Staydia puts clubs first—your success, your revenue,
                      your independence. We serve clubs, not leagues. Direct relationship, no middlemen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <Check className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Transparent, Affordable Pricing</h3>
                    <p className="text-gray-300">
                      Sportway's pricing is federation-negotiated and opaque to individual clubs. Staydia offers clear, simple pricing: £6.99/month.
                      No surprises, no hidden fees, no negotiations. Perfect for grassroots clubs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <Check className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Direct Revenue Sharing to Your Club</h3>
                    <p className="text-gray-300">
                      With Sportway, revenue flows through federations. Staydia pays ad revenue directly to your club. No middlemen,
                      no revenue loss to gatekeepers. You keep what you earn.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <Check className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Independence Without Federation Requirements</h3>
                    <p className="text-gray-300">
                      Sportway requires federation partnerships and membership compliance. Staydia is independent—any club can sign up,
                      any sport, any competition level. Stream what you want, when you want, without federation gatekeeping.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <Check className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Rapid European Expansion</h3>
                    <p className="text-gray-300">
                      Sportway's Nordic focus works well there, but Staydia is aggressively expanding across Europe with dedicated teams
                      in each region. We're bringing grassroots streaming to every corner of Europe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-staydia-gold">If we're in Scandinavia, should we choose Sportway?</h3>
                <p className="text-gray-300">
                  If your federation has a Sportway partnership with negotiated rates, it could be worth considering. But even in Scandinavia,
                  Staydia offers better direct club control, direct revenue sharing, and no federation gatekeeping. Compare what your federation
                  offers versus Staydia's independence.
                </p>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-staydia-gold">Does Staydia have federation partnerships?</h3>
                <p className="text-gray-300">
                  We're in discussions with several European federations, but Staydia's core model is direct club relationships. We don't need
                  federation gatekeeping—any club can start streaming immediately. We're building from the grassroots up, not from federations down.
                </p>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-staydia-gold">Can clubs in Sportway regions switch to Staydia?</h3>
                <p className="text-gray-300">
                  Absolutely. Many clubs want more independence and better revenue share. Switching is straightforward—no long-term contracts,
                  no switching fees. Just sign up and migrate. We've built the transition process to be smooth.
                </p>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-staydia-gold">What's the scale difference between Staydia and Sportway?</h3>
                <p className="text-gray-300">
                  Sportway has 20,000+ matches/season in their Nordic region. Staydia is growing rapidly across 8+ European countries. Our scale
                  is smaller now, but our growth rate is higher, and our model is more sustainable long-term because it's club-centric, not
                  federation-dependent.
                </p>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-staydia-gold">Do we lose audience reach outside our federation with Staydia?</h3>
                <p className="text-gray-300">
                  No. Staydia's player and marketing reach across all of Europe means your streams can reach fans continent-wide. With Sportway,
                  you're limited to Nordic audiences. Staydia actually expands your potential audience significantly.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-staydia-gold/20 to-staydia-gold/10 border border-staydia-gold/30 rounded-xl p-12 text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Join the Pan-European Grassroots Revolution</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Staydia empowers clubs across Europe to stream independently, earn revenue directly, and reach fans continent-wide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-demo">
                <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 px-8 py-3 flex items-center gap-2">
                  Book a Demo <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-staydia-gold text-staydia-gold hover:bg-staydia-gold/10 px-8 py-3">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StaydiaVsSportway;
