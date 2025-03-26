
import { useEffect } from "react";
import HeroSection from "./components/automateai/HeroSection";
import ChallengesSection from "./components/automateai/ChallengesSection";
import SolutionsSection from "./components/automateai/SolutionsSection";
import FeaturesSection from "./components/automateai/FeaturesSection";
import BenefitsSection from "./components/automateai/BenefitsSection";
import CTASection from "./components/automateai/CTASection";
import ContactSection from "./components/automateai/ContactSection";
import ScrollAnimation from '@/components/animations/ScrollAnimation';

const AutomateAI = () => {
  // We're removing the Typeform script loading from here
  // because it's now handled in the ContactSection component
  
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ChallengesSection />
      <SolutionsSection />
      <FeaturesSection />
      <BenefitsSection />
      <CTASection />
      <ContactSection />
      <ScrollAnimation targetId="challenges-section" />
    </div>
  );
};

export default AutomateAI;
