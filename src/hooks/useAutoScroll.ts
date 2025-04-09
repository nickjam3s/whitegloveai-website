// hooks/useAutoScroll.ts
import { useEffect, useRef } from 'react';

export const useAutoScroll = (
  scrollSpeed: number = 1, 
  direction: 'left' | 'right' = 'left',
  pauseOnHover: boolean = true
) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<string | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollContent = scrollRef.current;

    if (!scrollContainer || !scrollContent) return;
    
    // Step 1: Clone the content once
    const originalItems = Array.from(scrollContent.children);
    originalItems.forEach(item => {
      const clone = item.cloneNode(true) as HTMLElement;
      clone.setAttribute('data-clone', 'true');
      clone.setAttribute('aria-hidden', 'true');
      scrollContent.appendChild(clone);
    });
    
    // Step 2: Calculate the animation duration based on content width and desired speed
    // The lower the duration, the faster the scroll
    const totalWidth = scrollContent.scrollWidth / 2; // Half because we cloned
    const duration = totalWidth / (scrollSpeed * 10); // Adjust speed factor as needed
    
    // Step 3: Create a unique animation name (to avoid conflicts)
    const animationName = `scroll-${Math.floor(Math.random() * 10000)}`;
    animationRef.current = animationName;
    
    // Step 4: Create and insert the keyframe animation
    const keyframes = `
      @keyframes ${animationName} {
        0% { transform: translateX(0); }
        100% { transform: translateX(${direction === 'left' ? -totalWidth : totalWidth}px); }
      }
    `;
    
    const styleElement = document.createElement('style');
    styleElement.innerHTML = keyframes;
    document.head.appendChild(styleElement);
    
    // Step 5: Apply the animation to the scrolling content
    scrollContent.style.animation = `${animationName} ${duration}s linear infinite`;
    
    // Step 6: Handle pause on hover functionality
    if (pauseOnHover) {
      const pauseAnimation = () => {
        scrollContent.style.animationPlayState = 'paused';
      };
      
      const resumeAnimation = () => {
        scrollContent.style.animationPlayState = 'running';
      };
      
      scrollContainer.addEventListener('mouseenter', pauseAnimation);
      scrollContainer.addEventListener('mouseleave', resumeAnimation);
      
      return () => {
        scrollContainer.removeEventListener('mouseenter', pauseAnimation);
        scrollContainer.removeEventListener('mouseleave', resumeAnimation);
        if (styleElement && document.head.contains(styleElement)) {
          document.head.removeChild(styleElement);
        }
      };
    }
    
    return () => {
      if (styleElement && document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, [scrollSpeed, direction, pauseOnHover]);

  return { scrollRef, scrollContainerRef };
};