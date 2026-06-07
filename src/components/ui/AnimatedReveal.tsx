"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export default function AnimatedReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: AnimatedRevealProps) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Trigger 120px BEFORE the element enters the viewport so animation
  // is already running when the user sees it — no more "pop-in" on fast scroll
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  const directionMap = {
    up:    { y: 28, x: 0 },
    down:  { y: -28, x: 0 },
    left:  { y: 0, x: 28 },
    right: { y: 0, x: -28 },
  };

  // If user prefers reduced motion, skip animation entirely
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: offset.y,
        x: offset.x,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : { opacity: 0, y: offset.y, x: offset.x }
      }
      transition={{
        // Spring physics = natural deceleration, no cubic-bezier guessing
        type: "spring",
        stiffness: 80,
        damping: 20,
        mass: 0.8,
        delay,
      }}
      style={{
        // GPU compositing hint — prevents repaint during scroll
        willChange: "opacity, transform",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
