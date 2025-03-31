
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface InfiniteSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: number;
  reverse?: boolean;
  direction?: "horizontal" | "vertical";
  autoplay?: boolean;
}

export const InfiniteSlider = ({
  children,
  className,
  gap = 16,
  reverse = false,
  direction = "horizontal",
  autoplay = false,
  ...props
}: InfiniteSliderProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(autoplay);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Setup scroll animation
  const setupAnimation = () => {
    if (!contentRef.current) return;
    if (isScrolling) {
      // Calculate the width of a single set of logos
      const contentWidth = contentRef.current.scrollWidth / 5; // Now we have 5 sets
      // Duration calculation
      const duration = contentWidth / 100;
      
      contentRef.current.style.animation = `${direction === 'horizontal' ? 'scroll' : 'scrollY'}${reverse ? 'Reverse' : ''} ${duration}s linear infinite`;
    } else {
      contentRef.current.style.animation = 'none';
    }
  };

  // Clone items
  useEffect(() => {
    if (!contentRef.current) return;
    
    const scrollContent = Array.from(contentRef.current.children);
    if (scrollContent.length === 0) return;

    // Clear any previously cloned elements to prevent duplicates on re-renders
    const originalItemsCount = scrollContent.length;
    const existingClones = Array.from(contentRef.current.children).slice(originalItemsCount);
    existingClones.forEach(clone => clone.remove());

    // Clone enough items to ensure continuous scrolling
    // Create 5 complete sets of logos (original + 4 clone sets)
    for (let i = 0; i < 4; i++) {
      scrollContent.slice(0, originalItemsCount).forEach((item) => {
        const clone = item.cloneNode(true);
        if (contentRef.current) {
          contentRef.current.appendChild(clone);
        }
      });
    }
    
    // Set up initial animation state
    setupAnimation();
    
    // Reset animation on window resize
    window.addEventListener('resize', setupAnimation);
    return () => window.removeEventListener('resize', setupAnimation);
  }, [reverse, direction, children, isScrolling]); // Add isScrolling to dependencies

  // Set up intersection observer to detect when component is visible
  useEffect(() => {
    if (autoplay) return; // Skip if autoplay is enabled
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsScrolling(true);
        } else {
          setIsScrolling(false);
        }
      });
    }, { threshold: 0.1 });
    
    if (scrollerRef.current) {
      observer.observe(scrollerRef.current);
    }
    
    observerRef.current = observer;
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [autoplay]);

  return (
    <div 
      ref={scrollerRef}
      className={cn("scroller relative overflow-hidden", className)}
      onMouseEnter={() => !autoplay && setIsScrolling(true)}
      onMouseLeave={() => !autoplay && !observerRef.current && setIsScrolling(false)}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-80%); }
        }
        @keyframes scrollReverse {
          from { transform: translateX(-80%); }
          to { transform: translateX(0); }
        }
        @keyframes scrollY {
          from { transform: translateY(0); }
          to { transform: translateY(-80%); }
        }
        @keyframes scrollYReverse {
          from { transform: translateY(-80%); }
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
