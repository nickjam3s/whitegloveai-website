import React from 'react';
import { ArrowRight, CheckCircle2, Lightbulb, Shield, BrainCircuit, BarChart4, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import AIIncubationLabSection from '@/components/AIIncubationLabSection';

const Index = () => {
  useEffect(() => {
    // Load the chat script
    const script = document.createElement('script');
    script.src = "https://chat.whitegloveai.com/api/script/chat.js?iframe&id=11eee546-15ce-7f30-aa68-03cf75d045b5";
    script.defer = true;
    document.body.appendChild(script);

    // Load the Typeform script
    const typeformScript = document.createElement('script');
    typeformScript.src = "//embed.typeform.com/next/embed.js";
    typeformScript.defer = true;
    document.body.appendChild(typeformScript);

    // Initialize intersection observer for scroll animations
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const heading = entry.target as HTMLElement;
          heading.classList.add('visible');
          // Add random animation delay and duration
          heading.style.animation = `highlightText ${3 + Math.random() * 2}s ease-out forwards ${Math.random() * 0.5}s`;
        }
      });
    }, {
      threshold: 0.1
    });

    // Observe all scroll-animated headings
    document.querySelectorAll('.heading-highlight-scroll').forEach(heading => {
      observer.observe(heading);
    });
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(typeformScript);
      observer.disconnect();
    };
  }, []);

  return <div className="min-h-screen bg-background text-white">
      {/* Hero Section */}
      <section id="hero" className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-[10%] bg-[radial-gradient(circle_at_50%_50%,#7928CA,transparent_60%)] opacity-25 animate-[morphing_12s_ease-in-out_infinite]" style={{
          transformOrigin: '60% 40%',
          animation: 'morphing 12s ease-in-out infinite, rotating 15s linear infinite'
        }}></div>
          <div className="absolute inset-[10%] bg-[radial-gradient(circle_at_50%_50%,#7021EE,transparent_50%)] opacity-30" style={{
          transformOrigin: '40% 60%',
          animation: 'morphing 8s ease-in-out infinite reverse, rotating 20s linear infinite reverse'
        }}></div>
          <div className="absolute inset-[10%] bg-[radial-gradient(circle_at_50%_50%,#FF0080,transparent_55%)] opacity-20" style={{
          transformOrigin: '30% 70%',
          animation: 'morphing 15s ease-in-out infinite, rotating 25s linear infinite'
        }}></div>
          <div className="absolute inset-0 backdrop-blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center animate-fade-up">
            <div className="logo-container">
              <img src="/lovable-uploads/197ddc10-c159-4f39-a269-e35142af32c5.png" alt="WhitegloveAI Logo" className="h-32 mx-auto mb-8 logo-animation" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 heading-highlight text-white">
              Your Trusted AI Adoption Partner
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              At WhitegloveAI, we guide you through the transformative journey of AI adoption—ensuring every step is secure, compliant, and aligned with your business goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-colors">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="https://jzaxt350p9j.typeform.com/to/JlpkD8L8#name=xxxxx&email=xxxxx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-secondary/20 hover:bg-secondary/30 rounded-lg transition-colors border border-secondary/50">
                Take the AI Readiness Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Add ScrollAnimation to point to the next section */}
        <ScrollAnimation targetId="services" />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Strategic AI Leadership section */}
          <div className="space-y-8 mb-20 animate-fade-up text-center">
            <h2 className="text-3xl font-semibold mb-4 heading-highlight-scroll text-white">
              Strategic AI Leadership with vCAIO
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Unlock the full potential of artificial intelligence with our virtual Chief AI Officer (vCAIO). Our fractional, executive-level service offers you:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {vcaioFeatures.map((feature, index) => (
                <div key={index} className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
                  <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Managed AI Services section */}
          <div className="space-y-8 animate-fade-up text-center">
            <h2 className="text-3xl font-semibold mb-4 heading-highlight-scroll text-white">
              Managed AI Services
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Our Managed Artificial Intelligence Services empower your organization with round-the-clock support and robust AI solutions, including:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {managedAIFeatures.map((feature, index) => (
                <div key={index} className="bg-background/50 p-6 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-colors">
                  <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Add ScrollAnimation to point to the AI Incubation Lab Section */}
        <ScrollAnimation targetId="ai-incubation-lab" />
      </section>

      {/* AI Incubation Lab Section */}
      <AIIncubationLabSection />

      {/* AI-AMF Framework Section */}
      <section id="ai-amf" className="py-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <a href="https://www.aiamf.ai" target="_blank" rel="noopener noreferrer" className="inline-block relative rounded-xl overflow-hidden group">
              <img src="/lovable-uploads/4647222e-2cb8-4c83-a56c-fafa2c6b70a0.png" alt="AI-AMF Framework Diagram" className="mx-auto mb-8 max-w-xl w-full transition-transform duration-300 group-hover:scale-[1.02] relative z-10" />
            </a>
            <h2 className="text-3xl font-semibold mb-4 heading-highlight-scroll text-white">
              AI Adoption & Management Framework (AI-AMF)
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Our proprietary and opensource AI-AMF framework is the cornerstone of our approach to AI transformation. It provides a structured, step-by-step pathway to AI success.
            </p>
            <a href="https://www.aiamf.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-colors">
              Download the AI-AMF
              <Download className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="grid md:grid-cols-4 gap-8 animate-fade-up">
            {frameworkSteps.map((step, index) => <div key={index} className="bg-card p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
                <step.icon className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>)}
          </div>
        </div>
        
        {/* Add ScrollAnimation to point to the WhitegloveAI Difference Section */}
        <ScrollAnimation targetId="difference" />
      </section>
      
      {/* WhitegloveAI Difference Section */}
      <section id="difference" className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-semibold mb-4 heading-highlight-scroll text-white">
              The WhitegloveAI Difference
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the difference of working with a trusted partner committed to your AI success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-up">
            {differenceFeatures.map((feature, index) => <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
                <feature.icon className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>)}
          </div>
        </div>
        
        {/* Add ScrollAnimation to point to the CTA Section */}
        <ScrollAnimation targetId="cta" />
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 heading-highlight-scroll text-white">
              Ready to Accelerate Your AI Journey?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Partner with WhitegloveAI and experience a seamless, secure, and strategically guided AI transformation.
            </p>
            <Link to="/contact" className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-colors">
              Get Started Today
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>;
};

const vcaioFeatures = [{
  icon: BrainCircuit,
  title: "Customized AI Roadmaps",
  description: "Tailored strategies that seamlessly integrate AI into your existing systems to drive growth and efficiency."
}, {
  icon: BarChart4,
  title: "Cost-Effective Expertise",
  description: "Access top-tier AI leadership without the overhead of a full-time hire."
}, {
  icon: Lightbulb,
  title: "Continuous Innovation",
  description: "Stay ahead with ongoing market insights and emerging best practices, all within a secure, compliant framework."
}];

const managedAIFeatures = [{
  icon: BrainCircuit,
  title: "24/7 AI Agents",
  description: "From text-based chatbots to voice-responsive agents and human-like avatars, our AI tools are designed to serve your customers at any time."
}, {
  icon: Shield,
  title: "Seamless Integration & Customization",
  description: "We tailor AI solutions to your unique workflows, ensuring minimal disruption and maximum ROI."
}, {
  icon: Shield,
  title: "Scalable & Secure Solutions",
  description: "Our services grow with your business, prioritizing data security and compliance every step of the way."
}];

const frameworkSteps = [{
  icon: Lightbulb,
  title: "Assessing Your Readiness",
  description: "We begin with a thorough evaluation of your organization's current AI maturity to pinpoint key opportunities."
}, {
  icon: BrainCircuit,
  title: "Strategic Planning",
  description: "Crafting a bespoke roadmap that aligns AI initiatives with your core business objectives."
}, {
  icon: BarChart4,
  title: "Implementation & Integration",
  description: "Leveraging cutting-edge technology to deploy AI solutions that are secure, scalable, and optimized for immediate impact."
}, {
  icon: Shield,
  title: "Continuous Improvement",
  description: "Regularly monitoring progress and fine-tuning solutions to ensure ongoing innovation and measurable results."
}];

const differenceFeatures = [{
  icon: Shield,
  title: "Trusted Leadership",
  description: "Benefit from our patented expertise and deep industry knowledge, ensuring your AI initiatives are led by the very best."
}, {
  icon: BrainCircuit,
  title: "Guided AI Adoption",
  description: "Our hands-on approach means you're never alone on your AI journey—from initial strategy to continuous improvement."
}, {
  icon: Shield,
  title: "Secure Adoption",
  description: "We prioritize risk reduction and robust security measures, ensuring that every AI solution is implemented with the highest standards."
}, {
  icon: BarChart4,
  title: "Proven Impact",
  description: "Success stories like the City of McKinney HR transformation, which achieved a 68% deflection of routine inquiries."
}];

export default Index;
