import { useEffect, useLayoutEffect } from "react";
import HeroSection from "../maisp/components/automateai/HeroSection";
import ChallengesSection from "../maisp/components/automateai/ChallengesSection";
import SolutionsSection from "../maisp/components/automateai/SolutionsSection";
import FeaturesSection from "../maisp/components/automateai/FeaturesSection";
import BenefitsSection from "../maisp/components/automateai/BenefitsSection";
import CTASection from "../maisp/components/automateai/CTASection";
import ContactSection from "../maisp/components/automateai/ContactSection";
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import SEO from '@/components/SEO';
import '@/styles/animations.css'; // Import animations CSS
import LucidisBanner from '@/components/LucidisBanner';

const AutomateAI = () => {
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
        title="AutomateAI - AI Workflow Automation | WhitegloveAI"
        description="Automate business processes with AI-powered workflow solutions. Intelligent process automation, task automation, and workflow optimization services."
        canonicalPath="/communications-ai/automate-ai"
      />
      <HeroSection />
      <LucidisBanner />
      <ChallengesSection />
      <SolutionsSection />
      <FeaturesSection />
      <BenefitsSection />
      <CTASection />
      <ContactSection />
      <ScrollAnimation targetId="challenges-section" />
    </div>
  );
};

export default AutomateAI;
