
import { useEffect, useRef } from "react";
import HeroSection from "./components/chiefaiofficer/HeroSection";
import UnlockingSection from "./components/chiefaiofficer/UnlockingSection";
import BenefitsSection from "./components/chiefaiofficer/BenefitsSection";
import FutureSection from "./components/chiefaiofficer/FutureSection";
import WhyVCAIO from "./components/chiefaiofficer/WhyVCAIO";
import '@/styles/animations.css'; // Import animations CSS

const ChiefAIOfficer = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  // Fix scroll issues - using multiple approaches to ensure it works
  useEffect(() => {
    // Immediately set scroll position to top
    window.scrollTo(0, 0);
    
    // Explicitly disable smooth scrolling to prevent animation
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';
    
    // Prevent default browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
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
    
    // Schedule multiple scroll resets to overcome any browser-specific behaviors
    const timeoutIds = [];
    [0, 50, 100, 250, 500].forEach(delay => {
      const timeoutId = setTimeout(() => {
        window.scrollTo(0, 0);
      }, delay);
      timeoutIds.push(timeoutId);
    });
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      timeoutIds.forEach(id => clearTimeout(id));
      // Reset scroll behavior when component unmounts
      document.documentElement.style.scrollBehavior = '';
      document.body.style.scrollBehavior = '';
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
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
