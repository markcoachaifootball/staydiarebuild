
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Sports from './pages/Sports';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import ForLeagues from './pages/ForLeagues';
import RevenueSharing from './pages/RevenueSharing';
import Technology from './pages/Technology';
import FanEngagement from './pages/FanEngagement';
import NotFound from './pages/NotFound';
import FAQ from './pages/FAQ';
import AboutUs from './pages/AboutUs';
import Testimonials from './pages/Testimonials';
import News from './pages/News';

import NewsArticlePage from './components/NewsArticle';
import { Toaster } from "@/components/ui/toaster";
import BookDemo from './pages/BookDemo';
import ForClubs from './pages/ForClubs';
import Community from './pages/Community';
import Auth from './pages/Auth';
import Contracts from './pages/Contracts';
import ContractTemplates from './pages/ContractTemplates';
import NewContract from './pages/NewContract';
import ContractView from './pages/ContractView';
import SignContract from './pages/SignContract';
import { ProtectedRoute } from './components/ProtectedRoute';
import TermsAndConditionsIE from './pages/TermsAndConditionsIE';
import TermsAndConditionsUK from './pages/TermsAndConditionsUK';
import TermsAndConditionsGBP from './pages/TermsAndConditionsGBP';
import TermsAndConditionsEURO from './pages/TermsAndConditionsEURO';
import TermsAndConditionsGBPv2 from './pages/TermsAndConditionsGBPv2';
import TermsAndConditionsEUROv2 from './pages/TermsAndConditionsEUROv2';
import TermsAndConditionsEUROv2German from './pages/TermsAndConditionsEUROv2German';
import { AIStickySearchBar, AIChatPanel } from './components/AIChat';

// Sport-specific pages (existing but previously unrouted)
import FootballClubs from './pages/FootballClubs';
import BasketballClubs from './pages/BasketballClubs';
import RugbyClubs from './pages/RugbyClubs';
import HockeyClubs from './pages/HockeyClubs';

// Market-specific landing pages
import UnitedKingdom from './pages/markets/UnitedKingdom';
import Ireland from './pages/markets/Ireland';
import Germany from './pages/markets/Germany';
import Spain from './pages/markets/Spain';
import France from './pages/markets/France';
import Netherlands from './pages/markets/Netherlands';
import Portugal from './pages/markets/Portugal';
import Italy from './pages/markets/Italy';

// Competitor comparison pages
import StaydiaVsPixellot from './pages/compare/StaydiaVsPixellot';
import StaydiaVsVeo from './pages/compare/StaydiaVsVeo';
import StaydiaVsSpiideo from './pages/compare/StaydiaVsSpiideo';
import StaydiaVsXbotgo from './pages/compare/StaydiaVsXbotgo';
import StaydiaVsSportway from './pages/compare/StaydiaVsSportway';

// Blog pages
import BlogIndex from './pages/blog/BlogIndex';
import BlogPost from './pages/blog/BlogPost';

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInitialQuery, setChatInitialQuery] = useState<string | undefined>();

  const handleOpenChat = (query?: string) => {
    setChatInitialQuery(query);
    setChatOpen(true);
  };

  return (
    <Router>
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/for-leagues" element={<ForLeagues />} />
        <Route path="/for-clubs" element={<ForClubs />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/revenue-sharing" element={<RevenueSharing />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/fan-engagement" element={<FanEngagement />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/community" element={<Community />} />
        <Route path="/news" element={<News />} />

        {/* Sport-specific pages */}
        <Route path="/football" element={<FootballClubs />} />
        <Route path="/basketball" element={<BasketballClubs />} />
        <Route path="/rugby" element={<RugbyClubs />} />
        <Route path="/field-hockey" element={<HockeyClubs />} />

        {/* Market-specific landing pages */}
        <Route path="/uk" element={<UnitedKingdom />} />
        <Route path="/ireland" element={<Ireland />} />
        <Route path="/germany" element={<Germany />} />
        <Route path="/spain" element={<Spain />} />
        <Route path="/france" element={<France />} />
        <Route path="/netherlands" element={<Netherlands />} />
        <Route path="/portugal" element={<Portugal />} />
        <Route path="/italy" element={<Italy />} />

        {/* Competitor comparison pages */}
        <Route path="/compare/staydia-vs-pixellot" element={<StaydiaVsPixellot />} />
        <Route path="/compare/staydia-vs-veo" element={<StaydiaVsVeo />} />
        <Route path="/compare/staydia-vs-spiideo" element={<StaydiaVsSpiideo />} />
        <Route path="/compare/staydia-vs-xbotgo" element={<StaydiaVsXbotgo />} />
        <Route path="/compare/staydia-vs-sportway" element={<StaydiaVsSportway />} />

        {/* Blog */}
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* News article */}
        <Route path="/news/:slug" element={<NewsArticlePage />} />

        {/* Legal / T&C */}
        <Route path="/termsandconditionsieV1" element={<TermsAndConditionsIE />} />
        <Route path="/termsandconditionsukV1" element={<TermsAndConditionsUK />} />
        <Route path="/termsandconditionsgbpv1" element={<TermsAndConditionsGBP />} />
        <Route path="/termsandconditionseurov1" element={<TermsAndConditionsEURO />} />
        <Route path="/termsandconditionsgbpv2" element={<TermsAndConditionsGBPv2 />} />
        <Route path="/termsandconditionseurov2" element={<TermsAndConditionsEUROv2 />} />
        <Route path="/termsandconditionseurov2de" element={<TermsAndConditionsEUROv2German />} />

        {/* Auth & contracts */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/contracts" element={<ProtectedRoute><Contracts /></ProtectedRoute>} />
        <Route path="/contracts/templates" element={<ProtectedRoute><ContractTemplates /></ProtectedRoute>} />
        <Route path="/contracts/new" element={<ProtectedRoute><NewContract /></ProtectedRoute>} />
        <Route path="/contracts/:id" element={<ProtectedRoute><ContractView /></ProtectedRoute>} />
        <Route path="/sign/:token" element={<SignContract />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
      {!chatOpen && <AIStickySearchBar onOpen={handleOpenChat} />}
      <AIChatPanel isOpen={chatOpen} onClose={() => setChatOpen(false)} initialQuery={chatInitialQuery} />
    </Router>
  );
}

export default App;
