
import liminalIcon from '/lovable-uploads/95c2f2b9-cb3b-4b1a-baf7-39f668fb617f.png';
import atomicIcon from '/lovable-uploads/35aef5de-a56d-4151-bf55-77e3fc703c83.png';
import halcyonIcon from '/lovable-uploads/3fadd016-1248-42b7-9190-18c9ba852b4e.png';
import protectIcon from '/lovable-uploads/c2a42923-14a6-458e-9548-ef253921c5d0.png' 

const deliverables = [
  {
    icon: liminalIcon,
    website: "https://www.liminal.ai/",
    title: "Secure GenAI Platform",
    description: "Empower your workforce to safely leverage generative AI across any site, web application, and desktop platform, all while maintaining complete AI data security, oversight, administration, and observability."
  },
  {
    icon: atomicIcon,
    website:"https://www.atomicwork.com/",
    title: "IT Service Management",
    description: "Agentic service management platform to modernize ITSM, ESM and enterprise workflows."
    
  },
  {
    icon: halcyonIcon,
    website: "https://www.halcyon.ai/",
    title: "Ransomware Prevention",
    description: "Stop ransomware, prevent business downtime, and recover without backups."
    
  },
  {
    icon: protectIcon,
    website: "https://protectai.com/",
    title: "AI Security Platform",
    description: "Enables you to implement capabilities to see, know, and manage security risks and defend against unique AI security threats, end-to-end."
  }
];

const ComprehensiveDeliverables = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll text-white">
          Featured Vendor Solutions
        </h2>
        <div className="grid md:grid-cols-2 gap-8 animate-section">
          {deliverables.map((deliverable, index) => (
            <div 
              key={index} 
              className="bg-background/50 p-6 rounded-lg border border-gray-800 animate-on-scroll flex flex-col items-center"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-48 h-48 mb-4 flex-shrink-0">
                <img 
                  src={deliverable.icon} 
                  alt={`${deliverable.title} logo`} 
                  className="w-full h-full object-contain"
                />
              </div>
              <a 
                href={deliverable.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors mb-1 text-sm"
              >
                {deliverable.website}
              </a>
              <h3 className="text-xl font-semibold mb-3 text-center text-white">{deliverable.title}</h3>
              <p className="text-gray-400 text-center">{deliverable.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveDeliverables;
