
import { Check } from "lucide-react";

const steps = [
  "Contact us via the below form.",
  "We will set up an intro call for qualification.",
  "Once qualified, we will create your chatbot, test internally and offer you time to test.",
  "Once testing is complete, we will work with you to install the chatbot on your website.",
  "As a part of our service, we will offer you monthly insights into all chats that take place with your chatbot."
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center heading-highlight-scroll">
          How Our Program Works
        </h2>
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 bg-secondary/10 p-2 rounded-full">
                <Check className="h-6 w-6 text-secondary" />
              </div>
              <p className="text-gray-400 text-lg">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
