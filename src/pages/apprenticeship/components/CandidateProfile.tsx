
import { motion } from 'framer-motion';
import { Brain, Target, Users, Clock, Flag, GraduationCap, Settings, Zap } from 'lucide-react';

const requirements = [
  {
    icon: Brain,
    text: "Demonstrated passion for artificial intelligence"
  },
  {
    icon: Target,
    text: "Strong analytical and problem-solving abilities"
  },
  {
    icon: Users,
    text: "Excellent communication and teamwork skills"
  },
  {
    icon: Zap,
    text: "Self-starter mentality with proven work ethic"
  },
  {
    icon: Settings,
    text: "Cultural fit with our innovative environment"
  },
  {
    icon: Clock,
    text: "Full-time availability required"
  },
  {
    icon: Flag,
    text: "Must be US-based (no visa sponsorship)"
  },
  {
    icon: GraduationCap,
    text: "Degree in Data Science or AI, or related field"
  }
];

const CandidateProfile = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ideal Candidate Profile
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirements.map((req, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <req.icon className="h-10 w-10 text-[#7021EE]" />
              </div>
              <p className="text-gray-300 text-base">{req.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CandidateProfile;
