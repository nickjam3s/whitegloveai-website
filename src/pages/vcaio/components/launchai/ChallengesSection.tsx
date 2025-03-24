
const ChallengesSection = () => {
  const challenges = [
    {
      id: 1,
      title: "Data Loss and Breaches",
      description: "Fear of exposing sensitive customer data and trade secrets."
    },
    {
      id: 2,
      title: "Intellectual Property Leaks",
      description: "Worrying about proprietary information slipping through AI tools."
    },
    {
      id: 3,
      title: "Regulatory Fines",
      description: "A confusing, ever-changing compliance landscape that can lead to crippling penalties."
    },
    {
      id: 4,
      title: "AI Misuse",
      description: "Employees using generative AI tools irresponsibly."
    },
    {
      id: 5,
      title: "Hallucinations and Inaccuracies",
      description: "AI generating misleading or incorrect outputs that derail decision-making."
    },
    {
      id: 6,
      title: "Vendor Confusion",
      description: "An overcrowded market littered with fragmented solutions and unfamiliar technologies."
    },
    {
      id: 7,
      title: "Speed of Technical Change",
      description: "The rapid pace of AI advancements makes it difficult for organizations to keep up, leading to outdated tools, skills, and strategies."
    },
    {
      id: 8,
      title: "Talent Gap",
      description: "A shortage of skilled professionals who can effectively implement, manage, and optimize AI systems, creating bottlenecks in adoption and innovation."
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-6">The AI Adoption Challenge</h2>
          <p className="text-lg max-w-4xl">
            Artificial Intelligence holds the power to revolutionize your business—unlocking efficiency, driving 
            growth, and delivering unparalleled ROI. Yet, for many executives, the road to AI adoption feels like 
            navigating a minefield.
          </p>
          <p className="text-lg max-w-4xl mt-4">
            You're tasked with delivering innovation while protecting your business from risks that seem 
            overwhelming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="bg-gray-900 rounded-lg p-6 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
                {challenge.id}
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-2">{challenge.title}</h3>
              <p className="text-gray-300">{challenge.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-4">
          <div className="p-4 rounded-lg border border-gray-700 bg-gray-900 flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-4">
              <span className="text-white">i</span>
            </div>
            <p className="text-gray-300">
              It's no wonder many executives feel stuck, paralyzed by these challenges while the pressure 
              to innovate only grows.
            </p>
          </div>
          
          <div className="p-4 rounded-lg border border-green-700 bg-green-900/30 flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-4">
              <span className="text-white">✓</span>
            </div>
            <p className="text-gray-300">
              But it doesn't have to be this way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
