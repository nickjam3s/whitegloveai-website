
import React from 'react';
import { motion } from "framer-motion";

const PatentedExpertise = () => {
  const titleAnimation = {
    initial: { opacity: 0, scale: 0.9, y: -10 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 1.2, type: "spring", stiffness: 80 }
  };
  
  const textAnimation = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, delay: 0.3 }
  };

  return (
    <section id="patented-expertise" className="relative z-10 py-20 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background to-background/80 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-14 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-primary to-purple-600 text-center"
        >
          Patented Expertise
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, staggerChildren: 0.1 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="glass-card backdrop-blur-md p-8 rounded-xl border border-purple-500/20 shadow-[0_0_15px_rgba(112,33,238,0.15)] hover-lift">
            <h3 className="text-xl font-semibold mb-4 text-white">AI Adoption Framework</h3>
            <p className="text-gray-300">
              Our patented framework guides organizations through AI adoption with a proven, 
              step-by-step methodology that minimizes risk and maximizes ROI.
            </p>
          </div>
          <div className="glass-card backdrop-blur-md p-8 rounded-xl border border-purple-500/20 shadow-[0_0_15px_rgba(112,33,238,0.15)] hover-lift">
            <h3 className="text-xl font-semibold mb-4 text-white">Industry Expertise</h3>
            <p className="text-gray-300">
              With decades of combined experience across industries, our team understands 
              the unique challenges and opportunities of your specific sector.
            </p>
          </div>
          <div className="glass-card backdrop-blur-md p-8 rounded-xl border border-purple-500/20 shadow-[0_0_15px_rgba(112,33,238,0.15)] hover-lift">
            <h3 className="text-xl font-semibold mb-4 text-white">Technical Excellence</h3>
            <p className="text-gray-300">
              Our technical team brings deep expertise in AI development, deployment, 
              and optimization across enterprise environments.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PatentedExpertise;
