
import HeroSection from "./components/HeroSection";
import UnlockingSection from "./components/UnlockingSection";
import BenefitsSection from "./components/BenefitsSection";
import MaturityLevels from "./components/MaturityLevels";
import FutureSection from "./components/FutureSection";

const VCAIO = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <UnlockingSection />
      <BenefitsSection />
      <MaturityLevels />
      <FutureSection />
    </div>
  );
};

export default VCAIO;
