"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

/**
 * Scroll-linked drift for the hero: copy rises and fades a little as the
 * visitor scrolls past, the mascot sinks toward the ridge. Springs smooth it.
 */
export function HeroCopy({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  const y = useTransform(p, [0, 1], [0, -90]);
  const opacity = useTransform(p, [0, 0.8], [1, 0.15]);
  return (
    <motion.div ref={ref} className={className} style={reduced ? undefined : { y, opacity }}>
      {children}
    </motion.div>
  );
}

export function HeroMascot({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const s = useSpring(scrollY, { stiffness: 120, damping: 24, mass: 0.4 });
  const y = useTransform(s, [0, 700], [0, 70]);
  return (
    <motion.div className={className} style={reduced ? undefined : { y }}>
      {children}
    </motion.div>
  );
}
