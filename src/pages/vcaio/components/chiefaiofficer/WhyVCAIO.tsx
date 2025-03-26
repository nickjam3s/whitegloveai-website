import React from 'react';
import { motion } from 'framer-motion';

const WhyVCAIO = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="why-vcaio" className="py-20 bg-black scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
            Why Your Business Needs a <span className="text-primary">vCAIO</span>
          </h2>
          
          <div className="space-y-8">
            <motion.div 
              {...fadeInUp} 
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card/30 p-6 rounded-lg border border-primary/20"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary">Strategic AI Leadership Without the Full-Time Cost</h3>
              <p className="text-gray-300">
                Access C-level AI expertise and strategic guidance without the expense of a full-time executive. Our vCAIO service provides the leadership you need at a fraction of the cost.
              </p>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card/30 p-6 rounded-lg border border-primary/20"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary">Accelerate Your AI Transformation</h3>
              <p className="text-gray-300">
                Rapidly advance your AI initiatives with expert guidance that helps you avoid common pitfalls and implement best practices from day one.
              </p>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card/30 p-6 rounded-lg border border-primary/20"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary">Bridge the AI Knowledge Gap</h3>
              <p className="text-gray-300">
                Our vCAIOs bring deep technical knowledge and business acumen, helping translate complex AI concepts into clear business strategies your entire organization can understand.
              </p>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card/30 p-6 rounded-lg border border-primary/20"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary">Ensure Ethical and Responsible AI Implementation</h3>
              <p className="text-gray-300">
                Navigate the complex landscape of AI ethics, compliance, and governance with expert guidance that helps you build responsible AI systems.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyVCAIO;
