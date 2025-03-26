
import { useEffect, useLayoutEffect } from "react";
import NewHeroSection from './components/enable/NewHeroSection';
import IntroductionSection from './components/enable/IntroductionSection';
import ChallengesTableSection from './components/enable/ChallengesTableSection';
import SolutionSection from './components/enable/SolutionSection';
import ResultsSection from './components/enable/ResultsSection';
import ContactSection from './components/enable/ContactSection';
import FooterSection from './components/enable/FooterSection';
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import '@/styles/animations.css'; // Import animations CSS

const Enable = () => {
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
    <div className="min-h-screen bg-black overflow-x-hidden">
      <NewHeroSection />
      <IntroductionSection />
      <ChallengesTableSection />
      <SolutionSection />
      <ResultsSection />
      <ContactSection />
      <FooterSection />
      <ScrollAnimation targetId="introduction-section" />
    </div>
  );
};

export default Enable;
