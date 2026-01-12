
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { PortalAuthProvider } from "./hooks/usePortalAuth";
import { CartProvider } from "./contexts/CartContext";

// Main Pages
import Index from "./pages/index";
import AboutUs from "./pages/AboutUs";
import StrategicAdvisors from "./pages/StrategicAdvisors";
import Apprenticeship from "./pages/Apprenticeship";
import Internship from "./pages/Internship";
import Jobs from "./pages/Jobs";
import Privacy from "./pages/Privacy";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./pages/Contact";
import TRAIGA from "./pages/TRAIGA";


// Blog & CMS Pages
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Admin from "./pages/Admin";
import ExtractCourseMetadata from "./pages/admin/ExtractCourseMetadata";

// Service Routes
import Services from "./pages/Services";
import Consulting from "./pages/Consulting";
import Training from "./pages/Training";
import TrainingCatalogue from "./pages/TrainingCatalogue";
import HB3512 from "./pages/training/HB3512";
import GovAI from "./pages/GovAI";
import TranslateAI from "./pages/TranslateAI";
import Robotics from "./pages/Robotics";
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
import CourseOutline from "./pages/portal/CourseOutline";
import Checkout from "./pages/portal/Checkout";
import PurchaseSuccess from "./pages/portal/PurchaseSuccess";

// Civic Marketplace
import CivicGift from "./pages/civicmarketplace/Gift";

// Proposals
import ProposalsManager from "./pages/proposals/ProposalsManager";
import ProposalsAuth from "./pages/proposals/ProposalsAuth";
import NewProposal from "./pages/proposals/NewProposal";
import ProposalView from "./pages/proposals/ProposalView";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isPortalRoute = location.pathname.startsWith('/portal');
  const isProposalRoute = location.pathname.startsWith('/proposal') || location.pathname.startsWith('/proposals');

  return (
    <div className="flex flex-col min-h-screen">
      {!isPortalRoute && !isProposalRoute && <Navigation />}
      <ScrollToTop />
      <main className="flex-grow">
              <Routes>
                {/* Main Routes */}
                <Route path="/" element={<Index />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/about-us/strategic-advisors" element={<StrategicAdvisors />} />
                <Route path="/about-us/apprenticeship" element={<Apprenticeship />} />
                <Route path="/about-us/internship" element={<Internship />} />
                <Route path="/about-us/jobs" element={<Jobs />} />
                
                {/* Redirects from old about URLs */}
                <Route path="/aboutus" element={<Navigate to="/about-us" replace />} />
                <Route path="/aboutus/strategic-advisors" element={<Navigate to="/about-us/strategic-advisors" replace />} />
                <Route path="/aboutus/apprenticeship" element={<Navigate to="/about-us/apprenticeship" replace />} />
                <Route path="/about/apprentice" element={<Navigate to="/about-us/apprenticeship" replace />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/traiga" element={<TRAIGA />} />
                
                {/* Service Routes */}
                <Route path="/services" element={<Services />} />
                <Route path="/consulting" element={<Consulting />} />
                <Route path="/communications-ai" element={<CommunicationsAI />} />
                <Route path="/communications-ai/automate-ai" element={<AutomateAI />} />
                <Route path="/communications-ai/avatar-ai" element={<AvatarAI />} />
                <Route path="/communications-ai/text-ai" element={<TextAI />} />
                <Route path="/communications-ai/text-ai/textai-for-good" element={<TextAIForGood />} />
                <Route path="/communications-ai/voice-ai" element={<VoiceAI />} />
                <Route path="/translateai" element={<TranslateAI />} />
                <Route path="/ailab" element={<AILab />} />
                <Route path="/training" element={<Training />} />
                <Route path="/training/catalogue" element={<TrainingCatalogue />} />
                <Route path="/training/hb3512" element={<HB3512 />} />
                <Route path="/robotics" element={<Robotics />} />
                <Route path="/govai" element={<GovAI />} />
                
                {/* Redirects from old routes */}
                <Route path="/maisp" element={<Navigate to="/services" replace />} />
                <Route path="/communicationsai" element={<Navigate to="/communications-ai" replace />} />
                <Route path="/communicationsai/automateai" element={<Navigate to="/communications-ai/automate-ai" replace />} />
                <Route path="/communicationsai/avatarai" element={<Navigate to="/communications-ai/avatar-ai" replace />} />
                <Route path="/communicationsai/textai" element={<Navigate to="/communications-ai/text-ai" replace />} />
                <Route path="/communicationsai/textai/textaiforgood" element={<Navigate to="/communications-ai/text-ai/textai-for-good" replace />} />
                <Route path="/communicationsai/voiceai" element={<Navigate to="/communications-ai/voice-ai" replace />} />
                <Route path="/maisp/textai" element={<Navigate to="/communications-ai/text-ai" replace />} />
                <Route path="/maisp/textai/textaiforgood" element={<Navigate to="/communications-ai/text-ai/textai-for-good" replace />} />
                <Route path="/maisp/voiceai" element={<Navigate to="/communications-ai/voice-ai" replace />} />
                <Route path="/maisp/avatarai" element={<Navigate to="/communications-ai/avatar-ai" replace />} />
                <Route path="/maisp/automateai" element={<Navigate to="/communications-ai/automate-ai" replace />} />
                <Route path="/maisp/embodied-ai" element={<Navigate to="/robotics" replace />} />
                <Route path="/maisp/humaniodai" element={<Navigate to="/robotics" replace />} />
                <Route path="/maisp/humanoid-ai" element={<Navigate to="/robotics" replace />} />
                <Route path="/embodiedai" element={<Navigate to="/robotics" replace />} />
                <Route path="/maisp/translateai" element={<Navigate to="/translateai" replace />} />
                <Route path="/maisp/vendorai" element={<VendorAI />} />
                <Route path="/maisp/mediaai" element={<MediaAI />} />
                <Route path="/maisp/mediaai/equipment" element={<MediaAIEquipmentProtected />} />
                
                {/* Consulting Sub-Routes */}
                <Route path="/consulting/launch" element={<Launch />} />
                <Route path="/consulting/adopt" element={<Adopt />} />
                <Route path="/consulting/enable" element={<Enable />} />
                
                {/* Blog & CMS Routes */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/extract-metadata" element={<ExtractCourseMetadata />} />
                
                {/* Portal Routes */}
                <Route path="/portal" element={<PortalIndex />} />
                <Route path="/portal/login" element={<Navigate to="/portal/auth" replace />} />
                <Route path="/portal/auth" element={<PortalAuth />} />
                <Route path="/portal/course-outline/:slug" element={<CourseOutline />} />
                <Route path="/portal/checkout" element={<Checkout />} />
                <Route path="/portal/purchase-success" element={<PurchaseSuccess />} />
                <Route path="/portal/organizations" element={<Organizations />} />
                <Route path="/portal/organizations/new" element={<OrganizationForm />} />
                <Route path="/portal/organizations/:id/edit" element={<OrganizationForm />} />
                <Route path="/portal/users" element={<Users />} />
                
                {/* Proposal Generator Routes */}
                <Route path="/proposals" element={<ProposalsManager />} />
                <Route path="/proposals/auth" element={<ProposalsAuth />} />
                <Route path="/proposals/new" element={<NewProposal />} />
                <Route path="/proposal/:slug" element={<ProposalView />} />
                
                {/* Civic Marketplace (unlisted) */}
                <Route path="/civicmarketplace/gift" element={<CivicGift />} />
                <Route path="/civicmarketplace/gift/admin" element={<CivicGift />} />
                
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
                
                {/* Redirect /about to /about-us */}
                <Route path="/about" element={<Navigate to="/about-us" replace />} />
              </Routes>
            </main>
            {!isPortalRoute && !isProposalRoute && <Footer />}
          </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <PortalAuthProvider>
            <CartProvider>
              <Toaster />
              <Sonner />
              <AppContent />
            </CartProvider>
          </PortalAuthProvider>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
