
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-[10%] bg-[radial-gradient(circle_at_50%_50%,#7928CA,transparent_60%)] opacity-25" style={{
          transformOrigin: '60% 40%',
          animation: 'morphing 12s ease-in-out infinite, rotating 15s linear infinite'
        }}></div>
        <div className="absolute inset-0 backdrop-blur-[100px]"></div>
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 heading-highlight">
            Introducing AutomateAI by Lucidis
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            A managed service designed to revolutionize your business operations through intelligent automation. Built on the robust Lucidis.ai platform, AutomateAI employs agentic workflows to streamline and optimize your processes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="group w-full sm:w-auto" asChild>
              <a href="#contact" className="inline-flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" className="group w-full sm:w-auto" asChild>
              <a 
                href="https://lucidis.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                Learn More
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
