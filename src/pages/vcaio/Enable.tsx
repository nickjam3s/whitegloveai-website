
import { useEffect } from "react";
import NewHeroSection from './components/enable/NewHeroSection';
import IntroductionSection from './components/enable/IntroductionSection';
import MissionSection from './components/enable/MissionSection';
import ChallengesTableSection from './components/enable/ChallengesTableSection';
import SolutionSection from './components/enable/SolutionSection';
import ContactSection from './components/enable/ContactSection';
import FooterSection from './components/enable/FooterSection';

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
      <MissionSection />
      <ChallengesTableSection />
      <SolutionSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Enable;
