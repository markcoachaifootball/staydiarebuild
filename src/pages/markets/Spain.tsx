import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useAIMetaTags } from '@/hooks/useAIMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import { Camera, Play, TrendingUp, Banknote, Users, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Spain: React.FC = () => {
  useScrollToTop();
  useAIMetaTags({
    title: 'C\u00e1mara Deportiva IA y Streaming en Vivo para Clubes en Espa\u00f1a',
    description: 'Sistemas de c\u00e1mara IA GRATUITOS para clubes de f\u00fatbol base en Espa\u00f1a. Streaming en vivo, genera ingresos de suscripciones de fans a \u20ac6,99/mes. RFEF aprobado. 100% de ingresos para tu club.',
    keywords: 'streaming deportivo Espa\u00f1a, c\u00e1mara IA f\u00fatbol, streaming f\u00fatbol base Espa\u00f1a, RFEF streaming, liga regional streaming, deporte amateur Espa\u00f1a'
  });
  useStructuredData({ type: 'Organization' });

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            C\u00e1mara Deportiva IA para Clubes en <span className="text-staydia-gold">Espa\u00f1a</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Staydia lleva el broadcasting profesional al deporte base espa\u00f1ol. C\u00e1maras IA GRATUITAS. Gana \u20ac6,99/mes por suscripci\u00f3n. 
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/book-demo" className="px-8 py-3 bg-staydia-gold text-staydia-black font-bold rounded-lg hover:bg-yellow-400 transition">Reservar Demo</Link>
            <Link to="/contact" className="px-8 py-3 border border-staydia-gold text-staydia-gold font-bold rounded-lg hover:bg-staydia-gold/10 transition">Saber M\u00e1s</Link>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-staydia-black/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-staydia-gold">Streaming Deportivo Reinventado</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4"><Camera className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" /><div><h3 className="font-bold text-lg mb-2">C\u00e1mara IA Gratuita</h3><p className="text-gray-300">Instalaci\u00f3n, mantenimiento y gesti\u00f3n completa. Sin costes de equipamiento.</p></div></div>
            <div className="flex gap-4"><Banknote className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" /><div><h3 className="font-bold text-lg mb-2">Ingresos por Patrocinio</h3><p className="text-gray-300">Cada \u20ac6,99 de suscripciones mensuales va directamente a tu club.</p></div></div>
            <div className="flex gap-4"><Play className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" /><div><h3 className="font-bold text-lg mb-2">En Vivo y Bajo Demanda</h3><p className="text-gray-300">Partidos en directo y repeticiones disponibles en cualquier momento.</p></div></div>
            <div className="flex gap-4"><Users className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" /><div><h3 className="font-bold text-lg mb-2">Comunidad y Patrocinadores</h3><p className="text-gray-300">Conecta con fans, atrae patrocinadores locales y haz crecer tu club.</p></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-staydia-gold/10 border-t border-b border-staydia-gold/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-staydia-gold">\u00bfListo para el Streaming Profesional?</h2>
          <Link to="/book-demo" className="inline-block px-10 py-4 bg-staydia-gold text-staydia-black font-bold text-lg rounded-lg hover:bg-yellow-400 transition">Reservar Demo Gratuita</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Spain;
