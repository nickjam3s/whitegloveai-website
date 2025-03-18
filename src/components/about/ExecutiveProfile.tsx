
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

interface ExecutiveProfileProps {
  name: string;
  title: string;
  secondaryTitle?: string;
  image: string;
  linkedin: string;
}

const ExecutiveProfile: React.FC<ExecutiveProfileProps> = ({ name, title, secondaryTitle, image, linkedin }) => {
  return (
    <div className="bg-gradient-to-br from-[#7021EE]/10 to-transparent p-4 sm:p-6 rounded-xl border border-[#7021EE]/20 h-full flex flex-col">
      <div className="mb-4 sm:mb-5 relative overflow-hidden rounded-lg aspect-square">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#7021EE] transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{name}</h3>
      <div className="flex-grow">
        <p className="text-sm sm:text-base text-[#7021EE] font-medium">{title}</p>
        {secondaryTitle && (
          <p className="text-sm sm:text-base text-[#7021EE] font-medium mt-0.5">{secondaryTitle}</p>
        )}
      </div>
    </div>
  );
};

export default ExecutiveProfile;
