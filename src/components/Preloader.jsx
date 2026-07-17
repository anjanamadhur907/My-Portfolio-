import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const chars = textRef.current.querySelectorAll('.preloader-char');
    
    const tl = gsap.timeline({
      onComplete: () => {
        // Slide preloader up and out
        gsap.to(containerRef.current, {
          y: '-100%',
          duration: 1.1,
          ease: 'power4.inOut',
          onComplete: onComplete
        });
      }
    });

    // Initial state
    gsap.set(chars, { y: 120, opacity: 0 });
    gsap.set(lineRef.current, { scaleX: 0 });

    // Animation Timeline
    tl.to(chars, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power3.out',
      delay: 0.4
    })
    .to(lineRef.current, {
      scaleX: 1,
      transformOrigin: 'center',
      duration: 0.8,
      ease: 'power3.inOut'
    }, '-=0.4')
    .to(chars, {
      y: -50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.02,
      ease: 'power3.in',
      delay: 1.2
    })
    .to(lineRef.current, {
      scaleX: 0,
      duration: 0.5,
      ease: 'power3.in'
    }, '-=0.4');

  }, [onComplete]);

  const nameStr = "Madhur Anjana";

  return (
    <div ref={containerRef} className="preloader-overlay">
      <div className="preloader-content">
        <div ref={textRef} className="preloader-text-wrapper">
          {nameStr.split("").map((char, index) => {
            if (char === " ") {
              return <span key={index} className="preloader-space">&nbsp;</span>;
            }
            return (
              <span key={index} className="preloader-char-container">
                <span className="preloader-char">{char}</span>
              </span>
            );
          })}
        </div>
        <div ref={lineRef} className="preloader-underline"></div>
      </div>
    </div>
  );
}
