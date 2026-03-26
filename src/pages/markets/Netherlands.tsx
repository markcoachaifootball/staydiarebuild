import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useAIMetaTags } from '@/hooks/useAIMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import { Camera, Play, TrendingUp, Banknote, Users, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Netherlands: React.FC = () => {
  useScrollToTop();
  useAIMetaTags({
    title: 'AI Sportcamera & Livestreaming voor Clubs in Nederland',
    description: "Gratis AI sportcamera's voor voetbalclubs, rugbyverenigingen en sportorganisaties in Nederland. Professioneel streaming. Verdien via fan-abonnementen op €6,99/maand. KNVB-goedgekeurd.",
    keywords: 'sport streaming Nederland, AI sportcamera Nederland, voetbal livestream clubs Nederland, amateurvoetbal streaming'
  });
  useStructuredData({ type: 'Organization' });

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            AI Sportcamera & Livestreaming voor Clubs in <span className="text-staydia-gold">Nederland</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Staydia brengt professioneel streaming naar elke Nederlandse voetbalclub. Gratis AI-camera's, ge&iuml;nstalleerd door ons. Verdien &euro;6,99/maand per fan-abonnee&mdash;sponsoring gaat naar je club.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/book-demo" className="px-8 py-3 bg-staydia-gold text-staydia-black font-bold rounded-lg hover:bg-yellow-400 transition">
              Demo Boeken
            </Link>
            <Link to="/contact" className="px-8 py-3 border border-staydia-gold text-staydia-gold font-bold rounded-lg hover:bg-staydia-gold/10 transition">
              Meer Info
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-staydia-black/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-staydia-gold">Nederlands Amateurvoetbal in het Digitale Tijdperk</h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>Met bijna 1 miljoen voetballers in Nederland is voetbal echt een volkssport. Staydia brengt professionele streaming naar elke club.</p>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-staydia-gold">Wat Nederlandse Clubs Krijgen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Camera className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
              <div><h3 className="font-bold text-lg mb-2">Gratis AI-Camera</h3><p className="text-gray-300">Geen apparatuurkosten, geen installatiekosten. Wij regelen alles.</p></div>
            </div>
            <div className="flex gap-4">
              <Banknote className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
              <div><h3 className="font-bold text-lg mb-2">Inkomsten door Sponsoring</h3><p className="text-gray-300">Sponsoring-banners genereren inkomsten rechtstreeks voor je club.</p></div>
            </div>
            <div className="flex gap-4">
              <Play className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
              <div><h3 className="font-bold text-lg mb-2">Live en On-Demand Streaming</h3><p className="text-gray-300">Fans kijken live. Opnames voor tactische analyse.</p></div>
            </div>
            <div className="flex gap-4">
              <Users className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
              <div><h3 className="font-bold text-lg mb-2">Community & Monetisatie</h3><p className="text-gray-300">Lokale bedrijven sponsoren je streams. Fans ondersteunen de club.</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-staydia-gold/10 border-t border-b border-staydia-gold/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-staydia-gold">Klaar om je Club in de Toekomst te Brengen?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Nederlandse clubs streamen al, verdienen en bouwen hun gemeenschappen.</p>
          <Link to="/book-demo" className="inline-block px-10 py-4 bg-staydia-gold text-staydia-black font-bold text-lg rounded-lg hover:bg-yellow-400 transition">Gratis Demo Boeken</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Netherlands;