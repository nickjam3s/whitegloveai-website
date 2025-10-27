import React, { useEffect, useState } from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustedBy from '@/components/home/TrustedBy';
import ServicesSection from '@/components/home/ServicesSection';
import GovAIHighlight from '@/components/home/GovAIHighlight';
import AIAMFFrameworkSection from '@/components/home/AIAMFFrameworkSection';
import WhitegloveAIDifference from '@/components/home/WhitegloveAIDifference';
import PartnerLogos from '@/components/home/PartnerLogos';
import ContactSection from './Contact';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

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

    // Countdown timer calculation
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-01-01T00:00:00');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        
        setTimeLeft({ days, hours, minutes });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

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
      clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Managed AI Services & AI Consulting | WhitegloveAI"
        description="WhitegloveAI delivers managed AI services, AI consulting, and vCAIO leadership to deploy secure, enterprise-grade AI."
        canonicalPath="/"
        schemas={[
          { "@context": "https://schema.org", "@type": "Organization", "name": "WhitegloveAI", "url": "https://www.whitegloveai.com", "logo": "https://www.whitegloveai.com/og-image.png", "sameAs": ["https://www.linkedin.com/company/whitegloveai"] },
          { "@context": "https://schema.org", "@type": "WebSite", "name": "WhitegloveAI", "url": "https://www.whitegloveai.com", "potentialAction": { "@type": "SearchAction", "target": "https://www.whitegloveai.com/blog?s={search_term_string}", "query-input": "required name=search_term_string" } }
        ]}
      />
      <HeroSection />
      
      {/* Enhanced TRAIGA Announcement Bar */}
      {/* TXShare Announcement Bar */}
      <section
        aria-label="TXShare Announcement"
        className="w-full bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15 text-white border-t border-b border-primary/30 transition-colors hover:from-primary/20 hover:via-accent/20 hover:to-primary/20"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center gap-3 py-2.5 md:flex-row md:items-center md:justify-between">
            <p className="text-center font-medium text-sm md:text-base md:flex-1">
              Now Available on TXShare – WhitegloveAI is an approved vendor through the North Central Texas Council of Governments. Contract #2025-023 – AI Consulting Services.
            </p>
            <div className="flex-shrink-0 md:ml-6">
              <Button
                asChild
                size="sm"
                className="hover-scale"
              >
                <a
                  href="https://txshare.org/available-contracts/artificial-intelligence-ai-consultancy-services-9a4fd3af3342a4e1a6df4de8cbb21bc5/whitegloveai-llc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Our TXShare Listing
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      

      <TrustedBy />
      <ServicesSection />
      <GovAIHighlight />
      <AIAMFFrameworkSection />

      {/* TRAIGA Triage Center Section */}
      <section className="py-20 bg-gradient-to-t from-primary/10 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-accent/10 to-transparent blur-2xl"></div>
          <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-t from-primary/10 to-transparent blur-2xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              TRAIGA Triage Center
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Is your business ready for Texas's sweeping new AI law?
            </p>
            <p className="text-lg text-gray-400 mb-6 max-w-4xl mx-auto">
              With TRAIGA taking effect in 2026, businesses that develop or use AI in Texas must now meet strict legal requirements. WhitegloveAI's TRAIGA Triage Center helps you understand your exposure, prepare, and stay ahead. Don't wait for enforcement—start your compliance journey today.
            </p>
            <div className="mx-auto mb-10 max-w-4xl">
              <div className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-2">
                <p className="text-center text-sm md:text-base text-gray-200 whitespace-nowrap overflow-x-auto">
                  Goes into effect January 1, 2026. <span className="text-accent">Enforcement begins in:</span> <span className="ml-1 font-semibold text-white">{timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m</span>
                </p>
              </div>
            </div>
            <Link to="/traiga">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
                Visit the TRAIGA Center
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      <PartnerLogos />
      <WhitegloveAIDifference />
      <ContactSection />
    </div>
  );
};

export default Index;
