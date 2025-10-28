import { TrendingUp } from "lucide-react";

const ResultsSection = () => {
  return (
    <section id="results-section" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <TrendingUp className="h-12 w-12 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Results</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real outcomes that transform how organizations leverage AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
            <div className="text-5xl font-bold text-secondary mb-4">3x</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Faster AI Adoption</h3>
            <p className="text-gray-400">Team members transition from hesitation to proficiency with AI tools, confidently applying them to daily workflows and driving measurable productivity gains.</p>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
            <div className="text-5xl font-bold text-secondary mb-4">85%</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Accelerated Value Realization</h3>
            <p className="text-gray-400">Our program shortens the AI learning curve dramatically, delivering ROI on AI investments in weeks rather than months through role-specific training and ready-to-implement workflows.</p>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
            <div className="text-5xl font-bold text-secondary mb-4">95%</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Sustainable AI Adoption</h3>
            <p className="text-gray-400">Build lasting AI capabilities with governance frameworks, best practices, and an internal community of practice that drives continuous innovation and responsible AI use.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
