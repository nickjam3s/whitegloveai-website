import { motion } from "framer-motion";
import { Shield, Award, Lock } from "lucide-react";

const SecurityCompliance = () => {
  const securityFeatures = [
    {
      title: "SOC 2 Type II Certified",
      description: "Enforced enterprise-grade controls",
      icon: Award,
      color: "from-green-500/20 to-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      title: "ADA-Compliant",
      description: "Accessible formats for all session types",
      icon: Shield,
      color: "from-blue-500/20 to-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Data Ownership Assured",
      description: "We do not retain or reuse your content under any circumstance",
      icon: Lock,
      color: "from-purple-500/20 to-purple-500/10",
      borderColor: "border-purple-500/30"
    }
  ];

  return (
    <section className="py-20 bg-secondary/10 px-4 sm:px-6 lg:px-8" id="security">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary heading-highlight-scroll">
            Security & Compliance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade security with full compliance assurance
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`p-8 rounded-xl bg-gradient-to-br ${feature.color} backdrop-blur-sm border ${feature.borderColor} hover:shadow-lg transition-all duration-300 text-center`}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-background/30 rounded-full">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;