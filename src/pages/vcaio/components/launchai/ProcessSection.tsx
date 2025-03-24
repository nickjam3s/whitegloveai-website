
const ProcessSection = () => {
  const stages = [
    {
      id: 1,
      title: "Kickoff",
      description: "Identify key stakeholders, define project goals and desired outcomes, and establish initial AI journey expectations."
    },
    {
      id: 2,
      title: "Discover",
      description: "Conduct stakeholder interviews, complete Maturity Assessment, gain comprehensive business understanding, and identify potential AI applications and objectives."
    },
    {
      id: 3,
      title: "Educate/Decide",
      description: "Host 3-day workshop on AI capabilities, prioritize processes for AI augmentation, and select one process for implementation."
    },
    {
      id: 4,
      title: "Plan",
      description: "Develop detailed deployment plan, measure pre-AI process metrics, and outline timeline with resource allocation."
    },
    {
      id: 5,
      title: "Launch",
      description: "Implement chosen AI solution with early testing, gather user feedback, and integrate AI into workflows."
    },
    {
      id: 6,
      title: "Monitor",
      description: "Track adoption metrics, make iterative adjustments based on feedback, and complete final post-AI measurements."
    },
    {
      id: 7,
      title: "Measure",
      description: "Conduct ROI analysis, present tangible results and efficiencies, and determine next steps for AI implementation."
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">Our 7-Stage AI Adoption Process</h2>
        
        <div className="space-y-6">
          {stages.map((stage) => (
            <div key={stage.id} className="flex">
              <div className="mr-6 flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-md flex items-center justify-center text-white font-bold text-xl">
                  {stage.id}
                </div>
                {stage.id < stages.length && (
                  <div className="w-1 h-12 bg-purple-600 my-1"></div>
                )}
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 flex-1">
                <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
                <p className="text-gray-300">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
