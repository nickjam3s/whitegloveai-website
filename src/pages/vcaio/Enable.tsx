
import HeroSection from './components/enable/HeroSection';
import ChallengesSection from './components/enable/ChallengesSection';
import SolutionSection from './components/enable/SolutionSection';
import BenefitsSection from './components/enable/BenefitsSection';
import SecuritySection from './components/enable/SecuritySection';

const Enable = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ChallengesSection />
      <SolutionSection />
      <BenefitsSection />
      <SecuritySection />
    </div>
  );
};

export default Enable;
