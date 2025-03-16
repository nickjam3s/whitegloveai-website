
import { motion } from 'framer-motion';
import { Brain, Users, Target, GraduationCap, Flag, Clock } from 'lucide-react';

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
    icon: Clock,
    text: "Self-starter mentality with proven work ethic"
  },
  {
    icon: Users,
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
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Ideal Candidate Profile
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirements.map((req, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#7021EE]/10 p-6 rounded-lg border border-[#7021EE]/20"
            >
              <req.icon className="h-8 w-8 text-[#7021EE] mb-4" />
              <p className="text-gray-300">{req.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CandidateProfile;
