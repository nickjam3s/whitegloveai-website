
import { useEffect, useLayoutEffect } from "react";
import HeroSection from "./components/launch/HeroSection";
import ImportanceSection from "./components/launch/ImportanceSection";
import ProcessSection from "./components/launch/ProcessSection";
import DeliverablesSection from "./components/launch/DeliverablesSection";
import ResultsSection from "./components/launch/ResultsSection";
import NextStepsSection from "./components/launch/NextStepsSection";
import ContactSection from "./components/launch/ContactSection"
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import '@/styles/animations.css'; // Import animations CSS

const Launch = () => {
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

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.heading-highlight-scroll, .animate-section, .animate-on-scroll, .fade-in-up'
    );
    
    animatedElements.forEach(element => {
      observer.observe(element);
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
      <ImportanceSection />
      <ProcessSection />
      <DeliverablesSection />
      <ResultsSection />
      <NextStepsSection />
      <ContactSection />
      <ScrollAnimation targetId="importance-section" />
    </div>
  );
};

export default Launch;
