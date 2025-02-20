import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { MessageSquare, Mic, Video, Users, Bot } from "lucide-react";

const MAISP = () => {
  useEffect(() => {
    // Load Typeform
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const services = [
    {
      title: "TextAI",
      description: "AI chatbots answer questions 24/7 via text unlocking access to information.",
      icon: MessageSquare,
      link: "/maisp/textai"
    },
    {
      title: "VoiceAI",
      description: "AI agents handle tasks and answer questions 24/7 using voice.",
      icon: Mic,
      link: "/maisp/voiceai"
    },
    {
      title: "AvatarAI",
      description: "Video-based AI avatars provide live customer support around the clock.",
      icon: Video,
      link: "/maisp/avatarai"
    },
    {
      title: "VendorAI",
      description: "We find, help procure and manage AI vendors for you.",
      icon: Users,
      link: "/maisp/vendorai"
    },
    {
      title: "AutomateAI",
      description: "Managed Agents that support business process",
      icon: Bot,
      link: "/maisp/automateai"
    },
    {
      title: "HumanoidAI",
      description: "Humanoid Robots to automate physical labor.",
      icon: Bot,
      link: "/maisp/humaniodai"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 heading-highlight-scroll">
            Managed Artificial Intelligence Services
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mb-12">
            WhitegloveAI is a leading provider of AI solutions, offering a comprehensive range of services to help businesses thrive in the rapidly evolving digital landscape. As your dedicated Managed Artificial Intelligence Service Provider (MAISP), we combine cutting-edge technology with personalized support to deliver transformative results.
          </p>
        </div>
      </section>

      {/* Patented Expertise Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 heading-highlight-scroll">
            Patented Expertise: The WhitegloveAI Difference
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">MAISP Trademark</h3>
              <p className="text-gray-400">
                WhitegloveAI holds the exclusive trademark for Managed Artificial Intelligence Service Provider (MAISP), signifying our commitment to delivering cutting-edge AI solutions.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">Trusted Leadership</h3>
              <p className="text-gray-400">
                Our patented expertise and deep industry knowledge make us a trusted partner for organizations looking to leverage the power of AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 heading-highlight-scroll">
            Our Managed AI Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-card p-8 rounded-lg">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <Link to={service.link}>
                  <Button variant="default" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 heading-highlight-scroll">
            City of McKinney HR AI Transformation
          </h2>
          <div>
            <p className="text-gray-400 mb-6">
              The City of McKinney partnered with WhitegloveAI (WG) to enhance HR efficiency through AI-powered agents. Facing a high volume of routine inquiries, the city needed a secure, scalable solution. WG deployed custom voice and text-based AI chat agents, provided staff training, and implemented performance analytics.
            </p>
            <div className="bg-card p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Impact:</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• 68% deflection rate of general inquiries to AI, reducing HR workload</li>
                <li>• Improved resolution rates for employee questions</li>
                <li>• Positive staff feedback on AI effectiveness</li>
              </ul>
            </div>
            <blockquote className="border-l-4 border-primary pl-6 italic text-gray-400">
              "WhitegloveAI has been a transformative partner, blending deep expertise with agility. Their responsiveness and collaborative approach ensured AI solutions evolved to meet our needs. More than a provider, WG is a true partner in AI-driven change."
              <footer className="mt-2 text-white">— Jim Parrish, Director of HR, City of McKinney</footer>
            </blockquote>
            <div className="mt-8 flex justify-start">
              <img 
                src="/lovable-uploads/8d6b7902-56b6-4ba7-86ba-67aa9f3bccb8.png" 
                alt="Additional McKinney Logo"
                className="h-24 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 heading-highlight-scroll">
            Comprehensive Support: From Setup to Success
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">Technical Consulting</h3>
              <p className="text-gray-400">
                Our team of experts provides personalized technical consulting to ensure your AI solutions are tailored to your specific needs.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">AI Software Customization</h3>
              <p className="text-gray-400">
                We customize AI software to meet your unique requirements, ensuring optimal performance and integration with your existing systems.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">Seamless Integration</h3>
              <p className="text-gray-400">
                We provide seamless integration of AI solutions into your business workflows, minimizing disruption and maximizing efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scalable Solutions Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 heading-highlight-scroll">
            Scalable Solutions: Grow with Confidence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">Security & Compliance</h3>
              <p className="text-gray-400">
                We prioritize data security and compliance, ensuring your information is protected at every step.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-400">
                Our solutions are designed to grow with your business, offering flexibility and adaptability to meet your evolving needs.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">Ongoing Support</h3>
              <p className="text-gray-400">
                From initial setup to ongoing maintenance, our team provides comprehensive support to ensure your AI solutions operate seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Typeform Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div data-tf-live="01JMAMXNY7NHGYM2YQDXCDRDW6"></div>
        </div>
      </section>
    </div>
  );
};

export default MAISP;
