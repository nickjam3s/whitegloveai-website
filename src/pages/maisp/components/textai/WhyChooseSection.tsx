
const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Why Choose WhitegloveAI?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Simple Implementation</h3>
            <p className="text-gray-400">
              We make implementing advanced AI simple and successful.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
            <p className="text-gray-400">
              Our expert team ensures your chatbot delivers measurable results from day one.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Seamless Management</h3>
            <p className="text-gray-400">
              We handle the complexities of AI deployment so you can focus on what matters most.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Ongoing Optimization</h3>
            <p className="text-gray-400">
              We continuously refine and enhance your chatbot to ensure peak performance and measurable impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
