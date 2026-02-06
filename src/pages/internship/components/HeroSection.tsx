import StandardHero from '@/components/shared/StandardHero';

const HeroSection = () => {
  return (
    <StandardHero
      showLogo
      logoVariant="icon"
      title="Kickstart Your AI Journey"
      subtitle="Our year-round internship program offers students an incredible opportunity to gain real-world AI experience while working alongside industry experts."
      primaryCTA={{
        text: "Apply Now",
        href: "#contact"
      }}
      secondaryCTA={{
        text: "Learn More",
        href: "#why-us"
      }}
      height="full"
      showScrollIndicator
      scrollTargetId="why-us"
    >
      <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 text-secondary text-sm font-medium tracking-wide uppercase mb-4">
        AI Internship Program
      </span>
    </StandardHero>
  );
};

export default HeroSection;
