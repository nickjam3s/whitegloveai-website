
const outcomes = [
  {
    title: "Cost Reduction",
    description: "Lower operational costs through automated processes, reduced manual labor, and minimized error-related expenses. Our clients typically see a 20% decrease in operational overhead within the first year."
  },
  {
    title: "Engagement Increase",
    description: "Significant boost in customer interaction quality and frequency. With 24/7 automated responses and consistent service delivery, businesses experience a 30% improvement in customer satisfaction scores."
  },
  {
    title: "Task Completion",
    description: "Enhanced efficiency in task execution with 15% faster processing times. Automated workflows handle routine tasks with greater accuracy, allowing human workers to focus on strategic initiatives."
  }
];

const BusinessOutcomes = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-8 text-center heading-highlight-scroll">
          Measurable Business Outcomes
        </h2>
        <p className="text-lg text-gray-400 text-center mb-12">
          Our robotic automation solutions deliver tangible improvements across key performance indicators:
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-white">{outcome.title}</h3>
              <p className="text-gray-400">{outcome.description}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 mt-8 text-center">
          These improvements compound over time, creating sustainable long-term value for your organization while maintaining high quality standards and compliance requirements.
        </p>
      </div>
    </section>
  );
};

export default BusinessOutcomes;
