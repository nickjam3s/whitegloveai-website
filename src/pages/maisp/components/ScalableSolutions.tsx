
import React from 'react';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

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
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="scalable-solutions" className="relative z-10 py-24 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background to-background/90 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6IiBzdHJva2Utb3BhY2l0eT0iLjAyIiBzdHJva2U9IiNmZmYiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')] opacity-10"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-primary to-purple-600 text-center"
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
              className="group"
            >
              <div className="glass-card backdrop-blur-md p-8 rounded-xl border border-purple-500/30 shadow-[0_0_25px_rgba(112,33,238,0.15)] hover:shadow-[0_0_35px_rgba(112,33,238,0.25)] transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="mb-6 bg-gradient-to-br from-purple-500/20 to-purple-800/20 p-4 rounded-lg w-16 h-16 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{solution.title}</h3>
                <p className="text-gray-300">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/30 p-8 rounded-xl backdrop-blur-md shadow-[0_0_35px_rgba(112,33,238,0.15)]"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
          </div>
          <p className="text-lg text-center text-gray-200 max-w-3xl mx-auto">
            Our solutions grow with your business, adapting to changing needs and 
            expanding capabilities without requiring complete redesigns or rebuilds.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ScalableSolutions;
