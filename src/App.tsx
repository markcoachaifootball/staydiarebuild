
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Sports from './pages/Sports';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import ForLeagues from './pages/ForLeagues';
import RevenueSharing from './pages/RevenueSharing';
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
import { isSeoBotUserAgent } from '@/utils/isSeoBot';

function App() {
  useEffect(() => {
    // Avoid injecting third-party widgets during prerender/SEO bot rendering (can cause blank snapshots).
    if (isSeoBotUserAgent()) return;

    console.log('Initializing chatbot...');

    // Wait for the script to load
    const initChatbot = () => {
      console.log('Creating chatbot element...');
      const chatbot = document.createElement('co-pilot');
      chatbot.setAttribute('user-id', '9b1d2d71-60e8-4318-b9a6-797b96ead925');
      chatbot.setAttribute('chatbot-id', '602ffd9d-1806-4845-a3bb-b80709090732');
      chatbot.setAttribute('platform-id', '34581499-3f3d-4064-a3d1-6aa724875aec');
      chatbot.setAttribute('is-local', 'false');

      const link = document.createElement('a');
      link.href = 'https://www.chatsimple.ai/?utm_source=widget&utm_medium=referral';
      chatbot.appendChild(link);

      document.body.appendChild(chatbot);
      console.log('Chatbot element added to DOM');

      // Cleanup on unmount
      return () => {
        if (document.body.contains(chatbot)) {
          document.body.removeChild(chatbot);
        }
      };
    };

    // Check if the script is already loaded, if not wait for it
    if (document.querySelector('script[src="https://cdn.chatsimple.ai/ai-loader.js"]')) {
      // Script exists, wait a bit for it to initialize
      setTimeout(initChatbot, 2000);
    } else {
      // Script doesn't exist yet, try again in a moment
      setTimeout(() => {
        initChatbot();
      }, 3000);
    }
  }, []);

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
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/community" element={<Community />} />
        <Route path="/news" element={<News />} />

        <Route path="/news/:slug" element={<NewsArticlePage />} />
        <Route path="/termsandconditionsieV1" element={<TermsAndConditionsIE />} />
        <Route path="/termsandconditionsukV1" element={<TermsAndConditionsUK />} />
        <Route path="/termsandconditionsgbpv1" element={<TermsAndConditionsGBP />} />
        <Route path="/termsandconditionseurov1" element={<TermsAndConditionsEURO />} />
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
    </Router>
  );
}

export default App;

