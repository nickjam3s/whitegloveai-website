
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
      description: "Deploy humanoid robots to provide 24/7 coverage without adding headcount to your operations team."
    },
    {
      title: "Reduce Wait Times",
      description: "Clear backlogs and reduce queue times with automated assistance for routine tasks and inquiries."
    },
    {
      title: "Increase Coverage",
      description: "Handle repetitive, hazardous, or hard-to-staff work with consistent robotic assistance."
    },
    {
      title: "Prove Compliance",
      description: "Aligned to NIST AI RMF, ISO/IEC 42001, and TRAIGA from day one with complete audit trails."
    },
    {
      title: "Measure ROI",
      description: "Track before/after metrics including SLA performance, queue times, and safety incidents."
    }
  ];

  const useCases = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Public Sector",
      description: "City hall concierge, library assistant, facility patrol, after-hours service"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Campuses & Healthcare",
      description: "Wayfinding, visitor triage, supply runs, safety rounds"
    },
    {
      icon: <Store className="h-8 w-8" />,
      title: "Facilities & Logistics",
      description: "Routine inspections, inventory checks, secure escort"
    },
    {
      icon: <Store className="h-8 w-8" />,
      title: "Retail & Venues",
      description: "Guest services, line triage, back-of-house tasks"
    }
  ];

  const whyWhiteglove = [
    {
      title: "MAISP Advantage",
      description: "One partner for integration → governance → operations—not just a pilot."
    },
    {
      title: "AI-AMF Inside",
      description: "Standards-aligned framework for oversight, controls, and measurable value."
    },
    {
      title: "Public Procurement Ready",
      description: "Engage through TXShare to move quickly and compliantly."
    },
    {
      title: "Proven Impact Culture",
      description: "We lead with outcomes—not demos. (Example: municipal HR pilot achieved 68% inquiry deflection.)"
    },
    {
      title: "vCAIO Available",
      description: "Fractional executive leadership for policy, change management, and vendor accountability."
    }
  ];

  const howItWorks = [
    {
      title: "Launchpad Workshop",
      duration: "2–3 weeks",
      description: "Scope use cases, risks, and KPIs; select an initial workflow and environment; define human-in-the-loop and escalation."
    },
    {
      title: "Pilot",
      duration: "6–8 weeks", 
      description: "Safe facility trial; safety protocols; privacy/PIA; red-team scenarios; executive scorecard."
    },
    {
      title: "Integrate",
      duration: "Ongoing",
      description: "Connect identity, facilities, ticketing/ITSM (e.g., ServiceNow), and communications (Teams/telephony)."
    },
    {
      title: "Govern",
      duration: "Ongoing",
      description: "Apply AI-AMF controls; logging, audit, model guardrails; policy and training."
    },
    {
      title: "Operate (MAISP)",
      duration: "24/7",
      description: "24/7 monitoring, updates, model tuning, fleet health, and quarterly value reviews."
    }
  ];

  const safetyItems = [
    {
      title: "Physical & Operational Safety",
      description: "Site readiness, fall-back behaviors, e-stop, human override."
    },
    {
      title: "Responsible AI",
      description: "Guardrails, red teaming, incident playbooks."
    },
    {
      title: "Security-by-Design",
      description: "Zero-trust integrations, least-privilege access, encrypted data flows."
    },
    {
      title: "Compliance Mapping",
      description: "NIST AI RMF, ISO/IEC 42001, TRAIGA—evidence captured in a governance pack."
    }
  ];

  const metrics = [
    "Service coverage hours",
    "Queue times", 
    "Task completion rate",
    "Safety incidents and near-misses",
    "Cost per interaction / per inspection",
    "Satisfaction (resident/visitor/staff) and accessibility compliance"
  ];

  const caseSnapshots = [
    {
      title: "Municipal HR",
      description: "Deflected routine inquiries to free staff for complex cases.",
      result: "68% deflection"
    },
    {
      title: "Citizen Services Integration", 
      description: "Voice/311 orchestration with analytics and automated service routing.",
      result: "Improved response times"
    }
  ];

  const faqs = [
    {
      question: "Which robots do you support?",
      answer: "We integrate with multiple vendors; selection depends on environment, safety, and tasks."
    },
    {
      question: "How do you address labor concerns?",
      answer: "We define role boundaries, escalation, and re-skilling paths with HR/Legal."
    },
    {
      question: "How is data privacy handled?",
      answer: "Data-minimization by default, encrypted in transit/at rest, retention controls, and auditability."
    },
    {
      question: "Fastest path to value?",
      answer: "Launchpad → limited-scope pilot in a controlled area → MAISP operations."
    }
  ];

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "HumanoidAI",
    "provider": {
      "@type": "Organization",
      "name": "WhitegloveAI"
    },
    "areaServed": "US",
    "serviceType": "Managed Humanoid Robot Operations",
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
        title="HumanoidAI™ by WhitegloveAI | Managed Humanoid Robots with Governance & Day‑2 Ops"
        description="Deploy humanoid robots safely with WhitegloveAI's MAISP program. We handle integration, governance, and 24/7 operations—aligned to NIST AI RMF, ISO/IEC 42001, and TRAIGA. Start with the AI Launchpad Workshop."
        canonicalPath="/maisp/humanoid-ai"
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
            HumanoidAI™ — Managed Humanoid Robots, Safely Deployed
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From lobby concierge to inspections and patrols—deploy humanoid robots with security, compliance, and day‑2 operations handled by WhitegloveAI's MAISP program.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="text-lg px-8 py-4">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Discovery Call
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              <ArrowRight className="mr-2 h-5 w-5" />
              See Our Launchpad Path to Pilot
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 heading-highlight-scroll">
            Measurable Outcomes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            Where Humanoids Fit
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
        </div>
      </section>

      {/* Why WhitegloveAI Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 heading-highlight-scroll">
            Why WhitegloveAI
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 heading-highlight-scroll">
            How It Works
          </h2>
          <div className="space-y-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 heading-highlight-scroll">
            Safety, Security & Compliance
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-gray-800">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span className="text-gray-300">{metric}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Snapshots Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 heading-highlight-scroll">
            Case Snapshots
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseSnapshots.map((snapshot, index) => (
              <Card key={index} className="border-gray-800 bg-background/50">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{snapshot.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{snapshot.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-primary">Result:</span>
                    <span className="text-sm text-white">{snapshot.result}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Engagement Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 heading-highlight-scroll">
            Pricing & Engagement
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Start with Launchpad to de-risk and define a no-regrets pilot.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            MAISP subscription for operations, updates, and value realization at scale.
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            <FileText className="mr-2 h-5 w-5" />
            Request Pricing & Sample SOW
          </Button>
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

      {/* Final CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 heading-highlight-scroll">
            Bring Humanoids Online—Safely and Responsibly
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-lg px-8 py-4">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Discovery Call
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              <Download className="mr-2 h-5 w-5" />
              Download the MAISP Brief
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              <Users className="mr-2 h-5 w-5" />
              Schedule Launchpad
            </Button>
          </div>
        </div>
      </section>

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
