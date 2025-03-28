
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  return <section id="hero" className="relative h-[75vh] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-8 md:mb-16">
          
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#9b87f5]">
            MediaAI Managed Service
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
        }} className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto px-3 sm:px-0 text-shadow-sm">
            WhitegloveAI's MediaAI service helps you create, manage, and optimize 
            digital media content with our enterprise-grade AI solutions.
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
            <a href="#contact" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#9b87f5] hover:bg-[#9b87f5]/90 rounded-lg transition-colors">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#service-plans" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#9b87f5]/20 hover:bg-[#9b87f5]/30 rounded-lg transition-colors border border-[#9b87f5]/50">
              View Service Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
