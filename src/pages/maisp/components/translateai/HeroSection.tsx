import React from "react";
import { motion } from "framer-motion";
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/351136e7-c241-4c56-a606-3ff7a65a05ac.png" 
              alt="WGAI Logo" 
              width="100" 
              height="100" 
              className="logo-animation mx-auto"
              style={{ 
                filter: "hue-rotate(260deg) brightness(150%) drop-shadow(0 0 10px rgba(112, 33, 238, 0.6))",
                display: "block"
              }}
            />
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary font-sora"
          >
            Translate AI
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-4xl mx-auto px-3 sm:px-0 text-shadow-sm font-sora"
          >
            Break language barriers without lifting a finger. Translate AI delivers real-time translation, 
            captioning, and transcription for your live events and recorded content—fully managed by WhitegloveAI.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto px-3 sm:px-0 font-sora"
          >
            No interpreters. No apps. No hassle. We handle everything behind the scenes so your audiences 
            can understand and engage in their native language—live or on demand.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;