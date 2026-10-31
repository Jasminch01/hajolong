import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { ServicesMap } from "@/components/HeroPanels";
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
        aside={<ServicesMap />}
      />

      <section id={agent.id} className="scroll-mt-20 bg-[var(--plane-5)] pt-10 pb-[calc(5rem+min(8.75vw,150px))] text-pine-ink" aria-labelledby="ai-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="flex items-start gap-4 sm:items-center">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/10 text-pine-ink">
                  <AgentIcon className="size-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h2 id="ai-title" className="font-display text-[clamp(2.2rem,4.2vw,3.4rem)] leading-[1.04] font-extrabold">
                  {agent.title}
                </h2>
              </div>
              <p className="mt-5 max-w-[40rem] text-lg text-pine-muted sm:pl-16">{agent.desc}</p>
            </div>
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
        {rest.map((s) => {
          const Icon = s.icon;
          return (
            <section
              key={s.id}
              id={s.id}
              aria-labelledby={`${s.id}-title`}
              className="reveal scroll-mt-20 border-b py-16 last:border-b-0 sm:py-20"
            >
              <div className="max-w-3xl">
                <div className="flex items-start gap-4 sm:items-center">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[var(--pine)] text-pine-ink">
                    <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h2 id={`${s.id}-title`} className="font-display text-[clamp(1.9rem,3.2vw,2.7rem)] leading-[1.06] font-extrabold">
                    {s.title}
                  </h2>
                </div>
                <p className="mt-4 max-w-[36rem] text-lg text-muted-foreground sm:pl-16">{s.desc}</p>
                <Button asChild variant="outline" className="btn-fill mt-7 sm:ml-16">
                  <Link href={`/contact?services=${s.id}`}>
                    Ask about this <ArrowRight />
                  </Link>
                </Button>
              </div>
            </section>
          );
        })}
      </div>

      <ClosingCall title="Not sure which of these you need?" body="Describe the problem instead. We'll tell you, in plain English, what we'd build and how long it would take, within 2 hours." action="Describe your problem" />
    </>
  );
}
