
const ResultsSection = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Key Results
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">AI Literacy & Confidence</h3>
            <p className="text-gray-400">
              Team members transition from hesitation to proficiency with AI tools, confidently applying them to daily workflows and driving measurable productivity gains.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Accelerated Value Realization</h3>
            <p className="text-gray-400">
              Our program shortens the AI learning curve dramatically, delivering ROI on AI investments in weeks rather than months through role-specific training and ready-to-implement workflows.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Sustainable AI Adoption</h3>
            <p className="text-gray-400">
              Build lasting AI capabilities with governance frameworks, best practices, and an internal community of practice that drives continuous innovation and responsible AI use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
