
import { Shield, FileCheck } from "lucide-react";

const SecurityCompliance = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Security and Compliance Assurance
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <Shield className="h-10 w-10 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Highest Standards</h3>
            <p className="text-gray-400">
              We adhere to top-tier security and compliance standards, leveraging AI-AMF's built-in guidelines for data privacy and ethical considerations.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <FileCheck className="h-10 w-10 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Regulatory Compliance</h3>
            <p className="text-gray-400">
              Our service ensures compliance with frameworks such as GDPR, HIPAA, and ISO 27001, providing peace of mind throughout the adoption process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
