
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

    // Clear any previously cloned elements to prevent duplicates on re-renders
    const originalItemsCount = scrollContent.length;
    const existingClones = Array.from(contentRef.current.children).slice(originalItemsCount);
    existingClones.forEach(clone => clone.remove());

    // Clone enough items to ensure continuous scrolling
    // Create 2 complete sets of logos (original + 1 clone set is enough)
    scrollContent.slice(0, originalItemsCount).forEach((item) => {
      const clone = item.cloneNode(true);
      if (contentRef.current) {
        contentRef.current.appendChild(clone);
      }
    });

    // Setup animation based on direction and reverse options
    const setupAnimation = () => {
      if (scrollerRef.current && contentRef.current) {
        // Calculate the width of a single set of logos
        // We're using only 2 sets total (original + 1 clone)
        const contentWidth = contentRef.current.scrollWidth / 2;
        
        // Duration calculation to maintain consistent speed regardless of content width
        const duration = contentWidth / 100; 
        
        contentRef.current.style.animation = `${direction === 'horizontal' ? 'scroll' : 'scrollY'}${reverse ? 'Reverse' : ''} ${duration}s linear infinite`;
      }
    };

    setupAnimation();
    
    // Reset animation on window resize
    window.addEventListener('resize', setupAnimation);
    return () => window.removeEventListener('resize', setupAnimation);
  }, [reverse, direction, children]); // Add children to dependency array to re-run on content change

  return (
    <div 
      ref={scrollerRef}
      className={cn("scroller relative overflow-hidden", className)}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scrollReverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        @keyframes scrollY {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes scrollYReverse {
          from { transform: translateY(-50%); }
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
