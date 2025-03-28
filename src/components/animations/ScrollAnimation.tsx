
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface ScrollAnimationProps {
  targetId: string;
  className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ targetId, className }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'auto' });
    }
  };

  return (
    <motion.div 
      className={`absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10 ${className || ''}`}
      initial={{ y: 0, opacity: 0.5 }}
      animate={{ y: 10, opacity: 1 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      aria-hidden="true"
    >
      <a 
        href={`#${targetId}`} 
        aria-label="Scroll to learn more"
        onClick={handleClick}
      >
        <ArrowDown className="h-6 w-6 md:h-8 md:w-8 text-[#7021EE] animate-pulse-slow" />
      </a>
    </motion.div>
  );
};

export default ScrollAnimation;
