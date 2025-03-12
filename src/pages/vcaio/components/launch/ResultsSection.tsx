
const ResultsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Key Results
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Successfully Implemented AI Solutions</h3>
            <p className="text-gray-400">
              The AI Launchpad Workshop delivers tailored AI solutions that meet your specific business needs. Seamless integration ensures immediate impact on your workflows.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Improved Efficiency and Demonstrated ROI</h3>
            <p className="text-gray-400">
              Experience enhanced operational efficiency with reduced manual effort and time spent on repetitive tasks. Our detailed reports showcase the value and financial benefits of your AI solution.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Empowered Teams and Future-Ready Businesses</h3>
            <p className="text-gray-400">
              The AI Launchpad Workshop empowers stakeholders to understand AI's potential and confidently drive future AI projects. You'll identify new opportunities for AI implementation, ensuring your business stays ahead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
