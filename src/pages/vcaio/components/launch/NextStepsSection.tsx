
import { ClipboardCheck, LayoutDashboard, Play, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Assess Your AI Readiness",
    description: "Take the next step in your journey by completing our AI Readiness Assessment. This will explore more opportunities for AI growth.",
    link: "https://aireadiness.whitegloveai.com/t/1zgmDb674dus"
  },
  {
    icon: LayoutDashboard,
    title: "Develop an AI Strategy",
    description: "Prioritize AI solutions that will deliver the most significant impact. This will enable your team to focus on projects that drive the most value."
  },
  {
    icon: Play,
    title: "Implement AI Solutions",
    description: "Start with smaller AI implementations and expand as your team develops expertise and confidence. This approach minimizes risks and maximizes learning."
  },
  {
    icon: LineChart,
    title: "Monitor and Iterate",
    description: "Continuously track AI performance and make adjustments as needed. By remaining adaptable, your team can optimize AI solutions for continuous improvement."
  }
];

const NextStepsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Next Steps
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-gray-800">
              <step.icon className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400 mb-4">{step.description}</p>
              {step.link && (
                <Button variant="outline" className="w-full flex items-center justify-center" asChild>
                  <a href={step.link} target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center justify-center">
                      Take Assessment
                    </span>
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;
