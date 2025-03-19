
import { Shield, PhoneCall, ArrowRight, BrainCircuit, BarChart4, CheckCircle2, Download, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const VoiceAI = () => {
  useEffect(() => {
    // Load the Typeform script
    const typeformScript = document.createElement('script');
    typeformScript.src = "//embed.typeform.com/next/embed.js";
    typeformScript.defer = true;
    document.body.appendChild(typeformScript);

    // Initialize intersection observer for scroll animations
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
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
      document.body.removeChild(typeformScript);
      observer.disconnect();
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
             Managed VoiceAI Service
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Transform customer interactions with secure, intelligent automation using our cutting-edge Voice AI Agent solution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:4698092199" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-colors">
                Try Our VoiceAI: (469) 809-2199
                <PhoneCall className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            The Problem & Our Solution
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
              <p className="text-gray-400">
                In today's fast-paced business environment, providing exceptional customer service is paramount. However, managing high call volumes, ensuring prompt responses, and maintaining consistent quality can be challenging and resource-intensive. Traditional call centers often struggle with long wait times, high operational costs, and limited scalability, leading to frustrating experiences for both customers and employees.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">The Solution: VoiceAI Agents</h2>
              <p className="text-gray-400">
                WhitegloveAI VoiceAI Agents is a revolutionary solution that leverages cutting-edge AI technology to transform customer interactions. Our AI-powered agents can handle inbound and outbound calls, providing seamless and personalized experiences while addressing the challenges faced by traditional receptionist, customer support and call centers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Benefits of VoiceAI Agents
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
                <benefit.icon className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-1" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Long Term Return On Investment
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center max-w-6xl mx-auto">
            {roiMetrics.map((metric, index) => (
              <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors w-full">
                <h3 className="text-xl font-semibold mb-3">{metric.title}</h3>
                <ul className="space-y-2">
                  {metric.points.map((point, idx) => (
                    <li key={idx} className="text-gray-400 flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-1" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transforming Customer Service Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Transforming Customer Service: Replacing IVR Systems with Voice AI
          </h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-400 text-lg">
                Traditional IVR systems have long been a source of frustration for customers, with their rigid menus, 
                limited functionality, and inability to understand natural language. Our Voice AI solution completely 
                transforms this experience, providing natural, intuitive conversations that adapt to customer needs 
                in real-time.
              </p>
              <p className="text-gray-400 text-lg">
                Learn how businesses are achieving higher customer satisfaction, reducing operational costs, 
                and increasing efficiency by replacing outdated IVR systems with our advanced Voice AI technology.
              </p>
              <div className="pt-4">
                <a 
                  href="https://drive.google.com/file/d/10r8gpbiufVP3_STPaTMA6Y5v8jMCxU0L/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="group" size="lg">
                    <span>Download Whitepaper</span>
                    <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="glass-card p-8 rounded-xl border border-primary/20">
              <h3 className="text-2xl font-semibold mb-4">Key Benefits Over IVR</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-400">Natural language understanding instead of rigid menu options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-400">Immediate issue resolution without long wait times</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-400">Personalized customer experiences based on context and history</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-400">Seamless escalation to human agents when necessary</span>
                </li>
                <li className="flex items-start">
                  <Globe className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-400">Automatically understand and speak in different languages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Security & Compliance
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 justify-items-center max-w-6xl mx-auto">
            {securityCompliance.map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors w-full">
                <Shield className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Additional Features & Support
          </h1>
          <div className="grid md:grid-cols-2 gap-4">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Let's Discuss Integration
          </h1>
          <div data-tf-live="01JMAMXNY7NHGYM2YQDXCDRDW6"></div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Why Choose WhitegloveAI?
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-400">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const benefits = [
  {
    icon: BrainCircuit,
    title: "Intelligent Comms",
    features: [
      "Advanced natural language processing for intuitive conversations",
      "Real-time sentiment analysis for empathetic interactions",
      "Custom voice cloning to match your brand identity",
      "Automated transcription and text export capabilities"
    ]
  },
  {
    icon: PhoneCall,
    title: "Seamless Integration",
    features: [
      "Omnichannel support across phone, chat, and email",
      "Smart call transfer to human agents when needed",
      "Integration with popular automation tools",
      "Connection with existing business systems"
    ]
  },
  {
    icon: BarChart4,
    title: "Business Operations",
    features: [
      "Automated appointment scheduling and reminders",
      "Instant inbound lead engagement",
      "24/7 customer support coverage",
      "Comprehensive B2B data collection and analysis"
    ]
  }
];

const roiMetrics = [
  {
    title: "Cost Reduction Metrics",
    points: [
      "30-50% reduction in inbound call volumes",
      "50-70% cost savings in answering services",
      "Payback period of 6-9 months on implementation",
      "Up to 30% reduction in staffing costs through automation"
    ]
  },
  {
    title: "Operational Efficiency",
    points: [
      "35% increase in productivity through AI-human collaboration",
      "24/7 availability without overtime costs",
      "Multilingual support without language specialists",
      "Seamless scalability with business growth"
    ]
  },
  {
    title: "Business Impact",
    points: [
      "Improved customer satisfaction",
      "Enhanced data collection and analytics",
      "Reduced employee burnout",
      "Scalable solution for growth"
    ]
  }
];

const securityCompliance = [
  {
    title: "HIPAA",
    description: "Health Insurance Portability and Accountability Act compliance"
  },
  {
    title: "SOC 2",
    description: "Service Organization Control 2 Type II compliance"
  },
  {
    title: "CCPA",
    description: "California Consumer Privacy Act compliance"
  },
  {
    title: "GDPR",
    description: "General Data Protection Regulation compliance"
  }
];

const additionalFeatures = [
  "Call Transfer - Included",
  "Additional Action (e.g., appointment booking, etc) - priced per use case",
  "Full Set Up + AI Security Testing",
  "Hallucination Prevention",
  "Monthly Management by WhitegloveAI Team",
  "Additional AI Voice Agents Available",
  "Knowledge Base Updates"
];

const whyChooseUs = [
  {
    title: "Simple Implementation",
    description: "We make implementing advanced AI simple and successful."
  },
  {
    title: "Expert Support",
    description: "Our expert team ensures your voice assistant delivers measurable results from day one."
  },
  {
    title: "Seamless Management",
    description: "We handle the complexities of AI deployment so you can focus on what matters most."
  },
  {
    title: "Ongoing Optimization",
    description: "We continuously refine and enhance your voice assistant to ensure peak performance and measurable impact."
  }
];

export default VoiceAI;
