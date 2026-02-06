import { ArrowUpRight } from "lucide-react";
import StandardHero from '@/components/shared/StandardHero';

const HeroSection = () => {
  return (
    <StandardHero
      showLogo
      logoVariant="icon"
      title="From Conversation to Action: The Power of True Automation"
      subtitle="AutomateAI transforms interactions into outcomes, creating intelligent workflows that automate tasks and integrate with your systems."
      primaryCTA={{
        text: "Learn More",
        href: "/contact",
        icon: ArrowUpRight
      }}
      height="large"
    />
  );
};

export default HeroSection;
