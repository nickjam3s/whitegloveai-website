
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const TRAIGA = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Load the Typeform script for the readiness assessment
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

    // Observe all animate-on-scroll elements
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      document.body.removeChild(typeformScript);
      observer.disconnect();
    };
  }, []);

  const scrollToAssessment = () => {
    const element = document.getElementById('readiness-assessment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const timelineItems = [
    { date: "May 2025", event: "Bill Passed", status: "completed" },
    { date: "Summer 2025", event: "Signed", status: "upcoming" },
    { date: "Sept 1, 2025", event: "Takes Effect", status: "upcoming" },
    { date: "Jan 1, 2026", event: "Enforcement Begins", status: "upcoming" }
  ];

  const billSections = [
    {
      title: "High-Risk AI Systems",
      content: "AI systems that significantly impact hiring, healthcare, finance, housing, or education decisions are subject to enhanced requirements including impact assessments and ongoing monitoring."
    },
    {
      title: "Developer & Deployer Responsibilities", 
      content: "Developers must conduct risk assessments and provide documentation. Deployers must implement appropriate governance measures and ensure transparency to users."
    },
    {
      title: "Prohibited Practices",
      content: "Certain AI applications are banned outright, including those that manipulate human behavior in harmful ways or use subliminal techniques beyond user awareness."
    },
    {
      title: "Generative AI Requirements",
      content: "Foundation models and generative AI systems must meet specific transparency requirements and provide clear disclosures about their capabilities and limitations."
    },
    {
      title: "State Agency AI Disclosures",
      content: "Government agencies using AI systems must provide public disclosure and maintain transparency about automated decision-making processes affecting citizens."
    },
    {
      title: "Penalties & Enforcement",
      content: "Violations can result in significant fines and enforcement actions. The Texas Attorney General's office will oversee compliance and investigate violations."
    },
    {
      title: "Exemptions & Innovation Sandbox",
      content: "Certain research activities and small-scale deployments may qualify for exemptions. An innovation sandbox program allows controlled testing of new AI technologies."
    }
  ];

  const faqItems = [
    {
      question: "What is TRAIGA?",
      answer: "TRAIGA is Texas's comprehensive AI regulation bill, modeled after the EU AI Act. It establishes requirements for AI developers, deployers, and distributors operating in or affecting Texas residents."
    },
    {
      question: "When does TRAIGA take effect?", 
      answer: "The bill is expected to take effect on September 1, 2025, with enforcement beginning January 1, 2026."
    },
    {
      question: "Who does TRAIGA apply to?",
      answer: "TRAIGA applies to any entity that develops, deploys, or distributes AI systems that impact Texas residents, regardless of where the company is located."
    },
    {
      question: "What are high-risk AI systems under TRAIGA?",
      answer: "High-risk AI systems are those used in critical domains like hiring, healthcare, finance, housing, and education that could significantly impact individuals' rights or opportunities."
    },
    {
      question: "What documentation is required?",
      answer: "Developers must maintain technical documentation, risk assessments, and compliance records. Deployers must document their governance processes and impact assessments."
    },
    {
      question: "Are there penalties for non-compliance?",
      answer: "Yes, TRAIGA includes significant penalties for violations, including fines and potential enforcement actions by the Texas Attorney General's office."
    },
    {
      question: "How do I know if my AI system is covered?",
      answer: "Use our TRAIGA Readiness Assessment to determine if your AI systems fall under the law's scope and what compliance steps you may need to take."
    },
    {
      question: "What about AI used for research?",
      answer: "Certain research activities may qualify for exemptions, particularly those conducted by academic institutions or in controlled research environments."
    },
    {
      question: "How does this compare to other AI regulations?",
      answer: "TRAIGA is the first U.S. state law modeled after the EU AI Act, making Texas a pioneer in comprehensive AI regulation at the state level."
    },
    {
      question: "What is the innovation sandbox?",
      answer: "The innovation sandbox allows companies to test new AI technologies under relaxed regulatory requirements for a limited time and scope."
    },
    {
      question: "Do I need to register my AI system?",
      answer: "High-risk AI systems may require registration and ongoing reporting. The specific requirements depend on your system's classification and use case."
    },
    {
      question: "How can WhitegloveAI help with TRAIGA compliance?",
      answer: "WhitegloveAI offers expert-led workshops, virtual CAIO services, compliance assessments, and tailored strategies to help you navigate TRAIGA requirements effectively."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-red-900 text-white font-sora">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Texas Flag Inspired Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-white/10 to-red-900 opacity-30"></div>
          <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-900 opacity-40"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-red-900 opacity-40"></div>
          {/* Subtle stars pattern */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.5, 1, 0.5] }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-blue-200 bg-clip-text text-transparent"
          >
            The TRAIGA Triage Center
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Your command center for navigating Texas's landmark AI law
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button
              onClick={scrollToAssessment}
              size="lg"
              className="bg-red-700 hover:bg-red-600 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Readiness Assessment
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What is TRAIGA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 animate-on-scroll"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What is TRAIGA?
          </motion.h2>

          {/* Timeline */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center text-center animate-on-scroll"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    item.status === 'completed' ? 'bg-green-600' : 'bg-blue-600'
                  }`}>
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.event}</h3>
                  <p className="text-sm text-gray-300">{item.date}</p>
                  {index < timelineItems.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-20 h-0.5 bg-blue-400"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "First U.S. state bill modeled after EU AI Act",
              "Covers developers, deployers, and distributors", 
              "Applies to any AI impacting Texas residents"
            ].map((point, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-blue-900/30 rounded-lg animate-on-scroll"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <p className="text-lg">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Explainer Section */}
      <section className="py-20 bg-red-900/20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 animate-on-scroll"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            How TRAIGA Works
          </motion.h2>

          <div className="relative">
            <motion.div
              className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 animate-on-scroll"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <h3 className="text-xl font-semibold">Developer</h3>
              </div>
              
              <div className="flex-1 mx-8">
                <div className="h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded"></div>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold">AI Tool</h3>
              </div>
              
              <div className="flex-1 mx-8">
                <div className="h-1 bg-gradient-to-r from-purple-600 to-red-600 rounded"></div>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold">Texas User</h3>
              </div>
            </motion.div>

            <motion.div
              className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-4 animate-on-scroll"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {["Hiring", "Healthcare", "Finance", "Housing", "Education"].map((domain, index) => (
                <div key={index} className="text-center p-4 bg-red-700/30 rounded-lg">
                  <h4 className="font-semibold text-lg">{domain}</h4>
                  <p className="text-sm text-gray-300 mt-2">High-Risk Domain</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bill Breakdown Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 animate-on-scroll"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What's in the Bill?
          </motion.h2>

          <motion.div
            className="animate-on-scroll"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {billSections.map((section, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-blue-700/30 rounded-lg">
                  <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold hover:text-blue-300">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-300">
                    {section.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-blue-900/20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 animate-on-scroll"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Resources
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Downloads */}
            <motion.div
              className="space-y-6 animate-on-scroll"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-800/50 border-blue-700/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Download className="mr-2" />
                    Reader-Friendly Version of the Bill
                  </h3>
                  <p className="text-gray-300 mb-4">Download our simplified breakdown of TRAIGA's key provisions.</p>
                  <Button className="bg-blue-600 hover:bg-blue-500">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-gray-600/30 opacity-60">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">TRAIGA Implementation Checklist</h3>
                  <p className="text-gray-400 mb-4">Comprehensive checklist for compliance preparation.</p>
                  <Button disabled className="bg-gray-600">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-gray-600/30 opacity-60">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">High-Risk AI System Tracker</h3>
                  <p className="text-gray-400 mb-4">Interactive tool to classify your AI systems.</p>
                  <Button disabled className="bg-gray-600">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - AI Agent */}
            <motion.div
              className="animate-on-scroll"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-800/50 border-red-700/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">TRAIGA AI Agent</h3>
                  <p className="text-gray-300 mb-4">Chat with our AI agent for instant answers about TRAIGA compliance.</p>
                  <div className="bg-white rounded-lg overflow-hidden">
                    <iframe
                      src="https://app.thinkstack.ai/bot/index.html?chatbot_id=6848c90420c59f9de50e9272&type=inline"
                      frameBorder="0"
                      width="100%"
                      height="500"
                      style={{ minHeight: '500px' }}
                      title="TRAIGA AI Agent"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Readiness Assessment Section */}
      <section id="readiness-assessment" className="py-20 bg-red-900/20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-8 animate-on-scroll"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Start Your TRAIGA Readiness Assessment
          </motion.h2>
          
          <motion.p
            className="text-xl text-center text-gray-300 mb-16 animate-on-scroll"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Take our interactive Typeform to gauge whether you fall under TRAIGA's scope and where you may need to take action.
          </motion.p>

          <motion.div
            className="bg-white rounded-lg overflow-hidden shadow-2xl animate-on-scroll"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div data-tf-live="01JXE4ZG1X8FP317J0M84716RA" style={{ minHeight: '600px' }}></div>
          </motion.div>
        </div>
      </section>

      {/* Engage WhitegloveAI Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 animate-on-scroll"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Need Help Navigating TRAIGA?
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 mb-12 animate-on-scroll"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            WhitegloveAI offers expert-led workshops, virtual CAIO services, and tailored compliance strategies. Let our team help you turn this regulatory shift into a growth opportunity.
          </motion.p>

          <motion.div
            className="animate-on-scroll"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="bg-red-700 hover:bg-red-600 text-white px-8 py-4 text-lg rounded-lg">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-blue-900/20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 animate-on-scroll"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            className="animate-on-scroll"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border border-red-700/30 rounded-lg">
                  <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold hover:text-red-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TRAIGA;
