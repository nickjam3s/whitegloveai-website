
const ProcessSection = () => {
  const stages = [
    {
      title: "Kickoff",
      description: "Identify key stakeholders, define project goals and desired outcomes, and establish initial AI journey expectations."
    },
    {
      title: "Discover",
      description: "Conduct stakeholder interviews, complete Maturity Assessment, gain comprehensive business understanding, and identify potential AI applications and objectives."
    },
    {
      title: "Educate/Decide",
      description: "Host 3-day workshop on AI capabilities, prioritize processes for AI augmentation, and select one process for implementation."
    },
    {
      title: "Plan",
      description: "Develop detailed deployment plan, measure pre-AI process metrics, and outline timeline with resource allocation."
    },
    {
      title: "Launch",
      description: "Implement chosen AI solution with early testing, gather user feedback, and integrate AI into workflows."
    },
    {
      title: "Monitor",
      description: "Track adoption metrics, make iterative adjustments based on feedback, and complete final post-AI measurements."
    },
    {
      title: "Measure",
      description: "Conduct ROI analysis, present tangible results and efficiencies, and determine next steps for AI implementation."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll text-white">
          Our 7-Stage AI Adoption Process
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {stages.map((stage, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-gray-800">
              <div className="text-secondary font-semibold mb-2">Stage {index + 1}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{stage.title}</h3>
              <p className="text-gray-400">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
