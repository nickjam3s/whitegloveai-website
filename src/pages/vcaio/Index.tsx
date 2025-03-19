
import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import UnlockingSection from "./components/UnlockingSection";
import BenefitsSection from "./components/BenefitsSection";
import MaturityLevels from "./components/MaturityLevels";
import FutureSection from "./components/FutureSection";
import CoreBeliefs from "./components/CoreBeliefs";

const VCAIO = () => {
  useEffect(() => {
    // Ensure page starts at the top when component mounts
    window.scrollTo(0, 0);
    
    // Add smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

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
