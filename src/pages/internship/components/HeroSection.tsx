import { motion } from 'framer-motion';
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  const titleAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const scrollToApply = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/30 via-[#7021EE]/10 to-black" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(112, 33, 238, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(112, 33, 238, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#7021EE]/20 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#9b4dff]/20 blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <img 
            src="/lovable-uploads/351136e7-c241-4c56-a606-3ff7a65a05ac.png" 
            alt="WhitegloveAI Logo" 
            width="120" 
            height="120" 
            className="mx-auto"
            style={{ 
              filter: "brightness(0) invert(1) drop-shadow(0 0 20px rgba(112, 33, 238, 0.8))"
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#7021EE]/20 border border-[#7021EE]/40 text-[#9b4dff] text-sm font-medium tracking-wide uppercase">
            AI Internship Program
          </span>
        </motion.div>

        <motion.h1 
          {...titleAnimation}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">Kickstart Your </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7021EE] to-[#9b4dff]">
            AI Journey
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Our summer internship program offers students an incredible opportunity 
          to gain real-world AI experience while working alongside industry experts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            onClick={scrollToApply}
            className="bg-[#7021EE] hover:bg-[#5a1ab8] text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg shadow-[#7021EE]/30 hover:shadow-[#7021EE]/50 transition-all duration-300"
          >
            Apply Now
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
          >
            Learn More
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown className="w-6 h-6 text-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
