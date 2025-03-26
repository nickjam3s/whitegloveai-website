
import React, { useEffect, useLayoutEffect } from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import HeroSection from "./apprenticeship/components/HeroSection";
import ProgramFeatures from "./apprenticeship/components/ProgramFeatures";
import CandidateProfile from "./apprenticeship/components/CandidateProfile";
import CareerProgression from "./apprenticeship/components/CareerProgression";
import WhyUs from "./apprenticeship/components/WhyUs";
import TuitionSection from "./apprenticeship/components/TuitionSection";
import ApplicationProcess from "./apprenticeship/components/ApplicationProcess";
import FAQSection from "./apprenticeship/components/FAQSection";
import VisionSection from "./apprenticeship/components/VisionSection";
import ApplicationForm from "./apprenticeship/components/ApplicationForm";
import ContactSection from "./apprenticeship/components/ContactSection"

const Apprenticeship = () => {
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
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      // Reset scroll behavior when component unmounts
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <PageWrapper fullWidth>
        <HeroSection />
        <WhyUs />
        <ProgramFeatures />
        <CareerProgression />
        <VisionSection />
        <CandidateProfile />
        <ApplicationProcess />
        <ContactSection />
        <FAQSection />
        <ScrollAnimation targetId="program-features" />
      </PageWrapper>
    </div>
  );
};

export default Apprenticeship;
