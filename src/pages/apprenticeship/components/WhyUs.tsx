
import { motion } from 'framer-motion';
import { RocketLaunch, Users, Brain, ChartBar } from 'lucide-react';

const benefits = [
  {
    icon: RocketLaunch,
    title: "Fast Track Career Growth",
    description: "Launch your AI career with hands-on experience and mentorship"
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn directly from industry veterans and AI experts"
  },
  {
    icon: Brain,
    title: "Real Projects",
    description: "Work on actual client projects using cutting-edge AI technology"
  },
  {
    icon: ChartBar,
    title: "Performance Based",
    description: "Opportunities for full-time roles based on your achievements"
  }
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Why Choose Our Apprenticeship?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join a transformative program that combines practical experience with expert guidance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#7021EE]/10 p-6 rounded-lg border border-[#7021EE]/20"
            >
              <benefit.icon className="h-12 w-12 text-[#7021EE] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
