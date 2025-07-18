import { motion } from "framer-motion";
import { CheckCircle, Settings, Shield, BarChart3, FileCheck, Cog } from "lucide-react";

const ManagedService = () => {
  const services = [
    {
      title: "Session setup and QA",
      icon: Settings
    },
    {
      title: "Custom glossary configuration",
      icon: FileCheck
    },
    {
      title: "Platform integration and access control",
      icon: Shield
    },
    {
      title: "Real-time monitoring during live sessions",
      icon: BarChart3
    },
    {
      title: "Post-event transcript delivery and analytics",
      icon: CheckCircle
    },
    {
      title: "Ongoing governance and improvement via our AI-AMF framework",
      icon: Cog
    }
  ];

  return (
    <section className="py-20 bg-background px-4 sm:px-6 lg:px-8" id="managed">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary heading-highlight-scroll">
            Fully Managed by WhitegloveAI
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Translate AI is not a self-serve tool. It's a fully managed service delivered by WhitegloveAI's 
            expert operations team. We handle:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center p-6 bg-card/50 rounded-lg border border-border/50 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="p-2 bg-primary/10 rounded-lg mr-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground font-medium">{service.title}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-primary/5 rounded-xl p-8 border border-primary/20"
        >
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Clients simply tell us the who, what, and when—we take care of the rest.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ManagedService;