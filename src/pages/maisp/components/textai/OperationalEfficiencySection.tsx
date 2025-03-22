
import React from "react";
import { Clock, Users, TrendingUp } from "lucide-react";

const OperationalEfficiencySection = () => {
  return (
    <section className="py-20 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 heading-highlight-scroll">
            Operational Efficiency Reimagined
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform support operations and reduce costs while enhancing user experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card/30 p-8 rounded-lg border border-gray-800">
            <div className="flex items-center mb-6">
              <Clock className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">24/7 Availability</h3>
            </div>
            <p className="text-gray-400">
              Provide round-the-clock support without increasing staffing costs or compromising quality.
            </p>
          </div>

          <div className="bg-card/30 p-8 rounded-lg border border-gray-800">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Reduced Workload</h3>
            </div>
            <p className="text-gray-400">
              Free up human resources by automating routine inquiries and information requests.
            </p>
          </div>

          <div className="bg-card/30 p-8 rounded-lg border border-gray-800">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Improved Metrics</h3>
            </div>
            <p className="text-gray-400">
              Reduce response times, increase first-contact resolution rates, and improve customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationalEfficiencySection;
