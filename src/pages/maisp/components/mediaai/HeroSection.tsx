
import { ArrowRight, Mic, Podcast } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-[10%] bg-[radial-gradient(circle_at_50%_50%,#9b87f5,transparent_60%)] opacity-25" style={{
          transformOrigin: '60% 40%',
          animation: 'morphing 12s ease-in-out infinite, rotating 15s linear infinite'
        }}></div>
        <div className="absolute inset-0 backdrop-blur-[100px]"></div>
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-[#9b87f5]/20 rounded-full">
                <Podcast className="w-10 h-10 text-[#9b87f5]" />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 heading-highlight">
              MediaAI: Comprehensive Solutions for Your Podcast Journey
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Elevate your podcasting journey with our tiered service packages designed to meet the needs 
              of creators at every level. From basic production assistance to premium full-service solutions.
            </p>
            
            <Button className="group" asChild>
              <a href="#plans" className="inline-flex items-center">
                Explore Plans
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
