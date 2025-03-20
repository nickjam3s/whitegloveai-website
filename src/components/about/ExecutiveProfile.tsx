
import React from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Linkedin } from 'lucide-react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

interface ExecutiveProfileProps {
  name: string;
  title: string;
  secondaryTitle?: string;
  image: string;
  imagePosition?: string;
  linkedinUrl?: string;
}

const ExecutiveProfile: React.FC<ExecutiveProfileProps> = ({ 
  name, 
  title, 
  secondaryTitle, 
  image, 
  imagePosition = 'object-center',
  linkedinUrl
}) => {
  return (
    <div className="bg-gradient-to-br from-[#7021EE]/10 to-transparent p-4 sm:p-6 rounded-xl border border-[#7021EE]/20 h-full flex flex-col relative group">
      <div className="mb-4 sm:mb-5 relative overflow-hidden rounded-lg group executive-profile-image">
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
      
      {linkedinUrl && (
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <HoverCard>
            <HoverCardTrigger asChild>
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-[#7021EE] transition-colors duration-300 linkedin-icon-hover"
                aria-label={`${name}'s LinkedIn profile`}
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="bg-gray-900 border border-[#7021EE]/30 text-white p-2">
              View LinkedIn Profile
            </HoverCardContent>
          </HoverCard>
        </div>
      )}
      
      {/* Overlay for the entire card that makes it clickable to LinkedIn */}
      {linkedinUrl && (
        <a 
          href={linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute inset-0 z-10 cursor-pointer" 
          aria-label={`View ${name}'s LinkedIn profile`}
        >
          <span className="sr-only">View LinkedIn Profile</span>
        </a>
      )}
    </div>
  );
};

export default ExecutiveProfile;
