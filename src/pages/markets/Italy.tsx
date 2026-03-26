import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useAIMetaTags } from '@/hooks/useAIMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import { Camera, Play, TrendingUp, Banknote, Users, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Italy: React.FC = () => {
  useScrollToTop();
  useAIMetaTags({
    title: 'Telecamera Sportiva IA e Streaming Live per Club in Italia',
    description: 'Telecamere sportive IA gratuite per club di calcio, rugby e sport in Italia. Streaming professionale in diretta. Guadagna dagli abbonamenti dei fan a €6,99/mese. Approvato dalla FIGC.',
    keywords: 'streaming sport amatoriale Italia, telecamera sportiva IA Italia, streaming calcio club Italia, calcio dilettantistico streaming'
  });
  useStructuredData({ type: 'Organization' });

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Telecamera Sportiva IA e Streaming Live per Club in <span className="text-staydia-gold">Italia</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Staydia porta la trasmissione professionale a ogni club italiano. Telecamere IA gratuite, installate da noi. Guadagna €6,99/mese per abbonato—la sponsorizzazione va al tuo club.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/book-demo" className="px-8 py-3 bg-staydia-gold text-staydia-black font-bold rounded-lg hover:bg-yellow-400 transition">Prenota Demo</Link>
            <Link to="/contact" className="px-8 py-3 border border-staydia-gold text-staydia-gold font-bold rounded-lg hover:bg-staydia-gold/10 transition">Scopri di Più</Link>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-staydia-black/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-staydia-gold">Il Calcio Dilettantistico Italiano Merita Visibilità</h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>L'Italia ha una tradizione calcistica incomparabile. Dal calcio di provincia ai club dilettantistici Serie D, ogni partita merita di essere vista. Staydia porta trasmissione professionale a tutti.</p>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-staydia-gold">Cosa Ricevono i Club Italiani</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Camera className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
              <div><h3 className="font-bold text-lg mb-2">Telecamera IA Gratuita</h3><p className="text-gray-300">Nessun costo di apparecchiatura, nessuna tassa di installazione. Gestiamo tutto noi.</p></div>
            </div>
            <div className="flex gap-4">
              <Banknote className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
              <div><h3 className="font-bold text-lg mb-2">Ricavi da Sponsorizzazione</h3><p className="text-gray-300">I banner di sponsorizzazione generano ricavi direttamente per il tuo club.</p></div>
            </div>
            <div className="flex gap-4">
              <Play className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
              <div><h3 className="font-bold text-lg mb-2">Streaming in Diretta e On-Demand</h3><p className="text-gray-300">I fan guardano in diretta. Registrazioni per analisi tattica.</p></div>
            </div>
            <div className="flex gap-4">
              <Users className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
              <div><h3 className="font-bold text-lg mb-2">Comunità e Monetizzazione</h3><p className="text-gray-300">Le aziende locali sponsorizzano le tue trasmissioni. I fan supportano il club.</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-staydia-gold/10 border-t border-b border-staydia-gold/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-staydia-gold">Pronto a Portare il Tuo Club al Prossimo Livello?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">I club italiani stanno già trasmettendo, guadagnando e costruendo le loro comunità.</p>
          <Link to="/book-demo" className="inline-block px-10 py-4 bg-staydia-gold text-staydia-black font-bold text-lg rounded-lg hover:bg-yellow-400 transition">Prenota Demo Gratuita</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Italy;
