import { useLayoutEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, BookOpen, Users, Award } from "lucide-react";
import HB3512Banner from "@/components/HB3512Banner";

const Training = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HB3512Banner />
      {/* Hero Section */}
      <section className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/20 to-black/90">
            <div className="absolute inset-0 backdrop-blur-sm" />
          </div>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#7021EE]/20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 flex justify-center"
            >
              <GraduationCap className="h-20 w-20 text-secondary" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
            >
              Build Internal AI Expertise
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto px-3 sm:px-0"
            >
              Empower your workforce with expert-led AI training and certification programs designed for all skill levels.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              WhitegloveAI offers comprehensive AI training programs to help your team understand, implement, and manage AI solutions effectively. Our courses are designed for both technical and non-technical audiences.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-background p-6 rounded-lg border border-gray-800"
              >
                <BookOpen className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Comprehensive Curriculum</h3>
                <p className="text-gray-400">
                  From fundamentals to advanced implementation, covering all aspects of AI adoption
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-background p-6 rounded-lg border border-gray-800"
              >
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Expert Instructors</h3>
                <p className="text-gray-400">
                  Learn from experienced AI practitioners with real-world implementation expertise
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-background p-6 rounded-lg border border-gray-800"
              >
                <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Certification Programs</h3>
                <p className="text-gray-400">
                  Earn recognized credentials that validate your team's AI capabilities
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Placeholder Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
          >
            Our Training Programs
          </motion.h2>
          
          <div className="max-w-3xl mx-auto text-center mt-12">
            <div className="bg-card border-2 border-secondary/30 rounded-lg p-12">
              <BookOpen className="h-16 w-16 text-secondary mx-auto mb-6" />
              <p className="text-xl text-gray-300 italic">
                Course details to be added based on specific offerings
              </p>
              <p className="text-gray-400 mt-4">
                We are currently developing comprehensive training modules tailored to your organization's needs. Contact us to discuss custom training programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
          >
            Ready to Upskill Your Team?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Contact us to learn more about our training programs and how we can customize them for your organization's specific needs.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                Contact Us for Training Options
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Training;
