
import React from "react";

const ExpectedROISection = () => {
  return (
    <section className="py-20 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-12 text-white">Expected ROI</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            {roiItems.map((item, index) => (
              <div key={index} className="bg-[#222222] rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="w-full md:w-1/2">
            <svg width="100%" height="100%" viewBox="0 0 650 550" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Laptop SVG */}
              <g>
                <path d="M650 450L550 550H100L0 450H650Z" fill="#E6E6E6" fillOpacity="0.1" />
                <rect x="75" y="100" width="500" height="350" rx="20" fill="#FFFFFF" fillOpacity="0.1" />
                <rect x="100" y="125" width="450" height="300" rx="5" fill="#000000" />
                <rect x="125" y="150" width="400" height="250" fill="#111111" />
                
                {/* Screen Content - Charts and Icons */}
                {/* Cloud Icon */}
                <path d="M175 200C163 200 155 210 155 222C155 234 163 244 175 244H195C207 244 215 234 215 222C215 210 207 200 195 200H175Z" stroke="#FFFFFF" fill="none" strokeWidth="2" />
                
                {/* Thumbs Up Icon */}
                <circle cx="250" cy="222" r="20" stroke="#FFFFFF" fill="none" strokeWidth="2" />
                <path d="M240 222L250 212L260 222" stroke="#FFFFFF" strokeWidth="2" />
                <path d="M250 232V212" stroke="#FFFFFF" strokeWidth="2" />
                
                {/* Clock Icon */}
                <circle cx="320" cy="222" r="20" stroke="#FFFFFF" fill="none" strokeWidth="2" />
                <path d="M320 210V222L330 232" stroke="#FFFFFF" strokeWidth="2" />
                
                {/* Lightbulb Icon */}
                <circle cx="390" cy="222" r="15" stroke="#FFFFFF" fill="none" strokeWidth="2" />
                <path d="M390 207V202" stroke="#FFFFFF" strokeWidth="2" />
                <path d="M390 237V242" stroke="#FFFFFF" strokeWidth="2" />
                <path d="M375 222H370" stroke="#FFFFFF" strokeWidth="2" />
                <path d="M410 222H405" stroke="#FFFFFF" strokeWidth="2" />
                <path d="M380 212L375 207" stroke="#FFFFFF" strokeWidth="2" />
                <path d="M400 232L405 237" stroke="#FFFFFF" strokeWidth="2" />
                <path d="M400 212L405 207" stroke="#FFFFFF" strokeWidth="2" />
                <path d="M380 232L375 237" stroke="#FFFFFF" strokeWidth="2" />
                
                {/* Line Chart */}
                <path d="M150 300L200 320L250 270L300 350L350 300L400 330L450 280" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                
                {/* Bar Chart */}
                <rect x="200" y="370" width="20" height="30" fill="#FFFFFF" />
                <rect x="230" y="380" width="20" height="20" fill="#FFFFFF" />
                <rect x="260" y="360" width="20" height="40" fill="#FFFFFF" />
                <rect x="290" y="370" width="20" height="30" fill="#FFFFFF" />
                <rect x="320" y="350" width="20" height="50" fill="#FFFFFF" />
                <rect x="350" y="390" width="20" height="10" fill="#FFFFFF" />
                <rect x="380" y="365" width="20" height="35" fill="#FFFFFF" />
                
                {/* Axes and Labels */}
                <line x1="150" y1="400" x2="450" y2="400" stroke="#FFFFFF" strokeWidth="1" />
                <line x1="150" y1="250" x2="150" y2="400" stroke="#FFFFFF" strokeWidth="1" />
                
                <text x="175" y="420" fill="#FFFFFF" fontSize="8">01</text>
                <text x="235" y="420" fill="#FFFFFF" fontSize="8">02</text>
                <text x="295" y="420" fill="#FFFFFF" fontSize="8">03</text>
                <text x="355" y="420" fill="#FFFFFF" fontSize="8">04</text>
                <text x="415" y="420" fill="#FFFFFF" fontSize="8">05</text>
                
                <text x="130" y="390" fill="#FFFFFF" fontSize="8">10</text>
                <text x="130" y="350" fill="#FFFFFF" fontSize="8">20</text>
                <text x="130" y="310" fill="#FFFFFF" fontSize="8">30</text>
                <text x="130" y="270" fill="#FFFFFF" fontSize="8">40</text>
                
                {/* Pen Icon */}
                <path d="M500 700L520 680L540 700L520 720L500 700Z" fill="#FFFFFF" />
                <line x1="490" y1="710" x2="510" y2="690" stroke="#FFFFFF" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

const roiItems = [
  {
    title: "Substantial ROI",
    description: "The anticipated ROI of implementing TextAI is substantial. By reducing repetitive inquiries and streamlining support operations, businesses can achieve significant cost savings."
  },
  {
    title: "Enhanced Customer Satisfaction",
    description: "Enhanced customer satisfaction through instant responses and 24/7 availability further contributes to a positive ROI."
  },
  {
    title: "Optimized Operations",
    description: "TextAI empowers businesses to optimize their customer service operations and unlock new levels of efficiency and customer satisfaction."
  }
];

export default ExpectedROISection;
