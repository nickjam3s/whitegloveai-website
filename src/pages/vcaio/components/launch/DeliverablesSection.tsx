
const DeliverablesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Deliverables
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 animate-section">
          {[
            {
              title: "Comprehensive ROI Analysis",
              description: "Our team conducts a thorough analysis, highlighting improvements in key metrics such as efficiency, financial returns, and process optimization."
            },
            {
              title: "Custom AI Solution Documentation",
              description: "We provide a complete and detailed breakdown of the AI solution, including design, functionality, and integration steps."
            },
            {
              title: "Continued AI Service",
              description: "The AI solution is continuously supported by our team, providing ongoing optimization and operational support to ensure ongoing success."
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg border border-gray-800 animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
