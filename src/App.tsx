
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
import BrandKit from "./pages/BrandKit";


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
import GovernmentPack from "./pages/training/GovernmentPack";
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

// MAISP Routes
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
import ProposalDetails from "./pages/proposals/ProposalDetails";

// Not Found
import NotFound from "./pages/NotFound";

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
                <Route path="/brand-kit" element={<BrandKit />} />
                
                {/* Service Routes */}
                <Route path="/services" element={<Services />} />
                <Route path="/consulting" element={<Consulting />} />
                <Route path="/govai" element={<GovAI />} />
                
                {/* MAISP Primary Routes */}
                <Route path="/maisp" element={<Navigate to="/services" replace />} />
                <Route path="/maisp/communications-ai" element={<CommunicationsAI />} />
                <Route path="/maisp/communications-ai/text-ai" element={<TextAI />} />
                <Route path="/maisp/communications-ai/text-ai/textai-for-good" element={<TextAIForGood />} />
                <Route path="/maisp/communications-ai/voice-ai" element={<VoiceAI />} />
                <Route path="/maisp/communications-ai/avatar-ai" element={<AvatarAI />} />
                <Route path="/maisp/communications-ai/automate-ai" element={<AutomateAI />} />
                <Route path="/maisp/translate-ai" element={<TranslateAI />} />
                <Route path="/maisp/ai-lab" element={<AILab />} />
                <Route path="/maisp/training" element={<Training />} />
                <Route path="/maisp/training/catalogue" element={<TrainingCatalogue />} />
                <Route path="/maisp/training/hb3512" element={<HB3512 />} />
                <Route path="/maisp/training/government-pack" element={<GovernmentPack />} />
                <Route path="/maisp/robotics" element={<Robotics />} />
                <Route path="/maisp/vendor-ai" element={<VendorAI />} />
                <Route path="/maisp/media-ai" element={<MediaAI />} />
                <Route path="/maisp/media-ai/equipment" element={<MediaAIEquipmentProtected />} />
                
                {/* Redirects from old /communications-ai/* routes */}
                <Route path="/communications-ai" element={<Navigate to="/maisp/communications-ai" replace />} />
                <Route path="/communications-ai/text-ai" element={<Navigate to="/maisp/communications-ai/text-ai" replace />} />
                <Route path="/communications-ai/text-ai/textai-for-good" element={<Navigate to="/maisp/communications-ai/text-ai/textai-for-good" replace />} />
                <Route path="/communications-ai/voice-ai" element={<Navigate to="/maisp/communications-ai/voice-ai" replace />} />
                <Route path="/communications-ai/avatar-ai" element={<Navigate to="/maisp/communications-ai/avatar-ai" replace />} />
                <Route path="/communications-ai/automate-ai" element={<Navigate to="/maisp/communications-ai/automate-ai" replace />} />
                
                {/* Redirects from old /communicationsai/* routes (legacy non-hyphenated) */}
                <Route path="/communicationsai" element={<Navigate to="/maisp/communications-ai" replace />} />
                <Route path="/communicationsai/automateai" element={<Navigate to="/maisp/communications-ai/automate-ai" replace />} />
                <Route path="/communicationsai/avatarai" element={<Navigate to="/maisp/communications-ai/avatar-ai" replace />} />
                <Route path="/communicationsai/textai" element={<Navigate to="/maisp/communications-ai/text-ai" replace />} />
                <Route path="/communicationsai/textai/textaiforgood" element={<Navigate to="/maisp/communications-ai/text-ai/textai-for-good" replace />} />
                <Route path="/communicationsai/voiceai" element={<Navigate to="/maisp/communications-ai/voice-ai" replace />} />
                
                {/* Redirects from old /maisp/* non-hyphenated routes */}
                <Route path="/maisp/textai" element={<Navigate to="/maisp/communications-ai/text-ai" replace />} />
                <Route path="/maisp/textai/textaiforgood" element={<Navigate to="/maisp/communications-ai/text-ai/textai-for-good" replace />} />
                <Route path="/maisp/voiceai" element={<Navigate to="/maisp/communications-ai/voice-ai" replace />} />
                <Route path="/maisp/avatarai" element={<Navigate to="/maisp/communications-ai/avatar-ai" replace />} />
                <Route path="/maisp/automateai" element={<Navigate to="/maisp/communications-ai/automate-ai" replace />} />
                <Route path="/maisp/vendorai" element={<Navigate to="/maisp/vendor-ai" replace />} />
                <Route path="/maisp/mediaai" element={<Navigate to="/maisp/media-ai" replace />} />
                <Route path="/maisp/mediaai/equipment" element={<Navigate to="/maisp/media-ai/equipment" replace />} />
                
                {/* Redirects from old flat routes */}
                <Route path="/translateai" element={<Navigate to="/maisp/translate-ai" replace />} />
                <Route path="/ailab" element={<Navigate to="/maisp/ai-lab" replace />} />
                <Route path="/training" element={<Navigate to="/maisp/training" replace />} />
                <Route path="/training/catalogue" element={<Navigate to="/maisp/training/catalogue" replace />} />
                <Route path="/training/hb3512" element={<Navigate to="/maisp/training/hb3512" replace />} />
                <Route path="/robotics" element={<Navigate to="/maisp/robotics" replace />} />
                <Route path="/embodiedai" element={<Navigate to="/maisp/robotics" replace />} />
                <Route path="/maisp/embodied-ai" element={<Navigate to="/maisp/robotics" replace />} />
                <Route path="/maisp/humaniodai" element={<Navigate to="/maisp/robotics" replace />} />
                <Route path="/maisp/humanoid-ai" element={<Navigate to="/maisp/robotics" replace />} />
                <Route path="/maisp/translateai" element={<Navigate to="/maisp/translate-ai" replace />} />
                
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
                <Route path="/proposals/:id" element={<ProposalDetails />} />
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
                
                {/* Catch-all route for 404 */}
                <Route path="*" element={<NotFound />} />
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
