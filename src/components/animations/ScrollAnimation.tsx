import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
interface ScrollAnimationProps {
  targetId: string;
  className?: string;
  showArrow?: boolean;
}
const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  targetId,
  className,
  showArrow = true
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'auto'
      });
    }
  };
  return <motion.div className={`absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10 ${className || ''}`} initial={{
    y: 0,
    opacity: 0.5
  }} animate={{
    y: 10,
    opacity: 1
  }} transition={{
    duration: 1,
    repeat: Infinity,
    repeatType: "reverse"
  }} onClick={handleClick} aria-hidden="true">
      {showArrow}
    </motion.div>;
};
export default ScrollAnimation;