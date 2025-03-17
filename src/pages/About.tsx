import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Sparkles, Brain, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - fixed styling and adjusted spacing/alignment */}
      <section className="relative pt-28 min-h-[85vh] flex items-start px-4 md:px-12 lg:px-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#9b87f5]/10 to-black/90" />
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 container mx-auto max-w-6xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#9b87f5] heading-highlight">
              About
            </h1>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-10">
              <span className="text-white">Mission & </span>
              <span className="text-[#9b87f5]">Vision</span>
            </h2>
            
            <div className="mb-16 max-w-3xl">
              <h3 className="text-xl font-medium mb-6 text-gray-300">Mission</h3>
              <p className="text-gray-300 text-lg">
                To lead secure and responsible AI adoption, reshaping organizational
                efficiency and digital transformations.
              </p>
            </div>
            
            <div className="max-w-3xl">
              <h3 className="text-xl font-medium mb-6 text-gray-300">Vision</h3>
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                To be the <span className="text-[#9b87f5]">premier partner</span> for
                <br className="hidden sm:block" />
                organizations embracing AI with
                <br className="hidden sm:block" />
                <span className="text-[#9b87f5]">confidence</span> and <span className="text-[#9b87f5]">expertise</span>.
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1, 
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1
            }}
            className="animate-bounce"
          >
            <a 
              href="#mission"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#9b87f5]/20 border border-[#9b87f5]/30 hover:bg-[#9b87f5]/30 transition-all duration-300"
            >
              <ArrowRight className="h-5 w-5 rotate-90" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-black" id="mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-12"
          >
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#9b87f5]">Our Mission</h2>
                <p className="text-gray-300 text-lg">
                  To lead secure and responsible AI adoption, reshaping organizational
                  efficiency and digital transformations.
                </p>
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#9b87f5]">Our Vision</h2>
                <p className="text-gray-300 text-lg">
                  To be the premier partner for organizations embracing AI with
                  confidence and expertise.
                </p>
              </div>
            </div>

            <div className="relative h-full min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Our Mission and Vision"
                className="rounded-lg shadow-2xl w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#9b87f5]"
          >
            Our Core Values
          </motion.h2>
          <motion.div
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                className="group p-6 rounded-xl bg-gradient-to-br from-[#9b87f5]/10 to-transparent border border-[#9b87f5]/20 hover:border-[#9b87f5]/40 hover:shadow-[0_0_15px_rgba(155,135,245,0.15)] transition-all duration-300"
              >
                <value.icon className="h-8 w-8 text-[#9b87f5] mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold mb-16 text-center"
          >
            Company Overview
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold mb-2 text-[#9b87f5]">{stat.value}</p>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team - Enhanced with better animation and hover effects */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-300">Guided by experience, driven by innovation</p>
          </motion.div>

          <motion.div
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div 
                key={index} 
                variants={itemAnimation}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-[#111111] p-8 rounded-lg w-full border border-[#9b87f5]/10 hover:border-[#9b87f5]/30 hover:shadow-[0_0_20px_rgba(155,135,245,0.1)] transition-all duration-300"
              >
                <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">{member.name}</h3>
                <p className="text-[#9b87f5] mb-4 text-center font-medium">{member.role}</p>
                <p className="text-gray-300 text-center">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA - Enhanced with better animation */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#9b87f5]/10 to-transparent border border-[#9b87f5]/20 rounded-xl p-10 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Development Process?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with Lovable AI to discover how our AI-powered editor can revolutionize your web application development.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-6 bg-[#9b87f5] hover:bg-[#9b87f5]/90 hover:shadow-[0_0_15px_rgba(155,135,245,0.4)] transition-all duration-300">
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const coreValues = [
  {
    title: "User-First Approach",
    description: "Every decision is made with our users' success and satisfaction in mind. We prioritize understanding and meeting their unique development needs.",
    icon: Heart
  },
  {
    title: "Accessibility & Trust",
    description: "We maintain the highest standards of accessibility and trust in every interaction, ensuring our platform is available to all skill levels.",
    icon: Users
  },
  {
    title: "Innovation Leadership",
    description: "We stay at the forefront of AI technology, continuously innovating to deliver cutting-edge solutions that drive real development value.",
    icon: Sparkles
  },
  {
    title: "Ethical AI Practice",
    description: "We ensure responsible AI development and deployment, maintaining transparency and fairness in all our AI implementations.",
    icon: Brain
  },
  {
    title: "Security First",
    description: "We prioritize the security of our platform and your data, implementing industry-leading protection measures at every level.",
    icon: Shield
  },
  {
    title: "Goal-Oriented Results",
    description: "We focus on delivering measurable outcomes that help you achieve your development goals efficiently and effectively.",
    icon: Target
  }
];

const stats = [
  {
    value: "100K+",
    label: "Active Users",
  },
  {
    value: "99%",
    label: "User Satisfaction",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
  {
    value: "5★",
    label: "Average Rating",
  },
];

const team = [
  {
    name: "Sofia Rodriguez",
    role: "CEO & Founder",
    description: "Leading innovation in AI development with over 15 years of experience in machine learning and enterprise technology.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    description: "Expert in AI systems architecture with a focus on creating intuitive developer experiences.",
    image: "https://images.unsplash.com/photo-1507003211169-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Dr. Aisha Johnson",
    role: "AI Research Director",
    description: "Specializing in natural language processing and machine learning algorithms for coding assistance.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
  },
  {
    name: "David Park",
    role: "Head of Product",
    description: "Leading product strategy with a focus on user experience and accessibility in AI tools.",
    image: "https://images.unsplash.com/photo-1500648741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Emma Wilson",
    role: "UX Design Lead",
    description: "Creating intuitive interfaces that make complex AI functionality accessible to all users.",
    image: "https://images.unsplash.com/photo-1534528741775-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  },
  {
    name: "James Taylor",
    role: "Chief Marketing Officer",
    description: "Driving strategic growth and market presence through innovative approaches to AI tool marketing.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
];

export default About;

