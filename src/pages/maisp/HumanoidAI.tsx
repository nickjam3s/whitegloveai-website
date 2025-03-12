
import HeroSection from "./components/humanoidai/HeroSection";
import ServiceFeatures from "./components/humanoidai/ServiceFeatures";
import MethodologySection from "./components/humanoidai/MethodologySection";
import { useEffect } from "react";

const HumanoidAI = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServiceFeatures />
      <MethodologySection />
      
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Contact Us
          </h2>
          <div data-tf-live="01JMAMXNY7NHGYM2YQDXCDRDW6"></div>
        </div>
      </section>
    </div>
  );
};

export default HumanoidAI;
