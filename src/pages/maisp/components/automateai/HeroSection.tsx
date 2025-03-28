
import { ArrowRight, ArrowUpRight, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-[10%] bg-[radial-gradient(circle_at_50%_50%,#7928CA,transparent_60%)] opacity-25" style={{
          transformOrigin: '60% 40%',
          animation: 'morphing 12s ease-in-out infinite, rotating 15s linear infinite'
        }}></div>
        <div className="absolute inset-0 backdrop-blur-[100px]"></div>
      </div>
      <div className="max-w-7xl mx-auto relative">
        <motion.h1 
          initial={{ opacity: 1, y: 0 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
        >
          Managed AutomateAI Service by Lucidis            
        </motion.h1>
 
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          A managed service designed to revolutionize your business operations through intelligent automation. Built on the robust Lucidis.ai platform, AutomateAI employs agentic workflows to streamline and optimize your processes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://lucidis.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-secondary/20 hover:bg-secondary/30 rounded-lg transition-colors border border-secondary/50">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
