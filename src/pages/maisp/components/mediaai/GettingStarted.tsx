
import { motion } from "framer-motion";
import { SquareArrowDown } from "lucide-react";

const GettingStarted = () => {
  const steps = [
    {
      title: "Initial Consultation",
      description: "Schedule a discovery call to discuss your podcasting goals, audience, and content vision with our strategy team."
    },
    {
      title: "Plan Selection",
      description: "Choose the podcasting plan that best aligns with your needs, with guidance from our experts."
    },
    {
      title: "Onboarding Process",
      description: "Complete our comprehensive onboarding to define your podcast identity, plan initial episodes, and set up your production workflow."
    },
    {
      title: "Launch and Growth",
      description: "Begin recording and publishing episodes with our full support, implementing strategic promotion to build your audience."
    }
  ];

  return (
    <section className="py-20 bg-[#111111] px-4 sm:px-6 lg:px-8" id="getting-started">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#9b87f5] heading-highlight-scroll">
            Getting Started
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Launch Your Professional Podcast Today
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[50px] md:left-[110px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#9b87f5] to-transparent"></div>
          
          <div className="space-y-20 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 md:gap-12"
              >
                <div className="relative">
                  <div className="flex items-center justify-center w-24 h-24 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-[#9b87f5]/20 to-transparent border border-[#9b87f5]/30">
                    <span className="text-4xl md:text-7xl font-bold text-[#9b87f5]">{index + 1}</span>
                  </div>
                </div>
                <div className="pt-8 md:pt-12">
                  <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
                  <p className="text-gray-300 max-w-xl">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-300 max-w-3xl mx-auto">
            Ready to elevate your podcasting presence? Our team of audio professionals, content strategists, 
            and marketing experts is prepared to guide you through every step of your podcasting journey. 
            Contact us today to schedule your initial consultation and discover how our podcasting services 
            can help you create engaging content that resonates with your target audience and achieves your 
            business objectives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
