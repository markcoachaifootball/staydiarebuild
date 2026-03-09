
import React, { useEffect } from 'react';
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
import { isSeoBotUserAgent } from '@/utils/isSeoBot';
import { AIChat } from './components/AIChat';

function App() {
  return (
    <Router>
      <Routes>
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

        <Route path="/news/:slug" element={<NewsArticlePage />} />
        <Route path="/termsandconditionsieV1" element={<TermsAndConditionsIE />} />
        <Route path="/termsandconditionsukV1" element={<TermsAndConditionsUK />} />
        <Route path="/termsandconditionsgbpv1" element={<TermsAndConditionsGBP />} />
        <Route path="/termsandconditionseurov1" element={<TermsAndConditionsEURO />} />
        <Route path="/termsandconditionsgbpv2" element={<TermsAndConditionsGBPv2 />} />
        <Route path="/termsandconditionseurov2" element={<TermsAndConditionsEUROv2 />} />
        <Route path="/termsandconditionseurov2de" element={<TermsAndConditionsEUROv2German />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/contracts"
          element={
            <ProtectedRoute>
              <Contracts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contracts/templates"
          element={
            <ProtectedRoute>
              <ContractTemplates />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contracts/new"
          element={
            <ProtectedRoute>
              <NewContract />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contracts/:id"
          element={
            <ProtectedRoute>
              <ContractView />
            </ProtectedRoute>
          }
        />
        <Route path="/sign/:token" element={<SignContract />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
      <AIChat />
    </Router>
  );
}

export default App;

