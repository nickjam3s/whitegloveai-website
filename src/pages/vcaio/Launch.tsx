
import { useEffect } from "react";
import HeroSection from "./components/launch/HeroSection";
import ImportanceSection from "./components/launch/ImportanceSection";
import ProcessSection from "./components/launch/ProcessSection";
import DeliverablesSection from "./components/launch/DeliverablesSection";
import ResultsSection from "./components/launch/ResultsSection";
import NextStepsSection from "./components/launch/NextStepsSection";
import ContactSection from "./components/launchai/ContactSection";
import ScrollAnimation from '@/components/animations/ScrollAnimation';

const Launch = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ImportanceSection />
      <ProcessSection />
      <DeliverablesSection />
      <ResultsSection />
      <NextStepsSection />
      <ContactSection />
      <ScrollAnimation targetId="importance-section" />
    </div>
  );
};

export default Launch;
