
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface ScrollAnimationProps {
  targetId: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ targetId }) => {
  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      initial={{ y: 0, opacity: 0.5 }}
      animate={{ y: 10, opacity: 1 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
    >
      <a href={`#${targetId}`} aria-label="Scroll to learn more">
        <ArrowDown className="h-6 w-6 md:h-8 md:w-8 text-[#7021EE]" />
      </a>
    </motion.div>
  );
};

export default ScrollAnimation;
