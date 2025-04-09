
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative h-[100vh] flex items-center overflow-hidden">
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
              opacity: [0.15, 0.25, 0.15], // Reduced opacity slightly
            }}
            transition={{
              duration: Math.random() * 15 + 10, // Reduced duration to speed up animation
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
        <img 
              src="/lovable-uploads/351136e7-c241-4c56-a606-3ff7a65a05ac.png" 
              alt="WGAI Logo" 
              width="100" 
              height="100" 
              className="logo-animation"
              style={{ filter: "hue-rotate(260deg) brightness(150%) drop-shadow(0 0 10px rgba(112, 33, 238, 0.6))" }}
            />
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
          >
            Virtual Chief AI Officer
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto px-3 sm:px-0 text-shadow-sm"
          >
            Strategic AI leadership and implementation expertise for organizations at every stage of AI adoption
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <a 
              href="#contact" 
              className="bg-[#7021EE] hover:bg-[#7021EE]/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Get Started
            </a>
            <a 
              href="#services" 
              className="bg-transparent border border-[#7021EE] text-white px-6 py-3 rounded-md font-medium hover:bg-[#7021EE]/10 transition-colors"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Arrow moved to the bottom of the hero section, more separated from buttons */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ y: 0, opacity: 0.5 }}
        animate={{ y: 10, opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <a href="#why-vcaio" aria-label="Scroll to learn more">
          <ArrowDown className="h-6 w-6 md:h-8 md:w-8 text-[#7021EE]" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
