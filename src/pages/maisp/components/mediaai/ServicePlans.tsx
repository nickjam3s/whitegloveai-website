
import { motion } from "framer-motion";
import { Check, LayoutPanelTop, Mic, Scissors, Search, Share2 } from "lucide-react";

const ServicePlans = () => {
  const features = [
    // Planning & Design features
    {
      title: "Planning & Design",
      description: "Up to 5 hours of strategy sessions and thumbnail creation to establish your visual identity.",
      icon: LayoutPanelTop
    },
    {
      title: "Production Support",
      description: "Basic topic research and agenda creation for 3 episodes monthly, virtual studio access, and essential equipment rental.",
      icon: Mic
    },
    {
      title: "Post-Production Editing",
      description: "Editing for three 30-minute episodes per month.",
      icon: Scissors
    },
    {
      title: "Short Clips",
      description: "One clip per episode.",
      icon: Scissors
    },
    {
      title: "SEO Optimization",
      description: "Basic SEO optimization included.",
      icon: Search
    },
    {
      title: "Social Media Setup",
      description: "Help with setting up on two platforms.",
      icon: Share2
    },
    // Professional Plan features
    {
      title: "Enhanced Planning",
      description: "Up to 10 hours of comprehensive strategy sessions, logo design with 2 concepts and revisions, and multiple thumbnail designs.",
      icon: LayoutPanelTop
    },
    {
      title: "Premium Production",
      description: "Detailed research and agendas for 5 monthly episodes, executive producer and production assistant support, and advanced equipment access.",
      icon: Mic
    },
    {
      title: "Post-Production Services",
      description: "Editing of five 60-minute episodes.",
      icon: Scissors
    },
    {
      title: "Short Clips",
      description: "Creation of three clips per episode.",
      icon: Scissors
    },
    {
      title: "SEO & Publishing",
      description: "Advanced SEO and multi-platform publishing.",
      icon: Search
    },
    {
      title: "Social Media & Newsletter",
      description: "Setup on four platforms and newsletter establishment.",
      icon: Share2
    },
    // Premium Plan features
    {
      title: "Comprehensive Package",
      description: "The Premium Plan includes all Professional Plan features plus 8 monthly recording sessions for maximum content production.",
      icon: LayoutPanelTop
    },
    {
      title: "Full-Service Solution",
      description: "Enjoy worry-free podcasting with all possible add-ons included in your subscription: additional episode production, guest coordination, marketing campaigns, and more.",
      icon: Mic
    },
    {
      title: "Exclusive Benefits",
      description: "Receive priority support with dedicated consultation, a custom podcast website, the Subscriber Booster package, and enhanced post-production for all episodes.",
      icon: Check
    }
  ];

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="plans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#9b87f5] heading-highlight-scroll">
            Our Podcast Service Plans
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Carefully crafted features to match your podcasting ambitions
          </p>
        </div>
        
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerAnimation}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              variants={itemAnimation}
              className="bg-card border border-[#9b87f5]/10 p-6 rounded-lg hover:border-[#9b87f5]/30 transition-all duration-300 h-full"
            >
              <div className="p-2 bg-[#9b87f5]/10 rounded-full w-fit mb-4">
                <feature.icon className="h-6 w-6 text-[#9b87f5]" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white">{feature.title}</h4>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePlans;
