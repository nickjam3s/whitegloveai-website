
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const TuitionSection: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-black">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Investment in Your Future
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Our program offers unmatched value with a structure designed to help you succeed while maintaining financial stability.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Basic Plan */}
          <motion.div 
            className="bg-card/30 border border-border rounded-lg overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.1 }}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Standard Program</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold text-white">$12,000</span>
                <span className="text-gray-400">total</span>
              </div>
              <p className="text-sm text-gray-400 mb-6">
                Our most popular option with balanced payments and strong earning potential.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#7021EE] mr-2 shrink-0 mt-0.5" />
                  <span className="text-gray-300">Full 6-month intensive training</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#7021EE] mr-2 shrink-0 mt-0.5" />
                  <span className="text-gray-300">All learning materials included</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#7021EE] mr-2 shrink-0 mt-0.5" />
                  <span className="text-gray-300">1-on-1 mentorship sessions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#7021EE] mr-2 shrink-0 mt-0.5" />
                  <span className="text-gray-300">Job placement assistance</span>
                </li>
              </ul>
              <Button className="w-full">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div 
            className="bg-[#0e0318] border border-[#7021EE]/40 rounded-lg overflow-hidden relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 bg-[#7021EE] text-white text-xs px-3 py-1 rounded-bl">
              RECOMMENDED
            </div>
            <div className="p-6 pt-10">
              <h3 className="text-xl font-bold text-white mb-2">Income Share Agreement</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold text-white">15%</span>
                <span className="text-gray-400">of income for 2 years</span>
              </div>
              <p className="text-sm text-gray-400 mb-6">
                Pay only when you succeed with our aligned incentive model.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#7021EE] mr-2 shrink-0 mt-0.5" />
                  <span className="text-gray-300">No upfront payment required</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#7021EE] mr-2 shrink-0 mt-0.5" />
                  <span className="text-gray-300">Premium course materials</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#7021EE] mr-2 shrink-0 mt-0.5" />
                  <span className="text-gray-300">Extended mentorship program</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#7021EE] mr-2 shrink-0 mt-0.5" />
                  <span className="text-gray-300">Guaranteed job placement</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#7021EE] mr-2 shrink-0 mt-0.5" />
                  <span className="text-gray-300">Payments capped at $24,000 total</span>
                </li>
              </ul>
              <Button className="w-full bg-[#7021EE] hover:bg-[#5f1bc6]">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div 
            className="bg-card/30 border border-border rounded-lg overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.3 }}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Employer Sponsored</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold text-white">Custom</span>
                <span className="text-gray-400">pricing</span>
              </div>
              <p className="text-sm text-gray-400 mb-6">
                For organizations looking to upskill multiple employees.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#7021EE] mr-2 shrink-0 mt-0.5" />
                  <span className="text-gray-300">Customized training plans</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#7021EE] mr-2 shrink-0 mt-0.5" />
                  <span className="text-gray-300">Company-specific project work</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#7021EE] mr-2 shrink-0 mt-0.5" />
                  <span className="text-gray-300">Group discounts available</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#7021EE] mr-2 shrink-0 mt-0.5" />
                  <span className="text-gray-300">Flexible scheduling options</span>
                </li>
              </ul>
              <Button className="w-full">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Need help deciding which option is right for you? Schedule a consultation with our admissions team to discuss your goals and financial situation.
          </p>
          <Button variant="outline" className="px-8 py-6">
            Schedule Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TuitionSection;
