import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/20 to-black/90" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Virtual Chief AI Officer
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-10"
          >
            Strategic AI leadership and implementation expertise for organizations at every stage of AI adoption
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
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
        
        <ScrollAnimation targetId="why-vcaio" />
      </div>
    </section>
  );
};

export default HeroSection;
