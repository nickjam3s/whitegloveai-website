
import React from "react";

const OperationalEfficiencySection = () => {
  return (
    <section className="py-16 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Side - SVG Illustration */}
          <div className="w-full md:w-1/2 flex justify-center">
            <svg width="350" height="600" viewBox="0 0 350 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
              {/* Robot/AI illustration */}
              <path d="M279.141 60.0879C262.5 42.5 234.5 33 222 31C209.5 29 183.141 36.0879 153.141 60.0879C123.141 84.0879 124.641 115.588 131.141 130.088C137.641 144.588 155.141 155.088 155.141 155.088C155.141 155.088 131.141 198.088 131.141 220.088C131.141 242.088 139.141 272.088 139.141 272.088L139.141 323.088C139.141 323.088 142.141 377.088 142.141 397.088C142.141 417.088 155.141 467.088 155.141 467.088C155.141 467.088 156.141 487.088 158.141 497.088C160.141 507.088 169.141 567.088 169.141 567.088" stroke="#D1D5DB" strokeWidth="6" strokeLinecap="round"/>
              
              {/* Robot head */}
              <circle cx="264.141" cy="150.088" r="14" stroke="#D1D5DB" strokeWidth="6"/>
              <circle cx="214.141" cy="180.088" r="14" stroke="#D1D5DB" strokeWidth="6"/>
              <circle cx="248.141" cy="98.0879" r="20" stroke="#D1D5DB" strokeWidth="6"/>
              <circle cx="282.141" cy="200.088" r="8" stroke="#D1D5DB" strokeWidth="6"/>
              <path d="M169.141 255.088C204.141 219.088 253.141 239.088 279.141 255.088" stroke="#D1D5DB" strokeWidth="6" strokeLinecap="round"/>
              <circle cx="277.141" cy="280.088" r="8" fill="#D1D5DB"/>
              
              {/* Robot body */}
              <rect x="154.141" y="350.088" width="100" height="160" rx="10" stroke="#D1D5DB" strokeWidth="6"/>
              <circle cx="179.141" cy="410.088" r="10" fill="#D1D5DB"/>
              <circle cx="229.141" cy="410.088" r="10" fill="#D1D5DB"/>
              
              {/* Signal lines */}
              <path d="M90 200C80 190 70 180 60 170" stroke="#D1D5DB" strokeWidth="4" strokeLinecap="round"/>
              <path d="M100 190C90 180 80 170 70 160" stroke="#D1D5DB" strokeWidth="4" strokeLinecap="round"/>
              <path d="M110 180C100 170 90 160 80 150" stroke="#D1D5DB" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>
          
          {/* Right Side - Content */}
          <div className="w-full md:w-1/2">
            <div className="flex items-start justify-between mb-8">
              <h2 className="text-4xl font-bold text-white">Operational Efficiency</h2>
              
              {/* Efficiency icon */}
              <svg width="50" height="50" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 0C38.3431 0 37 1.34315 37 3C37 4.65685 38.3431 6 40 6C52.1503 6 62 15.8497 62 28C62 29.6569 63.3431 31 65 31C66.6569 31 68 29.6569 68 28C68 12.536 55.464 0 40 0Z" fill="white"/>
                <path d="M40 12C38.3431 12 37 13.3431 37 15C37 16.6569 38.3431 18 40 18C45.5228 18 50 22.4772 50 28C50 29.6569 51.3431 31 53 31C54.6569 31 56 29.6569 56 28C56 19.1634 48.8366 12 40 12Z" fill="white"/>
                <path d="M30 22C28.3431 22 27 23.3431 27 25C27 26.6569 28.3431 28 30 28C36.6274 28 42 33.3726 42 40C42 41.6569 43.3431 43 45 43C46.6569 43 48 41.6569 48 40C48 30.0589 39.9411 22 30 22Z" fill="white"/>
                <path d="M30 34C28.3431 34 27 35.3431 27 37C27 38.6569 28.3431 40 30 40C30 40 30 40 30 40C30 41.6569 31.3431 43 33 43C34.6569 43 36 41.6569 36 40C36 36.6863 33.3137 34 30 34Z" fill="white"/>
                <path d="M20 34C18.3431 34 17 35.3431 17 37C17 38.6569 18.3431 40 20 40C20 47.732 26.268 54 34 54C35.6569 54 37 52.6569 37 51C37 49.3431 35.6569 48 34 48C29.5817 48 26 44.4183 26 40C26 38.3431 24.6569 37 23 37C23 37 23 37 23 37C23 35.3431 21.6569 34 20 34Z" fill="white"/>
                <path d="M20 46C18.3431 46 17 47.3431 17 49C17 50.6569 18.3431 52 20 52C20 59.732 26.268 66 34 66C41.732 66 48 59.732 48 52C48 50.3431 46.6569 49 45 49C43.3431 49 42 50.3431 42 52C42 56.4183 38.4183 60 34 60C29.5817 60 26 56.4183 26 52C26 50.3431 24.6569 49 23 49C21.3431 49 20 50.3431 20 52C20 52 20 52 20 52C20 50.3431 18.6569 49 17 49C15.3431 49 14 50.3431 14 52C14 62.4934 22.5066 71 33 71C43.4934 71 52 62.4934 52 52C52 50.3431 50.6569 49 49 49C47.3431 49 46 50.3431 46 52C46 58.6274 40.6274 64 34 64C27.3726 64 22 58.6274 22 52C22 50.3431 20.6569 49 19 49C17.3431 49 16 50.3431 16 52C16 66.3594 27.6406 78 42 78C56.3594 78 68 66.3594 68 52C68 50.3431 66.6569 49 65 49C63.3431 49 62 50.3431 62 52C62 62.9411 53.9411 71 43 71C41.3431 71 40 72.3431 40 74C40 75.6569 41.3431 77 43 77C57.3594 77 69 65.3594 69 51C69 36.6406 57.3594 25 43 25C41.3431 25 40 26.3431 40 28C40 29.6569 41.3431 31 43 31C53.9411 31 62 39.0589 62 50C62 51.6569 63.3431 53 65 53C66.6569 53 68 51.6569 68 50C68 35.6406 56.3594 24 42 24C27.6406 24 16 35.6406 16 50C16 51.6569 17.3431 53 19 53C20.6569 53 22 51.6569 22 50C22 38.9543 30.9543 30 42 30C43.6569 30 45 28.6569 45 27C45 25.3431 43.6569 24 42 24C30.9543 24 22 32.9543 22 44C22 45.6569 23.3431 47 25 47C26.6569 47 28 45.6569 28 44C28 39.5817 31.5817 36 36 36C37.6569 36 39 34.6569 39 33C39 31.3431 37.6569 30 36 30C28.268 30 22 36.268 22 44C22 44 22 44 22 44C22 45.6569 23.3431 47 25 47C26.6569 47 28 45.6569 28 44C28 44 28 44 28 44C28 45.6569 29.3431 47 31 47C32.6569 47 34 45.6569 34 44C34 41.7909 35.7909 40 38 40C39.6569 40 41 38.6569 41 37C41 35.3431 39.6569 34 38 34C32.4772 34 28 38.4772 28 44C28 45.6569 29.3431 47 31 47C32.6569 47 34 45.6569 34 44C34 44 34 44 34 44C34 45.6569 35.3431 47 37 47C38.6569 47 40 45.6569 40 44C40 40.6863 42.6863 38 46 38C47.6569 38 49 36.6569 49 35C49 33.3431 47.6569 32 46 32C39.3726 32 34 37.3726 34 44C34 45.6569 35.3431 47 37 47C38.6569 47 40 45.6569 40 44C40 44 40 44 40 44C40 45.6569 41.3431 47 43 47C44.6569 47 46 45.6569 46 44C46 42.8954 46.8954 42 48 42C49.6569 42 51 40.6569 51 39C51 37.3431 49.6569 36 48 36C45.7909 36 44 37.7909 44 40C44 41.6569 45.3431 43 47 43C48.6569 43 50 41.6569 50 40C50 40 50 40 50 40C50 41.6569 51.3431 43 53 43C54.6569 43 56 41.6569 56 40C56 35.5817 52.4183 32 48 32C46.3431 32 45 33.3431 45 35C45 36.6569 46.3431 38 48 38C50.2091 38 52 39.7909 52 42C52 43.6569 53.3431 45 55 45C56.6569 45 58 43.6569 58 42C58 38.6863 55.3137 36 52 36C50.3431 36 49 37.3431 49 39C49 40.6569 50.3431 42 52 42C52 42 52 42 52 42C52 43.6569 53.3431 45 55 45C56.6569 45 58 43.6569 58 42C58 42 58 42 58 42" fill="white"/>
              </svg>
            </div>
            
            {/* Feature boxes */}
            <div className="space-y-6">
              {benefitItems.map((item, index) => (
                <div key={index} className="bg-[#222222] rounded-lg p-6 shadow-lg">
                  <h3 className="text-2xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const benefitItems = [
  {
    title: "Automated Responses",
    description: "By automating responses to common inquiries, TextAI significantly reduces manual workload and frees up human agents to focus on more complex issues."
  },
  {
    title: "24/7 Availability",
    description: "TextAI offers 24/7 availability, ensuring instant responses and improving customer satisfaction."
  },
  {
    title: "Intelligent Automation",
    description: "TextAI's intelligent automation can reduce repetitive inquiries by 30-50%, leading to significant savings on manual support operations."
  }
];

export default OperationalEfficiencySection;
