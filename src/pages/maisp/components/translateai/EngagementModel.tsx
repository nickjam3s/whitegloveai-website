import { motion } from "framer-motion";
import { Play, Rocket, Building } from "lucide-react";

const EngagementModel = () => {
  const engagements = [
    {
      deliverable: "Live Demo",
      outcome: "Showcase TranslateAI in your existing platform (Zoom, Teams, or browser)",
      icon: Play,
      color: "from-green-500/20 to-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      deliverable: "Pilot Program",
      outcome: "One-time deployment with glossary management and transcript delivery",
      icon: Rocket,
      color: "from-blue-500/20 to-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      deliverable: "Full Rollout",
      outcome: "Annual contract with dedicated delivery team, usage monitoring, and full compliance documentation",
      icon: Building,
      color: "from-purple-500/20 to-purple-500/10",
      borderColor: "border-purple-500/30"
    }
  ];

  return (
    <section className="py-20 bg-background px-4 sm:px-6 lg:px-8" id="engagement">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary heading-highlight-scroll">
            Engagement Model
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible engagement options to meet your specific needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {engagements.map((engagement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`p-8 rounded-xl bg-gradient-to-br ${engagement.color} backdrop-blur-sm border ${engagement.borderColor} hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-background/30 rounded-full">
                  <engagement.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-foreground">
                {engagement.deliverable}
              </h3>
              <p className="text-muted-foreground text-center">{engagement.outcome}</p>
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
          <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Translate?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Whether you're reaching five regions or fifty, TranslateAI helps you do it responsibly, 
            efficiently, and without any extra effort on your team.
          </p>
          <p className="text-muted-foreground">
            Schedule your AI Launchpad Workshop today or book a managed pilot to get started.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EngagementModel;