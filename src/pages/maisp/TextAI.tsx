
import { useEffect } from "react";
import HeroSection from "./components/textai/HeroSection";
import IntelligentInformationSection from "./components/textai/IntelligentInformationSection";
import OperationalEfficiencySection from "./components/textai/OperationalEfficiencySection";
import ExpectedROISection from "./components/textai/ExpectedROISection";
import DemoExampleSection from "./components/textai/DemoExampleSection";
import SecurityComplianceSection from "./components/textai/SecurityComplianceSection";
import ImplementationProcessSection from "./components/textai/ImplementationProcessSection";
import AdditionalServicesSection from "./components/textai/AdditionalServicesSection";
import AboutWhitegloveSection from "./components/textai/AboutWhitegloveSection";
import ContactSection from "./components/textai/ContactSection";

const TextAI = () => {
  useEffect(() => {
    // Initialize intersection observer for scroll animations
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    // Observe all scroll-animated headings
    document.querySelectorAll('.heading-highlight-scroll').forEach(heading => {
      observer.observe(heading);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <IntelligentInformationSection />
      <OperationalEfficiencySection />
      <ExpectedROISection />
      <DemoExampleSection />
      <SecurityComplianceSection />
      <ImplementationProcessSection />
      <AdditionalServicesSection />
      <AboutWhitegloveSection />
      <ContactSection />
    </div>
  );
};

export default TextAI;
