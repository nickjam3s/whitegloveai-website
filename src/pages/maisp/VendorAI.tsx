
import { useEffect, useLayoutEffect } from "react";
import HeroSection from "./components/vendorai/HeroSection";
import VendorManagement from "./components/vendorai/VendorManagement";
import BusinessOutcomes from "./components/vendorai/BusinessOutcomes";
import ComprehensiveDeliverables from "./components/vendorai/ComprehensiveDeliverables";
import ExpertTeam from "./components/vendorai/ExpertTeam";
import SecurityCompliance from "./components/vendorai/SecurityCompliance";
import PricingModels from "./components/vendorai/PricingModels";
import Support from "./components/vendorai/Support";
import ContactSection from "./components/vendorai/ContactSection";
import StepByStepForm from "./components/vendorai/StepByStepForm";
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import '@/styles/animations.css'; // Import animations CSS

const VendorAI = () => {
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
          
          // Add animations to child elements when section is in view
          const animatableElements = entry.target.querySelectorAll('.animate-on-scroll');
          animatableElements.forEach((el, index) => {
            (el as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
            el.classList.add('visible');
          });
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
    
    // Also observe sections with the animate-section class
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => {
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
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <VendorManagement />
      <BusinessOutcomes />
      <ComprehensiveDeliverables />
      <ExpertTeam />
      <SecurityCompliance />
      <PricingModels />
      <Support />
      <ContactSection />
      <ScrollAnimation targetId="vendor-management" />
    </div>
  );
};

export default VendorAI;
