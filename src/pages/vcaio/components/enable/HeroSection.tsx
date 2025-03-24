
import { Cpu } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-[10%] bg-[radial-gradient(circle_at_50%_50%,#7928CA,transparent_60%)] opacity-25" 
          style={{
            transformOrigin: '60% 40%',
            animation: 'morphing 12s ease-in-out infinite, rotating 15s linear infinite'
          }}
        />
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center animate-fade-up">
          <Cpu className="h-12 w-12 text-secondary mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 heading-highlight">
            AI Enablement Service
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            WhitegloveAI, a premier Managed AI Service Provider™ (MAISP), introduces its AI Enablement Service—a comprehensive solution designed to help organizations adopt and leverage Large Language Models (LLMs) like ChatGPT effectively and securely.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
