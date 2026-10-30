"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue, useTransform } from "motion/react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { SERVICES, type ServiceId } from "@/lib/content";
import { cn } from "@/lib/utils";

export function estimateWeeks(ids: string[]) {
  const sum = ids.reduce((acc, id) => acc + (SERVICES.find((s) => s.id === id)?.weeks ?? 1), 0);
  return Math.max(3, Math.min(8, sum - (ids.length > 2 ? 2 : 0)));
}

export default function ScopeEstimator() {
  const [picked, setPicked] = useState<ServiceId[]>(["ai", "web"]);

  const toggle = (id: ServiceId) =>
    setPicked((cur) =>
      cur.includes(id) ? (cur.length > 1 ? cur.filter((x) => x !== id) : cur) : [...cur, id]
    );

  const weeks = estimateWeeks(picked);
  // the estimate counts toward its new value instead of jumping
  const weeksMV = useMotionValue(weeks);
  const range = useTransform(() => {
    const w = Math.round(weeksMV.get());
    return `${w}\u2013${w + 2}`;
  });
  useEffect(() => {
    const controls = animate(weeksMV, weeks, { duration: 0.5, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [weeks, weeksMV]);
  const href = `/contact?services=${picked.join(",")}`;

  return (
    <div className="grid items-start gap-6 lg:grid-cols-12">
      <fieldset className="lg:col-span-7">
        <legend className="sr-only">Pick what your project needs</legend>
        <ul className="grid gap-2.5">
          {SERVICES.map((s) => {
            const on = picked.includes(s.id);
            const Icon = s.icon;
            return (
              <li key={s.id}>
                <label
                  htmlFor={`scope-${s.id}`}
                  className={cn(
                    "cel cel-lift flex cursor-pointer items-center gap-4 p-4 sm:p-5",
                    on && "border-foreground/45"
                  )}
                >
                  <span
                    className={cn(
                      "grid size-10 shrink-0 place-items-center rounded-lg transition-colors duration-300",
                      on ? "bg-[var(--pine)] text-pine-ink" : "bg-muted text-muted-foreground"
                    )}
                  >
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold">{s.title}</span>
                    <span className="block text-[0.95rem] text-muted-foreground">{s.short}</span>
                  </span>
                  <Checkbox
                    id={`scope-${s.id}`}
                    checked={on}
                    onCheckedChange={() => toggle(s.id)}
                    className="size-5"
                  />
                </label>
              </li>
            );
          })}
        </ul>
      </fieldset>

      <aside className="cel-pine p-7 sm:p-8 lg:sticky lg:top-24 lg:col-span-5" aria-live="polite">
        <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-5">
          <h3 className="font-display text-2xl font-bold">Your scope</h3>
          <span className="text-sm text-pine-muted tabular-nums">
            {picked.length} {picked.length === 1 ? "part" : "parts"}
          </span>
        </div>

        <div className="border-b border-white/10 py-6">
          <p className="text-sm text-pine-muted">Estimated delivery</p>
          <p className="mt-1 font-display text-5xl font-extrabold tabular-nums">
            <motion.span>{range}</motion.span>
            <span className="ml-2 font-sans text-xl font-medium text-pine-muted">weeks</span>
          </p>
          <p className="mt-2 text-[0.95rem] text-pine-muted">In two-week milestones, with a review call every week.</p>
        </div>

        <div className="py-6">
          <p className="text-sm text-pine-muted">Who works on it</p>
          <ul className="mt-3 grid">
            <AnimatePresence initial={false}>
              {[
                "1 principal technical director",
                "2 senior full-stack engineers",
                ...(picked.includes("ai") ? ["1 dedicated AI agent specialist"] : []),
                "A UI/UX designer and a QA specialist",
              ].map((r) => (
                <motion.li
                  key={r}
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="flex items-center gap-2.5 py-1">
                    <Check className="size-4 text-pine-muted" strokeWidth={2.5} aria-hidden="true" />
                    {r}
                  </span>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>

        <Button asChild variant="lamp" size="lg" className="w-full">
          <Link href={href}>
            Send this scope to the team <ArrowRight />
          </Link>
        </Button>
        <p className="mt-3 text-center text-sm text-pine-muted">No commitment. Free technical review.</p>
      </aside>
    </div>
  );
}
