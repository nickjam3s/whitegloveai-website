
import { CheckCircle, TrendingUp, Users } from "lucide-react";

const results = [
  {
    icon: CheckCircle,
    title: "Successfully Implemented AI Solutions",
    description: "The AI Launchpad Workshop delivers tailored AI solutions that meet your specific business needs. Seamless integration ensures immediate impact on your workflows."
  },
  {
    icon: TrendingUp,
    title: "Improved Efficiency and Demonstrated ROI",
    description: "Experience enhanced operational efficiency with reduced manual effort and time spent on repetitive tasks. Our detailed reports showcase the value and financial benefits of your AI solution."
  },
  {
    icon: Users,
    title: "Empowered Teams and Future-Ready Businesses",
    description: "The AI Launchpad Workshop empowers stakeholders to understand AI's potential and confidently drive future AI projects. You'll identify new opportunities for AI implementation, ensuring your business stays ahead."
  }
];

const ResultsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Key Results
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800">
              <result.icon className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{result.title}</h3>
              <p className="text-gray-400">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
