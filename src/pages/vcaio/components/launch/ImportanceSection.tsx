
const ImportanceSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Importance of AI Adoption
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-white">AI Adoption Failure Rate</h3>
            <p className="text-gray-400">
              The average failure rate of AI projects is estimated to be <strong>80%</strong>, which is twice the failure rate of non-AI technology projects. This statistic is consistently reported across multiple sources, including studies by the RAND Corporation, Gartner, and other industry analyses.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-white">Regulatory Concerns</h3>
            <p className="text-gray-400">
              Meanwhile, data shows that <strong>84% of executives predict stricter AI regulations</strong>, making compliance non-negotiable.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-white">Our Approach</h3>
            <p className="text-gray-400">
              These risks are real—but with the right partner, they're manageable. At WhitegloveAI, we understand the pressure to do more with less. We're currently working with organizations to turn AI challenges into wins, without sacrificing security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportanceSection;
