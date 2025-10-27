import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowDown, 
  Clock, 
  RefreshCw, 
  Network, 
  Users, 
  MessageSquare, 
  Phone, 
  Video, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Shield,
  TrendingUp,
  Calendar,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import '@/styles/animations.css';
import SEO from '@/components/SEO';

const CommunicationsAI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
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

    document.querySelectorAll('.heading-highlight-scroll').forEach(heading => {
      observer.observe(heading);
    });

    const animateSections = document.querySelectorAll('.animate-section, .animate-on-scroll');
    animateSections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <SEO
        title="CommunicationsAI - Unified AI Communications Platform | WhitegloveAI"
        description="Unify every conversation and automate every interaction with CommunicationsAI, powered by Lucidis. Transform scattered communications into intelligent, automated streams."
        canonicalPath="/communicationsai"
      />
      
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
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

        <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-8 md:mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-secondary/10 p-6 rounded-full border-2 border-secondary/30">
                <MessageSquare className="h-16 w-16 text-secondary" />
              </div>
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
            >
              Unify Every Conversation, Automate Every Interaction
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 max-w-4xl mx-auto px-3 sm:px-0 text-shadow-sm"
            >
              Welcome to CommunicationsAI, the central nervous system for your organization's outreach. Powered by our proprietary Lucidis platform, we transform scattered citizen and customer interactions into a single, intelligent stream of communication.
            </motion.p>

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
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 heading-highlight-scroll">
              Your Team Is Buried. Your Citizens Are Waiting.
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Traditional contact centers and siloed departments create friction. Citizens wait for simple answers, while your staff spends up to 80% of their time on repetitive questions. This leads to long wait times, fragmented information, and employee burnout.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-secondary/50 transition-colors"
              >
                <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                  <problem.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{problem.title}</h3>
                <p className="text-gray-400">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section - Powered by Lucidis */}
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
                SOC 2 Type II Certified
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 heading-highlight-scroll">
              The Lucidis Platform: Your AI-Powered Communications Engine
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-4">
              CommunicationsAI isn't a collection of separate tools; it's a unified service built on Lucidis, our SOC 2 Type II certified AI platform designed for the security and scale that government agencies and businesses demand.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Lucidis provides a single, persistent memory for every interaction, ensuring context is never lost.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={service.link}
                className="group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card p-8 rounded-lg border border-secondary/30 hover:border-secondary/70 transition-all hover:scale-105 h-full"
                >
                  <div className="flex items-start mb-6">
                    <div className="bg-secondary/10 p-4 rounded-lg mr-4">
                      <service.icon className="h-10 w-10 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-secondary transition-colors">{service.title}</h3>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-secondary group-hover:translate-x-2 transition-transform">
                    <span className="font-medium">Explore {service.title}</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 heading-highlight-scroll">
              The Perfect Partnership: AI Efficiency, Human Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              CommunicationsAI creates a seamless collaboration between AI automation and human intelligence, ensuring every interaction receives the right level of attention.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {workflow.map((step, index) => (
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
                  <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-secondary/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 heading-highlight-scroll">
              Government-Ready, Business-Proven
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Real results from real deployments across government agencies and growing businesses.
            </p>
          </motion.div>
          
          {/* Key Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg border border-secondary/30 text-center"
              >
                <div className="bg-secondary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="h-8 w-8 text-secondary" />
                </div>
                <p className="text-3xl font-bold text-secondary mb-2">{metric.value}</p>
                <p className="text-gray-300">{metric.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-secondary/10 to-background/50 p-10 rounded-lg border border-secondary/30 max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-6">
              <div className="bg-secondary/20 p-4 rounded-lg mr-4">
                <Phone className="h-10 w-10 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">City of Frisco</h3>
                <p className="text-secondary">VoiceAI for Traffic Management</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-secondary/10 rounded-lg p-6">
                <p className="text-4xl font-bold text-secondary mb-2">15-20 Hours</p>
                <p className="text-gray-300">Saved per week in staff time</p>
              </div>
              <div className="bg-secondary/10 rounded-lg p-6">
                <p className="text-4xl font-bold text-secondary mb-2">24/7</p>
                <p className="text-gray-300">Automated hotline coverage</p>
              </div>
            </div>
            
            <blockquote className="border-l-4 border-secondary pl-6 italic text-gray-300 mb-4">
              "WhitegloveAI's VoiceAI solution has transformed how we handle traffic inquiries. The time savings allow our team to focus on more complex citizen needs."
            </blockquote>
            <p className="text-sm text-gray-400">— Melissa Kraft, CIO, City of Frisco</p>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Ready to Unify Your Communications?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              See how CommunicationsAI can transform your citizen and customer interactions. Schedule a personalized demo tailored to your organization's needs.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
                Request a Personalized Demo
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const problems = [
  {
    icon: Clock,
    title: "Long Wait Times",
    description: "Citizens frustrated with lengthy hold times and delayed responses to simple questions."
  },
  {
    icon: RefreshCw,
    title: "Repetitive Work",
    description: "Staff spending 80% of time answering the same questions repeatedly."
  },
  {
    icon: Network,
    title: "Fragmented Systems",
    description: "Siloed departments and disconnected tools create inconsistent experiences."
  },
  {
    icon: Users,
    title: "Staff Burnout",
    description: "High-volume, low-complexity work leading to employee exhaustion and turnover."
  }
];

const services = [
  {
    icon: MessageSquare,
    title: "TextAI",
    description: "Engage citizens through intelligent website chat, SMS, and email automation.",
    link: "/communicationsai/textai"
  },
  {
    icon: Phone,
    title: "VoiceAI",
    description: "Deploy sophisticated voice assistants that handle calls 24/7 with natural conversation.",
    link: "/communicationsai/voiceai"
  },
  {
    icon: Video,
    title: "AvatarAI",
    description: "Create face-to-face digital service experiences with lifelike streaming avatars.",
    link: "/communicationsai/avatarai"
  },
  {
    icon: Zap,
    title: "AutomateAI",
    description: "Build intelligent workflows that automate backend processes and integrate with your systems.",
    link: "/communicationsai/automateai"
  }
];

const workflow = [
  {
    icon: Zap,
    title: "AI handles high-volume routine work 24/7",
    description: "Automated responses to common questions, instant information retrieval, and proactive outreach—all happening without human intervention."
  },
  {
    icon: Users,
    title: "Intelligent escalation to humans for complex cases",
    description: "When AI detects complexity or emotional nuance, it seamlessly transfers to a human agent with full context."
  },
  {
    icon: Network,
    title: "Unified inbox for both AI and human agents",
    description: "All interactions flow through a single system, ensuring continuity and preventing duplicated effort."
  }
];

const metrics = [
  {
    icon: TrendingUp,
    value: "70-90%",
    label: "Faster Response Times"
  },
  {
    icon: CheckCircle2,
    value: "60-80%",
    label: "Of Routine Requests Automated"
  },
  {
    icon: Calendar,
    value: "4-6 Weeks",
    label: "To Go Live"
  },
  {
    icon: Award,
    value: "SOC 2 Type II",
    label: "Compliant"
  }
];

export default CommunicationsAI;
