
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  id,
  delay = 0.2
}: AnimatedSectionProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay }
  };

  return (
    <motion.section
      id={id}
      className={className}
      initial={fadeInUp.initial}
      whileInView={fadeInUp.animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={fadeInUp.transition}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
