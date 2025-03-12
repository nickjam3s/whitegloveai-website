
import { Check } from "lucide-react";

const features = [
  {
    title: "Vendor Selection & Procurement",
    description: "Identify the most suitable AI vendors based on your industry, use case, and budget."
  },
  {
    title: "Licensing & Contract Management",
    description: "Simplify the licensing process with expert negotiation and compliance."
  },
  {
    title: "Integration & Deployment",
    description: "Ensure seamless integration of AI solutions into your existing infrastructure."
  }
];

const VendorManagement = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          End-to-End AI Vendor Management
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800">
              <div className="flex items-start">
                <Check className="h-6 w-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorManagement;
