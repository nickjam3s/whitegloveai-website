
import React, { useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustedBy from '@/components/home/TrustedBy';
import ServicesSection from '@/components/home/ServicesSection';
import AIIncubationLabSection from '@/components/AIIncubationLabSection';
import AIAMFFrameworkSection from '@/components/home/AIAMFFrameworkSection';
import WhitegloveAIDifference from '@/components/home/WhitegloveAIDifference';
import PartnerLogos from '@/components/home/PartnerLogos';
import CTASection from '@/components/home/CTASection';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Load the chat script
    const script = document.createElement('script');
    script.src = "https://chat.whitegloveai.com/api/script/chat.js?iframe&id=11eee546-15ce-7f30-aa68-03cf75d045b5";
    script.defer = true;
    document.body.appendChild(script);

    // Load the Typeform script
    const typeformScript = document.createElement('script');
    typeformScript.src = "//embed.typeform.com/next/embed.js";
    typeformScript.defer = true;
    document.body.appendChild(typeformScript);

    // Initialize intersection observer for scroll animations
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const heading = entry.target as HTMLElement;
          heading.classList.add('visible');
          // Add random animation delay and duration
          heading.style.animation = `highlightText ${3 + Math.random() * 2}s ease-out forwards ${Math.random() * 0.5}s`;
        }
      });
    }, {
      threshold: 0.1
    });

    // Observe all scroll-animated headings
    document.querySelectorAll('.heading-highlight-scroll').forEach(heading => {
      observer.observe(heading);
    });

    // Also observe animate-section and animate-on-scroll elements
    const animateSections = document.querySelectorAll('.animate-section, .animate-on-scroll');
    animateSections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(typeformScript);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-white">
      <HeroSection />
      <TrustedBy />
      <ServicesSection />
      <AIIncubationLabSection />
      <AIAMFFrameworkSection />
      <PartnerLogos />
      <WhitegloveAIDifference />
      <CTASection />
    </div>
  );
};

export default Index;
