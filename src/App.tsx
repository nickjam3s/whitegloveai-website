
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";

// Main Pages
import Index from "./pages/Index";
import About from "./pages/About";

// MAISP (Managed AI Services) Routes
import MAISP from "./pages/maisp/Index";
import TextAI from "./pages/maisp/TextAI";
import TextAIForGood from "./pages/maisp/TextAIForGood";
import VoiceAI from "./pages/maisp/VoiceAI";
import AvatarAI from "./pages/maisp/AvatarAI";
import AutomateAI from "./pages/maisp/AutomateAI";
import HumanoidAI from "./pages/maisp/HumanoidAI";
import VendorAI from "./pages/maisp/VendorAI";

// vCAIO Routes
import VCAIO from "./pages/vcaio/Index";
import OurVCAIOs from "./pages/vcaio/OurVCAIOs";
import Donnie from "./pages/vcaio/Donnie";
import Jason from "./pages/vcaio/Jason";
import Albert from "./pages/vcaio/Albert";
import Launch from "./pages/vcaio/Launch";
import Adopt from "./pages/vcaio/Adopt";
import Enable from "./pages/vcaio/Enable";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          
          {/* MAISP Routes */}
          <Route path="/maisp" element={<MAISP />} />
          <Route path="/maisp/textai" element={<TextAI />} />
          <Route path="/maisp/textaiforgood" element={<TextAIForGood />} />
          <Route path="/maisp/voiceai" element={<VoiceAI />} />
          <Route path="/maisp/avatarai" element={<AvatarAI />} />
          <Route path="/maisp/automateai" element={<AutomateAI />} />
          <Route path="/maisp/humaniodai" element={<HumanoidAI />} />
          <Route path="/maisp/vendorai" element={<VendorAI />} />
          
          {/* vCAIO Routes */}
          <Route path="/vcaio" element={<VCAIO />} />
          <Route path="/vcaio/our-vcaios" element={<OurVCAIOs />} />
          <Route path="/vcaio/donnie" element={<Donnie />} />
          <Route path="/vcaio/jason" element={<Jason />} />
          <Route path="/vcaio/albert" element={<Albert />} />
          <Route path="/vcaio/launch" element={<Launch />} />
          <Route path="/vcaio/adopt" element={<Adopt />} />
          <Route path="/vcaio/enable" element={<Enable />} />
          
          {/* External Redirects */}
          <Route
            path="/aiamf"
            element={<Navigate to="https://aiamf.ai" replace />}
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
