
import { useEffect } from "react";
import HeroSection from "./components/textai/HeroSection";
import IntelligentInformationSection from "./components/textai/IntelligentInformationSection";
import ProblemSolutionSection from "./components/textai/ProblemSolutionSection";
import BenefitsSection from "./components/textai/BenefitsSection";
import WhyChooseSection from "./components/textai/WhyChooseSection";
import OperationalEfficiencySection from "./components/textai/OperationalEfficiencySection";
import ExpectedROISection from "./components/textai/ExpectedROISection";
import McKinneyEDCSection from "./components/textai/McKinneyEDCSection";
import DemoExampleSection from "./components/textai/DemoExampleSection";
import SecurityComplianceSection from "./components/textai/SecurityComplianceSection";
import ImplementationProcessSection from "./components/textai/ImplementationProcessSection";
import AdditionalServicesSection from "./components/textai/AdditionalServicesSection";
import AboutWhitegloveSection from "./components/textai/AboutWhitegloveSection";
import ContactSection from "./components/textai/ContactSection";

const TextAI = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Initialize intersection observer for scroll animations
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe all scroll-animated headings
    const headings = document.querySelectorAll('.heading-highlight-scroll');
    headings.forEach(heading => {
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
      <McKinneyEDCSection />
      <SecurityComplianceSection />
      <ImplementationProcessSection />
      <ProblemSolutionSection />
      <BenefitsSection />
      <WhyChooseSection />
      <DemoExampleSection />
      <AdditionalServicesSection />
      <AboutWhitegloveSection />
      <ContactSection />
    </div>
  );
};

export default TextAI;
