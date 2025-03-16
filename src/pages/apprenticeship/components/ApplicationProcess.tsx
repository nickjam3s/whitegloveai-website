
import { motion } from 'framer-motion';
import { FileText, Users, Code, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: "Online Application",
    description: "Submit your application with your resume and portfolio"
  },
  {
    icon: Users,
    title: "Initial Interview",
    description: "Meet with our team to discuss your goals and experience"
  },
  {
    icon: Code,
    title: "Technical Assessment",
    description: "Complete a practical assessment to showcase your skills"
  },
  {
    icon: CheckCircle,
    title: "Final Decision",
    description: "Receive your acceptance decision within 1 week"
  }
];

const ApplicationProcess = () => {
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
            Application Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your journey to becoming an AI expert starts here
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#7021EE]/10 p-6 rounded-lg border border-[#7021EE]/20 relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-[2px] bg-[#7021EE]/20 transform translate-x-1/2" />
              )}
              <step.icon className="h-12 w-12 text-[#7021EE] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
