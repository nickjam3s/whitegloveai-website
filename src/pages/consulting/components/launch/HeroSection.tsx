import StandardHero from '@/components/shared/StandardHero';

const HeroSection = () => {
  return (
    <StandardHero
      showLogo
      logoVariant="icon"
      title="The AI Launchpad Workshop"
      subtitle="WhitegloveAI's AI Launchpad Workshop is designed for those ready to embrace AI but unwilling to compromise security, accuracy, or compliance. We eliminate the fear and uncertainty holding teams back."
      height="full"
    />
  );
};

export default HeroSection;
