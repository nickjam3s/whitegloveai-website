
import { useEffect, useLayoutEffect } from "react";
import HeroSection from "./components/launchai/HeroSection";
import ChallengesSection from "./components/launchai/ChallengesSection";
import IntroductionSection from "./components/launchai/IntroductionSection";
import ProcessSection from "./components/launchai/ProcessSection";
import ResultsSection from "./components/launchai/ResultsSection";
import UrgencySection from "./components/launchai/UrgencySection";
import ContactSection from "./components/launchai/ContactSection";
import ScrollAnimation from '@/components/animations/ScrollAnimation';

const LaunchAI = () => {
  // Use useLayoutEffect to prevent flash of content before scroll position is set
  useLayoutEffect(() => {
    // Immediately scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Add typeform script if needed
    const existingScript = document.getElementById('typeform-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'typeform-script';
      script.src = "//embed.typeform.com/next/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

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
      if (document.getElementById('typeform-script')) {
        document.body.removeChild(document.getElementById('typeform-script')!);
      }
      document.removeEventListener('click', handleAnchorClick);
      // Reset scroll behavior when component unmounts
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ChallengesSection />
      <IntroductionSection />
      <ProcessSection />
      <ResultsSection />
      <UrgencySection />
      <ContactSection />
      <ScrollAnimation targetId="challenges-section" />
    </div>
  );
};

export default LaunchAI;
