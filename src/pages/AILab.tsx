import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowDown, 
  Clock, 
  Shield, 
  Lock,
  TrendingUp,
  Zap,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Rocket,
  Target,
  Users,
  Calendar,
  Settings,
  MessageSquare,
  FileSearch,
  Eye,
  Brain,
  Mic,
  Network
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from '@/components/SEO';

const AILab = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const challenges = [
    {
      icon: Clock,
      title: "Long Development Cycles",
      description: "Traditional development takes 6-12 months"
    },
    {
      icon: Brain,
      title: "Technical Complexity",
      description: "AI/ML expertise is scarce and expensive"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Government and regulated industries need strict standards from day one"
    },
    {
      icon: TrendingUp,
      title: "Validation Risk",
      description: "Investing heavily before knowing if the solution will work"
    }
  ];

  const services = [
    {
      icon: Rocket,
      title: "Rapid Prototyping & MVP Development",
      subtitle: "Problem-Led Prototyping",
      description: "We don't start with technology; we start with your problem. Our team works with you to identify the real customer challenges, define success metrics, and build a secure minimum viable product (MVP) in weeks—not months.",
      features: [
        "Functional MVP in 4-6 weeks",
        "User testing and feedback",
        "Government-grade security from day one",
        "Clear roadmap for scaling"
      ]
    },
    {
      icon: Target,
      title: "Full-Lifecycle Custom Development",
      subtitle: "From Ideation to Launch",
      description: "The AI Lab provides turnkey AI solutions. We handle everything from initial discovery and architecture design to development, testing, deployment, and ongoing support.",
      features: [
        "End-to-end project management",
        "Custom AI models and integrations",
        "SOC 2 Type II compliant infrastructure",
        "Post-launch support"
      ]
    },
    {
      icon: Settings,
      title: "Technical Consultation & Integration",
      subtitle: "Expert Guidance for Complex Challenges",
      description: "Sometimes you need expert guidance, not a full build. Our technical consultants provide strategic advice on AI architecture, model selection, integration strategies, and performance optimization.",
      features: [
        "AI architecture design",
        "Model selection guidance",
        "API and system integration support",
        "Performance optimization"
      ]
    }
  ];

  const processSteps = [
    {
      phase: "Week 1-2",
      title: "Discovery & Design",
      icon: Lightbulb,
      description: "Deep dive into your problem, stakeholder interviews, and solution architecture"
    },
    {
      phase: "Week 3-4",
      title: "Rapid Development",
      icon: Zap,
      description: "Agile sprints, daily standups, and continuous client feedback"
    },
    {
      phase: "Week 5-6",
      title: "Launch & Handoff",
      icon: Rocket,
      description: "Testing, deployment, training, and documentation delivery"
    }
  ];

  const differentiators = [
    {
      icon: Lock,
      title: "Government-Grade Security from Day One",
      description: "All AI Lab projects are built on SOC 2 Type II certified infrastructure. We don't bolt on security later—it's baked into every line of code from the start."
    },
    {
      icon: Brain,
      title: "Proven AI Expertise",
      description: "Our team has deployed AI solutions for government agencies and Fortune 500 companies. We've solved problems in natural language processing, computer vision, predictive analytics, and more."
    },
    {
      icon: Network,
      title: "Vendor-Agnostic Approach",
      description: "We're not locked into one AI provider. We evaluate OpenAI, Anthropic, Google, and open-source models to find the best fit for your use case and budget."
    }
  ];

  const useCases = [
    { icon: MessageSquare, title: "Custom AI Agents & Chatbots", description: "Intelligent conversational interfaces" },
    { icon: TrendingUp, title: "Predictive Analytics & Forecasting", description: "Data-driven insights and predictions" },
    { icon: FileSearch, title: "Document Processing & Automation", description: "Intelligent document analysis" },
    { icon: Eye, title: "Computer Vision Applications", description: "Image and video AI solutions" },
    { icon: Mic, title: "Voice & Speech Applications", description: "Audio processing and synthesis" },
    { icon: Network, title: "Integration & Orchestration", description: "Connect AI across your systems" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <SEO
        title="The AI Lab - Custom AI Development in 4 Weeks | WhitegloveAI"
        description="Transform your AI vision into reality with The AI Lab. Custom AI prototypes and production-ready solutions built with government-grade security in as fast as 4 weeks."
        canonicalPath="/ailab"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-gradient-to-br from-secondary/5 via-background to-primary/5">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--secondary)) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center mb-8 md:mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-secondary/10 p-6 rounded-full border-2 border-secondary/30">
                <Brain className="h-16 w-16 text-secondary" />
              </div>
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
            >
              The AI Lab: Where Ideas Become Intelligent Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 max-w-4xl mx-auto px-3 sm:px-0"
            >
              We can help you prototype your next AI application to life, as fast as 4 weeks. From initial concept to production-ready deployment, The AI Lab delivers custom AI solutions built with government-grade security, customer validation, and scalable architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-lg">
                  Start Your AI Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 px-8 py-4 text-lg rounded-lg">
                  Schedule a Discovery Call
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
              initial={{ y: 0, opacity: 0.5 }}
              animate={{ y: 10, opacity: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            >
              <a href="#problem-section" aria-label="Scroll to learn more">
                <ArrowDown className="h-6 w-6 md:h-8 md:w-8 text-[#7021EE]" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem-section" className="py-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Your Vision Deserves More Than Off-the-Shelf Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Every organization has unique challenges that generic AI tools can't solve. You have a specific use case, a custom workflow, or an innovative idea that requires purpose-built AI. But building custom AI solutions is complex, time-consuming, and risky without the right expertise.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors"
              >
                <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                  <challenge.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{challenge.title}</h3>
                <p className="text-gray-400">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section - Core Services */}
      <section className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <div className="inline-block bg-secondary/10 border border-secondary/30 rounded-lg px-6 py-2 mb-6">
              <p className="text-secondary font-semibold flex items-center gap-2">
                <Shield className="h-5 w-5" />
                SOC 2 Type II Certified Infrastructure
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              The AI Lab: Your End-to-End Custom AI Partner
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              The AI Lab is WhitegloveAI's dedicated custom development service. We combine deep AI expertise with agile development practices to deliver tailored solutions that solve your specific challenges.
            </p>
          </motion.div>
          
          <div className="space-y-8 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 rounded-lg border border-secondary/30"
              >
                <div className="flex items-start mb-6">
                  <div className="bg-secondary/10 p-4 rounded-lg mr-4">
                    <service.icon className="h-10 w-10 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2 text-white">{service.title}</h3>
                    <p className="text-secondary font-medium mb-3">{service.subtitle}</p>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="bg-background/50 p-6 rounded-lg border border-gray-800">
                      <h4 className="text-lg font-semibold mb-4 text-white">What You Get:</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Built for Speed, Designed for Scale
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our proven process delivers working AI solutions in weeks, not months
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-secondary/10 to-background/50 p-8 rounded-lg border border-secondary/30">
                  <div className="absolute -top-4 -left-4 bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                    <step.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <p className="text-secondary font-semibold mb-2">{step.phase}</p>
                  <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-secondary/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose The AI Lab Section */}
      <section className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Why Choose The AI Lab?
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 rounded-lg border border-secondary/30"
              >
                <div className="bg-secondary/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  <item.icon className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              What Can The AI Lab Build?
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-all hover:scale-105"
              >
                <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                  <useCase.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{useCase.title}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
              </motion.div>
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
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Custom AI Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's discuss your project. Schedule a free discovery call to explore how The AI Lab can turn your AI vision into reality.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Your Discovery Call
                <Calendar className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AILab;
