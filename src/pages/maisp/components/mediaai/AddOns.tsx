
import { motion } from "framer-motion";
import { Plus, Users, TrendingUp, Globe } from "lucide-react";

const AddOns = () => {
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

  const addOns = [
    {
      title: "Production Enhancements",
      items: [
        "Additional episode production",
        "Guest booking and coordination"
      ],
      icon: Plus
    },
    {
      title: "Growth & Visibility",
      items: [
        "Advanced marketing campaigns",
        "Subscriber Booster",
        "Custom podcast website"
      ],
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-20 bg-[#111111] px-4 sm:px-6 lg:px-8" id="addons">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#9b87f5] heading-highlight-scroll">
            Add-On Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Customize Your Podcasting Experience
          </p>
        </div>
        
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <p className="text-gray-300">
            Our à la carte add-on services allow Basic and Professional Plan subscribers to customize their podcasting experience 
            with additional production capacity and specialized services. These flexible options enable you to scale your 
            podcasting efforts based on specific needs and growth opportunities without committing to a higher-tier plan.
          </p>
        </div>
        
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10"
        >
          {addOns.map((category, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="bg-gradient-to-br from-[#9b87f5]/10 to-transparent backdrop-blur-sm border border-[#9b87f5]/20 p-8 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#9b87f5]/20 rounded-full mr-4">
                  <category.icon className="h-6 w-6 text-[#9b87f5]" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <ul className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-[#9b87f5] mr-3"></span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AddOns;
