import { motion } from "framer-motion";
import { DollarSign, TrendingDown, GraduationCap } from "lucide-react";

const PricingROI = () => {
  const pricingFeatures = [
    {
      title: "Transparent Pricing",
      description: "Usage-based or annual flat-rate models available",
      icon: DollarSign,
      color: "from-green-500/20 to-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      title: "Discount Tiers",
      description: "Special pricing for nonprofits, education, and large events",
      icon: GraduationCap,
      color: "from-blue-500/20 to-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Significant Savings",
      description: "Reduce interpretation and captioning costs by more than 50% without compromising on quality or compliance",
      icon: TrendingDown,
      color: "from-purple-500/20 to-purple-500/10",
      borderColor: "border-purple-500/30"
    }
  ];

  return (
    <section className="py-20 bg-background px-4 sm:px-6 lg:px-8" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary heading-highlight-scroll">
            Pricing & ROI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible pricing models designed to deliver maximum value
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingFeatures.map((feature, index) => (
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

export default PricingROI;