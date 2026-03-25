import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useAIMetaTags } from '@/hooks/useAIMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import { Camera, Play, TrendingUp, Banknote, Users, Shield, CheckCircle, X, Star, Zap, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const UnitedKingdom: React.FC = () => {
  useScrollToTop();
  useAIMetaTags({
    title: 'AI Sports Camera & Live Streaming for Grassroots Clubs in the UK',
    description: "FREE AI camera for grassroots football, rugby and hockey clubs across the UK. Professional live streaming with zero hardware cost. Earn 100% of fan subscriptions at \u00A36.99/month. FA-approved technology.",
    keywords: 'grassroots sports streaming UK, AI camera football UK, live stream amateur football UK, grassroots club streaming, FA grassroots technology, sports broadcasting UK, amateur sports camera'
  });
  useStructuredData({ type: 'Organization' });

  const features = [
    { icon: <Camera className="h-8 w-8" />, title: 'FREE AI Camera', description: 'Professional-grade AI camera installed at your ground at zero cost. We handle installation, maintenance, and upgrades.' },
    { icon: <Banknote className="h-8 w-8" />, title: '100% Revenue Share', description: "Every \u00A36.99 from fan subscriptions goes directly to your club. No platform fees, no hidden charges, no revenue splits." },
    { icon: <Play className="h-8 w-8" />, title: 'Live & On-Demand', description: 'Stream every match live in HD. Fans replay highlights anytime. Coaches access tactical footage for player development.' },
    { icon: <Zap className="h-8 w-8" />, title: 'Automated Production', description: 'AI tracks the ball and players automatically. No camera operator needed. Just turn on and let the AI handle everything.' },
    { icon: <Users className="h-8 w-8" />, title: 'Fan Engagement', description: 'Build your digital community. Connect with supporters near and far. Give sponsors real exposure through your broadcasts.' },
    { icon: <BarChart3 className="h-8 w-8" />, title: 'Performance Analytics', description: 'Access match footage for tactical review. Track player movement patterns. Improve coaching with data-driven insights.' },
  ];

  const comparisonData = [
    { feature: 'Camera Cost', staydia: 'FREE', pixellot: '\u00A32,000\u2013\u00A35,000', veo: '\u00A3800\u2013\u00A31,200', xbotgo: '\u00A3250\u2013\u00A3400' },
    { feature: 'Monthly Fee', staydia: '\u00A36.99/fan', pixellot: '\u00A3500\u2013\u00A32,000', veo: '\u00A3100\u2013\u00A3200', xbotgo: 'None' },
    { feature: 'Revenue to Club', staydia: '100%', pixellot: '0%', veo: '0%', xbotgo: '0%' },
    { feature: 'Live Streaming', staydia: true, pixellot: true, veo: false, xbotgo: false },
    { feature: 'Installation Included', staydia: true, pixellot: true, veo: false, xbotgo: false },
    { feature: 'Fan Platform', staydia: true, pixellot: false, veo: false, xbotgo: false },
    { feature: 'Sponsor Integration', staydia: true, pixellot: false, veo: false, xbotgo: false },
  ];

  const testimonials = [
    {
      quote: "Staydia transformed how we engage with our community. Parents abroad can watch their kids play, and the subscription revenue has funded new training kits.",
      name: "James T.",
      role: "Chairman, South London FC",
      stars: 5,
    },
    {
      quote: "We were paying hundreds a month for basic streaming. With Staydia, the camera was free, and now we actually earn money from every match we broadcast.",
      name: "Sarah M.",
      role: "Secretary, Yorkshire Rugby Club",
      stars: 5,
    },
    {
      quote: "The AI tracking is incredible. No one needs to operate the camera\u2014it just works. Our coaches use the footage for match analysis every week.",
      name: "David R.",
      role: "Manager, Midlands Hockey Club",
      stars: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-staydia-gold font-semibold text-lg mb-4 tracking-wide uppercase">For UK Grassroots Clubs</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            AI Sports Camera &amp; Live Streaming for Clubs in the{' '}
            <span className="text-staydia-gold">United Kingdom</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            From the Premier League to your local Sunday league&mdash;every club deserves professional broadcasting.
            Staydia installs a FREE AI camera at your ground. Fans subscribe at &pound;6.99/month and 100% goes to your club.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/book-demo" className="px-8 py-4 bg-staydia-gold text-staydia-black font-bold rounded-lg hover:bg-yellow-400 transition text-lg">
              Book a Free Demo
            </Link>
            <Link to="/contact" className="px-8 py-4 border-2 border-staydia-gold text-staydia-gold font-bold rounded-lg hover:bg-staydia-gold/10 transition text-lg">
              Learn More
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-8 text-gray-400 text-sm flex-wrap">
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-staydia-gold" /> No upfront costs</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-staydia-gold" /> Installation included</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-staydia-gold" /> 100% revenue to your club</span>
          </div>
        </div>
      </section>

      {/* Pricing Highlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-staydia-darkgray/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-xl p-8 text-center">
              <Camera className="h-12 w-12 text-staydia-gold mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">FREE</h3>
              <p className="text-gray-400">AI Camera &amp; Installation</p>
              <p className="text-sm text-gray-500 mt-2">No hardware costs, ever</p>
            </div>
            <div className="bg-staydia-darkgray border-2 border-staydia-gold rounded-xl p-8 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-staydia-gold text-staydia-black text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
              <Banknote className="h-12 w-12 text-staydia-gold mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">&pound;6.99<span className="text-lg font-normal text-gray-400">/mo</span></h3>
              <p className="text-gray-400">Per Fan Subscription</p>
              <p className="text-sm text-staydia-gold mt-2 font-semibold">100% goes to your club</p>
            </div>
            <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-xl p-8 text-center">
              <TrendingUp className="h-12 w-12 text-staydia-gold mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">&pound;0</h3>
              <p className="text-gray-400">Platform Fees</p>
              <p className="text-sm text-gray-500 mt-2">No hidden charges or cuts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-staydia-gold">What UK Clubs Get with Staydia</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Everything you need to broadcast, engage fans, and earn revenue&mdash;at zero cost to your club.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-staydia-darkgray border border-staydia-lightgray rounded-xl p-6 hover:border-staydia-gold transition-colors group">
                <div className="w-14 h-14 mb-5 bg-staydia-black rounded-full flex items-center justify-center border border-staydia-lightgray group-hover:bg-staydia-gold transition-colors">
                  <div className="text-staydia-gold group-hover:text-staydia-black transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-staydia-darkgray/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-staydia-gold">How Staydia Compares</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">See why UK grassroots clubs choose Staydia over the alternatives.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-staydia-lightgray">
                  <th className="py-4 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="py-4 px-4 text-staydia-gold font-bold text-center">Staydia</th>
                  <th className="py-4 px-4 text-gray-400 font-medium text-center">Pixellot</th>
                  <th className="py-4 px-4 text-gray-400 font-medium text-center">Veo</th>
                  <th className="py-4 px-4 text-gray-400 font-medium text-center">XbotGo</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-staydia-lightgray/30 hover:bg-staydia-darkgray/50">
                    <td className="py-4 px-4 font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.staydia === 'boolean' ? (
                        row.staydia ? <CheckCircle className="h-5 w-5 text-staydia-gold mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" />
                      ) : (
                        <span className="text-staydia-gold font-bold">{row.staydia}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-gray-400">
                      {typeof row.pixellot === 'boolean' ? (
                        row.pixellot ? <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" />
                      ) : row.pixellot}
                    </td>
                    <td className="py-4 px-4 text-center text-gray-400">
                      {typeof row.veo === 'boolean' ? (
                        row.veo ? <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" />
                      ) : row.veo}
                    </td>
                    <td className="py-4 px-4 text-center text-gray-400">
                      {typeof row.xbotgo === 'boolean' ? (
                        row.xbotgo ? <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" />
                      ) : row.xbotgo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Link to="/compare/staydia-vs-pixellot" className="text-staydia-gold hover:underline font-medium">
              View detailed comparisons &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-staydia-gold">What UK Clubs Are Saying</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Hear from clubs already using Staydia to broadcast, engage fans, and earn revenue.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-staydia-darkgray border border-staydia-lightgray rounded-xl p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-staydia-gold fill-staydia-gold" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Calculator Teaser */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-staydia-darkgray/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-staydia-darkgray border border-staydia-lightgray rounded-2xl p-10 md:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">How Much Could Your Club Earn?</h2>
            <p className="text-gray-400 mb-6 text-lg max-w-xl mx-auto">
              With just 100 subscribers at &pound;6.99/month, your club earns <span className="text-staydia-gold font-bold">&pound;8,388/year</span>. With 500 subscribers, that&rsquo;s <span className="text-staydia-gold font-bold">&pound;41,940/year</span>&mdash;enough to fund coaching, kits, and facilities.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
              <div className="bg-staydia-black rounded-lg p-4">
                <p className="text-2xl font-bold text-staydia-gold">50</p>
                <p className="text-xs text-gray-500">fans</p>
                <p className="text-sm font-semibold mt-1">&pound;4,194<span className="text-gray-500">/yr</span></p>
              </div>
              <div className="bg-staydia-black rounded-lg p-4 border border-staydia-gold">
                <p className="text-2xl font-bold text-staydia-gold">200</p>
                <p className="text-xs text-gray-500">fans</p>
                <p className="text-sm font-semibold mt-1">&pound;16,776<span className="text-gray-500">/yr</span></p>
              </div>
              <div className="bg-staydia-black rounded-lg p-4">
                <p className="text-2xl font-bold text-staydia-gold">500</p>
                <p className="text-xs text-gray-500">fans</p>
                <p className="text-sm font-semibold mt-1">&pound;41,940<span className="text-gray-500">/yr</span></p>
              </div>
            </div>
            <Link to="/revenue-sharing" className="text-staydia-gold hover:underline font-medium">
              Learn more about revenue sharing &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-staydia-gold/10 border-t border-b border-staydia-gold/30">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="h-12 w-12 text-staydia-gold mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-staydia-gold">Ready to Bring Your Club Into the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Hundreds of UK grassroots clubs are already streaming, earning revenue, and building their fan communities with Staydia. Join them today.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/book-demo" className="px-10 py-4 bg-staydia-gold text-staydia-black font-bold text-lg rounded-lg hover:bg-yellow-400 transition">
              Book Your Free Demo
            </Link>
            <Link to="/contact" className="px-10 py-4 border-2 border-staydia-gold text-staydia-gold font-bold text-lg rounded-lg hover:bg-staydia-gold/10 transition">
              Contact Us
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">No contracts. No setup fees. Cancel anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UnitedKingdom;
