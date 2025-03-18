
import React from 'react';
import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExecutiveProfileProps {
  name: string;
  title: string;
  image: string;
  linkedin: string;
  secondaryTitle?: string;
}

const ExecutiveProfile: React.FC<ExecutiveProfileProps> = ({ 
  name, 
  title, 
  image, 
  linkedin,
  secondaryTitle 
}) => {
  return (
    <motion.div
      className="glass-card overflow-hidden cursor-pointer group relative rounded-lg"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-square overflow-hidden bg-[#320B70]">
        <div className="w-full h-full relative">
          <img 
            src={image} 
            alt={`${name} - ${title}`}
            className="w-full h-full object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-300"
          />
          <div className="absolute inset-0 bg-[#7021EE]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
      <div className="p-6 bg-[#111111] border-t border-[#7021EE]/20">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-[#7021EE] font-medium mb-1">{title}</p>
        {secondaryTitle && (
          <p className="text-[#7021EE] text-sm font-medium mb-2">{secondaryTitle}</p>
        )}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white hover:text-[#7021EE] transition-colors mt-2 group-hover:text-[#9b87f5] linkedin-icon-hover"
        >
          <Linkedin className="w-4 h-4" />
          <span className="text-sm">LinkedIn</span>
        </a>
      </div>
    </motion.div>
  );
};

export default ExecutiveProfile;
