
const pricingOptions = [
  {
    title: "Subscription-Based Pricing",
    description: "Pay a monthly or annual fee based on vendors managed and service scope."
  },
  {
    title: "Project-Based Pricing",
    description: "Opt for a one-time fee for procurement and deployment projects."
  },
  {
    title: "Performance-Based Pricing",
    description: "Tie fees to measurable outcomes like cost savings or system improvements."
  }
];

const PricingModels = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll text-white">
          Flexible Pricing Models
        </h2>
        <div className="grid md:grid-cols-3 gap-8 animate-section">
          {pricingOptions.map((option, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg border border-gray-800 animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-3 text-white">{option.title}</h3>
              <p className="text-gray-400">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingModels;
