
import { useEffect } from "react";
import HeroSection from "./components/textaiforgood/HeroSection";
import IntroSection from "./components/textaiforgood/IntroSection";
import BenefitsSection from "./components/textaiforgood/BenefitsSection";
import ProcessSection from "./components/textaiforgood/ProcessSection";
import PartnersSection from "./components/textaiforgood/PartnersSection";
import ContactSection from "./components/textaiforgood/ContactSection";
import { useInView } from "react-intersection-observer";

const TextAIForGood = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Use intersection observer hook for animation
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '0px 0px -100px 0px'
  });

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <div ref={ref}>
        <div className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <IntroSection />
          <BenefitsSection />
          <ProcessSection />
          <PartnersSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default TextAIForGood;
