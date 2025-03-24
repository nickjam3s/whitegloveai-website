
import { useEffect } from "react";
import HeroSection from "./components/chiefaiofficer/HeroSection";
import UnlockingSection from "./components/chiefaiofficer/UnlockingSection";
import BenefitsSection from "./components/chiefaiofficer/BenefitsSection";
import FutureSection from "./components/chiefaiofficer/FutureSection";
import WhyVCAIO from "./components/chiefaiofficer/WhyVCAIO";

const ChiefAIOfficer = () => {
  useEffect(() => {
    // Explicitly disable smooth scrolling
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Handle anchor links within the page without smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.substring(1);
        if (targetId) {
          // Get the element position and scroll to it without smooth behavior
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const yOffset = -80; // Adjust offset if needed
            const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({
              top: y,
              behavior: 'auto'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      // Reset scroll behavior when component unmounts
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <WhyVCAIO />
      <UnlockingSection />
      <BenefitsSection />
      <FutureSection />
    </div>
  );
};

export default ChiefAIOfficer;
