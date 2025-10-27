import { Workflow } from "lucide-react";

const solutions = [
  {
    title: "Intelligent Workflow Automation",
    description: "Leverage agentic workflows to automate complex business processes, reducing the need for manual input and minimizing errors."
  },
  {
    title: "Seamless Integration",
    description: "Connect with your existing systems and applications effortlessly, ensuring a unified and efficient operational environment."
  },
  {
    title: "Scalability",
    description: "Adapt and scale your automated workflows as your business grows, ensuring sustained efficiency and performance."
  }
];

const SolutionsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-4 text-center heading-highlight-scroll">
          Our Solution
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Built on the secure and scalable <a href="https://www.lucidis.ai" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Lucidis</a> platform, AutomateAI delivers intelligent automation that transforms your operations.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
              <Workflow className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">{solution.title}</h3>
              <p className="text-gray-400">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
