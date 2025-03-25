
import { useEffect } from "react";
import HeroSection from "./components/launch/HeroSection";
import ImportanceSection from "./components/launch/ImportanceSection";
import ProcessSection from "./components/launch/ProcessSection";
import DeliverablesSection from "./components/launch/DeliverablesSection";
import ResultsSection from "./components/launch/ResultsSection";
import NextStepsSection from "./components/launch/NextStepsSection";
import ContactSection from "./components/launchai/ContactSection";

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
            
              </div>
  );
};

export default Launch;
