
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  GraduationCap, 
  Store, 
  Clock, 
  TrendingDown, 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Download, 
  Calendar,
  Users,
  BarChart3,
  Eye,
  Headphones,
  FileText,
  Heart,
  MapPin,
  ChevronDown,
  ChevronUp,
  Settings,
  Handshake,
  Bot,
  Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import ContactSection from "./maisp/components/humanoidai/ContactSection";
import HeroBackground from "@/components/shared/HeroBackground";
import RobotPlatformShowcase from "@/components/robotics/RobotPlatformShowcase";

const HumanoidAI = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.heading-highlight-scroll').forEach(heading => {
      observer.observe(heading);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const challenges = [
    {
      icon: Clock,
      title: "24/7 Coverage Gaps",
      description: "Staff shortages limit service hours and responsiveness in critical environments."
    },
    {
      icon: TrendingDown,
      title: "Rising Labor Costs",
      description: "Repetitive and hazardous tasks drain budgets and increase turnover."
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      description: "Meeting NIST AI RMF, ISO 42001, and TRAIGA requirements is complex."
    },
    {
      icon: Settings,
      title: "Integration Complexity",
      description: "Deploying robotics requires hardware, software, and operational expertise."
    }
  ];

  const outcomes = [
    {
      title: "Extend Service Hours",
      description: "without extra staffing"
    },
    {
      title: "Reduce Wait Times",
      description: "in high-traffic areas"
    },
    {
      title: "Improve Coverage",
      description: "for repetitive or hazardous tasks"
    },
    {
      title: "Maintain Compliance",
      description: "with NIST AI RMF, ISO 42001, TRAIGA"
    }
  ];

  const useCases = [
    {
      icon: Building2,
      title: "Public Sector",
      description: "concierge, facilities, service points"
    },
    {
      icon: GraduationCap,
      title: "Healthcare & Campuses",
      description: "wayfinding, triage, supply runs"
    },
    {
      icon: Store,
      title: "Logistics & Facilities",
      description: "inspection, inventory, safety patrol"
    },
    {
      icon: Users,
      title: "Retail & Venues",
      description: "guest services, queue triage, back-of-house"
    }
  ];

  const whyWhiteglove = [
    {
      title: "MAISP Advantage",
      description: "Integration → governance → operations"
    },
    {
      title: "Vendor-Agnostic Procurement Expertise",
      description: "unbiased vendor selection"
    },
    {
      title: "Proven Impact Culture",
      description: "outcomes first, tech second"
    },
    {
      title: "vCAIO & Governance Support",
      description: "executive-level policy and oversight"
    }
  ];

  const servicePath = [
    {
      icon: Eye,
      title: "Automation Readiness Review",
      description: "Structured on-site and virtual evaluation of workflows, traffic patterns, safety requirements, and compliance environment—pinpointing high-ROI automation opportunities.",
      features: [
        "Workflow and traffic pattern analysis",
        "Safety requirement assessment",
        "High-ROI opportunity identification",
        "Risk assessment and mitigation planning"
      ]
    },
    {
      icon: FileText,
      title: "Procurement Assistance",
      description: "End-to-end vendor process management—shortlisting, RFP/RFQ development, technical vetting, and SLA negotiation.",
      features: [
        "Vendor shortlisting and evaluation",
        "RFP/RFQ development",
        "Technical vetting and due diligence",
        "SLA negotiation and compliance mapping"
      ]
    },
    {
      icon: Settings,
      title: "Setup & Maintenance",
      description: "Installation, configuration, integration with existing systems, staff training, firmware updates, and preventative maintenance.",
      features: [
        "Hardware installation and configuration",
        "System integration and testing",
        "Staff training programs",
        "Ongoing maintenance and updates"
      ]
    }
  ];

  const safetyFeatures = [
    {
      icon: Shield,
      title: "Physical & Operational Safety",
      description: "Site hazard review, safe-path mapping, e-stop checks, and daily operational safety checklists."
    },
    {
      icon: Bot,
      title: "Responsible AI Guardrails",
      description: "Pre-approved scripts, escalation paths, and continuous monitoring for unsafe behavior."
    },
    {
      icon: Lock,
      title: "Zero-Trust Security",
      description: "Least-privilege access, end-to-end encryption, and secure American-developed software."
    },
    {
      icon: CheckCircle2,
      title: "Standards-Aligned Compliance",
      description: "NIST AI RMF, ISO/IEC 42001, and TRAIGA governance documentation."
    }
  ];

  const faqs = [
    {
      question: "Which robots do you support?",
      answer: "Vendor-agnostic approach—we integrate with multiple vendors and selection depends on environment, safety requirements, and specific tasks. Our evaluation process considers factors like mobility, payload capacity, battery life, and compliance with safety standards."
    },
    {
      question: "How do you address labor concerns?",
      answer: "We partner with HR and Legal teams to define clear role boundaries, establish escalation procedures, and create re-skilling pathways. Our approach focuses on augmenting human capabilities rather than replacement, with transparent communication about automation goals."
    },
    {
      question: "How is data privacy handled?",
      answer: "Data-minimization by default with encrypted transmission and storage, configurable retention controls, and full auditability. We implement privacy-by-design principles with comprehensive data governance aligned to applicable regulations."
    },
    {
      question: "What's the fastest path to value?",
      answer: "Automation Readiness Review → limited-scope pilot in a controlled area → full MAISP deployment. This staged approach allows for risk mitigation, stakeholder buy-in, and measurable proof of concept before scaling."
    }
  ];

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Robotics",
    "provider": {
      "@type": "Organization",
      "name": "WhitegloveAI"
    },
    "areaServed": "US",
    "serviceType": "Managed Robotics Operations",
    "audience": {
      "@type": "Audience",
      "audienceType": "BusinessExecutive"
    },
    "hasOfferCatalog": [
      {
        "@type": "OfferCatalog",
        "name": "Launchpad",
        "description": "Discovery and pilot services"
      },
      {
        "@type": "OfferCatalog", 
        "name": "MAISP",
        "description": "Managed operations services"
      }
    ],
    "isRelatedTo": ["VoiceAI", "AvatarAI", "vCAIO"]
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO 
        title="Robotics by WhitegloveAI | Needs Assessment, Procurement & Managed Robot Ops"
        description="Deploy AI robots safely with WhitegloveAI. We handle readiness, procurement, setup, and maintenance—aligned to NIST AI RMF, ISO 42001, and TRAIGA."
        canonicalPath="/maisp/robotics"
        schemas={jsonLdSchema}
      />

      {/* Hero Section */}
      <HeroBackground>
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]">
                Robotics as a Service: Managed AI Robots, Securely Deployed.
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10">
                WhitegloveAI provides end-to-end managed robotics solutions, integrating best-in-class hardware with secure, American-developed software. We handle the complexity, so you can focus on the mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Request a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-4xl mx-auto mt-12"
            >
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-white/10">
                <iframe
                  src="https://www.youtube.com/embed/NeiXuh32LWg?rel=0"
                  title="WhitegloveAI Robotics"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </HeroBackground>

      {/* Problem Section */}
      <section className="py-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-8 text-center heading-highlight-scroll">
            The Challenge: Deploying Robotics is Complex
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 text-center">
            Organizations want to leverage AI robotics but face significant barriers: hardware integration, software development, security hardening, regulatory compliance, and ongoing management.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
                <challenge.icon className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{challenge.title}</h3>
                <p className="text-gray-400">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-6 heading-highlight-scroll">
              Our Complete Robotics Service Path
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-4">
              From initial assessment to ongoing operations, WhitegloveAI provides a full-lifecycle managed robotics solution.
            </p>
            <div className="inline-block bg-secondary/10 border border-secondary/30 rounded-lg px-6 py-3 mt-4">
              <p className="text-secondary font-semibold">
                Available through TXShare cooperative purchasing (Contract #2025-023)
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {servicePath.map((service, index) => (
              <div key={index} className="bg-card p-8 rounded-lg border border-gray-800 hover:border-secondary/50 transition-all hover:scale-105">
                <div className="bg-secondary/10 p-3 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  <service.icon className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="py-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-4 heading-highlight-scroll">
            A Platform for Every Mission
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            We deploy a range of versatile humanoid and quadruped robots, each selected for its best-in-class performance and reliability.
          </p>
          
          <RobotPlatformShowcase />
        </div>
      </section>

      {/* Proven Results Section */}
      <section className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-12 text-center heading-highlight-scroll">
            Proven Results with Managed Robotics
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="bg-gradient-to-br from-secondary/10 to-background/50 p-8 rounded-lg border border-secondary/30">
              <div className="flex items-center mb-6">
                <div className="bg-secondary/20 p-3 rounded-lg mr-4">
                  <Building2 className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Industrial Facility</h3>
                  <p className="text-secondary">Quadruped Inspection Deployment</p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="bg-secondary/10 rounded-lg p-6 mb-4">
                  <p className="text-4xl font-bold text-secondary mb-2">40%</p>
                  <p className="text-gray-300">Reduction in inspection time</p>
                </div>
              </div>
              
              <blockquote className="border-l-4 border-secondary pl-4 italic text-gray-300 mb-4">
                "The managed robotics solution from WhitegloveAI has transformed our safety inspection process. Coverage we couldn't achieve before is now routine."
              </blockquote>
              <p className="text-sm text-gray-400">— Operations Director, Industrial Manufacturing</p>
            </div>

            {/* Case Study 2 */}
            <div className="bg-gradient-to-br from-secondary/10 to-background/50 p-8 rounded-lg border border-secondary/30">
              <div className="flex items-center mb-6">
                <div className="bg-secondary/20 p-3 rounded-lg mr-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Public Sector Agency</h3>
                  <p className="text-secondary">Humanoid Concierge Pilot</p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="bg-secondary/10 rounded-lg p-6 mb-4">
                  <p className="text-4xl font-bold text-secondary mb-2">24/7</p>
                  <p className="text-gray-300">Service coverage achieved</p>
                </div>
              </div>
              
              <blockquote className="border-l-4 border-secondary pl-4 italic text-gray-300 mb-4">
                "Extending our service hours without additional staffing costs was a game-changer. The secure, American-developed software gave us confidence in the deployment."
              </blockquote>
              <p className="text-sm text-gray-400">— IT Director, Government Agency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 heading-highlight-scroll">
            Where AI Robotics Fits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <useCase.icon className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <img 
              src="/lovable-uploads/8714b9b9-3f59-493d-9004-982728a8194d.png" 
              alt="Robot performing inspection and patrol tasks in various environments"
              className="max-w-2xl w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-12 text-center heading-highlight-scroll">
            Safety, Security & Compliance
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Security Features */}
            <div className="bg-card p-8 rounded-lg border border-secondary/30">
              <div className="flex items-center mb-6">
                <Shield className="h-12 w-12 text-secondary mr-4" />
                <h3 className="text-2xl font-semibold text-white">Government-Grade Security</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Our secure, American-developed software stack meets the stringent security and compliance standards required for public sector and critical infrastructure deployment.
              </p>
              
              <div className="space-y-4">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-secondary/10 p-2 rounded-lg mr-4 mt-1">
                      <feature.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TXShare Info */}
            <div className="bg-card p-8 rounded-lg border border-secondary/30">
              <div className="flex items-center mb-6">
                <FileText className="h-12 w-12 text-secondary mr-4" />
                <h3 className="text-2xl font-semibold text-white">TXShare Contract</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                As a TXShare-approved vendor through the North Central Texas Council of Governments, we offer simplified procurement for Texas public agencies.
              </p>
              
              <div className="space-y-4">
                <div className="bg-background/50 p-4 rounded-lg border border-gray-800">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-secondary font-semibold">Contract #2025-023</span>
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                  </div>
                  <p className="text-white font-medium">AI Consulting Services</p>
                  <p className="text-sm text-gray-400 mt-2">Strategic advisory, robotics assessment, and implementation support</p>
                </div>
              </div>
              
              <a 
                href="https://txshare.org/available-contracts/artificial-intelligence-ai-consultancy-services-9a4fd3af3342a4e1a6df4de8cbb21bc5/whitegloveai-llc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block"
              >
                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  View Our TXShare Listing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhitegloveAI Advantage Section */}
      <section className="py-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 heading-highlight-scroll">
            More Than a Robot. A Complete Solution.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background/50 p-8 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-secondary/10 p-4 rounded-full">
                  <Shield className="h-10 w-10 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Secure American Software</h3>
              <p className="text-gray-400">
                We integrate best-in-class hardware with our own secure, American-developed software stack, mitigating supply chain risks.
              </p>
            </div>
            
            <div className="bg-background/50 p-8 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-secondary/10 p-4 rounded-full">
                  <Settings className="h-10 w-10 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">End-to-End Managed Service</h3>
              <p className="text-gray-400">
                From initial needs assessment to deployment and ongoing support, we are your single point of contact and accountability.
              </p>
            </div>
            
            <div className="bg-background/50 p-8 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-secondary/10 p-4 rounded-full">
                  <Handshake className="h-10 w-10 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Simplified Procurement</h3>
              <p className="text-gray-400">
                As a TXShare-approved vendor, skip the lengthy RFP process and get technology deployed faster for Texas government entities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 heading-highlight-scroll">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors">
                <button 
                  className="w-full text-left flex items-center justify-between cursor-pointer" 
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  {openFAQ === index ? <ChevronUp className="text-secondary" /> : <ChevronDown className="text-gray-400" />}
                </button>
                {openFAQ === index && (
                  <p className="text-gray-400 mt-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-primary/5"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Partner with the Robotics Experts
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              From assessment to deployment, we handle the complexity so you can focus on your mission. Let's build the future of operations together.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule a Consultation
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Related Links Section */}
      <section className="py-12 bg-card/30 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 mb-4">Related Services:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/maisp" className="text-primary hover:text-primary/80">MAISP</Link>
            <Link to="/consulting" className="text-primary hover:text-primary/80">Consulting</Link>
            <Link to="/traiga" className="text-primary hover:text-primary/80">TRAIGA</Link>
            <Link to="/maisp/voiceai" className="text-primary hover:text-primary/80">VoiceAI</Link>
            <Link to="/maisp/avatarai" className="text-primary hover:text-primary/80">AvatarAI</Link>
            <Link to="/govai" className="text-primary hover:text-primary/80">GovAI</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanoidAI;
