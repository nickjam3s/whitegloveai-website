
import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface InfiniteSliderProps {
  children: React.ReactNode;
  initialOffsetX?: number;
  className?: string;
  contentClassName?: string;
  reverse?: boolean;
  gap?: number;
  duration?: number;
}

export const InfiniteSlider = ({
  children,
  initialOffsetX = 0,
  className,
  contentClassName,
  reverse = false,
  gap = 16,
  duration = 25,
}: InfiniteSliderProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || !scrollerRef.current) return;
    
    const scrollerContent = contentRef.current;
    const contentWidth = scrollerContent.offsetWidth;
    const direction = reverse ? -1 : 1;

    // Clone the content and double up on items to ensure a smooth infinite scroll
    scrollerContent.style.width = `${contentWidth}px`;
    const clonedContent = scrollerContent.cloneNode(true) as HTMLElement;
    scrollerRef.current.appendChild(clonedContent);

    const keyframes = {
      transform: [
        `translateX(${initialOffsetX}px)`,
        `translateX(${direction * -contentWidth}px)`,
      ],
    };

    const animation = scrollerRef.current.animate(keyframes, {
      duration: duration * 1000,
      iterations: Infinity,
      easing: "linear",
    });

    return () => {
      animation.cancel();
    };
  }, [initialOffsetX, reverse, duration]);

  return (
    <div className={cn("overflow-hidden relative", className)}>
      <div
        ref={scrollerRef}
        className="flex whitespace-nowrap flex-nowrap"
        style={{ gap }}
      >
        <div
          ref={contentRef}
          className={cn("flex items-center justify-center flex-nowrap", contentClassName)}
          style={{ gap }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
