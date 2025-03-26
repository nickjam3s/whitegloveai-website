
const Solutions = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl font-semibold mb-6">Our Solutions</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of AI solutions designed to transform
              your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h2 className="text-xl font-semibold mb-4">{solution.title}</h2>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const solutions = [
  {
    title: "AI Consulting",
    description:
      "Strategic guidance to help you leverage AI technology effectively.",
    features: [
      "Technology Assessment",
      "Implementation Strategy",
      "ROI Analysis",
      "Risk Management",
    ],
  },
  {
    title: "Custom AI Development",
    description: "Tailored AI solutions designed for your specific needs.",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
    ],
  },
  {
    title: "AI Integration",
    description: "Seamlessly integrate AI into your existing systems.",
    features: [
      "API Development",
      "System Integration",
      "Data Pipeline Setup",
      "Performance Optimization",
    ],
  },
  {
    title: "AI Training",
    description: "Comprehensive training programs for your team.",
    features: [
      "Technical Workshops",
      "Best Practices",
      "Hands-on Training",
      "Ongoing Support",
    ],
  },
  {
    title: "AI Maintenance",
    description: "Ongoing support and maintenance for your AI systems.",
    features: [
      "Performance Monitoring",
      "System Updates",
      "Bug Fixes",
      "Security Patches",
    ],
  },
  {
    title: "AI Analytics",
    description: "Deep insights from your AI implementations.",
    features: [
      "Performance Metrics",
      "Usage Analytics",
      "ROI Tracking",
      "Optimization Recommendations",
    ],
  },
];

export default Solutions;
