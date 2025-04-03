
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
    <section id="patented-expertise" className="relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          variants={titleAnimation}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-8 text-[#7021EE]"
        >
          Patented Expertise
        </motion.h2>
        <motion.div 
          variants={textAnimation}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="glass-card p-6 hover-lift">
            <h3 className="text-xl font-semibold mb-3">AI Adoption Framework</h3>
            <p className="text-gray-300">
              Our patented framework guides organizations through AI adoption with a proven, 
              step-by-step methodology that minimizes risk and maximizes ROI.
            </p>
          </div>
          <div className="glass-card p-6 hover-lift">
            <h3 className="text-xl font-semibold mb-3">Industry Expertise</h3>
            <p className="text-gray-300">
              With decades of combined experience across industries, our team understands 
              the unique challenges and opportunities of your specific sector.
            </p>
          </div>
          <div className="glass-card p-6 hover-lift">
            <h3 className="text-xl font-semibold mb-3">Technical Excellence</h3>
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
