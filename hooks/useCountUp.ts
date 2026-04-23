import { useEffect, useState, RefObject, useRef } from 'react';

export function useCountUp(target: number, duration: number = 2000, triggerRef: RefObject<HTMLElement | null>) {
  const [count, setCount] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const node = triggerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Restart animation
          let startTime: number | null = null;
          
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // easeOutQuad
            const easeOut = percentage === 1 ? 1 : 1 - Math.pow(1 - percentage, 3);
            
            setCount(Math.floor(easeOut * target));
            
            if (progress < duration) {
              animationRef.current = window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };
          
          if (animationRef.current) cancelAnimationFrame(animationRef.current);
          animationRef.current = window.requestAnimationFrame(step);
        } else {
          // Reset count and cancel animation when out of view
          if (animationRef.current) cancelAnimationFrame(animationRef.current);
          setCount(0);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    
    return () => {
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [target, duration, triggerRef]);

  return count;
}
