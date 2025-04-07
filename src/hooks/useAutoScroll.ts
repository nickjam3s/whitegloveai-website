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

    // Clone the content for seamless scrolling
    const clone = scrollContent.cloneNode(true) as HTMLElement;
    scrollContainer.appendChild(clone);

    let animationFrameId: number;
    let scrollPos = 0;

    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollPos += scrollSpeed;
      if (scrollPos >= scrollContent.offsetWidth) {
        scrollPos = 0;
      }
      
      scrollContainer.scrollLeft = scrollPos;
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Start scrolling
    animationFrameId = requestAnimationFrame(scroll);

    // Pause on hover if enabled
    if (pauseOnHover) {
      const pauseScroll = () => cancelAnimationFrame(animationFrameId);
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
