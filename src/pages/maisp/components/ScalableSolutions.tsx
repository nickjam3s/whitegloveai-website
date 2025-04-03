
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
    <section id="scalable-solutions" className="relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-[#7021EE]"
        >
          Scalable Solutions
        </motion.h2>
        
        <motion.div 
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="glass-card p-6 transition-all hover-lift"
            >
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-gray-300">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-gradient-to-br from-[#7021EE]/10 to-transparent border border-[#7021EE]/20 p-6 rounded-xl"
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
