
import React from "react";
import { FileText, MessageSquare, Search } from "lucide-react";

const IntelligentInformationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 heading-highlight-scroll">
            Intelligent Information Access
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            TextAI transforms how your organization manages and accesses information
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg border border-gray-800">
            <div className="h-14 w-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
              <FileText size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Document Intelligence</h3>
            <p className="text-gray-400">
              Seamlessly access information from documents, policies, and knowledge bases through natural conversation.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-gray-800">
            <div className="h-14 w-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
              <MessageSquare size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Conversational Interface</h3>
            <p className="text-gray-400">
              Ask questions in natural language and receive context-aware, accurate responses instantly.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-gray-800">
            <div className="h-14 w-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
              <Search size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Intelligent Search</h3>
            <p className="text-gray-400">
              Advanced semantic search understands context and intent, delivering precisely what you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentInformationSection;
