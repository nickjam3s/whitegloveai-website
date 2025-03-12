
const deliverables = [
  {
    title: "Tailored AI Vendor Strategy",
    description: "Receive a customized strategy and procurement plan."
  },
  {
    title: "Integrated AI Solutions",
    description: "Benefit from fully integrated AI solutions with detailed documentation."
  },
  {
    title: "Performance Reports",
    description: "Get regular performance reports with optimization recommendations."
  },
  {
    title: "Vendor Management Dashboard",
    description: "Track contracts, renewals, and performance metrics in one place."
  }
];

const ComprehensiveDeliverables = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Comprehensive Deliverables
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {deliverables.map((deliverable, index) => (
            <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">{deliverable.title}</h3>
              <p className="text-gray-400">{deliverable.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveDeliverables;
