
import { useEffect } from "react";
import { ArrowRight, Zap, Workflow, TrendingUp, Database, Monitor, ShieldCheck, Rocket, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AutomateAI = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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
              <Button className="group" asChild>
                <a href="#contact" className="inline-flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" className="group" asChild>
                <a href="https://lucidis.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  Learn More
                  <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            The Challenge
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
                <h3 className="text-xl font-semibold mb-3">{challenge.title}</h3>
                <p className="text-gray-400">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Our Solution
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
                <Workflow className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-400">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
                <feature.icon className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Benefits of AutomateAI
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
                <Zap className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6 heading-highlight-scroll">
            Experience the Future of Business Operations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Experience the future of business operations with AutomateAI. Visit Lucidis.ai to learn more about how our AI-powered solutions can transform your organization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="group" asChild>
              <a href="#contact" className="inline-flex items-center">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Contact Us
          </h2>
          <div data-tf-live="01JMAMXNY7NHGYM2YQDXCDRDW6"></div>
        </div>
      </section>
    </div>
  );
};

const challenges = [
  {
    title: "Inefficiencies",
    description: "In today's fast-paced business environment, manual processes can lead to inefficiencies, errors, and increased operational costs."
  },
  {
    title: "Fragmented Workflows",
    description: "Organizations often struggle with fragmented workflows, data silos, and the constant need for manual intervention, hindering productivity and scalability."
  }
];

const solutions = [
  {
    title: "Intelligent Workflow Automation",
    description: "Leverage agentic workflows to automate complex business processes, reducing the need for manual input and minimizing errors."
  },
  {
    title: "Seamless Integration",
    description: "Connect with your existing systems and applications effortlessly, ensuring a unified and efficient operational environment."
  },
  {
    title: "Scalability",
    description: "Adapt and scale your automated workflows as your business grows, ensuring sustained efficiency and performance."
  }
];

const features = [
  {
    icon: Database,
    title: "Data Validation and Transformation",
    description: "Ensure data accuracy and consistency across all workflows, enhancing decision-making and operational reliability."
  },
  {
    icon: Monitor,
    title: "Real-Time Monitoring and Analytics",
    description: "Gain insights into workflow performance with real-time monitoring, allowing for proactive adjustments and continuous improvement."
  },
  {
    icon: ShieldCheck,
    title: "Secure and Compliant Operations",
    description: "Maintain the highest standards of data security and compliance, safeguarding your business and customer information."
  }
];

const benefits = [
  {
    title: "Enhance Efficiency",
    description: "Automate repetitive tasks, freeing up valuable human resources for strategic initiatives."
  },
  {
    title: "Reduce Operational Costs",
    description: "Lower expenses associated with manual processing and error correction."
  },
  {
    title: "Improve Accuracy",
    description: "Minimize human errors through consistent and reliable automated workflows."
  },
  {
    title: "Accelerate Time-to-Value",
    description: "Rapidly deploy automated solutions tailored to your specific business needs."
  }
];

export default AutomateAI;
