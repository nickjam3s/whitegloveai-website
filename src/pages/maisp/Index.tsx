
import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import PatentedExpertise from "./components/PatentedExpertise";
import ServicesSection from "./components/ServicesSection";
import CaseStudy from "./components/CaseStudy";
import SupportSection from "./components/SupportSection";
import ScalableSolutions from "./components/ScalableSolutions";

const MAISP = () => {
  useEffect(() => {
    // Load Typeform
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PatentedExpertise />
      <ServicesSection />
      <CaseStudy />
      <SupportSection />
      <ScalableSolutions />
      
      {/* Typeform Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div data-tf-live="01JMAMXNY7NHGYM2YQDXCDRDW6"></div>
        </div>
      </section>
    </div>
  );
};

export default MAISP;
