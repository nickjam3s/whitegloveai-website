
import React, { useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustedBy from '@/components/home/TrustedBy';
import ServicesSection from '@/components/home/ServicesSection';
import AIIncubationLabSection from '@/components/AIIncubationLabSection';
import AIAMFFrameworkSection from '@/components/home/AIAMFFrameworkSection';
import WhitegloveAIDifference from '@/components/home/WhitegloveAIDifference';
import PartnerLogos from '@/components/home/PartnerLogos';
import ContactSection from './Contact';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertTriangle, Calendar, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      
      {/* Enhanced TRAIGA Announcement Bar */}
      <div className="w-full bg-gradient-to-r from-primary/15 via-accent/20 to-primary/15 border-t border-b border-primary/30 py-6 relative z-10 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left side - Main content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <Scale className="h-6 w-6 text-primary" />
                  <AlertTriangle className="h-5 w-5 text-accent animate-pulse" />
                </div>
                <span className="text-primary font-semibold text-lg">TEXAS AI LAW ALERT</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                Are You Ready for the Texas Responsible AI Governance Act (TRAIGA)?
              </h3>
              
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                <Calendar className="h-4 w-4 text-accent" />
                <p className="text-gray-300 text-sm md:text-base">
                  The most sweeping state AI law in the U.S. goes into effect January 1, 2026.
                </p>
              </div>
              
              <p className="text-accent font-medium text-sm md:text-base">
                Know your risk—start preparing today.
              </p>
            </div>

            {/* Right side - CTA Button */}
            <div className="flex-shrink-0">
              <Link to="/traiga">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8 py-4 text-base rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-primary/20"
                >
                  Visit the TRAIGA Center
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <TrustedBy />
      <ServicesSection />

      {/* TRAIGA Triage Center Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-primary/5"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5"></div>
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
            <p className="text-lg text-gray-400 mb-10 max-w-4xl mx-auto">
              With TRAIGA taking effect in 2026, businesses that develop or use AI in Texas must now meet strict legal requirements. WhitegloveAI's TRAIGA Triage Center helps you understand your exposure, prepare, and stay ahead. Don't wait for enforcement—start your compliance journey today.
            </p>
            <Link to="/traiga">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
                Visit the TRAIGA Center
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <AIIncubationLabSection />
      <AIAMFFrameworkSection />
      <PartnerLogos />
      <WhitegloveAIDifference />
      <ContactSection />
    </div>
  );
};

export default Index;
