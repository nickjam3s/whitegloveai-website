
import { ScrollArea } from "@/components/ui/scroll-area";

const levels = [
  {
    title: "Transformative Impact",
    description: "Lead your industry with cutting-edge applications, ethical leadership, and a commitment to shaping global standards for the future of AI."
  },
  {
    title: "Enterprise-Wide Transformation",
    description: "Drive enterprise-wide innovation by embedding AI into strategic decision-making, fostering R&D ecosystems, and enabling secure, decentralized operations."
  },
  {
    title: "Scaling & Integration",
    description: "Accelerate AI adoption across departments with scalable MLOps workflows, cross-functional teams, and targeted upskilling programs."
  },
  {
    title: "Foundational Readiness",
    description: "Lay the groundwork for AI success with strategic assessments, ethical governance, and high-ROI pilot projects tailored to your organization."
  }
];

const MaturityLevels = () => {
  return (
    <section className="py-24 bg-background" id="maturity-levels">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 heading-highlight-scroll">AI Adoption & Management Framework (AI-AMF)</h2>
          <h3 className="text-xl text-gray-400 mb-12">WhiteGloveAI: AI Maturity Levels</h3>
        </div>
        
        <ScrollArea className="h-[460px] rounded-md">
          <div className="space-y-6 pr-4">
            {levels.map((level, index) => (
              <div key={index} className="bg-card p-8 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
                <h3 className="text-2xl font-bold mb-4">{level.title}</h3>
                <p className="text-gray-400">{level.description}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        <p className="text-center mt-12 text-gray-400">
          The vCAIO tailors the AI-AMF framework to an organization's maturity level, ensuring incremental and measurable progress.
        </p>
      </div>
    </section>
  );
};

export default MaturityLevels;
