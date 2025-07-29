
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
import IrishFootball from './pages/IrishFootball';
import NewsArticlePage from './components/NewsArticle';
import { Toaster } from "@/components/ui/toaster"
import BookDemo from './pages/BookDemo';
import ForClubs from './pages/ForClubs';
import Auth from './pages/Auth';
import Contracts from './pages/Contracts';
import ContractTemplates from './pages/ContractTemplates';
import NewContract from './pages/NewContract';
import ContractView from './pages/ContractView';
import SignContract from './pages/SignContract';

function App() {
  useEffect(() => {
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
        <Route path="/news" element={<News />} />
        <Route path="/irish-football" element={<IrishFootball />} />
        <Route path="/news/:slug" element={<NewsArticlePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/contracts/templates" element={<ContractTemplates />} />
        <Route path="/contracts/new" element={<NewContract />} />
        <Route path="/contracts/:id" element={<ContractView />} />
        <Route path="/sign/:token" element={<SignContract />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
