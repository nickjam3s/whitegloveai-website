
const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Benefits of TextAI Agents
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Intelligent Information Access</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• <strong>AI-powered responses</strong> trained on policy documents, statutes, FAQs, and internal data</li>
              <li>• <strong>Real-time text-based interaction</strong> with natural language understanding</li>
              <li>• <strong>Automated knowledge retrieval</strong> without manual document searching</li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• Works across <strong>web chat, SMS, mobile apps, and email</strong></li>
              <li>• <strong>Smart handoff</strong> to human agents when needed</li>
              <li>• <strong>Integration-ready</strong> with municipal and enterprise systems</li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Operational Efficiency & Productivity</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• <strong>Automated responses to common inquiries</strong> free up human staff for complex tasks</li>
              <li>• <strong>Reduces response times</strong>, improving user satisfaction</li>
              <li>• <strong>Scalable 24/7 support</strong> for both external users and internal employees</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
