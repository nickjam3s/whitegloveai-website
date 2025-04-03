
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="patented-expertise" className="relative z-10 py-24 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/90 to-background z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6IiBzdHJva2Utb3BhY2l0eT0iLjAyIiBzdHJva2U9IiNmZmYiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')] opacity-10"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-primary to-purple-600 text-center"
        >
          Patented Expertise
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={cardVariants} className="group">
            <div className="glass-card backdrop-blur-md p-8 rounded-xl border border-purple-500/30 shadow-[0_0_25px_rgba(112,33,238,0.15)] hover:shadow-[0_0_35px_rgba(112,33,238,0.25)] transition-all duration-500 hover:-translate-y-2 h-full">
              <div className="mb-6 bg-gradient-to-br from-purple-500/20 to-purple-800/20 p-4 rounded-lg w-16 h-16 flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">AI Adoption Framework</h3>
              <p className="text-gray-300">
                Our patented framework guides organizations through AI adoption with a proven, 
                step-by-step methodology that minimizes risk and maximizes ROI.
              </p>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} className="group">
            <div className="glass-card backdrop-blur-md p-8 rounded-xl border border-purple-500/30 shadow-[0_0_25px_rgba(112,33,238,0.15)] hover:shadow-[0_0_35px_rgba(112,33,238,0.25)] transition-all duration-500 hover:-translate-y-2 h-full">
              <div className="mb-6 bg-gradient-to-br from-purple-500/20 to-purple-800/20 p-4 rounded-lg w-16 h-16 flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Industry Expertise</h3>
              <p className="text-gray-300">
                With decades of combined experience across industries, our team understands 
                the unique challenges and opportunities of your specific sector.
              </p>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} className="group">
            <div className="glass-card backdrop-blur-md p-8 rounded-xl border border-purple-500/30 shadow-[0_0_25px_rgba(112,33,238,0.15)] hover:shadow-[0_0_35px_rgba(112,33,238,0.25)] transition-all duration-500 hover:-translate-y-2 h-full">
              <div className="mb-6 bg-gradient-to-br from-purple-500/20 to-purple-800/20 p-4 rounded-lg w-16 h-16 flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Technical Excellence</h3>
              <p className="text-gray-300">
                Our technical team brings deep expertise in AI development, deployment, 
                and optimization across enterprise environments.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PatentedExpertise;
