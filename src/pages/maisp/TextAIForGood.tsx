
import { useEffect } from "react";
import HeroSection from "./components/textaiforgood/HeroSection";
import IntroSection from "./components/textaiforgood/IntroSection";
import BenefitsSection from "./components/textaiforgood/BenefitsSection";
import ProcessSection from "./components/textaiforgood/ProcessSection";
import PartnersSection from "./components/textaiforgood/PartnersSection";
import ContactSection from "./components/textaiforgood/ContactSection";
import EfficiencyImpactSection from "./components/textaiforgood/EfficiencyImpactSection";

const TextAIForGood = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Initialize intersection observer for scroll animations
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe all scroll-animated headings
    const headings = document.querySelectorAll('.heading-highlight-scroll');
    headings.forEach(heading => {
      observer.observe(heading);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <IntroSection />
      <EfficiencyImpactSection />
      <BenefitsSection />
      <ProcessSection />
      <PartnersSection />
      <ContactSection />
    </div>
  );
};

export default TextAIForGood;
