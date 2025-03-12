
import { AlertTriangle } from "lucide-react";

const ChallengesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <AlertTriangle className="h-12 w-12 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl font-semibold mb-8 heading-highlight-scroll">The Challenge</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Understanding and Utilizing LLMs</h3>
            <p className="text-gray-400">
              While tools like ChatGPT offer immense potential, many users lack the foundational knowledge to interact with these systems effectively. This knowledge gap limits the ability to maximize the value of AI in day-to-day operations.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Ensuring Secure AI Implementation</h3>
            <p className="text-gray-400">
              Deploying AI solutions in industries with strict compliance requirements demands robust security measures. Without a secure platform, organizations risk data breaches, regulatory violations, and reputational damage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
