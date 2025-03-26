
import { useEffect, useLayoutEffect } from "react";
import HeroSection from "./components/humanoidai/HeroSection";
import ServiceFeatures from "./components/humanoidai/ServiceFeatures";
import MethodologySection from "./components/humanoidai/MethodologySection";
import BusinessOutcomes from "./components/humanoidai/BusinessOutcomes";
import Deliverables from "./components/humanoidai/Deliverables";
import SecurityCompliance from "./components/humanoidai/SecurityCompliance";
import StepByStepForm from "./components/vendorai/StepByStepForm";
import ContactSection from "./components/humanoidai/ContactSection"; 
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import '@/styles/animations.css'; // Import animations CSS

const HumanoidAI = () => {
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
      <HeroSection />
      <ServiceFeatures />
      <MethodologySection />
      <BusinessOutcomes />
      <Deliverables />
      <SecurityCompliance />
      <ContactSection />
      <ScrollAnimation targetId="service-features" />
      
      <section id="contact" className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Contact Us
          </h2>
          <div className="bg-card/50 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <StepByStepForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanoidAI;
