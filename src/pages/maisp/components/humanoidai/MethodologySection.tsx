
const steps = [
  {
    title: "Assessment",
    description: "Evaluate your business needs and goals through comprehensive analysis of current operations, workflows, and pain points. Our team conducts detailed site surveys, stakeholder interviews, and process mapping to identify optimal automation opportunities."
  },
  {
    title: "Deployment",
    description: "Integrate robots into your workflows with our proven implementation framework. This includes customized programming, safety protocols, staff training, and staged rollout to ensure minimal disruption. We handle everything from physical setup to systems integration and network configuration."
  },
  {
    title: "Optimization",
    description: "Continuous improvement using advanced AI and machine learning algorithms to enhance robot performance over time. We monitor key metrics, analyze operational data, and fine-tune systems to maximize efficiency, while regularly updating software and adding new capabilities as your needs evolve."
  }
];

const MethodologySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Structured Methodology
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
