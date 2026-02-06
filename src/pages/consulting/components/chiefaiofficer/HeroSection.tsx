import StandardHero from '@/components/shared/StandardHero';

const HeroSection = () => {
  return (
    <StandardHero
      showLogo
      logoVariant="icon"
      title="Fractional Chief AI Officer"
      subtitle="Strategic AI leadership and implementation expertise for organizations at every stage of AI adoption"
      primaryCTA={{
        text: "Learn More",
        href: "#services"
      }}
      height="full"
      showScrollIndicator
      scrollTargetId="why-caio"
    />
  );
};

export default HeroSection;
