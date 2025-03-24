
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TuitionSection: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-black">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Investment in Your Future
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Our program offers unmatched value with a structure designed to help you succeed while maintaining financial stability.
          </p>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Need help with financing options? Schedule a consultation with our admissions team to discuss your goals and financial situation.
          </p>
          <Button variant="outline" className="px-8 py-6 relative">
            <span className="relative z-10">
              Schedule Consultation
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TuitionSection;
