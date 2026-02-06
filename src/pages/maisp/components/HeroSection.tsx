import StandardHero from '@/components/shared/StandardHero';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

const HeroSection = () => {
  return (
    <StandardHero
      showLogo
      logoVariant="icon"
      title="Managed AI Services for Enterprise"
      subtitle="Leverage our expertise to implement, manage, and scale AI solutions tailored to your business needs"
      height="auto"
      backgroundVariant="minimal"
      showScrollIndicator
      scrollTargetId="patented-expertise"
    />
  );
};

export default HeroSection;
