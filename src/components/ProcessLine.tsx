"use client";

import { useRef } from "react";
import { KeyRound } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { PROCESS } from "@/lib/content";

/**
 * The delivery process as one continuous line that ends at the handoff:
 * the code, data and design become the client's. The line draws itself as
 * the visitor scrolls through the section, over a faint track.
 */
export default function ProcessLine() {
  const ref = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const draw = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.5 });

  return (
    <ol ref={ref} className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
      {/* the track: vertical on phones, horizontal from md up */}
      <span
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[1.15rem] w-[2px] rounded-full bg-border lg:top-[1.15rem] lg:right-[10%] lg:bottom-auto lg:h-[2px] lg:w-auto"
      />
      {/* the drawn line, following the scroll */}
      <motion.span
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[1.15rem] w-[2px] origin-top rounded-full bg-[linear-gradient(to_bottom,var(--border),var(--foreground))] lg:hidden"
        style={{ scaleY: reduced ? 1 : draw }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute top-[1.15rem] right-[10%] left-[1.15rem] hidden h-[2px] origin-left rounded-full bg-[linear-gradient(to_right,var(--border),var(--foreground))] lg:block"
        style={{ scaleX: reduced ? 1 : draw }}
      />
      {PROCESS.map((step, i) => (
        <li key={step.title} className="reveal relative pl-14 lg:pl-0" style={{ ["--delay" as string]: `${i * 70}ms` }}>
          <span className="absolute top-0 left-0 grid size-[2.3rem] place-items-center rounded-full border-2 border-foreground/70 bg-background font-display text-lg font-bold tabular-nums lg:relative">
            {i + 1}
          </span>
          <h3 className="mt-0 font-display text-xl font-bold lg:mt-5">{step.title}</h3>
          <p className="mt-2 text-muted-foreground">{step.desc}</p>
        </li>
      ))}
      <li className="reveal relative pl-14 lg:pl-0" style={{ ["--delay" as string]: "300ms" }}>
        <span className="absolute top-0 left-0 grid size-[2.3rem] place-items-center rounded-full bg-[var(--pine)] text-pine-ink lg:relative">
          <KeyRound className="size-[1.125rem]" aria-hidden="true" />
        </span>
        <h3 className="mt-0 font-display text-xl font-bold lg:mt-5">Handoff: it&rsquo;s yours</h3>
        <p className="mt-2 text-muted-foreground">
          Every line of code, every design file and all of your data belong to you, on open standards with no lock-in.
        </p>
      </li>
    </ol>
  );
}
