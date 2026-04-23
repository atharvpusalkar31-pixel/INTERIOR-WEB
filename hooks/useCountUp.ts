import { useEffect, useState, useRef, RefObject } from 'react';

export function useCountUp(target: number, duration: number = 2000, triggerRef: RefObject<HTMLElement | null>) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = triggerRef.current;
    if (!node || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          hasAnimated.current = true;
          let startTime: number;
          
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // easeOutExpo
            const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
            
            setCount(Math.floor(easeOut * target));
            
            if (progress < duration) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };
          
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration, triggerRef]);

  return count;
}
