import React from "react";
import { motion } from "framer-motion";
import { useLayoutEffect, useEffect } from "react";
import HeroSection from "./components/translateai/HeroSection";
import Testimonial from "./components/translateai/Testimonial";
import CoreCapabilities from "./components/translateai/CoreCapabilities";
import ManagedService from "./components/translateai/ManagedService";
import SetupAccess from "./components/translateai/SetupAccess";
import LanguageSupport from "./components/translateai/LanguageSupport";
import SecurityCompliance from "./components/translateai/SecurityCompliance";
import PricingROI from "./components/translateai/PricingROI";
import WhyWhitegloveAI from "./components/translateai/WhyWhitegloveAI";
import EngagementModel from "./components/translateai/EngagementModel";
import ContactSection from "./components/translateai/ContactSection";
import ScrollAnimation from '@/components/animations/ScrollAnimation';
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