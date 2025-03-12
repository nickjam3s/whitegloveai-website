
import { Bot, BookOpen, BarChart3, Headphones } from "lucide-react";

const deliverables = [
  {
    icon: Bot,
    title: "Operational Robots",
    description: "Tailored for specific use cases, with customized programming and hardware configurations. Each robot is thoroughly tested and optimized for your operational environment, ensuring maximum efficiency and reliability."
  },
  {
    icon: BookOpen,
    title: "Training Materials",
    description: "Comprehensive user manuals, video tutorials, and interactive learning modules. Includes step-by-step guides for operation, troubleshooting procedures, and best practices for optimal performance."
  },
  {
    icon: BarChart3,
    title: "Performance Reports",
    description: "Detailed analytics dashboards providing real-time insights into operational metrics, efficiency rates, and system health. Includes customizable KPI tracking, trend analysis, and actionable recommendations for optimization."
  },
  {
    icon: Headphones,
    title: "Support Plans",
    description: "Ongoing maintenance and updates with 24/7 technical support, regular software updates, and preventive maintenance schedules. Includes quarterly system reviews, emergency response protocols, and continuous improvement recommendations."
  }
];

const Deliverables = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Key Deliverables
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {deliverables.map((deliverable, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-gray-800">
              <div className="flex items-start">
                <deliverable.icon className="h-6 w-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">{deliverable.title}</h3>
                  <p className="text-gray-400">{deliverable.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
