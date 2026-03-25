import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useAIMetaTags } from '@/hooks/useAIMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import { Camera, Play, TrendingUp, Banknote, Users, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Germany: React.FC = () => {
  useScrollToTop();
  useAIMetaTags({
    title: 'KI-Sportkamera & Live-Streaming f\u00fcr Breitensportvereine in Deutschland',
    description: 'Kostenlose KI-Kamerasysteme f\u00fcr Amateurfussballvereine in Deutschland. Live-Streaming, Einnahmen generieren, Fan-Engagement steigern. DFB-Breitensport, Kreisliga, Landesliga Streaming.',
    keywords: 'Sportkamera Deutschland, KI Kamera Fussball, Live Stream Amateurfussball, Breitensport Streaming, DFB Kreisliga Streaming, Landesliga Live, Vereinssport Streaming Deutschland'
  });
  useStructuredData({ type: 'Organization' });

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            KI-Sportkamera & Live-Streaming f\u00fcr <span className="text-staydia-gold">deutsche Vereine</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Staydia bringt professionelles Broadcasting in den deutschen Breitensport. KOSTENLOSE KI-Kameras f\u00fcr Ihren Verein. Verdienen Sie \u20ac6,99/Monat pro Fan-Abo. 
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/book-demo" className="px-8 py-3 bg-staydia-gold text-staydia-black font-bold rounded-lg hover:bg-yellow-400 transition">Demo buchen</Link>
            <Link to="/contact" className="px-8 py-3 border border-staydia-gold text-staydia-gold font-bold rounded-lg hover:bg-staydia-gold/10 transition">Mehr erfahren</Link>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-staydia-black/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-staydia-gold">Breitensport-Streaming, neu gedacht</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4"><Camera className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" /><div><h3 className="font-bold text-lg mb-2">Kostenlose KI-Kamera</h3><p className="text-gray-300">Wir installieren, warten und verwalten alles. Keine Ausr\u00fcstungskosten, keine technischen Probleme.</p></div></div>
            <div className="flex gap-4"><Banknote className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" /><div><h3 className="font-bold text-lg mb-2">Einnahmen durch Sponsoring</h3><p className="text-gray-300">In-Game Sponsoring-Banner generieren Einnahmen direkt für Ihren Verein.</p></div></div>
            <div className="flex gap-4"><Play className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" /><div><h3 className="font-bold text-lg mb-2">Live & On-Demand</h3><p className="text-gray-300">Spiele live streamen. Fans k\u00f6nnen Spiele jederzeit erneut ansehen.</p></div></div>
            <div className="flex gap-4"><Users className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" /><div><h3 className="font-bold text-lg mb-2">Gemeinschaft st\u00e4rken</h3><p className="text-gray-300">Lokale Sponsoren, Fan-Engagement, Taktik-Auswertung \u2013 alles in einer Plattform.</p></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-staydia-gold/10 border-t border-b border-staydia-gold/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-staydia-gold">Bereit f\u00fcr professionelles Streaming?</h2>
          <p className="text-xl text-gray-300 mb-8">Deutsche Vereine streamen bereits live und generieren Einnahmen mit Staydia.</p>
          <Link to="/book-demo" className="inline-block px-10 py-4 bg-staydia-gold text-staydia-black font-bold text-lg rounded-lg hover:bg-yellow-400 transition">Kostenlose Demo buchen</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Germany;
