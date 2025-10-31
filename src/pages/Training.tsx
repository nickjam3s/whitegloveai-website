import { useLayoutEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, BookOpen, Users, Award, Shield, CheckCircle, Clock, Globe } from "lucide-react";
import HB3512Banner from "@/components/HB3512Banner";
import aicertsPartnerBadge from "@/assets/aicerts-partner-badge.png";
import SEO from '@/components/SEO';

const Training = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courseCategories = [
    {
      title: "Foundational AI Literacy",
      courses: [
        { name: "AI+ Everyone", desc: "A practical introduction to AI concepts, ethics, and responsible use. Ideal for professionals beginning their AI journey or seeking to understand AI's impact on their role.", duration: "1 Day", level: "Foundation", format: "Self-Paced" },
        { name: "AI+ Ethics", desc: "Covers the principles of Responsible AI, bias detection, and transparency frameworks. Builds understanding of ethical risk across data, design, and deployment.", duration: "2 Days", level: "Intermediate", format: "Instructor-Led / Self-Paced" },
        { name: "AI+ Executive", desc: "For senior leaders and decision-makers. Learn how to align AI adoption with corporate strategy, governance, and regulatory frameworks.", duration: "2 Days", level: "Executive", format: "Workshop / Self-Paced" },
        { name: "AI+ Chief AI Officer", desc: "Prepares executives to lead enterprise AI governance. Covers AI policy development, vendor evaluation, and ISO/NIST compliance integration.", duration: "3 Days", level: "Executive", format: "Instructor-Led" },
      ]
    },
    {
      title: "Technical & Engineering Tracks",
      courses: [
        { name: "AI+ Developer", desc: "Hands-on course for building AI apps, integrating APIs, and deploying language models. Emphasizes production-grade development using Python and RAG pipelines.", duration: "5 Days", level: "Intermediate", format: "Instructor-Led / Self-Paced" },
        { name: "AI+ Engineer", desc: "Focuses on MLOps, system integration, and secure deployment of AI pipelines. Ideal for developers scaling models into enterprise environments.", duration: "5 Days", level: "Intermediate", format: "Instructor-Led" },
        { name: "AI+ Data", desc: "Explores data engineering, governance, and privacy-centric data preparation. Students learn how to build and maintain AI-ready datasets responsibly.", duration: "5 Days", level: "Intermediate", format: "Instructor-Led / Self-Paced" },
        { name: "AI+ Cloud", desc: "Covers AI infrastructure across Azure, AWS, and GCP. Learn to manage compute resources, model hosting, and API governance securely in multi-cloud environments.", duration: "5 Days", level: "Advanced", format: "Instructor-Led" },
        { name: "AI+ Architect", desc: "Teaches secure, scalable AI solution design. Includes architectural patterns, compliance-driven deployments, and lifecycle governance.", duration: "5 Days", level: "Advanced", format: "Instructor-Led" },
        { name: "AI+ Robotics", desc: "Practical robotics and sensor integration course, connecting AI models with physical automation systems.", duration: "3 Days", level: "Intermediate", format: "Instructor-Led" },
        { name: "AI+ Quantum", desc: "An exploration of quantum computing's role in accelerating AI. Covers fundamentals, use cases, and implications for encryption and optimization.", duration: "3 Days", level: "Advanced", format: "Instructor-Led" },
      ]
    },
    {
      title: "Applied AI & Business Domains",
      courses: [
        { name: "AI+ Marketing", desc: "How to leverage AI for content, personalization, and customer insights. Learn prompt-driven campaign design and ethical data use.", duration: "3 Days", level: "Intermediate", format: "Instructor-Led / Self-Paced" },
        { name: "AI+ HR", desc: "Transform HR operations with AI for recruiting, engagement, and performance analytics. Aligns HR strategy with Responsible AI standards.", duration: "3 Days", level: "Foundation", format: "Self-Paced" },
        { name: "AI+ Finance", desc: "Covers predictive analytics, automation, and AI-driven decision-making in finance. Learn model validation, reporting, and compliance workflows.", duration: "3 Days", level: "Intermediate", format: "Self-Paced" },
        { name: "AI+ Customer Service", desc: "Train and deploy conversational AI systems. Learn to build chat and voice agents that integrate with CRM platforms and boost resolution efficiency.", duration: "2 Days", level: "Foundation", format: "Instructor-Led" },
        { name: "AI+ Legal", desc: "Understand AI in the legal domain — contracts, compliance, and intellectual property. Covers AI use in eDiscovery and legal automation tools.", duration: "2 Days", level: "Intermediate", format: "Self-Paced" },
        { name: "AI+ Healthcare", desc: "Teaches safe AI use in healthcare environments. Covers patient privacy, diagnostics, and data interoperability within HIPAA-aligned frameworks.", duration: "3 Days", level: "Intermediate", format: "Instructor-Led" },
      ]
    },
    {
      title: "Security, Governance & Risk",
      courses: [
        { name: "AI+ Ethical Hacker", desc: "For cybersecurity professionals exploring adversarial AI. Learn red teaming, model exploitation, and defense techniques.", duration: "5 Days", level: "Advanced", format: "Instructor-Led" },
        { name: "AI+ Security (Levels 1–3)", desc: "A three-tier certification sequence on AI risk and defense. Level 1: Fundamentals; Level 2: Secure Design; Level 3: Governance & Compliance.", duration: "5 Days per Level", level: "Foundation → Advanced", format: "Instructor-Led / Self-Paced" },
        { name: "AI+ Security Compliance", desc: "Focuses on regulatory frameworks and audit readiness for AI deployments. Aligns with ISO 42001 and SOC 2.", duration: "3 Days", level: "Intermediate", format: "Instructor-Led" },
      ]
    },
    {
      title: "Creative & Emerging Roles",
      courses: [
        { name: "AI+ Design", desc: "Blends human-centered design, UX, and AI ethics. Learn to prototype intuitive, inclusive AI interfaces.", duration: "3 Days", level: "Intermediate", format: "Instructor-Led / Self-Paced" },
        { name: "AI+ Writer", desc: "Learn AI-assisted writing, editing, and storytelling tools for marketing, publishing, and professional communication.", duration: "2 Days", level: "Foundation", format: "Self-Paced" },
        { name: "AI+ Researcher", desc: "For analysts and data scientists conducting applied AI research. Covers model evaluation, benchmarking, and result reproducibility.", duration: "3 Days", level: "Advanced", format: "Self-Paced" },
        { name: "AI+ Product Manager", desc: "Learn to scope, design, and manage AI-powered products. Covers ideation, prototyping, and Responsible AI delivery frameworks.", duration: "3 Days", level: "Intermediate", format: "Instructor-Led" },
      ]
    },
    {
      title: "Blockchain & Digital Asset Tracks",
      courses: [
        { name: "Bitcoin+ Everyone", desc: "Learn the fundamentals of Bitcoin, decentralized ledgers, and their connection to modern AI economies.", duration: "1 Day", level: "Foundation", format: "Self-Paced" },
        { name: "Bitcoin+ Executive", desc: "For leaders exploring AI and blockchain convergence in finance and policy.", duration: "2 Days", level: "Executive", format: "Workshop" },
        { name: "Bitcoin+ Developer", desc: "Technical deep dive into blockchain application development and integration with AI systems.", duration: "3 Days", level: "Intermediate", format: "Instructor-Led" },
        { name: "Blockchain+ Executive", desc: "Strategic overview of enterprise blockchain implementation, governance, and AI interoperability.", duration: "2 Days", level: "Executive", format: "Instructor-Led" },
        { name: "Blockchain+ Developer", desc: "Covers blockchain development, smart contracts, and integration points with AI applications.", duration: "3 Days", level: "Intermediate", format: "Instructor-Led" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Training & Certification | AI+ by WhitegloveAI"
        description="Industry-leading AI training programs. From foundational to advanced AI certifications. Empower your team with AI+ training courses."
        canonicalPath="/training"
      />
      {/* Hero Section */}
      <section className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/20 to-black/90">
            <div className="absolute inset-0 backdrop-blur-sm" />
          </div>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#7021EE]/20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 flex justify-center"
            >
              <GraduationCap className="h-20 w-20 text-secondary" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
            >
              Build Internal AI Expertise
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto px-3 sm:px-0"
            >
              Empower your workforce with industry-leading AI training and certifications through WhitegloveAI, an authorized training partner of AICerts.
            </motion.p>
          </div>
        </div>
      </section>

      <HB3512Banner />

      {/* Introduction Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              WhitegloveAI offers comprehensive AI training programs powered by AICerts — the industry's most recognized AI certification body. Our courses are designed for both technical and non-technical audiences, ensuring your entire organization can harness the power of AI.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-background p-6 rounded-lg border border-gray-800"
              >
                <BookOpen className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Comprehensive Curriculum</h3>
                <p className="text-gray-400">
                  From fundamentals to advanced implementation, covering all aspects of AI adoption
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-background p-6 rounded-lg border border-gray-800"
              >
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Expert Instructors</h3>
                <p className="text-gray-400">
                  Learn from experienced AI practitioners with real-world implementation expertise
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-background p-6 rounded-lg border border-gray-800"
              >
                <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Industry-Recognized Certifications</h3>
                <p className="text-gray-400">
                  Earn AICerts credentials that validate your team's AI capabilities
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
          >
            Training Program Benefits
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card p-6 rounded-lg border border-gray-800"
            >
              <Shield className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Online Proctored Exams</h3>
              <p className="text-gray-400">
                Secure, remotely proctored certification exams ensure credential integrity
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card p-6 rounded-lg border border-gray-800"
            >
              <Award className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Digital Credentials</h3>
              <p className="text-gray-400">
                Earn verifiable digital badges and certificates you can share on LinkedIn
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-6 rounded-lg border border-gray-800"
            >
              <Clock className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Flexible Learning</h3>
              <p className="text-gray-400">
                Multiple formats available: self-paced, instructor-led, and workshop options
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card p-6 rounded-lg border border-gray-800"
            >
              <Globe className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Real-World Projects</h3>
              <p className="text-gray-400">
                Hands-on exercises with practical applications relevant to your industry
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
          >
            Our Training Programs
          </motion.h2>
          
          <p className="text-center text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
            Choose from our comprehensive catalog of AI certifications, all delivered by WhitegloveAI's expert trainers
          </p>

          <div className="space-y-16">
            {courseCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white border-l-4 border-secondary pl-4">
                  {category.title}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {category.courses.map((course, courseIndex) => (
                    <div
                      key={courseIndex}
                      className="bg-background p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-all"
                    >
                      <h4 className="text-xl font-semibold mb-3 text-white">{course.name}</h4>
                      <p className="text-gray-400 mb-4">{course.desc}</p>
                      <div className="flex flex-wrap gap-2 text-sm">
                        <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full">
                          {course.duration}
                        </span>
                        <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">
                          {course.level}
                        </span>
                        <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">
                          {course.format}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authorized Partner Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              WhitegloveAI is an Authorized Training Partner
            </h2>
            <div className="flex justify-center mb-8">
              <img 
                src={aicertsPartnerBadge} 
                alt="AICerts Authorized Training Partner" 
                className="max-w-md w-full h-auto"
              />
            </div>
            <p className="text-lg text-gray-300">
              As an official AICerts training partner, WhitegloveAI delivers world-class AI education with industry-recognized certifications that advance your team's capabilities and career growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
          >
            Ready to Upskill Your Team?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Contact us to learn more about our training programs and how we can customize them for your organization's specific needs.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                Contact Us for Training Options
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Training;