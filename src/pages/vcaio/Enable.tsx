
import { useEffect } from "react";
import HeroSection from './components/enable/HeroSection';
import ChallengesSection from './components/enable/ChallengesSection';
import SolutionSection from './components/enable/SolutionSection';
import BenefitsSection from './components/enable/BenefitsSection';
import SecuritySection from './components/enable/SecuritySection';

const Enable = () => {
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
      <ChallengesSection />
      <SolutionSection />
      <BenefitsSection />
      <SecuritySection />
      
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Contact Us
          </h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Ready to start your AI enablement journey? Get in touch with our team of experts.
          </p>
          <div data-tf-live="01JMANX32Q8N97C9RXW4GRN312"></div>
        </div>
      </section>
    </div>
  );
};

export default Enable;
