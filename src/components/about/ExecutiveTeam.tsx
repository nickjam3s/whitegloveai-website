function App() {
  const executives = [
    {
      name: "Nick James",
      title: "Founder & Chief Executive Officer",
      linkedinUrl: "https://www.linkedin.com/in/nickjam3s/"
    },
    {
      name: "Jason Hess",
      title: "Chief Technology Officer & virtual Chief AI Officer",
      linkedinUrl: "https://www.linkedin.com/in/jasonhess/"
    },
    {
      name: "Binni Skariah",
      title: "Product Owner of Lucidis.AI",
      linkedinUrl: "https://www.linkedin.com/in/bskariah/"
    },
    {
      name: "Tobalo Torress",
      title: "VP of AI Labs", 
      linkedinUrl: "https://www.linkedin.com/in/tobalo/"
    },
    {
      name: "Albert Ramos",
      title: "virtual Chief AI Officer",
      linkedinUrl: "https://www.linkedin.com/in/albertramosjr/"
    },
    {
      name: "Dr. Donnie Wendt",
      title: "virtual Chief AI Officer",
      linkedinUrl: "https://www.linkedin.com/in/dr-donnie-wendt/"
    },
    {
      name: "Daniel Valencia",
      title: "Chief Information Security Officer",
      linkedinUrl: "https://www.linkedin.com/in/daniel-valencia/"
    },
    {
      name: "Ankur Desai",
      title: "Chief Marketing Officer",
      linkedinUrl: "https://www.linkedin.com/in/ankdes/"
    },
  ];

  const ExecutiveProfile = ({ name, title, linkedinUrl }) => (
    <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center">
      <div className="w-24 h-24 mb-4 bg-gray-700 rounded-full flex items-center justify-center">
        <span className="text-3xl text-gray-400">{name.charAt(0)}</span>
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{name}</h3>
      <p className="text-sm text-gray-400 mb-4">{title}</p>
      <a 
        href={linkedinUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300"
      >
        <i className="fab fa-linkedin text-xl"></i>
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#7021EE]">Meet the Executive Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a dynamic coalition of seasoned AI pioneers and visionary executives, united by a shared passion for harnessing the transformative potential of artificial intelligence. Our mission is to unlock AI's promises while proactively addressing its challenges to ensure a positive and ethical impact on humanity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {executives.map((executive, index) => (
            <div 
              key={index} 
              className="transform transition-all duration-300 hover:scale-105"
            >
              <ExecutiveProfile {...executive} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}