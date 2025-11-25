import { useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  DollarSign, 
  Lock, 
  Server, 
  Users, 
  MessageSquare, 
  Lightbulb, 
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Phone,
  FileText,
  Globe,
  Building2
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import '@/styles/animations.css';
import HB3512Banner from "@/components/HB3512Banner";
import LucidisBanner from "@/components/LucidisBanner";
import SEO from '@/components/SEO';
import HeroBackground from "@/components/shared/HeroBackground";

const GovAI = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    const headings = document.querySelectorAll('.heading-highlight-scroll');
    headings.forEach(heading => observer.observe(heading));

    return () => {
      document.documentElement.style.scrollBehavior = '';
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title="Government AI Solutions | GovAI by WhitegloveAI"
        description="Secure, compliant AI for public sector. TXShare-approved vendor delivering AI solutions for cities, counties, and state agencies."
        canonicalPath="/govai"
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
              <div className="flex justify-center mb-8">
                <div className="bg-secondary/10 p-4 rounded-full border-2 border-secondary/30">
                  <Building2 className="h-16 w-16 text-secondary" />
                </div>
              </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]">
              AI Solutions Built for Government, Proven in Government
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10">
              We partner with cities, counties, school districts, and public agencies to deploy secure, responsible AI that automates processes, enhances citizen services, and maximizes public resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg">
                  Schedule a Government Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </HeroBackground>

      {/* Problem Section */}
      <section className="py-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-8 text-center heading-highlight-scroll">
            Doing More with Less, Securely.
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 text-center">
            Public sector leaders are tasked with delivering exceptional citizen services under tight budgets and increasing constituent expectations. Manual processes, legacy systems, and security risks create significant barriers to innovation.
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

      <HB3512Banner />
      <LucidisBanner />

      {/* Services for Government Section */}
      <section className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-6 heading-highlight-scroll">
              A Full Suite of Government-Ready AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-4">
              WhitegloveAI is a Texas-based company with a deep understanding of the public sector. Our services are designed to meet the rigorous security, compliance, and procurement needs of government agencies.
            </p>
            <div className="inline-block bg-secondary/10 border border-secondary/30 rounded-lg px-6 py-3 mt-4">
              <p className="text-secondary font-semibold">
                All services are available through our TXShare cooperative purchasing contracts
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {govServices.map((service, index) => (
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
                <Link to={service.link}>
                  <Button className="w-full mt-6 bg-secondary/20 hover:bg-secondary/30 text-white border border-secondary/50">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Results Section */}
      <section className="py-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-12 text-center heading-highlight-scroll">
            Trusted by Texas Agencies, Delivering Real Impact
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Major Texas City Case Study */}
            <div className="bg-gradient-to-br from-secondary/10 to-background/50 p-8 rounded-lg border border-secondary/30">
              <div className="flex items-center mb-6">
                <div className="bg-secondary/20 p-3 rounded-lg mr-4">
                  <Phone className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Major Texas City</h3>
                  <p className="text-secondary">VoiceAI for Traffic Management</p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="bg-secondary/10 rounded-lg p-6 mb-4">
                  <p className="text-4xl font-bold text-secondary mb-2">15-20 Hours</p>
                  <p className="text-gray-300">Saved per week in staff time</p>
                </div>
              </div>
              
              <blockquote className="border-l-4 border-secondary pl-4 italic text-gray-300 mb-4">
                "WhitegloveAI's VoiceAI solution has transformed how we handle traffic inquiries. The time savings allow our team to focus on more complex citizen needs."
              </blockquote>
              <p className="text-sm text-gray-400">— Melissa K., CIO, Major Texas City</p>
            </div>

            {/* City of McKinney Case Study */}
            <div className="bg-gradient-to-br from-secondary/10 to-background/50 p-8 rounded-lg border border-secondary/30">
              <div className="flex items-center mb-6">
                <div className="bg-secondary/20 p-3 rounded-lg mr-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">City of McKinney</h3>
                  <p className="text-secondary">HR AI Agent</p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="bg-secondary/10 rounded-lg p-6 mb-4">
                  <p className="text-4xl font-bold text-secondary mb-2">68%</p>
                  <p className="text-gray-300">Deflection of repetitive inquiries</p>
                </div>
              </div>
              
              <blockquote className="border-l-4 border-secondary pl-4 italic text-gray-300 mb-4">
                "The HR AI agent has dramatically reduced the burden on our HR team. Employees get instant answers, and our staff can focus on strategic initiatives."
              </blockquote>
              <p className="text-sm text-gray-400">— Omar Rodriguez, CIO, City of McKinney</p>
            </div>
          </div>
        </div>
      </section>

      {/* Procurement & Compliance Section */}
      <section className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-12 text-center heading-highlight-scroll">
            Streamlined Procurement, Ironclad Security
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* TXShare Contracts */}
            <div className="bg-card p-8 rounded-lg border border-secondary/30">
              <div className="flex items-center mb-6">
                <FileText className="h-12 w-12 text-secondary mr-4" />
                <h3 className="text-2xl font-semibold text-white">TXShare Contracts</h3>
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
                  <p className="text-sm text-gray-400 mt-2">Strategic advisory, roadmapping, and implementation support</p>
                </div>
                
                <div className="bg-background/50 p-4 rounded-lg border border-gray-800">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-secondary font-semibold">Contract #2025-018</span>
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                  </div>
                  <p className="text-white font-medium"><a href="https://www.lucidis.ai" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Lucidis</a> AI Platform</p>
                  <p className="text-sm text-gray-400 mt-2">Unified communications AI for citizen engagement</p>
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

            {/* Security & Compliance */}
            <div className="bg-card p-8 rounded-lg border border-secondary/30">
              <div className="flex items-center mb-6">
                <Shield className="h-12 w-12 text-secondary mr-4" />
                <h3 className="text-2xl font-semibold text-white">Security & Compliance</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Government-grade security is not optional—it's fundamental to everything we do.
              </p>
              
              <div className="space-y-4">
                {securityFeatures.map((feature, index) => (
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
              Partner with a Team That Understands Government
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              From procurement to deployment, we speak your language and understand your challenges. Let's build a more efficient, responsive government together.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule a Government Consultation
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <ScrollAnimation targetId="services" />
    </div>
  );
};

const challenges = [
  {
    icon: DollarSign,
    title: "Budget Constraints",
    description: "Limited resources require maximizing impact of every dollar spent on technology."
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description: "Strict requirements for data protection, privacy, and regulatory compliance."
  },
  {
    icon: Server,
    title: "Legacy Systems",
    description: "Outdated infrastructure creates integration challenges and operational inefficiencies."
  },
  {
    icon: Users,
    title: "Public Trust",
    description: "Citizens expect transparency, accountability, and reliable service delivery."
  }
];

const govServices = [
  {
    icon: MessageSquare,
    title: "CommunicationsAI",
    description: "Modernize citizen engagement with AI-powered communication tools.",
    features: [
      "24/7 citizen hotlines (311)",
      "Automated public records requests",
      "Multilingual support for diverse communities",
      "Real-time query resolution"
    ],
    link: "/communicationsai"
  },
  {
    icon: Lightbulb,
    title: "Strategic AI Consulting",
    description: "Expert guidance for government-wide AI transformation.",
    features: [
      "Agency-wide AI strategy development",
      "TRAIGA compliance assistance",
      "AI governance frameworks",
      "Risk assessment and mitigation"
    ],
    link: "/consulting"
  },
  {
    icon: GraduationCap,
    title: "AI Training & Certification",
    description: "Build internal AI expertise across your organization.",
    features: [
      "Upskilling workforce programs",
      "IT staff training on secure AI",
      "Leadership AI literacy workshops",
      "Ongoing support and resources"
    ],
    link: "/training"
  }
];

const securityFeatures = [
  {
    icon: Shield,
    title: "SOC 2 Type II Certified",
    description: "Comprehensive security controls audited by independent third parties."
  },
  {
    icon: Lock,
    title: "Government-Grade Encryption",
    description: "End-to-end encryption for all data in transit and at rest."
  },
  {
    icon: FileText,
    title: "GDPR & CCPA Compliant",
    description: "Full compliance with data privacy regulations and government standards."
  },
  {
    icon: CheckCircle2,
    title: "Regular Security Audits",
    description: "Continuous monitoring and assessment to maintain the highest security standards."
  }
];

export default GovAI;
