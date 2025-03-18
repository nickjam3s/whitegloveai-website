
import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import UnlockingSection from "./components/UnlockingSection";
import BenefitsSection from "./components/BenefitsSection";
import MaturityLevels from "./components/MaturityLevels";
import FutureSection from "./components/FutureSection";
import CoreBeliefs from "./components/CoreBeliefs";

const VCAIO = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Will run when the path changes

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
