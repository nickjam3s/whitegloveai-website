
import React, { useEffect } from 'react';
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollAnimation from '@/components/animations/ScrollAnimation';

const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-[10%] bg-[radial-gradient(circle_at_50%_50%,#7928CA,transparent_60%)] opacity-25 animate-[morphing_12s_ease-in-out_infinite]" style={{
          transformOrigin: '60% 40%',
          animation: 'morphing 12s ease-in-out infinite, rotating 15s linear infinite'
        }}></div>
        <div className="absolute inset-[10%] bg-[radial-gradient(circle_at_50%_50%,#7021EE,transparent_50%)] opacity-30" style={{
          transformOrigin: '40% 60%',
          animation: 'morphing 8s ease-in-out infinite reverse, rotating 20s linear infinite reverse'
        }}></div>
        <div className="absolute inset-[10%] bg-[radial-gradient(circle_at_50%_50%,#FF0080,transparent_55%)] opacity-20" style={{
          transformOrigin: '30% 70%',
          animation: 'morphing 15s ease-in-out infinite, rotating 25s linear infinite'
        }}></div>
        <div className="absolute inset-0 backdrop-blur-[100px]"></div>
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center animate-fade-up">
          <div className="logo-container">
            <img src="/lovable-uploads/197ddc10-c159-4f39-a269-e35142af32c5.png" alt="WhitegloveAI Logo" className="h-32 mx-auto mb-8 logo-animation" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 heading-highlight text-white">
            Your Trusted AI Adoption Partner
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            At WhitegloveAI, we guide you through the transformative journey of AI adoption—ensuring every step is secure, compliant, and aligned with your business goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-colors">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="https://jzaxt350p9j.typeform.com/to/JlpkD8L8#name=xxxxx&email=xxxxx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-secondary/20 hover:bg-secondary/30 rounded-lg transition-colors border border-secondary/50">
              Take the AI Readiness Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Add ScrollAnimation to point to the next section */}
      <ScrollAnimation targetId="services" />
    </section>
  );
};

export default HeroSection;
