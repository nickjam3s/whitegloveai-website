
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import MaturityLevels from "./components/MaturityLevels";
import FutureSection from "./components/FutureSection";

const VCAIO = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <MaturityLevels />
      <FutureSection />
    </div>
  );
};

export default VCAIO;
