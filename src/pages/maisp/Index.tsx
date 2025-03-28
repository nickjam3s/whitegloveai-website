
import React, { useEffect, useLayoutEffect } from 'react';
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import HeroSection from './components/HeroSection';
import PatentedExpertise from './components/PatentedExpertise';
import ServicesSection from './components/ServicesSection';
import AIIncubationLab from './components/AIIncubationLab';
import ScalableSolutions from './components/ScalableSolutions';
import CaseStudy from './components/CaseStudy';
import SupportSection from './components/SupportSection';
import '@/styles/animations.css'; // Import animations CSS

const MAISP = () => {
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
    
    // Initialize intersection observer for scroll animations - make elements visible immediately
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Mark all elements as visible immediately
        entry.target.classList.add('visible');
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe all scroll-animated headings
    const headings = document.querySelectorAll('.heading-highlight-scroll');
    headings.forEach(heading => {
      observer.observe(heading);
      // Force visibility
      heading.classList.add('visible');
    });
    
    // Also observe animate-section and animate-on-scroll elements
    const animateSections = document.querySelectorAll('.animate-section, .animate-on-scroll');
    animateSections.forEach(section => {
      observer.observe(section);
      // Force visibility
      section.classList.add('visible');
    });
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      // Reset scroll behavior when component unmounts
      document.documentElement.style.scrollBehavior = '';
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <HeroSection />
      <PatentedExpertise />
      <ServicesSection />
      <AIIncubationLab />
      <ScalableSolutions />
      <CaseStudy />
      <SupportSection />
      <ScrollAnimation targetId="patented-expertise" />
    </div>
  );
};

export default MAISP;
