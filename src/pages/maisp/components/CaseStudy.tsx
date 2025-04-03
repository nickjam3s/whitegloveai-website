
import React from 'react';
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const CaseStudy = () => {
  return (
    <section id="case-study" className="relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-[#7021EE]"
        >
          Success Stories
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 relative"
        >
          <div className="absolute top-6 left-6 text-[#7021EE] opacity-20">
            <Quote size={60} />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-4">Transforming Customer Service with AI</h3>
            
            <div className="mb-6">
              <p className="text-gray-300 italic mb-4">
                "WhitegloveAI's managed service transformed our customer service operations. 
                We reduced response times by 80% while improving customer satisfaction scores. 
                Their expertise in implementation and ongoing optimization has been invaluable."
              </p>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src="/lovable-uploads/2c69b0c6-9e6a-4fe8-9f6b-5781bdde4c3b.png" 
                    alt="Client Portrait" 
                    className="w-12 h-12 rounded-full border-2 border-[#7021EE]/40"
                  />
                </div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-gray-400 text-sm">CTO, Global Financial Services Inc.</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-[#7021EE]/10 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-[#7021EE]">80%</p>
                <p className="text-sm text-gray-300">Reduction in Response Time</p>
              </div>
              <div className="bg-[#7021EE]/10 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-[#7021EE]">42%</p>
                <p className="text-sm text-gray-300">Increase in Customer Satisfaction</p>
              </div>
              <div className="bg-[#7021EE]/10 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-[#7021EE]">$1.2M</p>
                <p className="text-sm text-gray-300">Annual Cost Savings</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
