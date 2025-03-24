
import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const PageWrapper = ({ 
  children, 
  className = '', 
  fullWidth = false 
}: PageWrapperProps) => {
  return (
    <div className={`min-h-screen bg-black ${className}`}>
      <div className={`${fullWidth ? 'w-full' : 'responsive-container'} section-spacing`}>
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
