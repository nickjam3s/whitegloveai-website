
const ResultsSection = () => {
  const results = [
    {
      id: 1,
      title: "Successfully Implemented AI Solutions",
      description: "The AI Launchpad Workshop delivers tailored AI solutions that meet your specific business needs. Seamless integration ensures immediate impact on your workflows."
    },
    {
      id: 2,
      title: "Improved Efficiency and Demonstrated ROI",
      description: "Experience enhanced operational efficiency with reduced manual effort and time spent on repetitive tasks. Our detailed reports showcase the value and financial benefits of your AI solution."
    },
    {
      id: 3,
      title: "Empowered Teams and Future-Ready Businesses",
      description: "The AI Launchpad Workshop empowers stakeholders to understand AI's potential and confidently drive future AI projects. You'll identify new opportunities for AI implementation, ensuring your business stays ahead."
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">Launchpad Key Results</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result) => (
            <div key={result.id} className="bg-gray-900 rounded-lg p-6 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
                {result.id}
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">{result.title}</h3>
              <p className="text-gray-300">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
