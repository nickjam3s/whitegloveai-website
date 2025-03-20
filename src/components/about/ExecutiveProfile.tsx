
import React from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ExecutiveProfileProps {
  name: string;
  title: string;
  secondaryTitle?: string;
  image: string;
  imagePosition?: string;
}

const ExecutiveProfile: React.FC<ExecutiveProfileProps> = ({ 
  name, 
  title, 
  secondaryTitle, 
  image, 
  imagePosition = 'object-center'
}) => {
  return (
    <div className="bg-gradient-to-br from-[#7021EE]/10 to-transparent p-4 sm:p-6 rounded-xl border border-[#7021EE]/20 h-full flex flex-col">
      <div className="mb-4 sm:mb-5 relative overflow-hidden rounded-lg group">
        <AspectRatio ratio={1/1} className="bg-black/20">
          <img 
            src={image} 
            alt={name} 
            className={`w-full h-full object-cover ${imagePosition} transition-transform group-hover:scale-105 duration-500`}
          />
          {/* Purple overlay effect that's always visible but stronger on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#7021EE]/40 to-[#9b87f5]/20 mix-blend-overlay opacity-60 transition-opacity duration-300"></div>
          
          {/* Additional purple glow overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#7021EE]/70 to-[#9b87f5]/30 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        </AspectRatio>
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
