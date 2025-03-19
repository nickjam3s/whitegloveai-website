
import { useEffect } from "react";
import HeroSection from "./components/textaiforgood/HeroSection";
import IntroSection from "./components/textaiforgood/IntroSection";
import BenefitsSection from "./components/textaiforgood/BenefitsSection";
import ProcessSection from "./components/textaiforgood/ProcessSection";
import PartnersSection from "./components/textaiforgood/PartnersSection";
import ContactSection from "./components/textaiforgood/ContactSection";

const TextAIForGood = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <IntroSection />
      <HeroSection />
      <PartnersSection />
      <BenefitsSection />
      <ProcessSection />
      <ContactSection />
    </div>
  );
};

export default TextAIForGood;
