"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FileText, UserRound, Database, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import ChatBubble from "@/components/ChatBubble";

type Trace = { icon: typeof FileText; text: string };

const SCENARIOS: { question: string; answer: string; trace: Trace }[] = [
  {
    question: "What can Hajolong build for us?",
    answer:
      "Custom web platforms, AI agents that support your customers around the clock, database and reporting systems, and complete redesigns of slow legacy software. We handle everything from design to deployment.",
    trace: { icon: FileText, text: "Answered from services-overview.pdf" },
  },
  {
    question: "How does an AI agent save us money?",
    answer:
      "It resolves up to 80% of routine customer questions at any hour, captures qualified leads while you sleep, and writes them straight into your CRM.",
    trace: { icon: Database, text: "Lead saved to CRM" },
  },
  {
    question: "Can you redesign our old system without losing data?",
    answer:
      "Yes. We migrate every existing record, rebuild the interface so it is fast again, and switch over with zero downtime.",
    trace: { icon: FileText, text: "Answered from migration-guide.md" },
  },
  {
    question: "I need to talk to someone about pricing.",
    answer:
      "Of course. I've passed this conversation to the team with your details, and an engineer will reply with a plain-English assessment within 2 hours.",
    trace: { icon: UserRound, text: "Handed to a person with full context" },
  },
];

const CALLOUTS = [
  { title: "Runs on proven models", desc: "Built on Google and Amazon AI, fine-tuned for you." },
  { title: "Trained on your documents", desc: "Answers come from your own files, not the open web." },
  { title: "Works in your tools", desc: "Writes leads to your CRM and books calls." },
  { title: "Knows when to hand off", desc: "Passes hard questions to a person, with the full context." },
];

export default function AgentDemo() {
  const [active, setActive] = useState(0);
  const [typed, setTyped] = useState(SCENARIOS[0].answer.length);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const play = (i: number) => {
    setActive(i);
    if (timer.current) clearInterval(timer.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(SCENARIOS[i].answer.length);
      return;
    }
    setTyped(0);
    const full = SCENARIOS[i].answer.length;
    timer.current = setInterval(() => {
      setTyped((t) => {
        const n = Math.min(full, t + 3);
        if (n >= full && timer.current) clearInterval(timer.current);
        return n;
      });
    }, 16);
  };

  useEffect(() => () => {
    if (timer.current) clearInterval(timer.current);
  }, []);

  const chipId = useId();
  const s = SCENARIOS[active];
  const done = typed >= s.answer.length;
  const TraceIcon = s.trace.icon;

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,34rem)_1fr] lg:gap-6">
      {/* left call-outs */}
      <ul className="hidden flex-col justify-around gap-6 lg:flex">
        {CALLOUTS.slice(0, 2).map((c) => (
          <Callout key={c.title} {...c} side="left" />
        ))}
      </ul>

      <div className="reveal">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[color-mix(in_oklab,var(--plane-5)_70%,#000_30%)] shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_30px_60px_-30px_rgb(0_0_0/0.7)] dark:bg-card">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3.5">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-full bg-white/10 text-pine-ink">
                <Sparkles className="size-[1.125rem]" aria-hidden="true" />
              </span>
              <div className="leading-tight">
                <div className="font-semibold text-pine-ink">Hajolong assistant</div>
                <div className="flex items-center gap-1.5 text-sm text-pine-muted">
                  <span className="size-1.5 rounded-full bg-lamp" aria-hidden="true" /> Online
                </div>
              </div>
            </div>
            <span className="label-caps text-[0.65rem] text-pine-muted">Example conversation</span>
          </div>

          <div
            className="flex min-h-[19rem] flex-col gap-5 px-5 py-6 [--bot-bubble:color-mix(in_oklab,var(--plane-5)_86%,white)]"
            aria-live="polite"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                className="flex flex-col gap-5"
                exit={{ opacity: 0, y: -6, transition: { duration: 0.15 } }}
              >
                {/* each bubble grows out of its own tail */}
                <motion.div
                  className="ml-auto max-w-[85%] origin-bottom-right"
                  initial={{ opacity: 0, scale: 0.9, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", bounce: 0.25, visualDuration: 0.35 }}
                >
                  <ChatBubble tail="right" className="bg-mist text-foreground dark:bg-secondary dark:text-secondary-foreground" tailClass="text-mist dark:text-secondary">
                    {s.question}
                  </ChatBubble>
                </motion.div>
                <motion.div
                  className="max-w-[92%] origin-bottom-left"
                  initial={{ opacity: 0, scale: 0.9, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", bounce: 0.25, visualDuration: 0.35, delay: 0.18 }}
                >
                  <ChatBubble tail="left" className="bg-[var(--bot-bubble)] py-3 text-pine-ink" tailClass="text-[var(--bot-bubble)]">
                    <span className={cn(!done && "caret")}>{s.answer.slice(0, typed)}</span>
                  </ChatBubble>
                </motion.div>
                <motion.div
                  className="flex w-fit items-center gap-2 rounded-full border border-pine-muted/35 px-3 py-1 text-sm text-pine-muted"
                  initial={false}
                  animate={{ opacity: done ? 1 : 0, y: done ? 0 : 4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <TraceIcon className="size-3.5" aria-hidden="true" />
                  {s.trace.text}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="border-t border-white/10 p-3">
            <p className="px-2 pb-2 text-sm text-pine-muted">Try a question</p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Example questions">
              {SCENARIOS.map((sc, i) => (
                <button
                  key={sc.question}
                  type="button"
                  onClick={() => play(i)}
                  aria-pressed={i === active}
                  className={cn(
                    "relative rounded-full border px-3.5 py-1.5 text-left text-[0.9rem] transition-colors duration-300",
                    i === active
                      ? "border-transparent text-pine-ink"
                      : "border-white/15 text-pine-muted hover:border-white/35 hover:text-pine-ink"
                  )}
                >
                  {i === active && (
                    <motion.span
                      layoutId={`chip-${chipId}`}
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full border border-pine-ink/70 bg-pine-ink/10"
                      transition={{ type: "spring", bounce: 0.2, visualDuration: 0.35 }}
                    />
                  )}
                  <span className="relative">{sc.question}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-3 text-center text-sm text-pine-muted">
          An illustration of how our agents behave. File names and actions are examples.
        </p>
      </div>

      {/* right call-outs; on smaller screens all four sit below the demo */}
      <ul className="hidden flex-col justify-around gap-6 lg:flex">
        {CALLOUTS.slice(2).map((c) => (
          <Callout key={c.title} {...c} side="right" />
        ))}
      </ul>
      <ul className="grid gap-5 sm:grid-cols-2 lg:hidden">
        {CALLOUTS.map((c) => (
          <Callout key={c.title} {...c} side="none" />
        ))}
      </ul>
    </div>
  );
}

function Callout({ title, desc, side }: { title: string; desc: string; side: "left" | "right" | "none" }) {
  return (
    <li className={cn("reveal relative", side === "left" && "pr-10 text-right", side === "right" && "pl-10")}>
      {side !== "none" && (
        <span
          aria-hidden="true"
          className={cn(
            "absolute top-3 h-px w-8 bg-pine-muted/60 after:absolute after:top-1/2 after:size-1.5 after:-translate-y-1/2 after:rounded-full after:bg-pine-muted",
            side === "left" ? "right-0 after:right-0" : "left-0 after:left-0"
          )}
        />
      )}
      <div className="flex items-center gap-1.5 font-display text-xl font-bold text-pine-ink lg:inline-flex">
        {title}
      </div>
      <p className="mt-1 text-pine-muted">{desc}</p>
    </li>
  );
}
