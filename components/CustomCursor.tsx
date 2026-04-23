import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if device supports fine pointer (desktop)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let requestRef: number;
    let targetX = -100;
    let targetY = -100;
    
    const updateMousePosition = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!requestRef) {
        requestRef = requestAnimationFrame(renderLoop);
      }
    };
    
    const renderLoop = () => {
      setPosition({ x: targetX, y: targetY });
      requestRef = requestAnimationFrame(renderLoop);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        setHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      if (requestRef) cancelAnimationFrame(requestRef);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-[var(--accent)] rounded-full pointer-events-none z-[9999]"
        style={{ transform: `translate(${position.x - 4}px, ${position.y - 4}px)` }}
      />
      <div 
        className={`fixed top-0 left-0 w-9 h-9 border-[1.5px] border-[var(--accent)] rounded-full pointer-events-none z-[9999] transition-all duration-100 ease-out ${hovered ? 'scale-[1.6] opacity-60' : 'opacity-30 scale-100'}`}
        style={{ transform: `translate(${position.x - 18}px, ${position.y - 18}px)` }}
      />
    </>
  );
}
