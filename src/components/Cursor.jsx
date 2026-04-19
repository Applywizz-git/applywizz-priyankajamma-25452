import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.1,
      });

      gsap.to(follower, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    // Hover effects for all buttons and links
    const links = document.querySelectorAll('a, button, .hover-target');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(follower, {
          scale: 4,
          backgroundColor: 'rgba(124, 58, 237, 0.2)',
          border: 'none'
        });
      });
      link.addEventListener('mouseleave', () => {
        gsap.to(follower, {
          scale: 1,
          backgroundColor: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.4)'
        });
      });
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full z-[10000] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-white/20 rounded-full z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default Cursor;
