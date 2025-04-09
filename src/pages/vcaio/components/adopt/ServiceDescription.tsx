
import { ClipboardCheck, GitFork, Shield, Cpu } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "AI Readiness Assessment",
    description: "Evaluate your organization's capabilities, infrastructure, and culture for AI adoption."
  },
  {
    icon: GitFork,
    title: "Strategic Roadmap Development",
    description: "Create a tailored AI adoption strategy aligned with business objectives."
  },
  {
    icon: Shield,
    title: "Risk and Compliance Management",
    description: "Address potential risks, including ethical considerations and data privacy."
  },
  {
    icon: Cpu,
    title: "AI Solution Selection and Integration",
    description: "Implement suitable AI technologies, ensuring seamless integration with existing systems."
  }
];

const ServiceDescription = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Comprehensive Service Description
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-gray-800">
              <service.icon className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDescription;
