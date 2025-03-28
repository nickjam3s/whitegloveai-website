
import React from 'react';
import { Rocket, Bug, Shield } from 'lucide-react';

const AIIncubationLab = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900" id="ai-incubation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AI Incubation Lab
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where innovative AI solutions are developed, tested, and refined for enterprise deployment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Innovation Card */}
          <div className="bg-black/60 p-8 rounded-lg border border-purple-800/40 shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-purple-900/30">
                <Rocket className="w-8 h-8 text-purple-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white text-center mb-4">Innovation Pipeline</h3>
            <p className="text-gray-400 text-center">
              Continuous research and development of cutting-edge AI technologies and methodologies to solve complex business challenges.
            </p>
          </div>

          {/* Testing Card */}
          <div className="bg-black/60 p-8 rounded-lg border border-purple-800/40 shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-purple-900/30">
                <Bug className="w-8 h-8 text-purple-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white text-center mb-4">Rigorous Testing</h3>
            <p className="text-gray-400 text-center">
              Extensive testing and validation processes ensure AI solutions meet performance, security, and reliability standards before deployment.
            </p>
          </div>

          {/* Security Card */}
          <div className="bg-black/60 p-8 rounded-lg border border-purple-800/40 shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-purple-900/30">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white text-center mb-4">Enterprise-Ready</h3>
            <p className="text-gray-400 text-center">
              All solutions are designed with enterprise-grade security, scalability, and integration capabilities to seamlessly fit into your existing infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIIncubationLab;
