"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTime,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";
import ChatBubble from "@/components/ChatBubble";

const LINES = [
  "Hi, I'm Genghuli. Tell me what you want to build.",
  "My name comes from the Chakma genghulis, the minstrels who carry the old ballads of the hills.",
  "I'm the kind of agent Hajolong builds, trained on a company's own documents.",
  "Want an agent for your business? It can answer customers around the clock.",
  "Need a new web app or a redesign? Same team, same roadmap.",
];

const SIZES = "(min-width: 1024px) 320px, 220px";
const ease = { stiffness: 90, damping: 18, mass: 0.6 };
const faceSpring = { type: "spring" as const, stiffness: 220, damping: 22, mass: 0.7 };

/**
 * Genghuli, the Hajolong mascot, named after the Chakma genghulis (minstrels
 * who sing the old ballads of the Hill Tracts). He waves continuously, his
 * head, body and eyes follow the pointer on springs, and on hover he raises
 * his hand for a high five while his face eases into a grin. Click him for another line.
 * Every movement is driven by motion values, so nothing re-renders per frame.
 */
export default function Genghuli({ className }: { className?: string }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [line, setLine] = useState(0);
  const [hover, setHover] = useState(false);

  // pointer direction relative to Genghuli, -1..1 on each axis
  const lookX = useMotionValue(0);
  const lookY = useMotionValue(0);
  const sx = useSpring(lookX, ease);
  const sy = useSpring(lookY, ease);

  // hover blends the arm from waving into a held high five
  const hoverMV = useMotionValue(0);
  const hoverBlend = useSpring(hoverMV, { stiffness: 140, damping: 20 });
  // a click adds a short, excited burst to the wave
  const burst = useMotionValue(0);

  const time = useTime();

  const arm = useTransform(() => {
    const t = time.get();
    const h = hoverBlend.get();
    const wave = Math.sin(t / 300) * 12 + Math.sin(t / 900) * 3 - sy.get() * 6;
    const excited = Math.sin(t / 85) * 16 * burst.get();
    const highFive = -24 + Math.sin(t / 160) * 2.5;
    return (1 - h) * (wave + excited) + h * highFive;
  });
  const otherArm = useTransform(() => Math.sin(time.get() / 700 + 1.2) * 3 + sx.get() * 2);
  const breathe = useTransform(() => Math.sin(time.get() / 950) * 4);
  const headRotate = useTransform(() => sx.get() * 8 + Math.sin(time.get() / 1400) * 1.5);
  const bodyX = useTransform(sx, [-1, 1], [-10, 10]);
  const bodyRotate = useTransform(sx, [-1, 1], [-2.5, 2.5]);
  const headX = useTransform(sx, [-1, 1], [-7, 7]);
  const headY = useTransform(sy, [-1, 1], [-5, 5]);
  const eyesX = useTransform(sx, [-1, 1], [-14, 14]);
  const eyesY = useTransform(sy, [-1, 1], [-10, 10]);

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height * 0.3;
      lookX.set(Math.max(-1, Math.min(1, (e.clientX - cx) / (window.innerWidth * 0.45))));
      lookY.set(Math.max(-1, Math.min(1, (e.clientY - cy) / (window.innerHeight * 0.45))));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced, lookX, lookY]);

  const setHovering = (on: boolean) => {
    setHover(on);
    hoverMV.set(on ? 1 : 0);
  };

  const next = () => {
    setLine((l) => (l + 1) % LINES.length);
    if (!reduced) animate(burst, [0, 1, 0], { duration: 1.2, ease: "easeOut" });
  };

  return (
    <div
      ref={ref}
      className={cn("genghuli relative", className)}
      data-hover={hover}
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={() => setHovering(false)}
    >
      <motion.div
        className="absolute -top-4 right-[60%] z-10 hidden w-56 origin-bottom-right drop-shadow-[0_12px_18px_rgb(19_36_29/0.22)] sm:block sm:w-64"
        role="status"
        aria-live="polite"
        animate={reduced ? undefined : { y: hover ? -6 : 0, scale: hover ? 1.03 : 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <ChatBubble tail="right" className="bg-card px-4 py-3 text-[0.95rem] leading-snug" tailClass="text-card">
          <span className="label-caps mb-1 flex items-center gap-1.5 text-[0.65rem] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-lamp shadow-[0_0_0_3px_rgb(242_178_74/0.25)]" aria-hidden="true" />
            Genghuli
          </span>
          {LINES[line]}
        </ChatBubble>
      </motion.div>

      <motion.button
        type="button"
        onClick={next}
        onFocus={() => setHovering(true)}
        onBlur={() => setHovering(false)}
        aria-label="Ask Genghuli for another line"
        className="relative block aspect-[830/1100] w-full cursor-pointer rounded-3xl"
        style={{
          x: reduced ? 0 : bodyX,
          y: reduced ? 0 : breathe,
          rotate: reduced ? 0 : bodyRotate,
          filter:
            "hue-rotate(186deg) saturate(0.72) brightness(1.04) contrast(0.94) sepia(0.1) drop-shadow(0 18px 18px rgb(10 20 16 / 0.35))",
        }}
        whileTap={reduced ? undefined : { scale: 0.97 }}
      >
        <Image src="/images/robot_hi_torso.png" alt="Genghuli, the Hajolong mascot" fill sizes={SIZES} className="pointer-events-none object-contain" priority />
        <motion.span
          className="absolute inset-0"
          style={{ rotate: reduced ? 0 : otherArm, transformOrigin: "72.53% 55.27%" }}
        >
          <Image src="/images/robot_hi_arm_right.png" alt="" fill sizes={SIZES} className="pointer-events-none object-contain" priority />
        </motion.span>
        <motion.span
          className="absolute inset-0"
          style={{ rotate: reduced ? 0 : arm, transformOrigin: "34.46% 49.64%" }}
        >
          <Image src="/images/robot_hi_arm.png" alt="" fill sizes={SIZES} className="pointer-events-none object-contain" priority />
        </motion.span>
        <motion.span
          className="absolute inset-0"
          style={{
            rotate: reduced ? 0 : headRotate,
            x: reduced ? 0 : headX,
            y: reduced ? 0 : headY,
            transformOrigin: "56% 45.8%",
          }}
        >
          <Image src="/images/robot_hi_head.png" alt="" fill sizes={SIZES} className="pointer-events-none object-contain" priority />
          <svg viewBox="0 0 830 1100" className="pointer-events-none absolute inset-0 size-full" aria-hidden="true">
            <g transform="rotate(12.7 497 292)">
              <motion.g style={{ x: reduced ? 0 : eyesX, y: reduced ? 0 : eyesY }}>
                {/* One face that morphs: round eyes (thick capsule strokes) ease into happy
                    arcs, and the small smile widens into an open grin. Same path commands
                    in both states, so Motion interpolates the shapes point by point. */}
                <g className="genghuli-eyes" fill="none" stroke="#9ef0ff" strokeLinecap="round">
                  {[418, 574].map((cx) => (
                    <motion.path
                      key={cx}
                      initial={false}
                      animate={{
                        d: hover ? `M${cx - 26} 290 Q${cx} 260 ${cx + 26} 290` : `M${cx} 270 Q${cx} 282 ${cx} 294`,
                        strokeWidth: hover ? 17 : 38,
                      }}
                      transition={faceSpring}
                    />
                  ))}
                </g>
                <motion.path
                  stroke="#9ef0ff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={false}
                  animate={{
                    d: hover ? "M444 338 Q496 404 548 338" : "M462 352 Q496 378 530 352",
                    strokeWidth: hover ? 10 : 16,
                    fill: hover ? "rgba(158,240,255,1)" : "rgba(158,240,255,0)",
                  }}
                  transition={faceSpring}
                />
              </motion.g>
            </g>
          </svg>
        </motion.span>
      </motion.button>
    </div>
  );
}
