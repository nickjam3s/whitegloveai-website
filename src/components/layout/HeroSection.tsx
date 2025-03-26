
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  height?: string;
  showArrow?: boolean;
  id?: string;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  height = "h-[100vh]", 
  showArrow = true,
  id = "mission" 
}: HeroSectionProps) => {
  const isMobile = useIsMobile();
  
  return (
    <section className={`relative ${height} flex items-center overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/20 to-black/90">
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#7021EE]/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: isMobile ? `${Math.random() * 100 + 30}px` : `${Math.random() * 200 + 50}px`,
              height: isMobile ? `${Math.random() * 100 + 30}px` : `${Math.random() * 200 + 50}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-8 md:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto px-3 sm:px-0 text-shadow-sm"
          >
            {subtitle}
          </motion.p>
        </div>

        {showArrow && (
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            initial={{ y: 0, opacity: 0.5 }}
            animate={{ y: 10, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          >
            <a href={`#${id}`} aria-label="Scroll to learn more">
              <ArrowDown className="h-6 w-6 md:h-8 md:w-8 text-[#7021EE]" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
