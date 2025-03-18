
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
      className="glass-card overflow-hidden cursor-pointer group relative rounded-lg border border-[#333333] hover:border-[#7021EE]/40 transition-all duration-300"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#320B70] to-black">
        <div className="w-full h-full relative p-4">
          <div className="w-full h-full overflow-hidden rounded-md relative">
            <div className="absolute inset-0 bg-[#9b87f5]/20 z-10 mix-blend-overlay"></div>
            <img 
              src={image} 
              alt={`${name} - ${title}`}
              className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#7021EE]/40 to-[#320B70]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md z-20"></div>
          </div>
        </div>
      </div>
      <div className="p-6 bg-[#111111]">
        <h3 className="text-xl font-bold text-white mb-1 font-sora">{name}</h3>
        <p className="text-[#7021EE] font-medium mb-1 font-sora">{title}</p>
        {secondaryTitle && (
          <p className="text-[#7021EE] text-sm font-medium mb-2 font-sora">{secondaryTitle}</p>
        )}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white hover:text-[#7021EE] transition-colors mt-2 group-hover:text-[#9b87f5] linkedin-icon-hover font-sora"
          aria-label={`${name}'s LinkedIn profile`}
        >
          <Linkedin className="w-4 h-4" />
          <span className="text-sm">LinkedIn</span>
        </a>
      </div>
    </motion.div>
  );
};

export default ExecutiveProfile;
