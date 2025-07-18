import { motion } from "framer-motion";
import { Zap, Shield, Truck, CheckCircle, TrendingUp, Clock } from "lucide-react";

const WhyWhitegloveAI = () => {
  const features = [
    {
      title: "Fast Launch",
      description: "Onboarded in under one week",
      icon: Zap,
      color: "from-green-500/20 to-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      title: "vCAIO Oversight",
      description: "Built-in governance and executive reporting",
      icon: Shield,
      color: "from-blue-500/20 to-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      title: "End-to-End Delivery",
      description: "No operational burden on your team",
      icon: Truck,
      color: "from-purple-500/20 to-purple-500/10",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Compliance-Ready",
      description: "Built to align with ISO 42001, NIST AI RMF, and TRAIGA",
      icon: CheckCircle,
      color: "from-orange-500/20 to-orange-500/10",
      borderColor: "border-orange-500/30"
    },
    {
      title: "Real Results",
      description: "Proven performance across public and enterprise sectors",
      icon: TrendingUp,
      color: "from-red-500/20 to-red-500/10",
      borderColor: "border-red-500/30"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring for mission-critical events",
      icon: Clock,
      color: "from-teal-500/20 to-teal-500/10",
      borderColor: "border-teal-500/30"
    }
  ];

  return (
    <section className="py-20 bg-secondary/10 px-4 sm:px-6 lg:px-8" id="why-whiteglove">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary heading-highlight-scroll">
            Why WhitegloveAI?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Translate AI is delivered using our secure, responsible, and standards-aligned AI Adoption & 
            Management Framework (AI-AMF). That means:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-8 rounded-xl bg-gradient-to-br ${feature.color} backdrop-blur-sm border ${feature.borderColor} hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-background/30 rounded-full mr-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWhitegloveAI;