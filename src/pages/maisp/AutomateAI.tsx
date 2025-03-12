
import { useEffect } from "react";
import HeroSection from "./components/automateai/HeroSection";
import ChallengesSection from "./components/automateai/ChallengesSection";
import SolutionsSection from "./components/automateai/SolutionsSection";
import FeaturesSection from "./components/automateai/FeaturesSection";
import BenefitsSection from "./components/automateai/BenefitsSection";
import CTASection from "./components/automateai/CTASection";
import ContactSection from "./components/automateai/ContactSection";

const AutomateAI = () => {
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
      <ChallengesSection />
      <SolutionsSection />
      <FeaturesSection />
      <BenefitsSection />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default AutomateAI;
