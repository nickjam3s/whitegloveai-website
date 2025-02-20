
import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import PatentedExpertise from "./components/PatentedExpertise";
import ServicesSection from "./components/ServicesSection";
import CaseStudy from "./components/CaseStudy";
import SupportSection from "./components/SupportSection";
import ScalableSolutions from "./components/ScalableSolutions";

const MAISP = () => {
  useEffect(() => {
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
      
      {/* Contact Form Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-semibold text-primary mb-4">GET IN TOUCH</h2>
          <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-12 heading-highlight">
            Contact Us About Your AI Journey
          </h3>
          <div data-tf-live="01JMAMXNY7NHGYM2YQDXCDRDW6"></div>
        </div>
      </section>
    </div>
  );
};

export default MAISP;
