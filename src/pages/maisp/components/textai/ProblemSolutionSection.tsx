
const ProblemSolutionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          The Problem & Our Solution
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">The Challenge: Manual Support Limitations</h3>
            <p className="text-gray-400">
              Modern organizations struggle with traditional customer service approaches that lead to 
              <strong> delays, high operational costs, and inconsistent service quality</strong>. 
              Employees and customers <strong>spend unnecessary time navigating complex documents, 
              portals, and policies</strong> instead of getting instant, actionable answers.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">The Solution: TextAI Agents</h3>
            <p className="text-gray-400">
              WhitegloveAI <strong>TextAI Agents</strong> provide a <strong>conversational AI interface</strong> that
              <strong> seamlessly delivers accurate responses to any query</strong>. <strong>By automating knowledge 
              retrieval, inquiry handling, and workflow optimization, TextAI transforms communication efficiency while 
              ensuring accuracy and security</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
