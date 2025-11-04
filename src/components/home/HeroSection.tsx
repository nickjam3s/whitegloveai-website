import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';

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
    <section id="hero" className="relative h-[100vh] flex items-center overflow-hidden bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--secondary)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Enhanced gradient orbs for liquid glass effect */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      {/* Colorful gradient orbs behind button area */}
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/40 via-blue-500/40 to-pink-500/40 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-cyan-500/35 via-indigo-500/35 to-purple-500/35 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
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
            <Link to="/contact" className="group inline-flex items-center px-7 py-4 text-lg font-medium text-white bg-white/10 backdrop-blur-2xl rounded-2xl hover:bg-white/20 transition-all duration-500 border border-white/30 shadow-[0_8px_32px_0_rgba(112,33,238,0.3),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_12px_48px_0_rgba(112,33,238,0.5),0_0_0_1px_rgba(255,255,255,0.2)_inset] hover:border-white/50 hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative">Get Started</span>
              <ArrowRight className="ml-3 h-6 w-6 relative group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="https://forms.whitegloveai.com/H0EnGl" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center px-7 py-4 text-lg font-medium text-white bg-white/5 backdrop-blur-2xl rounded-2xl hover:bg-white/15 transition-all duration-500 border border-white/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.1),0_0_0_1px_rgba(255,255,255,0.05)_inset] hover:shadow-[0_12px_48px_0_rgba(255,255,255,0.2),0_0_0_1px_rgba(255,255,255,0.15)_inset] hover:border-white/40 hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative">Take the AI Readiness Assessment</span>
              <ArrowRight className="ml-3 h-6 w-6 relative group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            initial={{ y: 0, opacity: 0.5 }}
            animate={{ y: 10, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          >
                      </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
