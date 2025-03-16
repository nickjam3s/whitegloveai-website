
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('/public/placeholder.svg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 heading-highlight">
              About WhitegloveAI
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Transforming businesses through innovative AI solutions
            </p>
            <Button className="group" asChild>
              <a href="#mission">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        {/* Mission Section */}
        <motion.section
          id="mission"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="scroll-mt-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary heading-highlight">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            At WhitegloveAI, our mission is to empower organizations to adopt secure, responsible, and scalable AI solutions. 
            We believe in reshaping organizational efficiency through AI, unlocking new potentials in business processes, 
            customer experiences, and digital transformation strategies.
          </p>
        </motion.section>

        {/* Vision Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary heading-highlight">Our Vision</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our vision is to be at the forefront of AI-driven digital transformations, catalyzing growth and efficiency 
            through the use of emerging technologies. We aim to establish AI as a transformative force that helps businesses 
            solve complex problems, streamline operations, and enhance decision-making capabilities while maintaining the 
            highest standards of security and integrity.
          </p>
        </motion.section>

        {/* Philosophy Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary heading-highlight">Our Philosophy</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We believe that AI should be a collaborative force—augmenting human creativity and expertise to drive innovation 
            across industries. WhitegloveAI advocates for responsible AI development, where ethics, accountability, and 
            transparency are integral to the design, deployment, and utilization of AI systems.
          </p>
        </motion.section>

        {/* Core Beliefs Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary heading-highlight col-span-full">Core Beliefs</h2>
          {coreBeliefs.map((belief, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl bg-card hover:bg-card/80 border border-border transition-all duration-300 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{belief.title}</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                {belief.description}
              </p>
            </motion.div>
          ))}
        </motion.section>
      </div>

      <footer className="bg-primary text-white text-center py-6 mt-24">
        <p>&copy; {new Date().getFullYear()} WhitegloveAI. All rights reserved.</p>
      </footer>
    </div>
  );
};

const coreBeliefs = [
  {
    title: "AI as a Collaborative Force",
    description: "AI is a complement to human ingenuity, fostering creativity, and improving problem-solving."
  },
  {
    title: "Responsible Innovation",
    description: "We prioritize ethical AI practices. Ensuring fairness, accountability, and transparency in AI development is key to our approach."
  },
  {
    title: "Security and Trust",
    description: "Security is at the core of everything we do. We focus on safeguarding data, privacy, and integrity."
  },
  {
    title: "Empowerment Through Education",
    description: "We believe in continuous learning and educating organizations on the possibilities of AI."
  },
  {
    title: "Adaptive Growth",
    description: "The world of technology is constantly evolving, and we embrace change to stay ahead."
  },
  {
    title: "Strategic Integration",
    description: "AI should align with business objectives. We ensure that AI implementation delivers measurable value."
  },
  {
    title: "Universal Accessibility",
    description: "We democratize AI to ensure its benefits can be accessed by all organizations, regardless of size."
  },
  {
    title: "Customer-Centricity",
    description: "At the heart of AI deployment is the customer experience. We design solutions that drive loyalty and growth."
  },
  {
    title: "Cross-Disciplinary Approach",
    description: "AI is applicable across many industries. Our solutions span healthcare, finance, manufacturing, and more."
  }
];

export default AboutUs;
