// hooks/useAutoScroll.ts
import { useEffect, useRef } from 'react';

export const useAutoScroll = (
  scrollSpeed: number = 1, 
  direction: 'left' | 'right' = 'left',
  pauseOnHover: boolean = true
) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollContent = scrollRef.current;

    if (!scrollContainer || !scrollContent) return;

    let scrollPos = 0;
    const contentWidth = scrollContent.offsetWidth;
    
    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollPos += scrollSpeed;
      
      // Reset position when reaching the end
      if (scrollPos >= contentWidth / 2) {
        scrollPos = 0;
      }
      
      scrollContent.style.transform = `translateX(${direction === 'left' ? -scrollPos : scrollPos}px)`;
      return requestAnimationFrame(scroll);
    };

    let animationFrameId = requestAnimationFrame(scroll);

    if (pauseOnHover) {
      const pauseScroll = () => {
        cancelAnimationFrame(animationFrameId);
      };
      
      const resumeScroll = () => {
        animationFrameId = requestAnimationFrame(scroll);
      };

      scrollContainer.addEventListener('mouseenter', pauseScroll);
      scrollContainer.addEventListener('mouseleave', resumeScroll);

      return () => {
        scrollContainer.removeEventListener('mouseenter', pauseScroll);
        scrollContainer.removeEventListener('mouseleave', resumeScroll);
        cancelAnimationFrame(animationFrameId);
      };
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [scrollSpeed, direction, pauseOnHover]);

  return { scrollRef, scrollContainerRef };
};