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
  }} aria-hidden="true">
      <a href={`#${targetId}`} aria-label="Scroll to learn more" onClick={handleClick} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/30 to-purple-700/30 backdrop-blur-md border border-purple-500/30 hover:from-purple-500/40 hover:to-purple-700/40 transition-colors">
        {showArrow}
      </a>
    </motion.div>;
};
export default ScrollAnimation;