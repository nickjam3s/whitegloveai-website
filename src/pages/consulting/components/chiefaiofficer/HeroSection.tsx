
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative h-[100vh] flex items-center overflow-hidden bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--secondary)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-8 md:mb-16">
        <div className="flex justify-center mb-6"> {/* Added container for centering */}
            <img 
              src="/lovable-uploads/351136e7-c241-4c56-a606-3ff7a65a05ac.png" 
              alt="WGAI Logo" 
              width="100" 
              height="100" 
              className="logo-animation mx-auto" // Added mx-auto class
              style={{ 
                filter: "hue-rotate(260deg) brightness(150%) drop-shadow(0 0 10px rgba(112, 33, 238, 0.6))",
                display: "block" // Ensures block-level display
              }}
            />
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
          >
            Fractional Chief AI Officer
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
        <a href="#why-caio" aria-label="Scroll to learn more">
          <ArrowDown className="h-6 w-6 md:h-8 md:w-8 text-[#7021EE]" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
