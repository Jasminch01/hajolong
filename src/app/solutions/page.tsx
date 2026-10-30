import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import AgentDemo from "@/components/AgentDemo";
import ClosingCall from "@/components/ClosingCall";
import { RidgeSeam } from "@/components/scenery/Ridges";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/content";

export const metadata = {
  title: "Solutions | Hajolong Solutions",
  description:
    "AI agents and workflow automation, custom web platforms, system redesigns, integrations, dashboards and consulting.",
};

export default function SolutionsPage() {
  const [agent, ...rest] = SERVICES;
  const AgentIcon = agent.icon;

  return (
    <>
      <PageHero
        title="AI agents first, and everything they need around them."
        lead="Six things we build with one senior team. Most projects combine two or three of them."
      >
        <nav aria-label="On this page" className="flex flex-wrap gap-2">
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-foreground/20 bg-card/70 px-3.5 py-1.5 text-[0.95rem] transition-colors hover:border-foreground/50 hover:bg-card"
            >
              {s.nav}
            </a>
          ))}
        </nav>
      </PageHero>

      <section id={agent.id} className="scroll-mt-20 bg-[var(--plane-5)] pt-10 pb-[calc(5rem+min(8.75vw,150px))] text-pine-ink" aria-labelledby="ai-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="grid size-12 place-items-center rounded-xl bg-white/10 text-pine-ink">
                <AgentIcon className="size-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h2 id="ai-title" className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.4rem)] leading-[1.04] font-extrabold">
                {agent.title}
              </h2>
              <p className="mt-5 max-w-[40rem] text-lg text-pine-muted">{agent.desc}</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {agent.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-lg">
                  <Check className="size-5 text-pine-muted" strokeWidth={2.5} aria-hidden="true" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-16">
            <AgentDemo />
          </div>
        </div>
      </section>

      <div className="relative">
        <RidgeSeam fill="var(--background)" plane={1} />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {rest.map((s, i) => {
          const Icon = s.icon;
          return (
            <section
              key={s.id}
              id={s.id}
              aria-labelledby={`${s.id}-title`}
              className="reveal grid scroll-mt-20 gap-8 border-b py-20 last:border-b-0 sm:py-24 lg:grid-cols-12"
            >
              <div className="lg:col-span-6">
                <span className="grid size-12 place-items-center rounded-xl bg-[var(--pine)] text-pine-ink">
                  <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h2 id={`${s.id}-title`} className="mt-6 font-display text-[clamp(1.9rem,3.2vw,2.7rem)] leading-[1.06] font-extrabold">
                  {s.title}
                </h2>
                <p className="mt-4 max-w-[36rem] text-lg text-muted-foreground">{s.desc}</p>
                <Button asChild variant="outline" className="mt-7">
                  <Link href={`/contact?services=${s.id}`}>
                    Ask about this <ArrowRight />
                  </Link>
                </Button>
              </div>
              <ul className={`grid content-center gap-3 sm:grid-cols-2 lg:col-span-5 ${i % 2 ? "lg:col-start-7" : "lg:col-start-8"}`}>
                {s.features.map((f) => (
                  <li key={f} className="cel flex items-center gap-3 px-4 py-4">
                    <Check className="size-[1.125rem] shrink-0 text-[var(--plane-4)] dark:text-pine-muted" strokeWidth={2.5} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <ClosingCall title="Not sure which of these you need?" body="Describe the problem instead. We'll tell you, in plain English, what we'd build and how long it would take, within 2 hours." action="Describe your problem" />
    </>
  );
}
