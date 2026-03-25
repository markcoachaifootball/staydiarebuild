import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useAIMetaTags } from '@/hooks/useAIMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import { Camera, Play, TrendingUp, Banknote, Users, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ireland: React.FC = () => {
  useScrollToTop();
  useAIMetaTags({
    title: 'AI Sports Camera & Live Streaming for Clubs in Ireland',
    description: 'Bring your Irish sports club into the digital age with FREE AI camera systems. Stream football, rugby, basketball, and hockey matches live. Fan subscriptions at \u20ac6.99/month. FAI-approved, IRFU-trusted.',
    keywords: 'sports streaming Ireland, AI camera clubs Ireland, live stream sports Ireland, FAI grassroots, IRFU rugby streaming, Basketball Ireland, Hockey Ireland, grassroots broadcasting Ireland'
  });
  useStructuredData({ type: 'Organization' });

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            AI Sports Camera & Live Streaming for Clubs in <span className="text-staydia-gold">Ireland</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            From Dublin to Cork, Limerick to Galway\u2014Irish sports clubs deserve professional broadcasting. Staydia installs FREE AI cameras at your pitch. Earn \u20ac6.99/month from fan subscriptions, broadcast live, and build your club's identity on a global stage.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/book-demo" className="px-8 py-3 bg-staydia-gold text-staydia-black font-bold rounded-lg hover:bg-yellow-400 transition">Book a Demo</Link>
            <Link to="/contact" className="px-8 py-3 border border-staydia-gold text-staydia-gold font-bold rounded-lg hover:bg-staydia-gold/10 transition">Learn More</Link>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-staydia-black/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-staydia-gold">Bringing Irish Sports Into the Digital Age</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4"><Camera className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" /><div><h3 className="font-bold text-lg mb-2">Free AI Camera System</h3><p className="text-gray-300">We install, maintain, and manage everything. No equipment costs, no technical headaches.</p></div></div>
            <div className="flex gap-4"><Banknote className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" /><div><h3 className="font-bold text-lg mb-2">Earn From Sponsorship</h3><p className="text-gray-300">In-game sponsorship banners generate revenue directly for your club. No platform fees, no cuts.</p></div></div>
            <div className="flex gap-4"><Play className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" /><div><h3 className="font-bold text-lg mb-2">Live & On-Demand Streaming</h3><p className="text-gray-300">Families abroad can watch live. Fans replay matches anytime. Coaches access footage for development.</p></div></div>
            <div className="flex gap-4"><TrendingUp className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" /><div><h3 className="font-bold text-lg mb-2">Global Reach, Local Pride</h3><p className="text-gray-300">Build your club's international brand. Connect with the diaspora worldwide.</p></div></div>
            <div className="flex gap-4"><Users className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" /><div><h3 className="font-bold text-lg mb-2">Community Engagement Tools</h3><p className="text-gray-300">Fans subscribe to support their club. Local sponsors gain exposure.</p></div></div>
            <div className="flex gap-4"><HelpCircle className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" /><div><h3 className="font-bold text-lg mb-2">Irish-Based Support</h3><p className="text-gray-300">Our team understands Irish sports culture and federation requirements.</p></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-staydia-gold/10 border-t border-b border-staydia-gold/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-staydia-gold">Ready to Bring Your Irish Club Into the Future?</h2>
          <p className="text-xl text-gray-300 mb-8">Clubs across Ireland are already streaming, earning, and building their communities.</p>
          <Link to="/book-demo" className="inline-block px-10 py-4 bg-staydia-gold text-staydia-black font-bold text-lg rounded-lg hover:bg-yellow-400 transition">Book Your Free Demo</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Ireland;
