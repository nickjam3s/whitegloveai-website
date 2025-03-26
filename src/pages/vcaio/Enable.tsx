
import { useEffect } from "react";
import NewHeroSection from './components/enable/NewHeroSection';
import IntroductionSection from './components/enable/IntroductionSection';
import ChallengesTableSection from './components/enable/ChallengesTableSection';
import SolutionSection from './components/enable/SolutionSection';
import ResultsSection from './components/enable/ResultsSection';
import ContactSection from './components/enable/ContactSection';
import FooterSection from './components/enable/FooterSection';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

const Enable = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <NewHeroSection />
      <IntroductionSection />
      <ChallengesTableSection />
      <SolutionSection />
      <ResultsSection />
      <ContactSection />
      <FooterSection />
      <ScrollAnimation targetId="introduction-section" />
    </div>
  );
};

export default Enable;
