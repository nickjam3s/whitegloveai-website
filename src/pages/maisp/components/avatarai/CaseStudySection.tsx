const CaseStudySection = ({ steps }) => {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            The Ultimate Omnichannel Experience: A Retail Case Study
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-card p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default CaseStudySection;