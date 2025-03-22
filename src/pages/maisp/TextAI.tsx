
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
import ProblemSolutionSection from "./components/textai/ProblemSolutionSection";
import WhyChooseSection from "./components/textai/WhyChooseSection";
import { useInView } from "react-intersection-observer";

const TextAI = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Use intersection observer hook for animation
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '0px 0px -100px 0px'
  });

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <IntelligentInformationSection />
      <OperationalEfficiencySection />
      
      <div ref={ref}>
        <div className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <ProblemSolutionSection />
          <ExpectedROISection />
          <DemoExampleSection />
          <SecurityComplianceSection />
          <ImplementationProcessSection />
          <WhyChooseSection />
          <AdditionalServicesSection />
          <AboutWhitegloveSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default TextAI;
