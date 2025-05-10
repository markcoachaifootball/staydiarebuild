
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Sports from './pages/Sports';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import ForLeagues from './pages/ForLeagues';
import RevenueSharing from './pages/RevenueSharing';
import NotFound from './pages/NotFound';
import FAQ from './pages/FAQ'; // Updated to match the correct case of the file
import { Toaster } from "@/components/ui/toaster"
import BookDemo from './pages/BookDemo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/for-leagues" element={<ForLeagues />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/revenue-sharing" element={<RevenueSharing />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
