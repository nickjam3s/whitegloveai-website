
import React from "react";
import { DollarSign, BarChart, Clock } from "lucide-react";

const ExpectedROISection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 heading-highlight-scroll">
            Expected ROI with TextAI
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Measurable business impact and rapid return on investment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg border border-gray-800">
            <DollarSign className="h-12 w-12 text-green-500 mb-6" />
            <h3 className="text-xl font-semibold mb-3">Cost Reduction</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                30-50% reduction in repetitive inquiries
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Significant savings on support operations
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Lower training and onboarding costs
              </li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-lg border border-gray-800">
            <BarChart className="h-12 w-12 text-blue-500 mb-6" />
            <h3 className="text-xl font-semibold mb-3">Operational Impact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                24/7 availability without increased costs
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Instant access to information
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Data-driven insights to improve efficiency
              </li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-lg border border-gray-800">
            <Clock className="h-12 w-12 text-purple-500 mb-6" />
            <h3 className="text-xl font-semibold mb-3">Time to Value</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                Rapid deployment within weeks
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                Immediate impact on customer experience
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                Measurable ROI within months
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectedROISection;
