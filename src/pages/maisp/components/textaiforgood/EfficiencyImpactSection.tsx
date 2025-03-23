
import React from "react";

const EfficiencyImpactSection = () => {
  return (
    <section className="py-16 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Unlocking Efficiency and Impact
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left column with content */}
          <div className="col-span-12 md:col-span-7">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Customized Assistance</h3>
                <p className="text-gray-400 text-sm">
                  Our AI chatbots are trained on your organization's 
                  specific information, providing accurate and 
                  helpful responses to inquiries on your website.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Effortless Engagement</h3>
                <p className="text-gray-400 text-sm">
                  The chatbot answers questions 24/7, freeing up 
                  your team to focus on core activities and 
                  enhancing visitor engagement.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right column with SVG */}
          <div className="col-span-12 md:col-span-5">
            <svg width="100%" height="280" viewBox="0 0 650 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-full">
              {/* SVG network illustration with thicker strokes */}
              <path d="M400 50C400 61.0457 391.046 70 380 70C368.954 70 360 61.0457 360 50C360 38.9543 368.954 30 380 30C391.046 30 400 38.9543 400 50Z" stroke="white" strokeWidth="4"/>
              <path d="M400 350C400 361.046 391.046 370 380 370C368.954 370 360 361.046 360 350C360 338.954 368.954 330 380 330C391.046 330 400 338.954 400 350Z" stroke="white" strokeWidth="4"/>
              <path d="M250 200C250 211.046 241.046 220 230 220C218.954 220 210 211.046 210 200C210 188.954 218.954 180 230 180C241.046 180 250 188.954 250 200Z" stroke="white" strokeWidth="4"/>
              <path d="M550 200C550 211.046 541.046 220 530 220C518.954 220 510 211.046 510 200C510 188.954 518.954 180 530 180C541.046 180 550 188.954 550 200Z" stroke="white" strokeWidth="4"/>
              <path d="M400 200C400 211.046 391.046 220 380 220C368.954 220 360 211.046 360 200C360 188.954 368.954 180 380 180C391.046 180 400 188.954 400 200Z" stroke="white" strokeWidth="4"/>
              <path d="M190 50C190 61.0457 181.046 70 170 70C158.954 70 150 61.0457 150 50C150 38.9543 158.954 30 170 30C181.046 30 190 38.9543 190 50Z" stroke="white" strokeWidth="4"/>
              <path d="M190 350C190 361.046 181.046 370 170 370C158.954 370 150 361.046 150 350C150 338.954 158.954 330 170 330C181.046 330 190 338.954 190 350Z" stroke="white" strokeWidth="4"/>
              <path d="M610 50C610 61.0457 601.046 70 590 70C578.954 70 570 61.0457 570 50C570 38.9543 578.954 30 590 30C601.046 30 610 38.9543 610 50Z" stroke="white" strokeWidth="4"/>
              <path d="M610 350C610 361.046 601.046 370 590 370C578.954 370 570 361.046 570 350C570 338.954 578.954 330 590 330C601.046 330 610 338.954 610 350Z" stroke="white" strokeWidth="4"/>
              <line x1="230" y1="180" x2="230" y2="200" stroke="white" strokeWidth="4"/>
              <line x1="380" y1="70" x2="380" y2="180" stroke="white" strokeWidth="4"/>
              <line x1="380" y1="220" x2="380" y2="330" stroke="white" strokeWidth="4"/>
              <line x1="530" y1="70" x2="530" y2="180" stroke="white" strokeWidth="4"/>
              <line x1="530" y1="220" x2="530" y2="330" stroke="white" strokeWidth="4"/>
              <line x1="170" y1="70" x2="170" y2="330" stroke="white" strokeWidth="4"/>
              <line x1="170" y1="70" x2="380" y2="70" stroke="white" strokeWidth="4"/>
              <line x1="170" y1="330" x2="380" y2="330" stroke="white" strokeWidth="4"/>
              <line x1="380" y1="70" x2="590" y2="70" stroke="white" strokeWidth="4"/>
              <line x1="380" y1="330" x2="590" y2="330" stroke="white" strokeWidth="4"/>
              <line x1="230" y1="200" x2="360" y2="200" stroke="white" strokeWidth="4"/>
              <line x1="400" y1="200" x2="510" y2="200" stroke="white" strokeWidth="4"/>
              <line x1="250" y1="200" x2="360" y2="50" stroke="white" strokeWidth="4"/>
              <line x1="400" y1="50" x2="510" y2="200" stroke="white" strokeWidth="4"/>
              <line x1="250" y1="200" x2="360" y2="350" stroke="white" strokeWidth="4"/>
              <line x1="400" y1="350" x2="510" y2="200" stroke="white" strokeWidth="4"/>
              
              {/* Computer icon */}
              <rect x="205" y="185" width="50" height="30" rx="5" stroke="white" strokeWidth="4"/>
              <rect x="220" y="215" width="20" height="5" rx="2" stroke="white" strokeWidth="4"/>
              <line x1="230" y1="185" x2="230" y2="175" stroke="white" strokeWidth="4"/>
              
              {/* User icon */}
              <circle cx="380" cy="190" r="15" stroke="white" strokeWidth="4"/>
              <path d="M365 215C365 205 373 200 380 200C387 200 395 205 395 215" stroke="white" strokeWidth="4"/>
              
              {/* Cloud icon */}
              <path d="M530 185C535 180 545 180 550 185C555 175 570 175 575 185C580 185 585 190 585 195C585 205 575 210 565 210H520C510 210 505 200 510 195C510 190 515 185 530 185Z" stroke="white" strokeWidth="4"/>
              
              {/* Mobile icon */}
              <rect x="160" y="335" width="20" height="35" rx="3" stroke="white" strokeWidth="4"/>
              <line x1="170" y1="335" x2="170" y2="370" stroke="white" strokeWidth="4"/>
              
              {/* Image icon */}
              <rect x="365" y="335" width="30" height="30" rx="3" stroke="white" strokeWidth="4"/>
              <path d="M365 355L375 345L395 365" stroke="white" strokeWidth="4"/>
              <circle cx="385" cy="345" r="3" stroke="white" strokeWidth="4"/>
              
              {/* Chat icon */}
              <path d="M575 335C575 332.5 577.5 330 580 330H600C602.5 330 605 332.5 605 335V355C605 357.5 602.5 360 600 360H585L575 370V335Z" stroke="white" strokeWidth="4"/>
              <circle cx="585" cy="345" r="2" fill="white"/>
              <circle cx="592" cy="345" r="2" fill="white"/>
              <circle cx="599" cy="345" r="2" fill="white"/>
              
              {/* AI icon */}
              <rect x="365" y="35" width="30" height="30" rx="3" stroke="white" strokeWidth="4"/>
              <path d="M375 45L375 55" stroke="white" strokeWidth="4"/>
              <path d="M385 45L385 55" stroke="white" strokeWidth="4"/>
              <path d="M370 50L380 50" stroke="white" strokeWidth="4"/>
              <path d="M380 50L390 50" stroke="white" strokeWidth="4"/>
              
              {/* Chat bot icon */}
              <rect x="575" y="35" width="30" height="30" rx="3" stroke="white" strokeWidth="4"/>
              <circle cx="585" cy="45" r="3" fill="white"/>
              <circle cx="595" cy="45" r="3" fill="white"/>
              <path d="M580 55C580 55 590 60 600 55" stroke="white" strokeWidth="4"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EfficiencyImpactSection;
