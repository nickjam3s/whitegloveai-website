
import { useEffect, useLayoutEffect, useRef } from "react";
import HeroSection from "./components/chiefaiofficer/HeroSection";
import UnlockingSection from "./components/chiefaiofficer/UnlockingSection";
import BenefitsSection from "./components/chiefaiofficer/BenefitsSection";
import FutureSection from "./components/chiefaiofficer/FutureSection";
import WhyVCAIO from "./components/chiefaiofficer/WhyVCAIO";
import '@/styles/animations.css'; // Import animations CSS

const ChiefAIOfficer = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  // Use useLayoutEffect to prevent flash of content before scroll position is set
  useLayoutEffect(() => {
    // Immediately scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Force scroll to top on component mount
    window.scrollTo(0, 0);
    
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

    // Observe all scroll-animated elements
    const headings = document.querySelectorAll('.heading-highlight-scroll');
    headings.forEach(heading => {
      observer.observe(heading);
    });
    
    // Observe all animated sections
    const animatedSections = document.querySelectorAll('.animate-section, .animate-on-scroll');
    animatedSections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      // Reset scroll behavior when component unmounts
      document.documentElement.style.scrollBehavior = '';
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <WhyVCAIO />
      <UnlockingSection />
      <BenefitsSection />
      <FutureSection />
      {/* Removed the ScrollAnimation component to eliminate duplicate arrow */}
    </div>
  );
};

export default ChiefAIOfficer;
