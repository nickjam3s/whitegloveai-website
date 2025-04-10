import { useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import NewHeroSection from './components/enable/NewHeroSection';
import IntroductionSection from './components/enable/IntroductionSection';
import ChallengesTableSection from './components/enable/ChallengesTableSection';
import SolutionSection from './components/enable/SolutionSection';
import ResultsSection from './components/enable/ResultsSection';
import ContactSection from './components/enable/ContactSection';
import FooterSection from './components/enable/FooterSection';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

const Enable = () => {
  const isMobile = useIsMobile();
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const yOffset = -80;
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

    const headings = document.querySelectorAll('.heading-highlight-scroll');
    headings.forEach(heading => {
      observer.observe(heading);
    });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.documentElement.style.scrollBehavior = '';
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      <div className="relative z-10">
        <NewHeroSection />
        <IntroductionSection />
        <ChallengesTableSection />
        <SolutionSection />
        <ResultsSection />
        <ContactSection />
        <FooterSection />
        <ScrollAnimation targetId="introduction-section" />
      </div>
    </div>
  );
};

export default Enable;
