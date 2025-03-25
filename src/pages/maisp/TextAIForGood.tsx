
import { useEffect } from "react";
import HeroSection from "./components/textaiforgood/HeroSection";
import BenefitsSection from "./components/textaiforgood/BenefitsSection";
import EfficiencyImpactSection from "./components/textaiforgood/EfficiencyImpactSection";
import PartnersSection from "./components/textaiforgood/PartnersSection";
import ContactSection from "./components/textaiforgood/ContactSection";

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
      <BenefitsSection />
      <EfficiencyImpactSection />
      <PartnersSection />
      <ContactSection />
    </div>
  );
};

export default TextAIForGood;
