import { motion } from "framer-motion";
import { 
  LayoutPanelTop,
  BookOpen,
  Mic2,
  Scissors,
  Video,
  FileSearch,
  Share2,
  PenTool
} from "lucide-react";

const ServicePlans = () => {  // Added component function declaration
  const features = [
    {
      title: "Planning & Design",
      description: "Comprehensive strategy sessions.",
      icon: LayoutPanelTop
    },
    {
      title: "Pre-Production Support",
      description: "Automated topic research and agenda creation.",
      icon: BookOpen
    },
    {
      title: "In-Production Support",
      description: "Dedicated producer to assist in the episode creation.",
      icon: Mic2
    },
    {
      title: "Post-Production Editing",
      description: "Editing for episodes.",
      icon: PenTool
    },
    {
      title: "Short & Clips",
      description: "Creation of Shorts and Clips per episode.",
      icon: Video
    },
    {
      title: "SEO & Publishing",
      description: "Advanced SEO and multi-platform publishing.",
      icon: FileSearch
    },
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
            Our Podcast Service Includes
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