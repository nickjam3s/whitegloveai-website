const challenges = [
  {
    title: "Inefficiencies",
    description: "In today's fast-paced business environment, manual processes can lead to inefficiencies, errors, and increased operational costs."
  },
  {
    title: "Fragmented Workflows",
    description: "Organizations often struggle with fragmented workflows, data silos, and the constant need for manual intervention, hindering productivity and scalability."
  }
];

const ChallengesSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          The Challenge
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-white">{challenge.title}</h3>
              <p className="text-gray-400">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
