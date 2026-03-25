import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useAIMetaTags } from '@/hooks/useAIMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import { Camera, Play, Banknote, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const France: React.FC = () => {
  useScrollToTop();
  useAIMetaTags({
    title: 'Cam\u00e9ra Sportive IA & Streaming en Direct pour Clubs en France',
    description: 'Syst\u00e8mes de cam\u00e9ra IA GRATUITS pour les clubs de football amateur en France. Streaming en direct, g\u00e9n\u00e9rez des revenus \u00e0 \u20ac6,99/mois. FFF approuv\u00e9. Revenus de sponsoring pour votre club.',
    keywords: 'streaming sportif France, cam\u00e9ra IA football, streaming football amateur France, FFF grassroots, ligue r\u00e9gionale streaming, sport amateur France'
  });
  useStructuredData({ type: 'Organization' });

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Cam\u00e9ra IA & Streaming pour Clubs en <span className="text-staydia-gold">France</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">Staydia apporte le broadcasting professionnel au sport amateur fran\u00e7ais. Cam\u00e9ras IA GRATUITES. Gagnez \u20ac6,99/mois par abonnement. </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/book-demo" className="px-8 py-3 bg-staydia-gold text-staydia-black font-bold rounded-lg hover:bg-yellow-400 transition">R\u00e9server une D\u00e9mo</Link>
            <Link to="/contact" className="px-8 py-3 border border-staydia-gold text-staydia-gold font-bold rounded-lg hover:bg-staydia-gold/10 transition">En Savoir Plus</Link>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-staydia-black/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-staydia-gold">Le Streaming Sportif R\u00e9invent\u00e9</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4"><Camera className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" /><div><h3 className="font-bold text-lg mb-2">Cam\u00e9ra IA Gratuite</h3><p className="text-gray-300">Installation, maintenance et gestion compl\u00e8tes. Z\u00e9ro co\u00fbt d'\u00e9quipement.</p></div></div>
            <div className="flex gap-4"><Banknote className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" /><div><h3 className="font-bold text-lg mb-2">Revenus de Sponsoring</h3><p className="text-gray-300">Chaque \u20ac6,99 d'abonnement va directement \u00e0 votre club.</p></div></div>
            <div className="flex gap-4"><Play className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" /><div><h3 className="font-bold text-lg mb-2">En Direct & Replay</h3><p className="text-gray-300">Matchs en direct et replays disponibles \u00e0 tout moment.</p></div></div>
            <div className="flex gap-4"><Users className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" /><div><h3 className="font-bold text-lg mb-2">Engagement Communautaire</h3><p className="text-gray-300">Connectez avec les fans, attirez des sponsors locaux.</p></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-staydia-gold/10 border-t border-b border-staydia-gold/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-staydia-gold">Pr\u00eat pour le Streaming Professionnel?</h2>
          <Link to="/book-demo" className="inline-block px-10 py-4 bg-staydia-gold text-staydia-black font-bold text-lg rounded-lg hover:bg-yellow-400 transition">D\u00e9mo Gratuite</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default France;
