import { motion } from "framer-motion";
import { Zap, Link, Smartphone, Puzzle } from "lucide-react";

const SetupAccess = () => {
  const features = [
    {
      title: "Zero IT Required",
      description: "No downloads, apps, or integrations needed for attendees",
      icon: Zap,
      color: "from-green-500/20 to-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      title: "Link or QR Access",
      description: "Instant browser access from any device",
      icon: Link,
      color: "from-blue-500/20 to-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Speaker App Optional",
      description: "Presenters can optionally use our dedicated mobile app to manage speaking sessions",
      icon: Smartphone,
      color: "from-purple-500/20 to-purple-500/10",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Flexible Platform Integration",
      description: "Works with Zoom, Teams, WebEx, Cvent, Vimeo, and more",
      icon: Puzzle,
      color: "from-orange-500/20 to-orange-500/10",
      borderColor: "border-orange-500/30"
    }
  ];

  const useCases = [
    "Executive town halls",
    "Sales and partner events",
    "Government and civic meetings",
    "HR and compliance training",
    "International webinars and summits",
    "Product demos and launch events"
  ];

  return (
    <section className="py-20 bg-secondary/10 px-4 sm:px-6 lg:px-8" id="setup">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary heading-highlight-scroll">
            Setup & Access
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, seamless integration for any platform or event type
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
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

        <div className="bg-card/50 rounded-xl p-8 border border-border/50">
          <h3 className="text-2xl font-bold mb-6 text-center text-primary">
            Language & Event Coverage
          </h3>
          <p className="text-muted-foreground text-center mb-8">
            TranslateAI supports a wide range of use cases, including:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center p-4 bg-primary/5 rounded-lg"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-foreground">{useCase}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupAccess;