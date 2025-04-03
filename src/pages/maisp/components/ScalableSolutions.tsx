
import React from 'react';
import { motion } from "framer-motion";

const ScalableSolutions = () => {
  const solutions = [
    {
      title: "Modular Architecture",
      description: "Our AI solutions are built with modular components that allow for seamless scaling as your needs grow."
    },
    {
      title: "Enterprise Integration",
      description: "Seamless integration with your existing enterprise systems and workflows for maximum value."
    },
    {
      title: "Future-Proof Technology",
      description: "Built on flexible frameworks that adapt to evolving AI capabilities and business requirements."
    },
    {
      title: "Customizable Deployment",
      description: "From cloud-based to on-premises solutions, we adapt to your specific infrastructure requirements."
    }
  ];

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="scalable-solutions" className="relative z-10 py-20 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-14 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-primary to-purple-600 text-center"
        >
          Scalable Solutions
        </motion.h2>
        
        <motion.div 
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="glass-card backdrop-blur-md p-8 rounded-xl border border-purple-500/20 shadow-[0_0_15px_rgba(112,33,238,0.15)] hover-lift"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">{solution.title}</h3>
              <p className="text-gray-300">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 p-8 rounded-xl backdrop-blur-md shadow-[0_0_15px_rgba(112,33,238,0.1)]"
        >
          <p className="text-lg text-center text-gray-200">
            Our solutions grow with your business, adapting to changing needs and 
            expanding capabilities without requiring complete redesigns or rebuilds.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ScalableSolutions;
