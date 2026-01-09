import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the duration of the internship?",
    answer: "Our internship program runs year-round with flexible start dates. Typical internships are 10-12 weeks, with potential extensions based on performance and mutual fit."
  },
  {
    question: "Is the internship paid?",
    answer: "Yes, our internship program is a paid opportunity. Compensation details are discussed during the interview process."
  },
  {
    question: "What kind of projects will I work on?",
    answer: "You'll work on real client projects involving AI technologies, including machine learning, natural language processing, and automation solutions."
  },
  {
    question: "What are the educational requirements?",
    answer: "We're looking for students currently enrolled in or recently graduated from a degree program in Computer Science, Data Science, or a related field."
  },
  {
    question: "Is the internship remote or in-person?",
    answer: "We offer a hybrid model that combines remote work with in-person collaboration at our Frisco, TX office."
  }
];

const FAQSection = () => {
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
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-white hover:text-[#7021EE]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
