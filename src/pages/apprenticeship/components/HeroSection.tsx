import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/20 to-black/90">
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>
      <div className="container mx-auto px-4 pt-16 md:pt-24 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Transform Your Career in AI with WhitegloveAI
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Our exclusive 6-month apprenticeship program offers an unparalleled opportunity to master cutting-edge AI technology while working on real-world solutions.
            </p>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;