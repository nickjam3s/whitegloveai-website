
import React from 'react';
import { motion } from "framer-motion";

const AIIncubationLab = () => {
  return (
    <section id="ai-incubation" className="relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#7021EE]"
        >
          AI Incubation Lab
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-200 mb-6"
            >
              Our AI Incubation Lab provides a controlled environment to experiment, develop, and refine AI solutions 
              before full-scale deployment. This approach minimizes risk and maximizes the effectiveness of your AI initiatives.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-[#7021EE]/10 to-transparent border border-[#7021EE]/20 p-4 sm:p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-3">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#7021EE] mr-2">•</span>
                  <span>Rapid prototyping and testing of AI concepts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7021EE] mr-2">•</span>
                  <span>Customized solutions that address specific business challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7021EE] mr-2">•</span>
                  <span>Reduced implementation risk through thorough validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7021EE] mr-2">•</span>
                  <span>Accelerated innovation cycle from concept to deployment</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden border border-[#7021EE]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7021EE]/20 to-transparent mix-blend-overlay"></div>
              <img 
                src="/lovable-uploads/48dc0aa9-6670-48ee-bf78-17fd3db050c2.png" 
                alt="AI Incubation Lab" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-[#7021EE]/20 rounded-full blur-xl z-0"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIIncubationLab;
