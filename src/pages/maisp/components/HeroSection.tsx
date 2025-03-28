import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/animations/ScrollAnimation';
const HeroSection = () => {
  return <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/20 to-black/90" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
            Managed AI Services for Enterprise
          </motion.h1>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-xl text-gray-300 mb-10">
            Leverage our expertise to implement, manage, and scale AI solutions tailored to your business needs
          </motion.p>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            
          </motion.div>
        </div>
        
        {/* Move ScrollAnimation closer to the bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full">
          <ScrollAnimation targetId="patented-expertise" />
        </div>
      </div>
    </section>;
};
export default HeroSection;