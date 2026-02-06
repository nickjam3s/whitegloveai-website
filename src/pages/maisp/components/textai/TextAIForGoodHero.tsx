import StandardHero from '@/components/shared/StandardHero';

const TextAIForGoodHero = () => {
  return (
    <StandardHero
      title="TextAI for Good: Empowering Nonprofits with AI"
      subtitle="TextAI for Good provides free AI-powered chatbots to nonprofits, enhancing engagement and amplifying impact."
      primaryCTA={{
        text: "Contact Us",
        href: "#contact"
      }}
      height="large"
      centered={false}
      sideContent={
        <img 
          src="/lovable-uploads/67736409-ebce-484e-b734-11a3655edc31.png" 
          alt="People illustration" 
          className="w-full max-w-md mx-auto"
        />
      }
    />
  );
};

export default TextAIForGoodHero;
