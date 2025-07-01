import React from "react";
import "./App.css";
import VCAIO from "@/pages/VCAIO";
import MAISP from "@/pages/MAISP";
import TRAIGA from "@/pages/TRAIGA";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "@/components/ScrollToTop";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PinProtection from "@/components/PinProtection";

// Pages
import Home from "@/pages";
import AboutUs from "@/pages/AboutUs";
import Solutions from "@/pages/Solutions";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/NotFound";
import Privacy from "@/pages/Privacy";
import TermsOfService from "@/pages/TermsOfService";

// Newsletter components
import UnsubscribePage from "@/components/newsletter/UnsubscribePage";
import PreferencesPage from "@/components/newsletter/PreferencesPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <ScrollToTop />
          <Navigation />
          <main className="flex-grow">
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              
              {/* Newsletter Management Routes */}
              <Route path="/unsubscribe" element={<UnsubscribePage />} />
              <Route path="/preferences" element={<PreferencesPage />} />
              
              {/* Legal Pages */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<TermsOfService />} />
              
              {/* Admin Route */}
              <Route path="/admin" element={<Admin />} />
              
              {/* VCAIO Routes */}
              <Route path="/vc-aio" element={<PinProtection><VCAIO /></PinProtection>} />
              <Route path="/vc-aio/:path" element={<PinProtection><VCAIO /></PinProtection>} />

              {/* MAISP Routes */}
              <Route path="/maisp" element={<PinProtection><MAISP /></PinProtection>} />
              <Route path="/maisp/:path" element={<PinProtection><MAISP /></PinProtection>} />

              {/* TRAIGA Routes */}
              <Route path="/traiga" element={<PinProtection><TRAIGA /></PinProtection>} />
              <Route path="/traiga/:path" element={<PinProtection><TRAIGA /></PinProtection>} />
              
              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
