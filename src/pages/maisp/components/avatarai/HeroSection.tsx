import { Video } from "lucide-react";
import StandardHero from '@/components/shared/StandardHero';

const HeroSection = () => {
  return (
    <StandardHero
      showLogo
      logoVariant="icon"
      title="The Human Face of Digital Interaction"
      subtitle="AvatarAI brings your brand to life with realistic, conversational digital humans, providing face-to-face engagement at scale."
      primaryCTA={{
        text: "Try Demo",
        href: "https://avatar.labs.whitegloveai.com/",
        external: true,
        icon: Video
      }}
      height="large"
    />
  );
};

export default HeroSection;
