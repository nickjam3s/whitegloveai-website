
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
  ChevronUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import ContactSection from "./maisp/components/humanoidai/ContactSection";

const HumanoidAI = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'instant' });

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
      observer.disconnect();
    };
  }, []);

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
      icon: <Building2 className="h-8 w-8" />,
      title: "Public Sector",
      description: "concierge, facilities, service points"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Healthcare & Campuses",
      description: "wayfinding, triage, supply runs"
    },
    {
      icon: <Store className="h-8 w-8" />,
      title: "Logistics & Facilities",
      description: "inspection, inventory, safety patrol"
    },
    {
      icon: <Users className="h-8 w-8" />,
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
      title: "Automation Readiness Review",
      description: "Structured on-site and virtual evaluation of workflows, traffic patterns, safety requirements, and compliance environment—pinpointing high-ROI automation opportunities and identifying high-risk deployments early."
    },
    {
      title: "Procurement Assistance",
      description: "End-to-end vendor process management—shortlisting, RFP/RFQ development, technical vetting, and SLA negotiation—mapped to compliance frameworks."
    },
    {
      title: "Setup & Maintenance",
      description: "Installation, configuration, integration with existing systems, staff training, firmware updates, safety recalibration, and preventative maintenance."
    }
  ];

  const safetyItems = [
    {
      title: "Physical & Operational Safety Protocols",
      description: "Site hazard review, safe-path mapping, e-stop checks • Daily operational safety checklist"
    },
    {
      title: "Responsible AI Guardrails",
      description: "Pre-approved scripts and escalation paths • Continuous monitoring for unsafe behavior"
    },
    {
      title: "Zero-Trust, Secure Integrations",
      description: "Least-privilege access • End-to-end encryption"
    },
    {
      title: "Standards-Aligned Compliance Evidence",
      description: "NIST AI RMF, ISO/IEC 42001, TRAIGA governance pack"
    }
  ];

  const metrics = [
    {
      title: "Service Coverage Hours",
      description: "added without extra staffing"
    },
    {
      title: "Queue Time Reduction",
      description: "minutes saved per visitor"
    },
    {
      title: "Task Completion Rate",
      description: "% patrols/inspections completed"
    },
    {
      title: "Safety Incident/Near-Miss Rate",
      description: "per 1,000 operating hours"
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
    "name": "EmbodiedAI",
    "provider": {
      "@type": "Organization",
      "name": "WhitegloveAI"
    },
    "areaServed": "US",
    "serviceType": "Managed Embodied AI Robot Operations",
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
    <div className="min-h-screen bg-background">
      <SEO 
        title="EmbodiedAI™ by WhitegloveAI | Needs Assessment, Procurement & Managed Robot Ops"
        description="Deploy embodied AI robots safely with WhitegloveAI. We handle readiness, procurement, setup, and maintenance—aligned to NIST AI RMF, ISO 42001, and TRAIGA."
        canonicalPath="/maisp/embodied-ai"
        schemas={jsonLdSchema}
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/20 to-black/90">
            <div className="absolute inset-0 backdrop-blur-sm" />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent heading-highlight-scroll"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            EmbodiedAI™ — Managed Embodied AI Robots, Safely Deployed
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Deploy embodied AI robots for concierge, inspection, and operational tasks—WhitegloveAI handles readiness, procurement, and 24/7 upkeep under our MAISP program.
          </motion.p>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Discovery Call
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-highlight-scroll">
                Embodied AI Robotics at the Tipping Point
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Costs are falling, capabilities are rising, and early adopters are securing efficiency gains and service coverage advantages their competitors can't match. With WhitegloveAI, you get there first—safely, compliantly, and with measurable ROI.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/af75627a-048f-43fc-be81-d3bd38807d05.png" 
                alt="Advanced embodied AI robot in operational environment"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 heading-highlight-scroll">
            Measurable Outcomes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="border-gray-800 bg-background/50">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{outcome.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 heading-highlight-scroll">
            Where Embodied AI Fits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-gray-800 bg-card/50 text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4 text-primary">
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{useCase.description}</p>
                </CardContent>
              </Card>
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

      {/* Why WhitegloveAI Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 heading-highlight-scroll">
            Why WhitegloveAI
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWhiteglove.map((item, index) => (
              <Card key={index} className="border-gray-800 bg-background/50">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Service Path Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 heading-highlight-scroll">
            Our Service Path
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {servicePath.map((step, index) => (
              <Card key={index} className="border-gray-800 bg-card/50 text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <img 
              src="/lovable-uploads/b447f719-166f-4d1a-8912-8602ac137fee.png" 
              alt="Advanced robotics deployment and maintenance operations"
              className="max-w-2xl w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Safety & Compliance Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 heading-highlight-scroll">
            Safety, Security & Compliance
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyItems.map((item, index) => (
              <Card key={index} className="border-gray-800 bg-background/50">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center gap-3">
                    <Shield className="h-6 w-6 text-primary" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 heading-highlight-scroll">
            Metrics We Track
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="border-gray-800 bg-card/50">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center gap-3">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    {metric.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <img 
              src="/lovable-uploads/80f1598f-057a-4d16-8dc2-d9b1a9c8781e.png" 
              alt="Metrics and performance tracking for humanoid robot operations"
              className="max-w-2xl w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 heading-highlight-scroll">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-gray-800 bg-background/50">
                <CardHeader 
                  className="cursor-pointer" 
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <CardTitle className="text-lg text-white flex items-center justify-between">
                    {faq.question}
                    {openFAQ === index ? <ChevronUp /> : <ChevronDown />}
                  </CardTitle>
                </CardHeader>
                {openFAQ === index && (
                  <CardContent>
                    <p className="text-gray-400">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
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
            <Link to="/vcaio" className="text-primary hover:text-primary/80">vCAIO</Link>
            <Link to="/traiga" className="text-primary hover:text-primary/80">TRAIGA</Link>
            <Link to="/maisp/voiceai" className="text-primary hover:text-primary/80">VoiceAI</Link>
            <Link to="/maisp/avatarai" className="text-primary hover:text-primary/80">AvatarAI</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanoidAI;
