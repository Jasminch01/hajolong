import Link from "next/link";
import { ArrowRight, Layers, ScanSearch, Route, Handshake } from "lucide-react";
import PageHero from "@/components/PageHero";
import { HowWeWork } from "@/components/HeroPanels";
import ProcessLine from "@/components/ProcessLine";
import ClosingCall from "@/components/ClosingCall";
import { RidgeSeam } from "@/components/scenery/Ridges";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Services | Hajolong Solutions",
  description:
    "Strategic consulting, technical roadmaps and a milestone-driven delivery process that ends with you owning everything.",
};

const pillars = [
  {
    icon: Layers,
    title: "Audience and customer growth",
    desc: "We find your highest-value audience, tune your acquisition funnels, and build platforms that turn visitors into paying clients.",
  },
  {
    icon: ScanSearch,
    title: "Stack evaluation and audits",
    desc: "Stop paying for overlapping, bloated SaaS tools. We review your infrastructure to cut duplicate costs and make your systems faster.",
  },
  {
    icon: Route,
    title: "Phased roadmaps",
    desc: "No months without results. We plan the work in two-week milestones so you see real progress from the first one.",
  },
  {
    icon: Handshake,
    title: "Long-term advisory",
    desc: "A virtual CTO when you need one: ongoing engineering guidance, code reviews and support as you scale.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Great software is useless
            <br className="hidden sm:block" /> if nobody uses it.
          </>
        }
        lead="So we pair senior engineering with practical growth consulting, and make sure what we build brings in revenue."
        aside={<HowWeWork />}
      >
        <Button asChild variant="lamp" size="lg">
          <Link href="/contact?services=consulting">
            Book a discovery call <ArrowRight />
          </Link>
        </Button>
      </PageHero>

      <section className="bg-[var(--plane-5)] pt-10 pb-[calc(5rem+min(8.75vw,150px))] text-pine-ink" aria-labelledby="consulting-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 id="consulting-title" className="reveal max-w-2xl font-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.06] font-extrabold">
            Consulting that starts from your numbers, not ours.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.title}
                  className="reveal bg-[var(--plane-5)] p-8 transition-colors duration-500 hover:bg-[color-mix(in_oklab,var(--plane-5)_88%,white_12%)] sm:p-10"
                  style={{ ["--delay" as string]: `${i * 60}ms` }}
                >
                  <Icon className="size-7 text-pine-muted" strokeWidth={1.6} aria-hidden="true" />
                  <h3 className="mt-6 font-display text-2xl font-bold">{p.title}</h3>
                  <p className="mt-3 max-w-md text-pine-muted">{p.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32" aria-labelledby="process-title">
        <RidgeSeam fill="var(--background)" plane={1} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal grid gap-8 lg:grid-cols-12 lg:items-end">
            <h2 id="process-title" className="font-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.06] font-extrabold lg:col-span-6">
              How a project runs, from first call to handoff.
            </h2>
            <p className="text-lg text-muted-foreground lg:col-span-5 lg:col-start-8">
              Transparent, milestone by milestone, and planned so you can predict what happens next.
            </p>
          </div>
          <div className="mt-16">
            <ProcessLine />
          </div>
        </div>
      </section>

      <ClosingCall
        title="Ready to grow faster?"
        body="Book a 30-minute discovery call with our principal engineers to look at your current systems and where they could take you."
        action="Book a discovery call"
      />
    </>
  );
}
