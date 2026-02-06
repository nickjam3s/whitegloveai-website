import { ArrowRight } from "lucide-react";
import StandardHero from '@/components/shared/StandardHero';

const HeroSection = () => {
  return (
    <StandardHero
      showLogo
      logoVariant="icon"
      title="Managed VendorAI Service"
      subtitle="Simplify AI vendor management, reduce costs, and enhance performance with VendorAI."
      primaryCTA={{
        text: "Contact Us",
        href: "#contact",
        icon: ArrowRight
      }}
      height="large"
    />
  );
};

export default HeroSection;
