import React from "react";
import { motion } from "framer-motion";
import { useLayoutEffect, useEffect } from "react";
import HeroSection from "./maisp/components/translateai/HeroSection";
import Testimonial from "./maisp/components/translateai/Testimonial";
import CoreCapabilities from "./maisp/components/translateai/CoreCapabilities";
import ManagedService from "./maisp/components/translateai/ManagedService";
import SetupAccess from "./maisp/components/translateai/SetupAccess";
import LanguageSupport from "./maisp/components/translateai/LanguageSupport";
import SecurityCompliance from "./maisp/components/translateai/SecurityCompliance";
import PricingROI from "./maisp/components/translateai/PricingROI";
import WhyWhitegloveAI from "./maisp/components/translateai/WhyWhitegloveAI";
import EngagementModel from "./maisp/components/translateai/EngagementModel";
import ContactSection from "./maisp/components/translateai/ContactSection";
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import SEO from '@/components/SEO';
import '@/styles/animations.css';

const TranslateAI = () => {
  // Scroll to top immediately on component mount
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Disable smooth scroll temporarily to handle anchor links
    const originalScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (link) {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'auto', block: 'start' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Set up intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.heading-highlight-scroll, .animate-section');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      observer.disconnect();
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title="AI Translation Services | TranslateAI by WhitegloveAI"
        description="Live AI-powered translation for multilingual meetings, events, and communications. Break language barriers with secure, managed TranslateAI."
        canonicalPath="/translateai"
      />
      <HeroSection />
      <Testimonial />
      <CoreCapabilities />
      <ManagedService />
      <SetupAccess />
      <LanguageSupport />
      <SecurityCompliance />
      <PricingROI />
      <WhyWhitegloveAI />
      <EngagementModel />
      <ContactSection />
      <ScrollAnimation targetId="capabilities" />
    </div>
  );
};

export default TranslateAI;