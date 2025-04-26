'use client';
import { useEffect, useRef, useState } from 'react';
import styles from '@styles/Home/AutoScrollCards.module.css';

export default function AutoScrollCards({ children, speed = 30 }) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    // Clone the children for seamless looping
    const originalContent = content.innerHTML;
    content.innerHTML = originalContent + originalContent;

    let scrollPosition = 0;
    let animationFrame;
    let lastTime;

    const scroll = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;

      if (!isHovered) {
        scrollPosition += (speed * deltaTime) / 1000;
        const maxScroll = content.scrollWidth / 2;

        if (scrollPosition >= maxScroll) {
          // When we reach halfway (original content width), reset to start
          scrollPosition = 0;
          container.scrollLeft = 0;
        } else {
          container.scrollLeft = scrollPosition;
        }
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [speed, isHovered]);

  return (
    <div 
      ref={containerRef}
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        ref={contentRef}
        className={styles.content}
      >
        {children}
      </div>
    </div>
  );
}