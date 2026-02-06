import { ArrowRight } from 'lucide-react';
import StandardHero from '@/components/shared/StandardHero';

const HeroSection = () => {
  return (
    <StandardHero
      title="Your Trusted AI Adoption Partner"
      subtitle="At WhitegloveAI, we guide you through the transformative journey of AI adoption—ensuring every step is secure, compliant, and aligned with your business goals."
      primaryCTA={{
        text: "Take the AI Readiness Assessment",
        href: "https://forms.whitegloveai.com/H0EnGl",
        external: true,
        icon: ArrowRight
      }}
      height="large"
    />
  );
};

export default HeroSection;
