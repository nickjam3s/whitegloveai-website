
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
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 mx-auto">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Security & Compliance
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            WhitegloveAI's AI Enablement Service prioritizes security and compliance at every stage. Our solutions adhere to the highest standards to protect your organization.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {securityFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                <Shield className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
