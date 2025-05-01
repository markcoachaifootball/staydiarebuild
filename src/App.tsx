
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Technology from "./pages/Technology";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import Sports from "./pages/Sports";
import AboutUs from "./pages/AboutUs";
import News from "./pages/News";
import NewsArticlePage from "./components/NewsArticle";
import NotFound from "./pages/NotFound";
import Community from "./pages/Community";
import ForClubs from "./pages/ForClubs";
import ForLeagues from "./pages/ForLeagues";
import FootballClubs from "./pages/FootballClubs";
import RugbyClubs from "./pages/RugbyClubs";
import HockeyClubs from "./pages/HockeyClubs";
import BasketballClubs from "./pages/BasketballClubs";
import FAQ from "./pages/FAQ";
import Partnerships from "./pages/Partnerships";
import RevenueSharing from "./pages/RevenueSharing";
import FanEngagement from "./pages/FanEngagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsArticlePage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/for-clubs" element={<ForClubs />} />
          <Route path="/for-leagues" element={<ForLeagues />} />
          <Route path="/sports/football" element={<FootballClubs />} />
          <Route path="/sports/rugby" element={<RugbyClubs />} />
          <Route path="/sports/hockey" element={<HockeyClubs />} />
          <Route path="/sports/basketball" element={<BasketballClubs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/revenue-sharing" element={<RevenueSharing />} />
          <Route path="/fan-engagement" element={<FanEngagement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
