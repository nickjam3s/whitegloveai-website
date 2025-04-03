
import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SupportSection = () => {
  return (
    <section id="support-section" className="relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-[#7021EE]"
        >
          Comprehensive Support
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-2xl font-semibold mb-4">Our Support Includes</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-[#7021EE] mr-3 text-2xl leading-none">•</span>
                <div>
                  <h4 className="font-semibold">24/7 Monitoring & Support</h4>
                  <p className="text-gray-300">Continuous monitoring and rapid response to any issues</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-[#7021EE] mr-3 text-2xl leading-none">•</span>
                <div>
                  <h4 className="font-semibold">Performance Optimization</h4>
                  <p className="text-gray-300">Regular analysis and improvements to maintain peak performance</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-[#7021EE] mr-3 text-2xl leading-none">•</span>
                <div>
                  <h4 className="font-semibold">Ongoing Training</h4>
                  <p className="text-gray-300">Continuous education for your team on AI best practices</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-[#7021EE] mr-3 text-2xl leading-none">•</span>
                <div>
                  <h4 className="font-semibold">Regular Updates</h4>
                  <p className="text-gray-300">Scheduled updates with the latest AI capabilities and security measures</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <p className="text-lg text-gray-200">
              Our commitment doesn't end with deployment. We provide ongoing support and optimization 
              to ensure your AI solutions continue to deliver maximum value as your business evolves.
            </p>
            
            <div className="bg-gradient-to-br from-[#7021EE]/10 to-transparent border border-[#7021EE]/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Business with AI?</h3>
              <p className="text-gray-300 mb-6">
                Contact us today to discuss how our managed AI services can address your specific challenges.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-[#7021EE] hover:bg-[#7021EE]/80 text-white rounded-md transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportSection;
