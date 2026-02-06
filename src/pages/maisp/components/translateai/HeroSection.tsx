import StandardHero from '@/components/shared/StandardHero';

const HeroSection = () => {
  return (
    <StandardHero
      showLogo
      logoVariant="icon"
      title="TranslateAI"
      subtitle="Break language barriers without lifting a finger. TranslateAI delivers real-time translation, captioning, and transcription for your live events and recorded content—fully managed by WhitegloveAI."
      height="large"
    >
      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
        No interpreters. No apps. No hassle. We handle everything behind the scenes so your audiences 
        can understand and engage in their native language—live or on demand.
      </p>
    </StandardHero>
  );
};

export default HeroSection;
