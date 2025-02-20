
import { ArrowRight, CheckCircle2, Lightbulb, Shield, BrainCircuit, BarChart4 } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Load the chat script
    const script = document.createElement('script');
    script.src = "https://chat.whitegloveai.com/api/script/chat.js?iframe&id=11eee546-15ce-7f30-aa68-03cf75d045b5";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-up">
            <img
              src="/lovable-uploads/cbc85045-41f1-434b-a70d-69aca08e4e66.png"
              alt="WhitegloveAI Logo"
              className="h-16 mx-auto mb-8"
            />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Your Trusted AI Adoption Partner
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              At WhitegloveAI, we guide you through the transformative journey of AI adoption—ensuring every step is secure, compliant, and aligned with your business goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 animate-fade-up">
            {/* vCAIO Service */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold mb-4">Strategic AI Leadership with vCAIO</h2>
              <p className="text-gray-400">
                Unlock the full potential of artificial intelligence with our virtual Chief AI Officer (vCAIO). Our fractional, executive-level service offers you:
              </p>
              <ul className="space-y-4">
                {vcaioFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Managed AI Services */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold mb-4">Managed AI Services for End-to-End Success</h2>
              <p className="text-gray-400">
                Our Managed Artificial Intelligence Services empower your organization with round-the-clock support and robust AI solutions, including:
              </p>
              <ul className="space-y-4">
                {managedAIFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI-AMF Framework Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-semibold mb-4">AI Adoption & Management Framework (AI-AMF)</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our proprietary AI-AMF framework is the cornerstone of our approach to AI transformation. It provides a structured, step-by-step pathway to AI success.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 animate-fade-up">
            {frameworkSteps.map((step, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors"
              >
                <step.icon className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      <section className="py-20 w-full">
        <div className="w-full flex justify-center">
          <iframe
            data-chat-frame="11eee546-15ce-7f30-aa68-03cf75d045b5"
            width="100%"
            height="700"
            style={{ border: 0, background: 'white' }}
            title="WhitegloveAI Chat"
          />
        </div>
      </section>

      {/* WhitegloveAI Difference Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-semibold mb-4">The WhitegloveAI Difference</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the difference of working with a trusted partner committed to your AI success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-up">
            {differenceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors"
              >
                <feature.icon className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
              Ready to Accelerate Your AI Journey?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Partner with WhitegloveAI and experience a seamless, secure, and strategically guided AI transformation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const vcaioFeatures = [
  {
    title: "Customized AI Roadmaps",
    description: "Tailored strategies that seamlessly integrate AI into your existing systems to drive growth and efficiency."
  },
  {
    title: "Cost-Effective Expertise",
    description: "Access top-tier AI leadership without the overhead of a full-time hire."
  },
  {
    title: "Continuous Innovation",
    description: "Stay ahead with ongoing market insights and emerging best practices, all within a secure, compliant framework."
  }
];

const managedAIFeatures = [
  {
    title: "24/7 AI Agents",
    description: "From text-based chatbots to voice-responsive agents and human-like avatars, our AI tools are designed to serve your customers at any time."
  },
  {
    title: "Seamless Integration & Customization",
    description: "We tailor AI solutions to your unique workflows, ensuring minimal disruption and maximum ROI."
  },
  {
    title: "Scalable & Secure Solutions",
    description: "Our services grow with your business, prioritizing data security and compliance every step of the way."
  }
];

const frameworkSteps = [
  {
    icon: Lightbulb,
    title: "Assessing Your Readiness",
    description: "We begin with a thorough evaluation of your organization's current AI maturity to pinpoint key opportunities."
  },
  {
    icon: BrainCircuit,
    title: "Strategic Planning",
    description: "Crafting a bespoke roadmap that aligns AI initiatives with your core business objectives."
  },
  {
    icon: BarChart4,
    title: "Implementation & Integration",
    description: "Leveraging cutting-edge technology to deploy AI solutions that are secure, scalable, and optimized for immediate impact."
  },
  {
    icon: Shield,
    title: "Continuous Improvement",
    description: "Regularly monitoring progress and fine-tuning solutions to ensure ongoing innovation and measurable results."
  }
];

const differenceFeatures = [
  {
    icon: Shield,
    title: "Trusted Leadership",
    description: "Benefit from our patented expertise and deep industry knowledge, ensuring your AI initiatives are led by the very best."
  },
  {
    icon: BrainCircuit,
    title: "Guided AI Adoption",
    description: "Our hands-on approach means you're never alone on your AI journey—from initial strategy to continuous improvement."
  },
  {
    icon: Shield,
    title: "Secure Adoption",
    description: "We prioritize risk reduction and robust security measures, ensuring that every AI solution is implemented with the highest standards."
  },
  {
    icon: BarChart4,
    title: "Proven Impact",
    description: "Success stories like the City of McKinney HR transformation, which achieved a 68% deflection of routine inquiries."
  }
];

export default Index;
