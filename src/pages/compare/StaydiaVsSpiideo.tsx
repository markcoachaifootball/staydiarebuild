import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useAIMetaTags } from '@/hooks/useAIMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import { Link } from 'react-router-dom';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StaydiaVsSpiideo: React.FC = () => {
  useScrollToTop();
  useAIMetaTags({
    title: 'Staydia vs Spiideo: Which Sports Video Platform Is Right for Your Club?',
    description: 'Compare Staydia and Spiideo sports video platforms. Learn why grassroots clubs choose Staydia\'s affordable, revenue-sharing model over Spiideo\'s enterprise-only pricing.',
    keywords: 'Spiideo alternative, Staydia vs Spiideo, sports video analysis comparison, grassroots sports technology',
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
              Staydia vs Spiideo: Which Sports Video Platform Is Right for Your Club?
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Spiideo is the premium video analysis platform trusted by Premier League, Bundesliga, and other elite-level clubs.
              But at enterprise prices, it's out of reach for most grassroots teams. Discover why Staydia is the accessible alternative
              that brings professional-grade streaming and engagement tools to every club.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="mb-20 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-staydia-darkgray border-b border-staydia-lightgray">
                  <th className="text-left p-4 font-bold text-staydia-gold">Feature</th>
                  <th className="text-center p-4 font-bold">Spiideo</th>
                  <th className="text-center p-4 font-bold text-staydia-gold">Staydia</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-staydia-lightgray">
                  <td className="p-4 font-semibold">Target Market</td>
                  <td className="text-center p-4">Elite/Professional only</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">Grassroots to semi-pro</td>
                </tr>
                <tr className="border-b border-staydia-lightgray bg-staydia-darkgray/30">
                  <td className="p-4 font-semibold">Pricing Model</td>
                  <td className="text-center p-4">Enterprise (contact sales)</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">Â£6.99/month + free camera</td>
                </tr>
                <tr className="border-b border-staydia-lightgray">
                  <td className="p-4 font-semibold">Estimated Monthly Cost</td>
                  <td className="text-center p-4">$1,000+</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">Â£6.99</td>
                </tr>
                <tr className="border-b border-staydia-lightgray bg-staydia-darkgray/30">
                  <td className="p-4 font-semibold">Camera Included</td>
                  <td className="text-center p-4">Requires external setup</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">FREE professional AI camera</td>
                </tr>
                <tr className="border-b border-staydia-lightgray">
                  <td className="p-4 font-semibold">Live Streaming</td>
                  <td className="text-center p-4">Add-on service (extra cost)</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">Fully integrated</td>
                </tr>
                <tr className="border-b border-staydia-lightgray bg-staydia-darkgray/30">
                  <td className="p-4 font-semibold">Fan Engagement Features</td>
                  <td className="text-center p-4">Coaching-focused only</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">Chat, clips, sponsorships</td>
                </tr>
                <tr className="border-b border-staydia-lightgray">
                  <td className="p-4 font-semibold">Revenue Sharing</td>
                  <td className="text-center p-4">None (clubs pay only)</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">100% ad revenue to clubs</td>
                </tr>
                <tr className="border-b border-staydia-lightgray bg-staydia-darkgray/30">
                  <td className="p-4 font-semibold">Accessibility</td>
                  <td className="text-center p-4">Limited; custom contracts</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">Self-service signup</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Global Availability</td>
                  <td className="text-center p-4">Major leagues only</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">Pan-European</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Key Advantages Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Grassroots Clubs Choose Staydia Over Spiideo</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <Check className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Affordable Pricing at Every Scale</h3>
                    <p className="text-gray-300">
                      Spiideo's enterprise pricing ($1,000+/month) makes it accessible only to major professional clubs. Staydia at
                      Â£6.99/month ensures every grassroots club can afford professional-grade streamingâno matter their budget.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <Check className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Free Hardware Included</h3>
                    <p className="text-gray-300">
                      Spiideo requires you to source and maintain your own camera equipment. Staydia provides professional AI cameras
                      completely free, eliminating setup complexity and hardware investment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <Check className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Revenue Sharing Model</h3>
                    <p className="text-gray-300">
                      Spiideo is a cost centerâclubs pay and receive no revenue return. Staydia flips the model: clubs keep 100% of ad revenue.
                      This means the more your fan base grows, the more you earn.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <Check className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Integrated Live Streaming</h3>
                    <p className="text-gray-300">
                      With Spiideo, live streaming is a separate, costly add-on. Staydia includes full streaming, fan chat, match clips,
                      and sponsorship integration as standard. No add-ons, no surprises.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <Check className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Built for Community, Not Just Coaches</h3>
                    <p className="text-gray-300">
                      Spiideo focuses on elite-level coaching and professional league requirements. Staydia is built specifically for
                      grassroots clubs, family members, local fans, and community engagementâthe DNA of amateur sports.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <Check className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">No Enterprise Contracts</h3>
                    <p className="text-gray-300">
                      Spiideo requires lengthy enterprise contracts with dedicated account managers and minimum commitments. Staydia is
                      self-service with no lock-inâcancel anytime. We earn your business through value, not contracts.
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
                <h3 className="text-xl font-bold mb-3 text-staydia-gold">Is Staydia as powerful as Spiideo for professional use?</h3>
                <p className="text-gray-300">
                  Spiideo is engineered for elite-level clubs and professional leagues with complex requirements. Staydia is built for
                  grassroots and semi-pro clubs focusing on live streaming and fan engagement. If you need enterprise analytics, Spiideo
                  is built for that. If you want to stream matches affordably, Staydia excels.
                </p>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-staydia-gold">Can we eventually upgrade to Spiideo from Staydia?</h3>
                <p className="text-gray-300">
                  Yes. Many clubs start with Staydia to build community and revenue, then add Spiideo later as they scale. But honestly,
                  most successful grassroots clubs find that Staydia's feature set meets all their needsâstreaming, engagement, and
                  earning revenue.
                </p>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-staydia-gold">Does Staydia offer professional-grade video quality?</h3>
                <p className="text-gray-300">
                  Absolutely. Staydia uses professional AI cameras with 4K resolution, automatic tracking, and optimized framing for live
                  streaming. Video quality rivals paid solutionsâthe difference is affordability and community focus.
                </p>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-staydia-gold">What if our club grows and we need Spiideo's advanced features?</h3>
                <p className="text-gray-300">
                  If your club reaches professional or elite status, Spiideo becomes an option. But most clubs at semi-pro and grassroots
                  levels never outgrow Staydia's capabilities. Our roadmap includes advanced coaching tools coming in 2026.
                </p>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-staydia-gold">Why isn't Staydia available at Spiideo's scale?</h3>
                <p className="text-gray-300">
                  Spiideo's enterprise model suits professional leagues. Staydia's freemium model (free camera + low monthly cost + revenue
                  sharing) works best at grassroots scale where affordability matters most. Different market segments need different solutions.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-staydia-gold/20 to-staydia-gold/10 border border-staydia-gold/30 rounded-xl p-12 text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Club's Streaming?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              See how Staydia brings professional-grade streaming and fan engagement to grassroots clubsâaffordably.
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

export default StaydiaVsSpiideo;
