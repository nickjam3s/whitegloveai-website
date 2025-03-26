
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <div className="max-w-7xl mx-auto relative animate-fade-up">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 heading-highlight-scroll">
            Managed VendorAI Service
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8 heading-highlight-scroll stagger-1">
            Simplify AI vendor management, reduce costs, and enhance performance with VendorAI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll stagger-2">
            <a href="#contact" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-colors">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#vendor-management" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-transparent border border-gray-700 rounded-lg hover:bg-white/5 transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
