
import { useEffect } from "react";
import HeroSection from "./components/textai/HeroSection";
import ProblemSolutionSection from "./components/textai/ProblemSolutionSection";
import BenefitsSection from "./components/textai/BenefitsSection";
import SecuritySection from "./components/textai/SecuritySection";
import WhyChooseSection from "./components/textai/WhyChooseSection";
import ROISection from "./components/textai/ROISection";

const TextAI = () => {
  useEffect(() => {
    // Load the Typeform script
    const typeformScript = document.createElement('script');
    typeformScript.src = "//embed.typeform.com/next/embed.js";
    typeformScript.defer = true;
    document.body.appendChild(typeformScript);

    // Initialize intersection observer for scroll animations
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    // Observe all scroll-animated headings
    document.querySelectorAll('.heading-highlight-scroll').forEach(heading => {
      observer.observe(heading);
    });

    return () => {
      document.body.removeChild(typeformScript);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSolutionSection />
      <BenefitsSection />
      <SecuritySection />
      <WhyChooseSection />
      <ROISection />
    </div>
  );
};

export default TextAI;
