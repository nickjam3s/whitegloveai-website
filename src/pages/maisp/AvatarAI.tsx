import { useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import '@/styles/animations.css';

// Import all sections
import HeroSection from "./components/avatarAI/HeroSection";
import EvolutionSection from "./components/avatarAI/EvolutionSection";
import TransformSection from "./components/avatarAI/TransformSection";
import IndustriesSection from "./components/avatarAI/IndustriesSection";
import CaseStudySection from "./components/avatarAI/CaseStudySection";
import HowItWorksSection from "./components/avatarAI/HowItWorksSection";
import BenefitsSection from "./components/avatarAI/BenefitsSection";
import WhyChooseSection from "./components/avatarAI/WhyChooseSection";
import ContactSection from "./components/avatarAI/ContactSection";

const AvatarAI = () => {
  // Use useLayoutEffect to prevent flash of content
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Disable smooth scrolling
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Handle anchor links
    const handleAnchorClick = (e) => {
      const target = e.target;
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
    
    // Initialize intersection observer
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

    // Observe headings
    const headings = document.querySelectorAll('.heading-highlight-scroll');
    headings.forEach(heading => observer.observe(heading));
    
    // Load Typeform script
    const typeformScript = document.createElement('script');
    typeformScript.src = "//embed.typeform.com/next/embed.js";
    typeformScript.defer = true;
    document.body.appendChild(typeformScript);
    
    document.addEventListener('click', handleAnchorClick);
    
    // Cleanup
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.documentElement.style.scrollBehavior = '';
      observer.disconnect();
      document.body.removeChild(typeformScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <EvolutionSection features={evolutionFeatures} />
      <TransformSection experiences={transformExperience} />
      <IndustriesSection industries={industries} />
      <CaseStudySection steps={caseStudySteps} />
      <HowItWorksSection steps={howItWorks} />
      <BenefitsSection benefits={benefits} />
      <WhyChooseSection reasons={whyChooseUs} />
      <ContactSection />
      <ScrollAnimation targetId="evolution-section" />
    </div>
  );
};

// Data objects remain the same
const evolutionFeatures = [...];
const transformExperience = [...];
const industries = [...];
const caseStudySteps = [...];
const howItWorks = [...];
const benefits = [...];
const whyChooseUs = [...];

export default AvatarAI;