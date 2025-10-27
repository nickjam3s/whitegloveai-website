import { Shield, PhoneCall, ArrowRight, BrainCircuit, BarChart4, CheckCircle2, Download, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import AICallEstimator from "@/components/calculators/AICallEstimator";
import LucidisBanner from '@/components/LucidisBanner';

const VoiceAI = () => {
  const isMobile = useIsMobile();

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
      // Clean up
      document.body.removeChild(typeformScript);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <a href="/communicationsai" className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors">
          <span className="mr-2">←</span> Back to CommunicationsAI
        </a>
      </div>
      {/* Hero Section */}
      <section className="relative pt-20 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-secondary/5 via-background to-primary/5">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--secondary)) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/351136e7-c241-4c56-a606-3ff7a65a05ac.png" 
              alt="WGAI Logo" 
              width="100" 
              height="100" 
              className="logo-animation mx-auto"
              style={{ 
                filter: "hue-rotate(260deg) brightness(150%) drop-shadow(0 0 10px rgba(112, 33, 238, 0.6))",
                display: "block"
              }}
            />
          </div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
            >
              The End of Hold Music. The Beginning of Instant Service.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto px-3 sm:px-0 text-shadow-sm"
            >
              VoiceAI transforms your phone lines into powerful, conversational AI channels. Powered by the <a href="https://www.lucidis.ai" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Lucidis</a> platform, it answers every call immediately with natural language understanding.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="tel:4698092199" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-colors">
                <span>Try Our VoiceAI: (469) 809-2199</span>
                <PhoneCall className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <LucidisBanner />

      {/* Problem & Solution Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
          >
            The Problem & Our Solution
          </motion.h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
            Built on the secure and scalable <a href="https://www.lucidis.ai" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Lucidis</a> platform, VoiceAI delivers natural voice conversations that feel human and work 24/7.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 bg-background/30 p-8 rounded-xl border border-gray-800"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">The Problem</h3>
              <p className="text-gray-300">
                In today's fast-paced business environment, providing exceptional customer service is paramount. However, managing high call volumes, ensuring prompt responses, and maintaining consistent quality can be challenging and resource-intensive. Traditional call centers often struggle with long wait times, high operational costs, and limited scalability, leading to frustrating experiences for both customers and employees.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 bg-background/30 p-8 rounded-xl border border-gray-800"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">The Solution: VoiceAI Agents</h3>
              <p className="text-gray-300">
                WhitegloveAI VoiceAI Agents is a revolutionary solution that leverages cutting-edge AI technology to transform customer interactions. Our AI-powered agents can handle inbound and outbound calls, providing seamless and personalized experiences while addressing the challenges faced by traditional receptionist, customer support and call centers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
          >
            Benefits of VoiceAI Agents
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center max-w-8xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-card p-8 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors h-full"
              >
                <benefit.icon className="h-12 w-12 text-secondary mb-6" />
                <h3 className="text-xl font-semibold mb-5 text-white">{benefit.title}</h3>
                <ul className="space-y-3">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Call Estimator Calculator Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
          >
            Estimate Your VoiceAI Usage
          </motion.h2>
          
          <AICallEstimator />
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
          >
            Long Term Return On Investment
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
            {roiMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-background/50 p-8 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors w-full h-full"
              >
                <h3 className="text-xl font-semibold mb-5 text-white">{metric.title}</h3>
                <ul className="space-y-3">
                  {metric.points.map((point, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transforming Customer Service Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
          >
            Transforming Customer Service: Replacing IVR Systems with Voice AI
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-gray-300 text-lg">
                Traditional IVR systems have long been a source of frustration for customers, with their rigid menus, 
                limited functionality, and inability to understand natural language. Our Voice AI solution completely 
                transforms this experience, providing natural, intuitive conversations that adapt to customer needs 
                in real-time.
              </p>
              <p className="text-gray-300 text-lg">
                Learn how businesses are achieving higher customer satisfaction, reducing operational costs, 
                and increasing efficiency by replacing outdated IVR systems with our advanced Voice AI technology.
              </p>
              <div className="pt-6">
                <a 
                  href="https://drive.google.com/file/d/10r8gpbiufVP3_STPaTMA6Y5v8jMCxU0L/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="group" size="lg">
                    <span className="relative z-20">Download Whitepaper</span>
                    <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform relative z-20" />
                  </Button>
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card/80 p-8 rounded-xl border border-primary/20 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Key Benefits Over IVR</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Natural language understanding instead of rigid menu options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Capable of instantly understanding and communicating in multiple languages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Immediate issue resolution without long wait times</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Personalized customer experiences based on context and history</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Seamless escalation to human agents when necessary</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
          >
            Security & Compliance
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 justify-items-center max-w-6xl mx-auto">
            {securityCompliance.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-card p-8 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors w-full h-full"
              >
                <Shield className="h-12 w-12 text-secondary mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
          >
            Additional Features & Support
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-y-6 gap-x-8 bg-background/30 p-8 rounded-xl border border-gray-800 max-w-4xl mx-auto"
          >
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start"
              >
                <CheckCircle2 className="h-6 w-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
          >
            Why Choose WhitegloveAI?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-background/50 p-8 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors h-full"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-background" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
          >
            Let's Discuss Integration
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-card/80 p-8 rounded-xl border border-gray-800 shadow-lg max-w-4xl mx-auto"
          >
            <div data-tf-live="01JMAMXNY7NHGYM2YQDXCDRDW6" className="min-h-[400px]"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const benefits = [
  {
    icon: BrainCircuit,
    title: "Intelligent Communication",
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
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    features: [
      "English, Spanish, French, German, Italian, Portuguese, Dutch",
      "Japanese, Korean, Chinese (Mandarin), Arabic, Hindi",
      "Russian, Polish, Turkish, Swedish, Norwegian, Danish",
      "Real-time language detection and seamless switching"
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
      "Improved customer satisfaction scores by up to 40%",
      "Enhanced data collection and analytics capabilities",
      "Reduced employee burnout and higher retention",
      "Scalable solution that grows with your business"
    ]
  }
];

const securityCompliance = [
  {
    title: "HIPAA Compliant",
    description: "Health Insurance Portability and Accountability Act compliance ensures patient data security"
  },
  {
    title: "SOC 2 Certified",
    description: "Service Organization Control 2 Type II compliance for secure data handling and processing"
  },
  {
    title: "CCPA Compliant",
    description: "California Consumer Privacy Act compliance protecting consumer personal information"
  },
  {
    title: "GDPR Compliant",
    description: "General Data Protection Regulation compliance for EU data protection standards"
  }
];

const additionalFeatures = [
  "Call Transfer - Included in all packages",
  "Additional Actions (appointment booking, orders, etc.) - priced per use case",
  "Full Set Up + AI Security Testing procedures",
  "Advanced Hallucination Prevention technology",
  "Monthly Management by WhitegloveAI Team",
  "Additional AI Voice Agents available",
  "Regular Knowledge Base Updates"
];

const whyChooseUs = [
  {
    title: "Simple Implementation",
    description: "We handle the complexity so you don't have to. Our team ensures a smooth, hassle-free implementation process with minimal disruption to your operations."
  },
  {
    title: "Expert Support",
    description: "Our team of AI specialists and customer experience experts ensure your voice assistant delivers measurable results from day one."
  },
  {
    title: "Seamless Management",
    description: "We handle the ongoing management and optimization of your AI solution, allowing you to focus on your core business while reaping the benefits."
  },
  {
    title: "Continuous Improvement",
    description: "We continuously refine and enhance your voice assistant to ensure peak performance and measurable impact on your business metrics."
  }
];

export default VoiceAI;
