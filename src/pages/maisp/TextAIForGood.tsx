
import { useEffect } from "react";
import HeroSection from "./components/textaiforgood/HeroSection";
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
      <HeroSection />
      <BenefitsSection />
      <PartnersSection />
      <ProcessSection />
      <ContactSection />
    </div>
  );
};

export default TextAIForGood;
