import { motion } from "framer-motion";
import { Volume2, Captions, FileText, Users, BookOpen } from "lucide-react";

const CoreCapabilities = () => {
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

  const capabilities = [
    {
      title: "Real-Time Audio Translation",
      description: "Audiences hear your message in their language, spoken by high-quality AI voices, streamed instantly—without headsets or delays.",
      icon: Volume2,
      color: "from-primary/20 to-primary/10",
      borderColor: "border-primary/30"
    },
    {
      title: "Live Captions & Subtitles",
      description: "Subtitles appear in real time across any device or format, providing full accessibility for both in-person and virtual attendees.",
      icon: Captions,
      color: "from-primary/20 to-primary/10",
      borderColor: "border-primary/30"
    },
    {
      title: "Instant Transcripts & Summaries",
      description: "Receive a full transcript and AI-generated summary within minutes of your session ending—ideal for content reuse, compliance, and searchability.",
      icon: FileText,
      color: "from-primary/20 to-primary/10",
      borderColor: "border-primary/30"
    },
    {
      title: "Intelligent Speaker & Language Detection",
      description: "No setup required. Translate AI detects speaker changes and language shifts automatically for multilingual events.",
      icon: Users,
      color: "from-primary/20 to-primary/10",
      borderColor: "border-primary/30"
    },
    {
      title: "Managed Glossaries & Quality Controls",
      description: "Custom term lists and brand-safe glossaries are managed by our team to ensure every translation reflects your voice and values.",
      icon: BookOpen,
      color: "from-primary/20 to-primary/10",
      borderColor: "border-primary/30"
    }
  ];

  return (
    <section className="py-20 bg-secondary/10 px-4 sm:px-6 lg:px-8" id="capabilities">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary heading-highlight-scroll">
            Core Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive translation solutions for every communication need
          </p>
        </div>
        
        <motion.div 
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className={`p-8 rounded-xl bg-gradient-to-br ${capability.color} backdrop-blur-sm border ${capability.borderColor} hover:shadow-lg hover:shadow-primary/10 transition-all duration-300`}
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-background/30 rounded-full">
                  <capability.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-foreground">{capability.title}</h3>
              <p className="text-muted-foreground text-center">{capability.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreCapabilities;