
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Main Pages
import Index from "./pages/index";
import AboutUs from "./pages/AboutUs";
import StrategicAdvisors from "./pages/StrategicAdvisors";
import Apprenticeship from "./pages/Apprenticeship";
import Privacy from "./pages/Privacy";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./pages/Contact";
import TRAIGA from "./pages/TRAIGA";
import Portal from "./pages/Portal";

// Blog & CMS Pages
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Admin from "./pages/Admin";

// MAISP (Managed AI Services) Routes
import MAISP from "./pages/maisp/Index";
import TextAI from "./pages/maisp/TextAI";
import TextAIForGood from "./pages/maisp/TextAIForGood";
import VoiceAI from "./pages/maisp/VoiceAI";
import AvatarAI from "./pages/maisp/AvatarAI";
import AutomateAI from "./pages/maisp/AutomateAI";
import HumanoidAI from "./pages/maisp/HumanoidAI";
import VendorAI from "./pages/maisp/VendorAI";
import MediaAI from "./pages/maisp/MediaAI";
import MediaAIEquipmentProtected from "./pages/maisp/MediaAIEquipmentProtected";
import TranslateAI from "./pages/maisp/TranslateAI";

// vCAIO Routes
import VCAIO from "./pages/vcaio/Index";
import ChiefAIOfficer from "./pages/vcaio/ChiefAIOfficer";
import Launch from "./pages/vcaio/Launch";
import LaunchAI from "./pages/vcaio/LaunchAI";
import Adopt from "./pages/vcaio/Adopt";
import Enable from "./pages/vcaio/Enable";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isPortalRoute = location.pathname.startsWith('/portal');

  return (
    <div className="flex flex-col min-h-screen">
      {!isPortalRoute && <Navigation />}
      <ScrollToTop />
      <main className="flex-grow">
              <Routes>
                {/* Main Routes */}
                <Route path="/" element={<Index />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/aboutus/strategic-advisors" element={<StrategicAdvisors />} />
                <Route path="/aboutus/apprenticeship" element={<Apprenticeship />} />
                <Route path="/about/apprentice" element={<Apprenticeship />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/traiga" element={<TRAIGA />} />
                <Route path="/portal" element={<Portal />} />
                
                {/* Blog & CMS Routes */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/admin" element={<Admin />} />
                
                {/* MAISP Routes */}
                <Route path="/maisp" element={<MAISP />} />
                <Route path="/maisp/textai" element={<TextAI />} />
                <Route path="/maisp/textai/textaiforgood" element={<TextAIForGood />} />
                <Route path="/maisp/voiceai" element={<VoiceAI />} />
                <Route path="/maisp/avatarai" element={<AvatarAI />} />
                <Route path="/maisp/automateai" element={<AutomateAI />} />
                <Route path="/maisp/humaniodai" element={<HumanoidAI />} />
                <Route path="/maisp/vendorai" element={<VendorAI />} />
                <Route path="/maisp/mediaai" element={<MediaAI />} />
                <Route path="/maisp/mediaai/equipment" element={<MediaAIEquipmentProtected />} />
                <Route path="/maisp/translateai" element={<TranslateAI />} />
                
                {/* vCAIO Routes */}
                <Route path="/vcaio" element={<VCAIO />} />
                <Route path="/vcaio/chiefaiofficer" element={<ChiefAIOfficer />} />
                <Route path="/vcaio/launch" element={<Launch />} />
                <Route path="/vcaio/launchai" element={<LaunchAI />} />
                <Route path="/vcaio/adopt" element={<Adopt />} />
                <Route path="/vcaio/enable" element={<Enable />} />
                
                {/* External Redirects */}
                <Route
                  path="/aiamf"
                  element={<Navigate to="http://www.aiamf.ai" replace />}
                />
                <Route
                  path="/aipolicy"
                  element={<Navigate to="https://polaicy.com" replace />}
                />
                <Route
                  path="/lucidis"
                  element={<Navigate to="https://lucidis.ai" replace />}
                />
                
                {/* Redirect /about to /aboutus since we're removing the About page */}
                <Route path="/about" element={<Navigate to="/aboutus" replace />} />
              </Routes>
            </main>
            {!isPortalRoute && <Footer />}
          </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AppContent />
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
