
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden" id="hero">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-[10%] bg-[radial-gradient(circle_at_50%_50%,#7928CA,transparent_60%)] opacity-25" 
          style={{
            transformOrigin: '60% 40%',
            animation: 'morphing 12s ease-in-out infinite, rotating 15s linear infinite'
          }}
        />
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 heading-highlight">
            vCAIO, Strategic AI Leadership, On-Demand
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Empower your business with the strategic guidance of a virtual Chief AI Officer (vCAIO), 
            a fractional executive role designed to propel your organization toward AI-driven success.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="inline-block">
              <button className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md px-8 py-4 text-lg transition-colors relative">
                <span className="inline-flex items-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
