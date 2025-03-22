
import React from "react";
import { Shield, Lock, FileCheck } from "lucide-react";

const SecurityComplianceSection = () => {
  return (
    <section className="py-20 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 heading-highlight-scroll">
            Security & Compliance
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Enterprise-grade security and regulatory compliance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card/30 p-8 rounded-lg border border-gray-800">
            <Shield className="h-12 w-12 text-green-500 mb-6" />
            <h3 className="text-xl font-semibold mb-3">Data Protection</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                End-to-end encryption
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Role-based access control
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Secure data handling practices
              </li>
            </ul>
          </div>

          <div className="bg-card/30 p-8 rounded-lg border border-gray-800">
            <Lock className="h-12 w-12 text-blue-500 mb-6" />
            <h3 className="text-xl font-semibold mb-3">Privacy Controls</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                GDPR and CCPA compliant
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Data minimization principles
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Consent management
              </li>
            </ul>
          </div>

          <div className="bg-card/30 p-8 rounded-lg border border-gray-800">
            <FileCheck className="h-12 w-12 text-purple-500 mb-6" />
            <h3 className="text-xl font-semibold mb-3">Compliance</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                SOC 2 Type II certified
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                HIPAA compliance options
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                Regular security audits
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityComplianceSection;
