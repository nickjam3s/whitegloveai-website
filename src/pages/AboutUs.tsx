
import { Link } from "react-router-dom";
import { ArrowRight, Users, Shield, Brain, Lightbulb, BookOpen, Target, UserCheck, Lock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/path-to-grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center relative z-10 animate-fade-up">
            <h1 className="text-6xl font-bold mb-8 heading-highlight bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white">
              About WhitegloveAI
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              WhitegloveAI is a leading artificial intelligence consulting firm that is transforming the way organizations approach AI technologies. With an unwavering commitment to innovation, security, and responsible AI practices, we guide businesses through the complex landscape of AI integration to drive meaningful digital transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8 animate-fade-up">
              <div>
                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">Our Mission</h2>
                <p className="text-gray-400 leading-relaxed">
                  At WhitegloveAI, our mission is to empower organizations to adopt secure, responsible, and scalable AI solutions. We believe in reshaping organizational efficiency through AI, unlocking new potentials in business processes, customer experiences, and digital transformation strategies.
                </p>
              </div>
            </div>
            <div className="space-y-8 animate-fade-up delay-100">
              <div>
                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">Our Vision</h2>
                <p className="text-gray-400 leading-relaxed">
                  Our vision is to be at the forefront of AI-driven digital transformations, catalyzing growth and efficiency through the use of emerging technologies. We aim to establish AI as a transformative force that helps businesses solve complex problems, streamline operations, and enhance decision-making capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">Our Philosophy</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We believe that AI should be a collaborative force—augmenting human creativity and expertise to drive innovation across industries. WhitegloveAI advocates for responsible AI development, where ethics, accountability, and transparency are integral to the design, deployment, and utilization of AI systems.
            </p>
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">Core Beliefs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreBeliefs.map((belief, index) => (
              <div 
                key={index} 
                className="bg-background/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:translate-y-[-4px] group"
              >
                <belief.icon className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold mb-4">{belief.title}</h3>
                <p className="text-gray-400 leading-relaxed">{belief.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center animate-fade-up">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">Our Approach</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              WhitegloveAI provides end-to-end AI consulting services, ranging from strategy development and AI training to the deployment and maintenance of tailored AI solutions. Our team of experts works closely with clients to understand their specific challenges and deliver solutions that are not only innovative but also practical, scalable, and secure.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:translate-y-[-4px] text-center group"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {member.name}
                    </a>
                  ) : (
                    member.name
                  )}
                </h3>
                <p className="text-gray-400">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision for AI Talent */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">Our Vision for AI Talent</h2>
            <p className="text-gray-400 text-xl leading-relaxed">
              "At WhitegloveAI, we believe in nurturing talent that will drive the next generation of AI innovation. Our apprentices are selected not just for their technical potential, but for their vision and dedication to excellence in everything they do."
            </p>
          </div>
        </div>
      </section>

      {/* Apprenticeship CTA */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">Join our Apprenticeship Program</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-xl leading-relaxed">
            Transform your career in AI with our exclusive 6-month apprenticeship program.
            Master cutting-edge AI technology while working on real-world solutions.
          </p>
          <Link to="/aboutus/apprenticeship">
            <Button variant="secondary" size="lg" className="group">
              Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

const coreBeliefs = [
  {
    icon: Brain,
    title: "AI as a Collaborative Force",
    description: "AI is a complement to human ingenuity, fostering creativity, and improving problem-solving. We view AI not as a replacement for human intelligence but as a powerful tool that amplifies human capabilities."
  },
  {
    icon: Shield,
    title: "Responsible Innovation",
    description: "We prioritize ethical AI practices. By ensuring fairness, accountability, and transparency in AI development, we maintain a commitment to building technologies that benefit all stakeholders."
  },
  {
    icon: Lock,
    title: "Security and Trust",
    description: "Security is at the core of everything we do. We focus on safeguarding data, privacy, and the integrity of AI models to ensure that our clients can trust the systems we develop."
  },
  {
    icon: BookOpen,
    title: "Empowerment Through Education",
    description: "WhitegloveAI strives to continuously educate organizations and individuals about AI. We believe that empowering teams with AI knowledge is crucial to the successful integration of these technologies."
  },
  {
    icon: Zap,
    title: "Adaptive Growth",
    description: "The world of technology is constantly evolving, and so are we. We embrace change, adapting our services to match the latest developments in AI research and implementation."
  },
  {
    icon: Target,
    title: "Strategic Integration",
    description: "AI solutions should align with business objectives. We work closely with organizations to ensure that AI implementation delivers measurable business value and enhances efficiency."
  },
  {
    icon: Users,
    title: "Universal Accessibility",
    description: "We believe that AI should be accessible to all levels of the organization. By democratizing AI, we enable businesses of all sizes to leverage its benefits."
  },
  {
    icon: UserCheck,
    title: "Customer-Centricity",
    description: "At the heart of AI deployment is the customer experience. Our solutions are designed to elevate customer satisfaction, providing personalized, responsive interactions."
  },
  {
    icon: Lightbulb,
    title: "Cross-Disciplinary Approach",
    description: "AI is not limited to one domain. We recognize its broad applicability, and our solutions span multiple industries, ensuring value across the spectrum of business sectors."
  }
];

const team = [
  {
    name: "Nick James",
    title: "Chief Executive Officer & Founder",
    linkedin: "https://www.linkedin.com/in/nickjam3s/"
  },
  {
    name: "Jason Hess",
    title: "Virtual Chief AI Officer"
  },
  {
    name: "Dr. Donnie Wendt",
    title: "Virtual Chief AI Officer"
  },
  {
    name: "Albert Ramos Jr.",
    title: "Virtual Chief AI Officer"
  },
  {
    name: "Daniel Valencia",
    title: "Chief Information Security Officer"
  },
  {
    name: "Tobalo Torres",
    title: "VP of AI Incubation Labs"
  },
  {
    name: "Ankur Desai",
    title: "Chief Marketing Officer",
    linkedin: "https://www.linkedin.com/in/ankdes/"
  },
  {
    name: "Binni Skariah",
    title: "Chief Executive Officer in Residence of Lucidis.Ai",
    linkedin: "https://www.linkedin.com/in/bskariah/"
  },
  {
    name: "Ken Knapp",
    title: "VP of Growth"
  }
];

export default AboutUs;
