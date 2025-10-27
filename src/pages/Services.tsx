import { useLayoutEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Lightbulb, 
  MessageSquare, 
  Languages, 
  GraduationCap, 
  Bot 
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Lightbulb,
      title: "Consulting",
      description: "Strategic AI advisory and implementation support",
      link: "/consulting",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: MessageSquare,
      title: "CommunicationsAI",
      description: "Unified AI communication management powered by Lucidis",
      link: "/communicationsai",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Languages,
      title: "TranslateAI",
      description: "AI-powered live translation services",
      link: "/translateai",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: GraduationCap,
      title: "Training",
      description: "Expert-led AI training and certification programs",
      link: "/training",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Bot,
      title: "EmbodiedAI",
      description: "Integration and management of embodied AI robotic systems",
      link: "/embodiedai",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
            >
              Comprehensive AI Solutions for Every Need
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto px-3 sm:px-0"
            >
              From strategic consulting to managed communication platforms, we provide end-to-end AI services for government agencies and growing businesses.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={service.link}>
                    <div className="group bg-background p-8 rounded-xl border border-gray-800 hover:border-secondary/50 transition-all duration-300 h-full flex flex-col hover:transform hover:scale-105">
                      <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${service.gradient} mb-6 self-start`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-secondary transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-6 flex-grow">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center text-secondary group-hover:text-secondary/80 transition-colors">
                        <span className="font-semibold">Learn More</span>
                        <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose WhitegloveAI Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
          >
            Why Choose WhitegloveAI?
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-xl border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Government-Ready</h3>
              <p className="text-gray-400">
                SOC 2 Type II certified with deep understanding of public sector compliance requirements. TXShare-approved vendor for streamlined procurement.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card p-8 rounded-xl border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Proven Expertise</h3>
              <p className="text-gray-400">
                Trusted by leading Texas municipalities and businesses. Our team brings years of AI implementation experience across diverse sectors.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-8 rounded-xl border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">End-to-End Support</h3>
              <p className="text-gray-400">
                From strategy to implementation to ongoing management, we partner with you throughout your entire AI journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
          >
            Let's Discuss Your AI Needs
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Ready to transform your organization with AI? Schedule a consultation to explore how our services can help you achieve your goals.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
