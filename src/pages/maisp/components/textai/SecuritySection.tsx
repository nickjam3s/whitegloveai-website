
const SecuritySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Security & Compliance
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">Role-Based Access Control (RBAC)</h3>
              <p className="text-gray-400">Restricts sensitive data to authorized users</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">End-to-End Encryption</h3>
              <p className="text-gray-400">Protects interactions and ensures confidentiality</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">AI Agent Security Testing</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• <strong>Rigorous testing</strong> to eliminate AI biases and hallucinations</li>
                <li>• <strong>Secure and auditable conversations</strong> for compliance-ready environments</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-800 h-fit">
            <h3 className="text-xl font-semibold mb-3">Additional Features & Managed Support</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• <strong>Customizable AI models</strong> trained on enterprise-specific data</li>
              <li>• <strong>Knowledge base updates & re-training</strong> to keep responses relevant</li>
              <li>• <strong>Managed AI service with expert oversight</strong> for ongoing optimization</li>
              <li>• <strong>Usage analytics & reporting</strong> for tracking engagement trends</li>
              <li>• <strong>Custom integrations</strong> & workflow automation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
