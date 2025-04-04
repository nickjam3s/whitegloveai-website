
const supportFeatures = [
  {
    title: "Dedicated Account Manager",
    description: "Receive support from a dedicated account manager."
  },
  {
    title: "Regular System Updates",
    description: "Benefit from system updates and maintenance."
  },
  {
    title: "Knowledge Base Access",
    description: "Access a knowledge base and training resources."
  },
  {
    title: "Proactive Issue Resolution",
    description: "Rely on proactive issue resolution and vendor communication."
  }
];

const Support = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll text-white">
          Comprehensive Support & Maintenance
        </h2>
        <div className="grid md:grid-cols-2 gap-8 animate-section">
          {supportFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background/50 p-6 rounded-lg border border-gray-800 animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
