
import HeroSection from "./components/HeroSection";
import UnlockingSection from "./components/UnlockingSection";
import BenefitsSection from "./components/BenefitsSection";
import MaturityLevels from "./components/MaturityLevels";
import FutureSection from "./components/FutureSection";
import CoreBeliefs from "./components/CoreBeliefs";

const VCAIO = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <HeroSection />
      <UnlockingSection />
      <BenefitsSection />
      <CoreBeliefs />
      <MaturityLevels />
      <FutureSection />
    </div>
  );
};

export default VCAIO;
