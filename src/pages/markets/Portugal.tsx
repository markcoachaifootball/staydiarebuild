import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useAIMetaTags } from '@/hooks/useAIMetaTags';
import { useStructuredData } from '@/hooks/useStructuredData';
import { Camera, Play, TrendingUp, Banknote, Users, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portugal: React.FC = () => {
  useScrollToTop();
  useAIMetaTags({
    title: 'Câmara Desportiva IA e Streaming ao Vivo para Clubes em Portugal',
    description: 'Câmaras desportivas de IA grátis para clubes de futebol, rugby e desportos em Portugal. Streaming profissional em direto. Ganhe com assinantes de fãs. Aprovado pela FPF.',
    keywords: 'streaming desporto Portugal, câmara desportiva IA Portugal, streaming futebol clubs Portugal, futebol amador streaming'
  });
  useStructuredData({ type: 'Organization' });

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Câmara Desportiva IA e Streaming ao Vivo para Clubes em <span className="text-staydia-gold">Portugal</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Staydia leva transmissões profissionais a cada clube português. Câmaras de IA grátis, instaladas por nós. Ganhe â¬6,99/mês por assinante—patrocínio para o seu clube.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/book-demo" className="px-8 py-3 bg-staydia-gold text-staydia-black font-bold rounded-lg hover:bg-yellow-400 transition">Marcar Demo</Link>
            <Link to="/contact" className="px-8 py-3 border border-staydia-gold text-staydia-gold font-bold rounded-lg hover:bg-staydia-gold/10 transition">Saber Mais</Link>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-staydia-black/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-staydia-gold">O Futebol Amador Português Merece Visibilidade</h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>Portugal tem tradiÃ§ão desportiva profunda. Do futebol das distritais aos clubes de formaÃ§ão, cada jogo merece ser visto. Staydia traz transmissão profissional a todos.</p>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-staydia-gold">O que os Clubes Portugueses Obtêm</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Camera className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
              <div><h3 className="font-bold text-lg mb-2">Câmara de IA Grátis</h3><p className="text-gray-300">Sem custo de equipamento, sem taxas de instalaÃ§ão. Nós cuidamos de tudo.</p></div>
            </div>
            <div className="flex gap-4">
              <Banknote className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
              <div><h3 className="font-bold text-lg mb-2">Receitas de Patrocínio</h3><p className="text-gray-300">Os banners de patrocínio geram receitas diretamente para o seu clube.</p></div>
            </div>
            <div className="flex gap-4">
              <Play className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
              <div><h3 className="font-bold text-lg mb-2">Streaming em Direto e Sob Procura</h3><p className="text-gray-300">Os fãs veem em direto. GravaÃ§ões para análise tática.</p></div>
            </div>
            <div className="flex gap-4">
              <Users className="h-8 w-8 text-staydia-gold flex-shrink-0 mt-1" />
              <div><h3 className="font-bold text-lg mb-2">Comunidade e MonetizaÃ§ão</h3><p className="text-gray-300">Empresas locais patrocinam suas transmissões. Os fãs apoiam o clube.</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-staydia-gold/10 border-t border-b border-staydia-gold/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-staydia-gold">Pronto para Levar Seu Clube ao Próximo NÃ­vel?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Clubes portugueses já estão transmitindo, ganhando e construindo suas comunidades.</p>
          <Link to="/book-demo" className="inline-block px-10 py-4 bg-staydia-gold text-staydia-black font-bold text-lg rounded-lg hover:bg-yellow-400 transition">Marcar Demo Gratuita</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portugal;
