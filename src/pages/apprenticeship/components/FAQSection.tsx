
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the duration of the apprenticeship?",
    answer: "The apprenticeship program is 6 months long, with opportunities for full-time positions after 3 months based on performance."
  },
  {
    question: "Is the apprenticeship paid?",
    answer: "The initial apprenticeship period is unpaid, but includes valuable training and real project experience. Opportunities for paid positions are available based on performance."
  },
  {
    question: "What kind of projects will I work on?",
    answer: "You'll work on real client projects involving cutting-edge AI technologies, including machine learning, natural language processing, and computer vision applications."
  },
  {
    question: "What are the educational requirements?",
    answer: "We require a degree in Computer Science, Data Science, or a related field. However, exceptional candidates with relevant experience may also be considered."
  },
  {
    question: "Is the program remote or in-person?",
    answer: "We offer a hybrid model that combines remote work with occasional in-person meetings and workshops."
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
