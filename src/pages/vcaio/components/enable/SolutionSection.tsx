
import { Check } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Check className="h-12 w-12 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl font-semibold mb-8 heading-highlight-scroll">
            The Solution: WhitegloveAI AI Enablement Service
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background/50 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Foundational Training on LLM Interaction</h3>
            <p className="text-gray-400">
              We provide clients with the tools and knowledge to effectively interact with LLMs like ChatGPT, enabling them to ask the right questions, interpret responses, and integrate AI into their workflows.
            </p>
          </div>
          <div className="bg-background/50 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Dedicated Secure AI Platform Implementation</h3>
            <p className="text-gray-400">
              Implementing a dedicated customer GenAI platform, with unlimited access to all top models. We deliver secure, industry-specific AI solutions that meet compliance requirements while enabling scalable and efficient AI adoption.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
