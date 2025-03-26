
import { useEffect, useLayoutEffect } from "react";
import HeroSection from "./components/adopt/HeroSection";
import ServiceDescription from "./components/adopt/ServiceDescription";
import BusinessOutcomes from "./components/adopt/BusinessOutcomes";
import Deliverables from "./components/adopt/Deliverables";
import ExpertTeam from "./components/adopt/ExpertTeam";
import SecurityCompliance from "./components/adopt/SecurityCompliance";
import Support from "./components/adopt/Support";
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import '@/styles/animations.css'; // Import animations CSS

const Adopt = () => {
  // Use useLayoutEffect to prevent flash of content before scroll position is set
  useLayoutEffect(() => {
    // Immediately scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

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
      document.body.removeChild(script);
      document.removeEventListener('click', handleAnchorClick);
      // Reset scroll behavior when component unmounts
      document.documentElement.style.scrollBehavior = '';
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ServiceDescription />
      <BusinessOutcomes />
      <Deliverables />
      <ExpertTeam />
      <SecurityCompliance />
      <Support />
      <ScrollAnimation targetId="service-description" />
      
      <section className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Contact Us
          </h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Ready to start your AI adoption journey? Get in touch with our team of experts.
          </p>
          <div data-tf-live="01JMANX32Q8N97C9RXW4GRN312"></div>
        </div>
      </section>
    </div>
  );
};

export default Adopt;
