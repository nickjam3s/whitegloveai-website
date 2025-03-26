
import { useEffect } from "react";
import HeroSection from "@/components/layout/HeroSection";
import AnimatedSection from "@/components/layout/AnimatedSection";
import PatentedExpertise from "./components/PatentedExpertise";
import ServicesSection from "./components/ServicesSection";
import CaseStudy from "./components/CaseStudy";
import SupportSection from "./components/SupportSection";
import ScalableSolutions from "./components/ScalableSolutions";

const MAISP = () => {
  useEffect(() => {
    // Ensure Typeform script is loaded
    const existingScript = document.getElementById('typeform-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'typeform-script';
      script.src = "//embed.typeform.com/next/embed.js";
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        if (document.getElementById('typeform-script')) {
          document.body.removeChild(script);
        }
      };
    }
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection 
        title="Managed AI Service Provider"
        subtitle="Professional, secure, and scalable AI services tailored to your business needs"
        id="expertise"
      />
      
      <AnimatedSection>
        <PatentedExpertise />
      </AnimatedSection>
      
      <AnimatedSection>
        <ServicesSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <CaseStudy />
      </AnimatedSection>
      
      <AnimatedSection>
        <SupportSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <ScalableSolutions />
      </AnimatedSection>
      
      <AnimatedSection className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-semibold text-primary mb-4">GET IN TOUCH</h2>
          <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-12 heading-highlight">
            Contact Us About Your AI Journey
          </h3>
          <div className="bg-card/50 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div data-tf-widget="01JMAMXNY7NHGYM2YQDXCDRDW6" data-tf-inline-on-mobile data-tf-medium="snippet" data-tf-hidden="utm_source=website,utm_medium=snippet"></div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default MAISP;
