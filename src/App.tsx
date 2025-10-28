
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { PortalAuthProvider } from "./hooks/usePortalAuth";

// Main Pages
import Index from "./pages/index";
import AboutUs from "./pages/AboutUs";
import StrategicAdvisors from "./pages/StrategicAdvisors";
import Apprenticeship from "./pages/Apprenticeship";
import Privacy from "./pages/Privacy";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./pages/Contact";
import TRAIGA from "./pages/TRAIGA";


// Blog & CMS Pages
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Admin from "./pages/Admin";

// Service Routes
import Services from "./pages/Services";
import Consulting from "./pages/Consulting";
import Training from "./pages/Training";
import GovAI from "./pages/GovAI";
import TranslateAI from "./pages/TranslateAI";
import EmbodiedAI from "./pages/EmbodiedAI";
import AILab from "./pages/AILab";

// CommunicationsAI Routes
import CommunicationsAI from "./pages/communicationsai/Index";
import TextAI from "./pages/communicationsai/TextAI";
import TextAIForGood from "./pages/communicationsai/TextAIForGood";
import VoiceAI from "./pages/communicationsai/VoiceAI";
import AvatarAI from "./pages/communicationsai/AvatarAI";
import AutomateAI from "./pages/communicationsai/AutomateAI";

// Legacy MAISP Routes (for reference)
import VendorAI from "./pages/maisp/VendorAI";
import MediaAI from "./pages/maisp/MediaAI";
import MediaAIEquipmentProtected from "./pages/maisp/MediaAIEquipmentProtected";

// Consulting Sub-Pages
import Launch from "./pages/consulting/Launch";
import Adopt from "./pages/consulting/Adopt";
import Enable from "./pages/consulting/Enable";

// Portal Routes
import PortalIndex from "./pages/portal/Index";
import PortalAuth from "./pages/portal/Auth";
import Organizations from "./pages/portal/Organizations";
import OrganizationForm from "./pages/portal/OrganizationForm";
import Users from "./pages/portal/Users";

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
                
                {/* Service Routes */}
                <Route path="/services" element={<Services />} />
                <Route path="/consulting" element={<Consulting />} />
                <Route path="/communicationsai" element={<CommunicationsAI />} />
                <Route path="/communicationsai/automateai" element={<AutomateAI />} />
                <Route path="/communicationsai/avatarai" element={<AvatarAI />} />
                <Route path="/communicationsai/textai" element={<TextAI />} />
                <Route path="/communicationsai/textai/textaiforgood" element={<TextAIForGood />} />
                <Route path="/communicationsai/voiceai" element={<VoiceAI />} />
                <Route path="/translateai" element={<TranslateAI />} />
                <Route path="/ailab" element={<AILab />} />
                <Route path="/training" element={<Training />} />
                <Route path="/embodiedai" element={<EmbodiedAI />} />
                <Route path="/govai" element={<GovAI />} />
                
                {/* Redirects from old routes */}
                <Route path="/maisp" element={<Navigate to="/services" replace />} />
                <Route path="/maisp/textai" element={<Navigate to="/communicationsai/textai" replace />} />
                <Route path="/maisp/textai/textaiforgood" element={<Navigate to="/communicationsai/textai/textaiforgood" replace />} />
                <Route path="/maisp/voiceai" element={<Navigate to="/communicationsai/voiceai" replace />} />
                <Route path="/maisp/avatarai" element={<Navigate to="/communicationsai/avatarai" replace />} />
                <Route path="/maisp/automateai" element={<Navigate to="/communicationsai/automateai" replace />} />
                <Route path="/maisp/embodied-ai" element={<Navigate to="/embodiedai" replace />} />
                <Route path="/maisp/humaniodai" element={<Navigate to="/embodiedai" replace />} />
                <Route path="/maisp/humanoid-ai" element={<Navigate to="/embodiedai" replace />} />
                <Route path="/maisp/translateai" element={<Navigate to="/translateai" replace />} />
                <Route path="/maisp/vendorai" element={<VendorAI />} />
                <Route path="/maisp/mediaai" element={<MediaAI />} />
                <Route path="/maisp/mediaai/equipment" element={<MediaAIEquipmentProtected />} />
                
                {/* Consulting Sub-Routes */}
                <Route path="/consulting/launch" element={<Launch />} />
                <Route path="/consulting/adopt" element={<Adopt />} />
                <Route path="/consulting/enable" element={<Enable />} />
                
                {/* Legacy vCAIO Routes - redirect to consulting */}
                <Route path="/vcaio" element={<Navigate to="/consulting" replace />} />
                <Route path="/vcaio/chiefaiofficer" element={<Navigate to="/consulting" replace />} />
                <Route path="/vcaio/launch" element={<Navigate to="/consulting/launch" replace />} />
                <Route path="/vcaio/adopt" element={<Navigate to="/consulting/adopt" replace />} />
                <Route path="/vcaio/enable" element={<Navigate to="/consulting/enable" replace />} />
                
                {/* Blog & CMS Routes */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/admin" element={<Admin />} />
                
                {/* Portal Routes */}
                <Route path="/portal" element={<PortalIndex />} />
                <Route path="/portal/auth" element={<PortalAuth />} />
                <Route path="/portal/organizations" element={<Organizations />} />
                <Route path="/portal/organizations/new" element={<OrganizationForm />} />
                <Route path="/portal/organizations/:id/edit" element={<OrganizationForm />} />
                <Route path="/portal/users" element={<Users />} />
                
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
          <PortalAuthProvider>
            <Toaster />
            <Sonner />
            <AppContent />
          </PortalAuthProvider>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
