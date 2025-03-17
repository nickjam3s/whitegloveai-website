
import { motion } from "framer-motion";
import { Mic, Headphones, Star } from "lucide-react";

const ServiceOverview = () => {
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
    <section className="py-20 bg-[#111111] px-4 sm:px-6 lg:px-8" id="overview">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#9b87f5] heading-highlight-scroll">
            Service Overview
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Three Tiers for Every Podcasting Need
          </p>
        </div>
        
        <motion.div 
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Basic Plan",
              description: "Perfect for beginners and small businesses looking to establish their podcast presence with essential production support.",
              icon: Mic,
              color: "from-blue-500/20 to-blue-800/20",
              borderColor: "border-blue-500/30"
            },
            {
              title: "Professional Plan",
              description: "Comprehensive solution for established creators seeking to elevate production quality and expand their audience reach.",
              icon: Headphones,
              color: "from-[#9b87f5]/20 to-purple-800/20",
              borderColor: "border-[#9b87f5]/30"
            },
            {
              title: "Premium Plan",
              description: "All-inclusive package offering the highest level of support with additional sessions and exclusive features for serious podcasters.",
              icon: Star,
              color: "from-amber-500/20 to-amber-800/20",
              borderColor: "border-amber-500/30"
            }
          ].map((plan, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className={`p-8 rounded-xl bg-gradient-to-br ${plan.color} backdrop-blur-sm border ${plan.borderColor} hover:shadow-lg hover:shadow-[#9b87f5]/10 transition-all duration-300`}
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-black/30 rounded-full">
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-white">{plan.title}</h3>
              <p className="text-gray-300 text-center">{plan.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-gray-300 text-center max-w-3xl mx-auto">
          <p>
            Each plan includes planning, production, and post-production services tailored to your specific podcasting goals, 
            ensuring a seamless experience from concept to publication.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
