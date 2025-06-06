

import React from 'react';
import { Linkedin } from 'lucide-react';

const ExecutiveTeam = () => {
  const executives = [
    {
      name: "Nick James",
      title: "Founder & Principal",
      image: "/lovable-uploads/12a890f3-210e-4059-8cbc-6647b5effb9a.png",
      linkedinUrl: "https://www.linkedin.com/in/nickjam3s/"
    },
    {
      name: "Ankur Desai",
      title: "Head of Business Development",
      image: "/lovable-uploads/980b7b84-6ac2-4825-a061-cf071a14cf9e.png",
      linkedinUrl: "https://www.linkedin.com/in/ankdes/"
    },
    {
      name: "Dr. Donnie Wendt",
      title: "Principal AI Consultant",
      image: "/lovable-uploads/b660279c-7698-487d-b20e-3a04479508d4.png",
      linkedinUrl: "https://www.linkedin.com/in/dr-donnie-wendt/"
    },
    {
      name: "Tobalo Torres",
      title: "VP of AI Labs", 
      image: "/lovable-uploads/9dbaee7c-d928-4958-92dd-4dd39b8923bc.png",
      linkedinUrl: "https://www.linkedin.com/in/tobalo/"
    },
    {
      name: "Binni Skariah",
      title: "Product Owner of Lucidis.AI",
      image: "/employee/Binni.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/bskariah/"
    },
    {
      name: "Daniel Valencia",
      title: "Head of Security",
      image: "/lovable-uploads/15e1ef3c-8f52-4735-b48e-159dea83470c.png",
      linkedinUrl: "https://www.linkedin.com/in/daniel-valencia/"
    },
    {
      name: "Samantha Habib",
      title: "AI Solutions Consultant",
      image: "/lovable-uploads/53280f09-a22a-4332-8223-bd75d002241c.png",
      linkedinUrl: "https://www.linkedin.com/in/samantha-habib/"
    },
    {
      name: "Rhea Kaithal",
      title: "AI Labs Consultant",
      image: "/lovable-uploads/6a399a58-ddf1-4257-aa1f-e193b98ac34d.png",
      linkedinUrl: "https://www.linkedin.com/in/rheakaithal/"
    },
  ];

  const ExecutiveProfile = ({ name, title, image, imagePosition = 'object-center', linkedinUrl }) => (
    <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center">
      {/* Use the image instead of the letter placeholder */}
      <div className="w-24 h-24 mb-4 overflow-hidden rounded-full">
        <img 
          src={image} 
          alt={name}
          className={`w-full h-full object-cover ${imagePosition}`}
        />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{name}</h3>
      <p className="text-sm text-gray-400 mb-4">{title}</p>
      <a 
        href={linkedinUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300"
      >
        <Linkedin size={24} />
      </a>
    </div>
  );

  return (
    <div className="bg-gray-900 py-12 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#7021EE]">Meet the Team</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We are a dynamic coalition of seasoned AI pioneers and visionary executives, united by a shared passion for harnessing the transformative potential of artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {executives.map((executive, index) => (
            <div 
              key={index} 
              className="transform transition-all duration-300 hover:scale-105"
            >
              {/* Actually render the ExecutiveProfile component here */}
              <ExecutiveProfile {...executive} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExecutiveTeam;
