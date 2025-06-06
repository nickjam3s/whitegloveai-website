
import { Shield } from "lucide-react";

const securityFeatures = [
  {
    title: "Data Protection",
    description: "End-to-end encryption and strict access controls to safeguard sensitive information."
  },
  {
    title: "Regulatory Compliance",
    description: "Full alignment with industry-specific regulations such as GDPR, HIPAA, and CCPA."
  },
  {
    title: "Continuous Monitoring",
    description: "Ongoing security assessments and updates to ensure the platform remains secure and compliant."
  }
];

const SecuritySection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Shield className="h-12 w-12 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl font-semibold mb-8 heading-highlight-scroll">
            Security & Compliance
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 heading-highlight-scroll stagger-1">
            WhitegloveAI's AI Enablement Service prioritizes security and compliance at every stage. Our solutions adhere to the highest standards.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 animate-section">
          {securityFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background/50 p-6 rounded-lg border border-gray-800 animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
