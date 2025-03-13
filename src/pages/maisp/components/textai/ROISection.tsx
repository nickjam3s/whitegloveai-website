
const ROISection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Long-Term ROI with TextAI
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Cost Reduction & Savings</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• 30-50% reduction in repetitive inquiries</li>
              <li>• Significant savings on manual support operations</li>
              <li>• Quick deployment with measurable ROI within months</li>
              <li>• Support diverse cliental in native language</li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Operational Impact</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• 24/7 availability without increasing workforce costs</li>
              <li>• Instant access to policy documents, statutes, and internal knowledge bases</li>
              <li>• Data-driven insights to improve service efficiency</li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Business & Customer Engagement</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• Faster resolution times improve satisfaction rates</li>
              <li>• AI-driven analytics help refine web site optimization, business operations and customer wants</li>
              <li>• Seamless text-based interactions for customers and employees</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <img 
            src="https://cdn.gamma.app/csas2sy1va6yjxb/53597747b1704f9f96f931caefc9f523/original/Screenshot-2025-02-03-at-6.52.06-PM.png"
            alt="TextAI Analytics Dashboard"
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ROISection;
