import { Lightbulb } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Lightbulb className="h-12 w-12 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Solution: GenAI Enablement Service</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your organization with our comprehensive, Whiteglove program that seamlessly integrates AI into your workflow through expert training, customized solutions, and dedicated support.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
            <div className="bg-purple-600 text-white w-12 h-12 flex items-center justify-center rounded-lg mb-6 font-bold text-xl">1</div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Master AI Fundamentals</h3>
            <p className="text-gray-400 mb-6">Accelerate team adoption through targeted, role-specific learning experiences.</p>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span><strong className="text-white">Interactive Workshops:</strong> Gain hands-on expertise through 4 hours of small-group training sessions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span><strong className="text-white">Comprehensive Resources:</strong> Access self-paced video tutorials, practical cheat sheets, and our intelligent GPT-powered support assistant.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
            <div className="bg-purple-600 text-white w-12 h-12 flex items-center justify-center rounded-lg mb-6 font-bold text-xl">2</div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Transform Your Workflows</h3>
            <p className="text-gray-400 mb-6">Convert time-consuming processes into efficient, AI-powered solutions.</p>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span><strong className="text-white">Strategic Discovery:</strong> Identify high-impact AI opportunities in a focused 2-hour alignment session.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span><strong className="text-white">Custom Implementation:</strong> Receive detailed playbooks for 2 mission-critical workflows that drive immediate value.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
            <div className="bg-purple-600 text-white w-12 h-12 flex items-center justify-center rounded-lg mb-6 font-bold text-xl">3</div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Ensure Long-Term Success</h3>
            <p className="text-gray-400 mb-6">Maximize your AI investment with continuous optimization and support.</p>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span><strong className="text-white">Dedicated Support:</strong> Access expert guidance through weekly office hours for your first month.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span><strong className="text-white">Performance Optimization (Optional Add-On):</strong> Track success metrics and ROI through monthly reviews, while continuously adapting workflows to evolving needs.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
