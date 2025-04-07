const IndustriesSection = ({ industries }) => {
    return (
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-6 text-center heading-highlight-scroll">
            Use Cases
          </h2>
          <h3 className="text-xl text-gray-400 mb-16 text-center">
            Perfect For Various Industries
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors"
              >
                <industry.icon className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                <p className="text-gray-400">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default IndustriesSection;