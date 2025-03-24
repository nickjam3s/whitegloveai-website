
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/20 to-black/90">
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Transform Your Career in AI with WhitegloveAI
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Our exclusive 6-month apprenticeship program offers an unparalleled opportunity to master cutting-edge AI technology while working on real-world solutions.
            </p>
            <Button size="lg" className="bg-[#7021EE] hover:bg-[#7021EE]/90 flex items-center justify-center relative">
              <span className="relative z-10 flex items-center justify-center">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="w-full h-[450px] rounded-lg bg-gradient-to-br from-[#7021EE]/30 to-[#9b87f5]/10 p-6 flex items-center justify-center">
                <svg width="320" height="320" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Simple AI illustration */}
                  <circle cx="100" cy="100" r="70" fill="#7021EE" fillOpacity="0.2" />
                  <path d="M60 70h80v80H60z" stroke="#9b87f5" strokeWidth="3" />
                  <path d="M100 60v120" stroke="#9b87f5" strokeWidth="3" />
                  <path d="M60 120h80" stroke="#9b87f5" strokeWidth="3" />
                  <circle cx="85" cy="100" r="8" fill="#ffffff" />
                  <circle cx="115" cy="100" r="8" fill="#ffffff" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
