
import { useEffect, useLayoutEffect } from "react";
import HeroSection from "./components/humanoidai/HeroSection";
import ServiceFeatures from "./components/humanoidai/ServiceFeatures";
import MethodologySection from "./components/humanoidai/MethodologySection";
import BusinessOutcomes from "./components/humanoidai/BusinessOutcomes";
import Deliverables from "./components/humanoidai/Deliverables";
import SecurityCompliance from "./components/humanoidai/SecurityCompliance";
import ContactSection from "./components/humanoidai/ContactSection"; 
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import '@/styles/animations.css'; // Import animations CSS

// Add custom animations to match AboutUs page
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Animated background elements similar to AboutUs page */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-background to-background opacity-90"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/lovable-uploads/0eac5844-55aa-4db3-8fae-fa8029305014.png')] bg-cover bg-center opacity-5"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '15s' }}></div>
      </div>

      <div className="relative z-10">
        <HeroSection />
        
        {/* Animated divider */}
        <div className="relative h-12 mx-auto max-w-7xl overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          />
        </div>
        
        <ServiceFeatures />
        
        {/* Animated divider */}
        <div className="relative h-12 mx-auto max-w-7xl overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          />
        </div>
        
        <MethodologySection />
        
        {/* Animated divider */}
        <div className="relative h-12 mx-auto max-w-7xl overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          />
        </div>
        
        <BusinessOutcomes />
        
        {/* Animated divider */}
        <div className="relative h-12 mx-auto max-w-7xl overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          />
        </div>
        
        <Deliverables />
        
        {/* Animated divider */}
        <div className="relative h-12 mx-auto max-w-7xl overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          />
        </div>
        
        <SecurityCompliance />
        
        {/* Animated divider */}
        <div className="relative h-12 mx-auto max-w-7xl overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          />
        </div>
        
        <ContactSection />
        <ScrollAnimation targetId="service-features" />
      </div>
      
      <section id="contact" className="py-20 bg-transparent relative z-10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-primary to-purple-600 text-center"
          >
            Contact Us
          </motion.h2>
          <div className="glass-card backdrop-blur-md p-8 rounded-xl border border-purple-500/20 shadow-[0_0_15px_rgba(112,33,238,0.15)] max-w-4xl mx-auto tezt">
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanoidAI;
