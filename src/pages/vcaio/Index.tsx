
import { useEffect, useLayoutEffect } from "react";
import HeroSection from "./components/chiefaiofficer/HeroSection";
import UnlockingSection from "./components/chiefaiofficer/UnlockingSection";
import BenefitsSection from "./components/chiefaiofficer/BenefitsSection";
import MaturityLevels from "./components/chiefaiofficer/MaturityLevels";
import FutureSection from "./components/chiefaiofficer/FutureSection";
import CoreBeliefs from "./components/chiefaiofficer/CoreBeliefs";
import WhyVCAIO from "./components/chiefaiofficer/WhyVCAIO";
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import '@/styles/animations.css'; // Import animations CSS
import SEO from '@/components/SEO';


const VCAIO = () => {
  // Use useLayoutEffect to prevent flash of content before scroll position is set
  useLayoutEffect(() => {
    // Immediately scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

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
    
    // Initialize intersection observer for scroll animations
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe all scroll-animated headings
    const headings = document.querySelectorAll('.heading-highlight-scroll');
    headings.forEach(heading => {
      observer.observe(heading);
    });
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      // Reset scroll behavior when component unmounts
      document.documentElement.style.scrollBehavior = '';
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title="Virtual Chief AI Officer (vCAIO) | WhitegloveAI"
        description="Strategic AI leadership, governance, and enablement through WhitegloveAI’s vCAIO program."
        canonicalPath="/vcaio"
        schemas={[
          { "@context": "https://schema.org", "@type": "ProfessionalService", "name": "Virtual Chief AI Officer (vCAIO)", "serviceType": "AI Consulting", "url": "https://www.whitegloveai.com/vcaio", "provider": { "@type": "Organization", "name": "WhitegloveAI" }, "areaServed": "US", "description": "vCAIO services providing AI strategy, governance, adoption, and enablement." }
        ]}
      />
      <HeroSection />
      <WhyVCAIO />
      <UnlockingSection />
      <BenefitsSection />
      <CoreBeliefs />
      <MaturityLevels />
      <FutureSection />
      <ScrollAnimation targetId="why-vcaio" />
    </div>
  );
};

export default VCAIO;
