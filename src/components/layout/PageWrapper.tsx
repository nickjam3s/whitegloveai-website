
import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PageWrapper = ({ children, className = '' }: PageWrapperProps) => {
  return (
    <div className={`min-h-screen bg-black ${className}`}>
      <div className="responsive-container section-spacing">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
