import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useAIMetaTags } from '@/hooks/useAIMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import { Camera, Play, TrendingUp, Banknote, Users, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const UnitedKingdom: React.FC = () => {
  useScrollToTop();
  useAIMetaTags({
    title: 'AI Sports Camera & Live Streaming for Grassroots Clubs in the UK',
    description: 'Give your grassroots football club in the UK FREE AI camera systems for live streaming. Earn revenue from fans. No hardware costs, no setup fees. Join the FA-supported revolution in grassroots sports broadcasting.',
    keywords: 'grassroots sports streaming UK, AI camera football UK, live stream amateur football UK, grassroots broadcasting, FA community clubs, school sports streaming, county football streaming'
  });
  useStructuredData({ type: 'Organization' });

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            AI Sports Camera & Live Streaming for Grassroots Clubs in the <span className="text-staydia-gold">UK</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Staydia provides grassroots football clubs, school sports programs, and community organizations across the UK with FREE AI-powered camera systems. Stream every match live, engage your community, and generate revenueâall without equipment costs or technical expertise.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/book-demo" className="px-8 py-3 bg-staydia-gold text-staydia-black font-bold rounded-lg hover:bg-yellow-400 transition">
              Book a Demo
            </Link>
            <Link to="/contact" className="px-8 py-3 border border-staydia-gold text-staydia-gold font-bold rounded-lg hover:bg-staydia-gold/10 transition">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-staydia-black/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-staydia-gold">
            â½ Grassroots Sports Streaming, Reimagined
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              The FA and grassroots football clubs across the UK are embracing digital transformation. Staydia's AI camera technology removes barriers to live streaming, making professional-quality broadcasting accessible to every clubâregardless of size or budget.
            </p>
            <p>
              Whether you're managing a Sunday league team, school sports program, university club, or county-level competition, Staydia delivers:
            </p>
            <ul className="list-disc list-inside space-y-3 pl-4">
              <li>Automated AI cameras installed FREE of charge</li>
              <li>Live streaming to families, supporters, and scouts</li>
              <li>Sponsorship revenue goes directly to your club</li>
              <li>On-demand match replays for coaching and development</li>
              <li>Highlight clipping tools for social media content</li>
              <li>Zero technical knowledge requiredâwe handle everything</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sports Covered Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-staydia-gold">
            ðï¸ Sports We Stream
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { sport: 'Football', detail: 'Men\'s, women\'s, youth, and grassroots leagues' },
              { sport: 'Basketball', detail: 'School and community court competitions' },
              { sport: 'Rugby', detail: 'Union and league, all age groups' },
              { sport: 'Field Hockey', detail: 'School and club-level matches' },
              { sport: 'American Football', detail: 'University and community leagues' },
              { sport: 'Netball', detail: 'Women\'s teams and development squads' }
            ].map((item, idx) => (
              <div key={idx} className="bg-staydia-black/50 p-6 rounded-lg border border-staydia-gold/20">
                <h3 className="font-bold text-staydia-gold mb-2">{item.sport}</h3>
                <p className="text-gray-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-staydia-black/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-staydia-gold">
            ð° The Staydia Advantage for UK Clubs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Camera className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Free AI Camera Installation</h3>
                <p className="text-gray-300">No equipment purchase, installation fees, or hidden costs. We supply, install, and maintain the entire system.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Banknote className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Earn From Sponsorship</h3>
                <p className="text-gray-300">Â£6.99/month fan subscriptionsâevery penny goes straight to your club's bank account, no cuts taken.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Play className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Live & On-Demand Broadcasting</h3>
                <p className="text-gray-300">Matches stream live to supporters worldwide. Fans can replay games anytimeâperfect for family members who miss the action.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <TrendingUp className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Build Club Identity & Attract Talent</h3>
                <p className="text-gray-300">Professional broadcasts attract scouts, sponsors, and new players. Showcase your academy on a global platform.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Community Engagement & Monetization</h3>
                <p className="text-gray-300">Local sponsors can feature in broadcasts. Fans subscribe to support your club. Coaches access footage for development.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <HelpCircle className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Dedicated UK Support Team</h3>
                <p className="text-gray-300">Our support team knows UK grassroots football. We're here to help with onboarding, technical issues, and revenue optimization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-staydia-gold">
            ð· How You Earn Revenue
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Staydia's revenue sharing model was designed by UK grassroots clubs, for UK grassroots clubs. Unlike traditional broadcasting platforms that take large cuts, sponsorship revenue goes directly to your organisation.
            </p>
            <div className="bg-staydia-gold/10 border border-staydia-gold/30 p-8 rounded-lg">
              <h3 className="font-bold text-staydia-gold mb-6 text-xl">Monthly Revenue Breakdown</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-staydia-gold/20">
                  <span>Fan Subscriptions (Â£6.99/month)</span>
                  <span className="text-staydia-gold font-bold">To Your Club</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-staydia-gold/20">
                  <span>Local Sponsor Placements</span>
                  <span className="text-staydia-gold font-bold">Shared Revenue</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Premium Content Features</span>
                  <span className="text-staydia-gold font-bold">50/50 Split</span>
                </div>
              </div>
            </div>
            <p>
              A grassroots football club with 50 active subscribers generates Â£350/monthâenough to cover pitch maintenance, kit purchases, or development programs. Larger clubs and academy programs have seen 10x that revenue.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-staydia-black/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-staydia-gold">
            ð How It Works
          </h2>
          <div className="space-y-8">
            {[
              {
                number: '1',
                title: 'Book Your Free Consultation',
                description: 'We chat with your club leadership about your streaming goals, venue setup, and league structure. Takes 15 minutes.'
              },
              {
                number: '2',
                title: 'Site Survey & Installation Planning',
                description: 'Our technical team visits your pitch to assess camera placement, power, and internet connectivity. We handle all logistics.'
              },
              {
                number: '3',
                title: 'Staydia Camera Goes Live',
                description: 'We install the AI camera, test the live stream, and train your staff on basic operations. No upfront costsâever.'
              },
              {
                number: '4',
                title: 'Start Streaming & Earning',
                description: 'Your next match is live. Fans subscribe, your club earns revenue. We manage all technical infrastructure.'
              }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="bg-staydia-gold text-staydia-black font-bold text-2xl h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-staydia-gold">
            â Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-staydia-black/50 p-6 rounded-lg border border-staydia-gold/20">
              <h3 className="font-bold text-staydia-gold mb-3 text-lg">Is there really no cost to install the camera?</h3>
              <p className="text-gray-300">Absolutely. Staydia covers all equipment, installation, and ongoing maintenance. We believe in the grassroots community and want every club to have access to professional streaming technology.</p>
            </div>
            <div className="bg-staydia-black/50 p-6 rounded-lg border border-staydia-gold/20">
              <h3 className="font-bold text-staydia-gold mb-3 text-lg">Do we need good internet at our pitch?</h3>
              <p className="text-gray-300">A stable broadband connection (10+ Mbps) works well. Our system is designed to work with UK-standard infrastructure. If connectivity is a concern, we can assess your site and recommend solutionsâsometimes we can install backup connectivity.</p>
            </div>
            <div className="bg-staydia-black/50 p-6 rounded-lg border border-staydia-gold/20">
              <h3 className="font-bold text-staydia-gold mb-3 text-lg">What about data privacy and GDPR compliance?</h3>
              <p className="text-gray-300">We're fully GDPR compliant. Fans must opt-in to subscribe and can manage their data anytime. We never sell fan information or use data without explicit consent. Your club retains full control over broadcast decisions.</p>
            </div>
            <div className="bg-staydia-black/50 p-6 rounded-lg border border-staydia-gold/20">
              <h3 className="font-bold text-staydia-gold mb-3 text-lg">Can we control who sees the stream?</h3>
              <p className="text-gray-300">Yes. Some clubs offer public free streams, others require subscription. You decide your broadcast strategy. Youth leagues and under-18 matches have special privacy protections built in.</p>
            </div>
            <div className="bg-staydia-black/50 p-6 rounded-lg border border-staydia-gold/20">
              <h3 className="font-bold text-staydia-gold mb-3 text-lg">How do we get started if our league federation has restrictions?</h3>
              <p className="text-gray-300">Many English county FAs and grassroots leagues are already partnering with Staydia. We work directly with league leadership to ensure compliance with any broadcasting regulations. Most find that structured streaming actually strengthens community engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-staydia-gold/10 border-t border-b border-staydia-gold/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-staydia-gold">
            Ready to Stream Your Next Match?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            UK grassroots clubs are already earning revenue and building their communities with Staydia. Let's get your club connected.
          </p>
          <Link to="/book-demo" className="inline-block px-10 py-4 bg-staydia-gold text-staydia-black font-bold text-lg rounded-lg hover:bg-yellow-400 transition">
            Book Your Free Demo
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UnitedKingdom;
