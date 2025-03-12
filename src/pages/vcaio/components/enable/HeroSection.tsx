
import { Cpu } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Cpu className="h-12 w-12 text-secondary mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-6 heading-highlight-scroll">
            AI Enablement Service
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            WhitegloveAI, a premier Managed AI Service Provider™ (MAISP), introduces its AI Enablement Service—a comprehensive solution designed to empower organizations to adopt and leverage Large Language Models (LLMs) like ChatGPT effectively and securely.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
