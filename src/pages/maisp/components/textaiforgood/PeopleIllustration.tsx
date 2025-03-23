
import React from "react";

const PeopleIllustration = () => {
  return (
    <svg
      width="500"
      height="500"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md"
    >
      {/* People Illustration SVG */}
      <g>
        {/* Person 1 (leftmost, partially visible) */}
        <path d="M250 380 L250 440 L260 440 L260 380 Z" fill="#E6E6FF" />
        <path d="M260 380 L260 440 L270 440 L270 380 Z" fill="#E6E6FF" />
        <path d="M250 320 C250 340, 280 340, 280 320 L280 230 L250 230 Z" fill="#E6E6FF" />

        {/* Person 2 */}
        <circle cx="320" cy="170" r="30" fill="#E6E6FF" /> {/* Head */}
        <path d="M310 180 L308 178 A5 5 0 0 1 315 175 L313 177" fill="#000" /> {/* Smile */}
        <circle cx="310" cy="165" r="3" fill="#000" /> {/* Left eye */}
        <circle cx="330" cy="165" r="3" fill="#000" /> {/* Right eye */}
        
        <rect x="290" y="200" width="60" height="100" rx="5" fill="#E6E6FF" /> {/* Torso */}
        
        <path d="M290 210 L270 260" stroke="#E6E6FF" strokeWidth="10" /> {/* Left arm */}
        <path d="M350 210 L370 260" stroke="#E6E6FF" strokeWidth="10" /> {/* Right arm */}
        
        <path d="M300 300 L300 380" stroke="#E6E6FF" strokeWidth="10" /> {/* Left leg */}
        <path d="M340 300 L340 380" stroke="#E6E6FF" strokeWidth="10" /> {/* Right leg */}
        
        <path d="M300 380 L290 440" stroke="#E6E6FF" strokeWidth="10" /> {/* Left foot */}
        <path d="M340 380 L350 440" stroke="#E6E6FF" strokeWidth="10" /> {/* Right foot */}

        {/* Person 3 */}
        <circle cx="410" cy="150" r="30" fill="#E6E6FF" /> {/* Head */}
        <path d="M400 160 L398 158 A5 5 0 0 1 405 155 L403 157" fill="#000" /> {/* Smile */}
        <circle cx="400" cy="145" r="3" fill="#000" /> {/* Left eye */}
        <circle cx="420" cy="145" r="3" fill="#000" /> {/* Right eye */}
        
        <rect x="380" y="180" width="60" height="120" rx="5" fill="#E6E6FF" /> {/* Dress */}
        
        <path d="M380 200 L360 250" stroke="#E6E6FF" strokeWidth="10" /> {/* Left arm */}
        <path d="M440 200 L460 250" stroke="#E6E6FF" strokeWidth="10" /> {/* Right arm */}
        
        <path d="M390 300 L390 380" stroke="#E6E6FF" strokeWidth="10" /> {/* Left leg */}
        <path d="M430 300 L430 380" stroke="#E6E6FF" strokeWidth="10" /> {/* Right leg */}
        
        <path d="M390 380 L380 440" stroke="#E6E6FF" strokeWidth="10" /> {/* Left foot */}
        <path d="M430 380 L440 440" stroke="#E6E6FF" strokeWidth="10" /> {/* Right foot */}

        {/* Person 4 (with glasses) */}
        <circle cx="500" cy="160" r="30" fill="#E6E6FF" /> {/* Head */}
        <path d="M490 170 L488 168 A5 5 0 0 1 495 165 L493 167" fill="#000" /> {/* Smile */}
        
        {/* Glasses */}
        <rect x="480" y="155" width="15" height="10" rx="5" fill="transparent" stroke="#000" strokeWidth="2" />
        <rect x="505" y="155" width="15" height="10" rx="5" fill="transparent" stroke="#000" strokeWidth="2" />
        <path d="M495 160 L505 160" stroke="#000" strokeWidth="2" />
        
        <rect x="470" y="190" width="60" height="100" rx="5" fill="#E6E6FF" /> {/* Torso */}
        
        <path d="M470 210 L450 260" stroke="#E6E6FF" strokeWidth="10" /> {/* Left arm */}
        <path d="M530 210 L550 260" stroke="#E6E6FF" strokeWidth="10" /> {/* Right arm */}
        
        <path d="M480 290 L480 380" stroke="#E6E6FF" strokeWidth="10" /> {/* Left leg */}
        <path d="M520 290 L520 380" stroke="#E6E6FF" strokeWidth="10" /> {/* Right leg */}
        
        <path d="M480 380 L470 440" stroke="#E6E6FF" strokeWidth="10" /> {/* Left foot */}
        <path d="M520 380 L530 440" stroke="#E6E6FF" strokeWidth="10" /> {/* Right foot */}
      </g>
    </svg>
  );
};

export default PeopleIllustration;
