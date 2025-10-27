import { CheckCircle2 } from "lucide-react";

const TransformSection = ({ experiences }) => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-4 text-center heading-highlight-scroll">
          Transform Your Customer Experience
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Built on the secure and scalable <a href="https://www.lucidis.ai" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Lucidis</a> platform, AvatarAI delivers lifelike digital engagement that transforms every interaction.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          {experiences.map((experience, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4 text-white">{experience.title}</h3>
              <p className="text-gray-400 mb-6">{experience.description}</p>
              <ul className="space-y-4">
                {experience.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformSection;