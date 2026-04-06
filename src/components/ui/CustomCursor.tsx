"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

import Image from "next/image";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 }; // Slightly faster for responsiveness
  const scrollX = useSpring(cursorX, springConfig);
  const scrollY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    window.addEventListener("mousemove", moveCursor);
    
    // Select all interactive elements
    const refreshClickables = () => {
      const clickables = document.querySelectorAll('a, button, .interactive, [role="button"]');
      clickables.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    refreshClickables();

    // Use MutationObserver to handle dynamically added elements (like Reveal nodes)
    const observer = new MutationObserver(refreshClickables);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-12 h-12 z-[9999] pointer-events-none hidden md:flex items-center justify-center overflow-visible"
      style={{
        translateX: scrollX,
        translateY: scrollY,
        x: "-50%",
        y: "-50%",
        scale: isHovered ? 1.5 : 1,
      }}
    >
      <div className="relative w-full h-full drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] overflow-hidden">
        {/* We use object-cover and a scale shift to isolate the "D" icon from the full logo file */}
        <div className="absolute inset-0 scale-[2.5] origin-left translate-x-1">
          <Image 
            src="/images/logo.png" 
            alt="Cursor" 
            fill 
            className="object-contain brightness-120"
          />
        </div>
      </div>
      
      {/* Subtle outer glow on hover */}
      {isHovered && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.5 }}
          className="absolute inset-0 bg-gold/10 blur-xl rounded-full -z-10"
        />
      )}
    </motion.div>
  );
}
