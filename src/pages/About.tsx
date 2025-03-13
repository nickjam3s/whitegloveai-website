
const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl font-semibold mb-6">About White Glove AI</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're dedicated to delivering premium AI solutions with exceptional
              service and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-up">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At WhitegloveAI, we believe in making artificial intelligence
                accessible and practical for businesses of all sizes. Our mission is
                to provide premium AI solutions with unparalleled service quality.
              </p>
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />
                    <div>
                      <h3 className="font-medium">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Company Overview</h2>
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const values = [
  {
    title: "Excellence in Service",
    description: "We go above and beyond to ensure client satisfaction.",
  },
  {
    title: "Innovation",
    description: "Constantly pushing the boundaries of what's possible with AI.",
  },
  {
    title: "Integrity",
    description: "Building trust through transparency and honest communication.",
  },
];

const stats = [
  {
    value: "100+",
    label: "Clients Served",
  },
  {
    value: "95%",
    label: "Client Satisfaction",
  },
  {
    value: "24/7",
    label: "Expert Support",
  },
];

export default About;
