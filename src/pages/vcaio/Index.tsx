
import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import UnlockingSection from "./components/UnlockingSection";
import BenefitsSection from "./components/BenefitsSection";
import MaturityLevels from "./components/MaturityLevels";
import FutureSection from "./components/FutureSection";
import CoreBeliefs from "./components/CoreBeliefs";

const VCAIO = () => {
  useEffect(() => {
    // Set smooth scrolling behavior globally for this page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Handle anchor links within the page
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
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
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
