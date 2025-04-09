
const UrgencySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          The Urgency of AI Adoption
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-white">The Time to Act Is Now</h3>
            <p className="text-gray-400">Don't let opportunities pass you by. The time for AI adoption is now.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-white">Competitive Advantage</h3>
            <p className="text-gray-400">The competition is already adopting AI to drive efficiencies and scale their bottom line. Can you afford to wait?</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-white">Secure AI Future</h3>
            <p className="text-gray-400">Take the first step toward a secure, scalable AI future with WhitegloveAI by your side.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-white">Overcome Fear</h3>
            <p className="text-gray-400">Don't let fear hold you back from innovation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
