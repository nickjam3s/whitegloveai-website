import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from '@/hooks/use-mobile';
import GradientMeshAnimation from './GradientMeshAnimation';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        hint?: boolean;
        'loading-anim-type'?: string;
        url?: string;
      }, HTMLElement>;
    }
  }
}

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Load the Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const titleAnimation = {
    initial: { opacity: 0, scale: 0.9, y: -10 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 1.2, type: "spring", stiffness: 80 }
  };
  
  return (
    <div className="relative h-[100vh] flex items-center overflow-hidden bg-background">
      {/* Gradient Mesh Animation Background */}
      <GradientMeshAnimation />
      
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-background/50 pointer-events-none" style={{ zIndex: 1 }} />
      
      <section id="hero" className="relative w-full" style={{ zIndex: 2 }}>
        <div className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              {...fadeInUp}
              className="logo-container mb-8 md:mb-10"
            >
              <img 
                src="/lovable-uploads/197ddc10-c159-4f39-a269-e35142af32c5.png" 
                alt="WhitegloveAI Logo" 
                className="h-32 md:h-40 mx-auto" 
              />
            </motion.div>
            <motion.h1 
              {...titleAnimation}
              className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
            >
              Your Trusted AI Adoption Partner
            </motion.h1>
            <motion.p 
              {...fadeInUp}
              className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 text-shadow-sm"
            >
              We build, implement, and manage secure, scalable AI solutions for government agencies and growing businesses. Move from AI ambition to tangible results.
            </motion.p>
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5"
            >
              <Link to="/contact" className="inline-flex items-center px-7 py-4 text-lg font-medium text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-colors">
                Get Started
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <a href="https://forms.whitegloveai.com/H0EnGl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-7 py-4 text-lg font-medium text-white bg-secondary/20 hover:bg-secondary/30 rounded-lg transition-colors border border-secondary/50">
                Take the AI Readiness Assessment
                <ArrowRight className="ml-3 h-6 w-6" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
