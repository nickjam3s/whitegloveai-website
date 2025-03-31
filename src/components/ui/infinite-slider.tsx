
import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface InfiniteSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: number;
  reverse?: boolean;
  direction?: "horizontal" | "vertical";
}

export const InfiniteSlider = ({
  children,
  className,
  gap = 16,
  reverse = false,
  direction = "horizontal",
  ...props
}: InfiniteSliderProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || !scrollerRef.current) return;
    
    const scrollContent = Array.from(contentRef.current.children);
    if (scrollContent.length === 0) return;

    // Clone multiple sets to ensure a smooth infinite scroll
    // Create 4 complete sets of the logos
    for (let i = 0; i < 3; i++) {
      scrollContent.forEach((item) => {
        const clone = item.cloneNode(true);
        if (contentRef.current) {
          contentRef.current.appendChild(clone);
        }
      });
    }

    // Setup animation based on direction and reverse options
    const setupAnimation = () => {
      if (scrollerRef.current && contentRef.current) {
        // Calculate the width of a single set of logos (total width divided by 4 sets)
        const contentWidth = contentRef.current.scrollWidth / 4;
        
        // Increase speed by reducing the duration (from 175 to 100)
        const duration = contentWidth / 100; 
        
        // Use linear infinite animation to ensure continuous scrolling
        contentRef.current.style.animation = `scroll${direction === 'horizontal' ? 'X' : 'Y'}${reverse ? 'Reverse' : ''} ${duration}s linear infinite`;
      }
    };

    setupAnimation();
    
    // Reset animation on window resize
    window.addEventListener('resize', setupAnimation);
    return () => window.removeEventListener('resize', setupAnimation);
  }, [reverse, direction]);

  return (
    <div 
      ref={scrollerRef}
      className={cn("scroller relative overflow-hidden", className)}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scrollX {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }
        @keyframes scrollXReverse {
          from { transform: translateX(-25%); }
          to { transform: translateX(0); }
        }
        @keyframes scrollY {
          from { transform: translateY(0); }
          to { transform: translateY(-25%); }
        }
        @keyframes scrollYReverse {
          from { transform: translateY(-25%); }
          to { transform: translateY(0); }
        }
      `}} />
      <div 
        ref={contentRef}
        className={cn(
          "scroller-content flex",
          direction === "horizontal" ? "flex-row" : "flex-col"
        )}
        style={{
          gap: `${gap}px`,
          paddingRight: direction === "horizontal" ? `${gap}px` : 0,
          paddingBottom: direction === "vertical" ? `${gap}px` : 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};
