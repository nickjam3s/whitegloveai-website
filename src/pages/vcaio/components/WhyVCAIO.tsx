
import { Target, Shield, BrainCircuit, TrendingUp } from "lucide-react";

const WhyVCAIO = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 heading-highlight-scroll">Why Choose a vCAIO?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            In today's rapidly evolving AI landscape, having strategic AI leadership is no longer optional—it's essential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-purple-900/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-purple-900/20">
                <Target className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mt-2">Strategic Guidance</h3>
            </div>
            <p className="text-gray-400">
              Our vCAIOs bring executive-level AI expertise to your organization, helping you navigate the complex landscape of AI technologies and opportunities.
            </p>
          </div>
          
          <div className="bg-card/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-purple-900/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-purple-900/20">
                <Shield className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mt-2">Risk Mitigation</h3>
            </div>
            <p className="text-gray-400">
              We help you identify and address potential risks associated with AI adoption, including ethical concerns, regulatory compliance, and data privacy issues.
            </p>
          </div>
          
          <div className="bg-card/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-purple-900/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-purple-900/20">
                <BrainCircuit className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mt-2">Innovation Catalyst</h3>
            </div>
            <p className="text-gray-400">
              Our vCAIOs foster a culture of innovation, helping your team explore and implement cutting-edge AI solutions that drive business value.
            </p>
          </div>
          
          <div className="bg-card/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-purple-900/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-purple-900/20">
                <TrendingUp className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mt-2">Competitive Advantage</h3>
            </div>
            <p className="text-gray-400">
              Gain a competitive edge in your industry by leveraging AI to optimize operations, enhance customer experiences, and unlock new revenue streams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVCAIO;
