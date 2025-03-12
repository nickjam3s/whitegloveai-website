
import { FileText, Map, FileCheck, Box } from "lucide-react";

const deliverables = [
  {
    icon: FileText,
    title: "AI Readiness Assessment Report",
    description: "Comprehensive evaluation of your organization's AI readiness."
  },
  {
    icon: Map,
    title: "Customized AI Adoption Roadmap",
    description: "Tailored strategy with prioritized use cases for your business."
  },
  {
    icon: FileCheck,
    title: "Risk and Compliance Documentation",
    description: "Detailed guidelines for managing AI-related risks and compliance."
  },
  {
    icon: Box,
    title: "Integrated AI Solutions",
    description: "Fully deployed AI solutions with comprehensive guides."
  }
];

const Deliverables = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Comprehensive Deliverables
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {deliverables.map((deliverable, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-gray-800">
              <deliverable.icon className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{deliverable.title}</h3>
              <p className="text-gray-400">{deliverable.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
