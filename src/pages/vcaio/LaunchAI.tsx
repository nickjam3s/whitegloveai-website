
import { useEffect } from "react";
import HeroSection from "./components/launchai/HeroSection";
import ChallengesSection from "./components/launchai/ChallengesSection";
import IntroductionSection from "./components/launchai/IntroductionSection";
import ProcessSection from "./components/launchai/ProcessSection";
import ResultsSection from "./components/launchai/ResultsSection";
import UrgencySection from "./components/launchai/UrgencySection";
import ContactSection from "./components/launchai/ContactSection";
import ScrollAnimation from '@/components/animations/ScrollAnimation';

const LaunchAI = () => {
  useEffect(() => {
    // Add typeform script if needed
    const existingScript = document.getElementById('typeform-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'typeform-script';
      script.src = "//embed.typeform.com/next/embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (document.getElementById('typeform-script')) {
          document.body.removeChild(script);
        }
      };
    }
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
      <ScrollAnimation targetId="challenges-section" />
    </div>
  );
};

export default LaunchAI;
