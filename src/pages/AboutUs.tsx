
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold">About WhitegloveAI</h1>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Mission Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At WhitegloveAI, our mission is to empower organizations to adopt secure, responsible, and scalable AI solutions. 
            We believe in reshaping organizational efficiency through AI, unlocking new potentials in business processes, 
            customer experiences, and digital transformation strategies.
          </p>
        </section>

        {/* Vision Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Vision</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our vision is to be at the forefront of AI-driven digital transformations, catalyzing growth and efficiency 
            through the use of emerging technologies. We aim to establish AI as a transformative force that helps businesses 
            solve complex problems, streamline operations, and enhance decision-making capabilities while maintaining the 
            highest standards of security and integrity.
          </p>
        </section>

        {/* Philosophy Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Philosophy</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe that AI should be a collaborative force—augmenting human creativity and expertise to drive innovation 
            across industries. WhitegloveAI advocates for responsible AI development, where ethics, accountability, and 
            transparency are integral to the design, deployment, and utilization of AI systems.
          </p>
        </section>

        {/* Core Beliefs Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Core Beliefs</h2>
          <div className="space-y-4">
            {coreBeliefs.map((belief, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{belief.title}</h3>
                <p className="text-muted-foreground">{belief.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="bg-primary text-white text-center py-4 mt-16">
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
