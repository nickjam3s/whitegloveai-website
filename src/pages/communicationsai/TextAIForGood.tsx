
import { useEffect, useLayoutEffect } from "react";
import HeroSection from "../maisp/components/textaiforgood/HeroSection";
import BenefitsSection from "../maisp/components/textaiforgood/BenefitsSection";
import EfficiencyImpactSection from "../maisp/components/textaiforgood/EfficiencyImpactSection";
import PartnersSection from "../maisp/components/textaiforgood/PartnersSection";
import ContactSection from "../maisp/components/textaiforgood/ContactSection";
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import SEO from '@/components/SEO';
import '@/styles/animations.css'; // Import animations CSS


const TextAIForGood = () => {
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
      <SEO
        title="TextAI for Good - AI for Nonprofits | WhitegloveAI"
        description="Empower nonprofit organizations with AI text solutions. Free and discounted AI services for social good, community organizations, and charitable causes."
        canonicalPath="/communications-ai/text-ai/textai-for-good"
      />
      <HeroSection />
      
      <BenefitsSection />
      <EfficiencyImpactSection />
      <PartnersSection />
      <ContactSection />
      <ScrollAnimation targetId="benefits-section" />
    </div>
  );
};

export default TextAIForGood;
