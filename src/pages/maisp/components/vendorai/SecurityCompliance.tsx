
const securityFeatures = [
  {
    title: "Adherence to Standards",
    description: "VendorAI adheres to industry standards and regulations, including GDPR, HIPAA, and ISO 27001."
  },
  {
    title: "Stringent Security Requirements",
    description: "Ensure vendor solutions meet stringent security and compliance requirements. Regular audits and assessments maintain data privacy."
  }
];

const SecurityCompliance = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Prioritizing Security & Compliance
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
