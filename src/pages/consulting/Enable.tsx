import { useLayoutEffect } from "react";
import NewHeroSection from './components/enable/NewHeroSection';
import IntroductionSection from './components/enable/IntroductionSection';
import ChallengesTableSection from './components/enable/ChallengesTableSection';
import SolutionSection from './components/enable/SolutionSection';
import ResultsSection from './components/enable/ResultsSection';
import SecuritySection from './components/enable/SecuritySection';
import NextStepsSection from './components/enable/NextStepsSection';
import ContactSection from './components/enable/ContactSection';
import FooterSection from './components/enable/FooterSection';

const Enable = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <NewHeroSection />
      <IntroductionSection />
      <ChallengesTableSection />
      <SolutionSection />
      <ResultsSection />
      <SecuritySection />
      <NextStepsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Enable;
