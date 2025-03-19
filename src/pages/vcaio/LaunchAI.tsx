
import { useEffect } from "react";
import HeroSection from "./components/launchai/HeroSection";
import ChallengesSection from "./components/launchai/ChallengesSection";
import IntroductionSection from "./components/launchai/IntroductionSection";
import ProcessSection from "./components/launchai/ProcessSection";
import ResultsSection from "./components/launchai/ResultsSection";
import UrgencySection from "./components/launchai/UrgencySection";
import ContactSection from "./components/launchai/ContactSection";

const LaunchAI = () => {
  useEffect(() => {
    // Add typeform script if needed
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
      <IntroductionSection />
      <ProcessSection />
      <ResultsSection />
      <UrgencySection />
      <ContactSection />
    </div>
  );
};

export default LaunchAI;
