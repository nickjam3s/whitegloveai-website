
import { useEffect } from "react";
import TextAIForGoodHero from "./components/textai/TextAIForGoodHero";
import AIMovementSection from "./components/textai/AIMovementSection";
import EfficiencyImpactSection from "./components/textai/EfficiencyImpactSection";
import DemoSection from "./components/textai/DemoSection";
import PartnersSection from "./components/textai/PartnersSection";
import ProgramWorkflowSection from "./components/textai/ProgramWorkflowSection";
import ContactSection from "./components/textai/ContactSection";

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
      <TextAIForGoodHero />
      <AIMovementSection />
      <EfficiencyImpactSection />
      <DemoSection />
      <PartnersSection />
      <ProgramWorkflowSection />
      <ContactSection />
    </div>
  );
};

export default TextAI;
