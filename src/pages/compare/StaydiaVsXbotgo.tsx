import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useAIMetaTags } from '@/hooks/useAIMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import { Link } from 'react-router-dom';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StaydiaVsXbotgo: React.FC = () => {
  useScrollToTop();
  useAIMetaTags({
    title: 'Staydia vs XbotGo: Which AI Sports Camera Is Right for Your Club?',
    description: 'Compare Staydia and XbotGo AI cameras for sports clubs. Learn why Staydia\'s all-in-one platform beats XbotGo\'s DIY camera-only approach.',
    keywords: 'XbotGo alternative, Staydia vs XbotGo, AI sports camera comparison, affordable sports streaming camera',
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
              Staydia vs XbotGo: Which AI Sports Camera Is Right for Your Club?
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              XbotGo offers affordable AI camera hardware at $300-500 with no subscriptions. But it's a camera-only solution requiring
              DIY setup and external streaming infrastructure. Staydia provides an end-to-end platform—camera, streaming, engagement, and revenue sharing.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="mb-20 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-staydia-darkgray border-b border-staydia-lightgray">
                  <th className="text-left p-4 font-bold text-staydia-gold">Feature</th>
                  <th className="text-center p-4 font-bold">XbotGo</th>
                  <th className="text-center p-4 font-bold text-staydia-gold">Staydia</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-staydia-lightgray">
                  <td className="p-4 font-semibold">Camera Cost</td>
                  <td className="text-center p-4">$300 - $500</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">FREE</td>
                </tr>
                <tr className="border-b border-staydia-lightgray bg-staydia-darkgray/30">
                  <td className="p-4 font-semibold">Monthly Subscription</td>
                  <td className="text-center p-4">None</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">£6.99/month</td>
                </tr>
                <tr className="border-b border-staydia-lightgray">
                  <td className="p-4 font-semibold">Video Resolution</td>
                  <td className="text-center p-4">4K quality</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">4K + broadcast optimization</td>
                </tr>
                <tr className="border-b border-staydia-lightgray bg-staydia-darkgray/30">
                  <td className="p-4 font-semibold">Streaming Infrastructure</td>
                  <td className="text-center p-4">Not included (DIY required)</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">Fully integrated</td>
                </tr>
                <tr className="border-b border-staydia-lightgray">
                  <td className="p-4 font-semibold">Live Streaming Setup</td>
                  <td className="text-center p-4">Complex (requires technical setup)</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">One-click setup</td>
                </tr>
                <tr className="border-b border-staydia-lightgray bg-staydia-darkgray/30">
                  <td className="p-4 font-semibold">Fan Engagement Tools</td>
                  <td className="text-center p-4">None</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">Chat, clips, sponsorships</td>
                </tr>
                <tr className="border-b border-staydia-lightgray">
                  <td className="p-4 font-semibold">Revenue Model</td>
                  <td className="text-center p-4">None (camera only)</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">Ad revenue to club</td>
                </tr>
                <tr className="border-b border-staydia-lightgray bg-staydia-darkgray/30">
                  <td className="p-4 font-semibold">Support & Maintenance</td>
                  <td className="text-center p-4">Limited; DIY support</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">Dedicated grassroots support</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Total First-Year Cost</td>
                  <td className="text-center p-4">$300 - $500 + streaming costs</td>
                  <td className="text-center p-4 text-staydia-gold font-bold">£83.88</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Key Advantages Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Smart Clubs Choose Staydia Over XbotGo</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <Check className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Complete Platform, Not Just a Camera</h3>
                    <p className="text-gray-300">
                      XbotGo is a hardware device only—you still need to build streaming infrastructure, web hosting, video delivery,
                      and fan engagement. Staydia is an end-to-end platform: camera + streaming + engagement + support, all included.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <Check className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Zero Hardware Investment</h3>
                    <p className="text-gray-300">
                      XbotGo requires $300-500 upfront hardware cost, plus additional spending on streaming infrastructure. Staydia provides
                      the camera completely free—your only cost is £6.99/month, and ad revenue goes directly to your club.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <Check className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Professional Streaming Infrastructure</h3>
                    <p className="text-gray-300">
                      XbotGo doesn't include streaming. You're responsible for CDN, hosting, scalability, and uptime. Staydia's platform
                      handles all of this—servers, bandwidth, redundancy, and optimization—so your streams always run smoothly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <Check className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Instant Setup Without Technical Expertise</h3>
                    <p className="text-gray-300">
                      XbotGo requires technical setup: RTMP configuration, stream key management, encoder settings, CDN integration.
                      Staydia works out-of-the-box—no technical knowledge needed. Our team handles setup and support.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <Check className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Revenue Generation Built-In</h3>
                    <p className="text-gray-300">
                      XbotGo is a camera—there's no revenue model. Staydia includes monetization: you earn ad revenue from
                      sponsors interested in reaching your audience. The more fans you attract, the more you earn.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <Check className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Scalability Without Hidden Costs</h3>
                    <p className="text-gray-300">
                      With XbotGo, if your viewership grows, you'll need bigger servers, higher bandwidth, better infrastructure—all
                      additional costs. Staydia scales automatically. One price, unlimited growth potential.
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
                <h3 className="text-xl font-bold mb-3 text-staydia-gold">Can we use XbotGo with Staydia's platform?</h3>
                <p className="text-gray-300">
                  Technically possible, but unnecessary. XbotGo + Staydia would cost $300-500 + £6.99/month, plus the complexity of integrating
                  external hardware. With just Staydia, you get professional camera + platform, no integration headaches.
                </p>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-staydia-gold">What if we already have streaming infrastructure?</h3>
                <p className="text-gray-300">
                  If you've already invested in streaming servers and CDN, XbotGo's camera-only approach makes sense. But if you're starting
                  fresh, Staydia's all-in-one platform is far more cost-effective and reliable than piecing together multiple services.
                </p>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-staydia-gold">Is XbotGo's video quality as good as Staydia?</h3>
                <p className="text-gray-300">
                  Both offer 4K quality. The difference: Staydia optimizes for live broadcast (automatic tracking, framing, audio normalization),
                  while XbotGo is a raw camera. For streaming specifically, Staydia's optimization produces better results.
                </p>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-staydia-gold">What happens if XbotGo adds a platform?</h3>
                <p className="text-gray-300">
                  XbotGo might evolve, but currently it's hardware-only. Staydia was purpose-built as a complete platform from day one.
                  We're deeply invested in grassroots streaming—it's our entire business model.
                </p>
              </div>

              <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-staydia-gold">Can we use XbotGo if we want a cheap camera option?</h3>
                <p className="text-gray-300">
                  If you want a camera for under $500, XbotGo is an option. But you'll still spend money on streaming infrastructure, hosting,
                  and support. With Staydia's free camera, your total cost is £6.99/month—and you earn revenue. Better value overall.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-staydia-gold/20 to-staydia-gold/10 border border-staydia-gold/30 rounded-xl p-12 text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Stop Building. Start Streaming.</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              With Staydia, you get everything you need in one platform—no DIY setup, no hidden costs, no complexity.
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

export default StaydiaVsXbotgo;
