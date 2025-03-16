
import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import UnlockingSection from "./components/UnlockingSection";
import BenefitsSection from "./components/BenefitsSection";
import MaturityLevels from "./components/MaturityLevels";
import FutureSection from "./components/FutureSection";

const VCAIO = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pb-24">
      <HeroSection />
      <UnlockingSection />
      <BenefitsSection />
      <MaturityLevels />
      <FutureSection />
    </div>
  );
};

export default VCAIO;

