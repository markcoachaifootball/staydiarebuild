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
    description: 'FREE AI camera systems for grassroots football clubs in the UK. Earn revenue from fans. No hardware costs.',
    keywords: 'grassroots sports streaming UK, AI camera football UK, live stream amateur football UK'
  });
  useStructuredData({ type: 'Organization' });
  return (<div className="min-h-screen bg-staydia-black text-white"><Header /><section className="pt-32 pb-20 px-4"><div className="max-w-4xl mx-auto text-center"><h1 className="text-4xl font-bold mb-6">AI Sports Camera for UK Clubs</h1></div></section><Footer /></div>);
};
export default UnitedKingdom;
