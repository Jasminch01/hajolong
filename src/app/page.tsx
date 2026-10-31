import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import AgentDemo from "@/components/AgentDemo";
import ServiceList from "@/components/ServiceList";
import ProcessLine from "@/components/ProcessLine";
import ScopeEstimator from "@/components/ScopeEstimator";
import ClosingCall from "@/components/ClosingCall";
import { RidgeSeam } from "@/components/scenery/Ridges";
import { Button } from "@/components/ui/button";
import { PRINCIPLES } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* The agent at work, on the nearest forest plane */}
      <section className="bg-[var(--plane-5)] pt-10 pb-[calc(5rem+min(8.75vw,150px))] text-pine-ink" aria-labelledby="agent-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal mx-auto max-w-3xl text-center">
            <h2 id="agent-title" className="font-display text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[1.04] font-extrabold">
              An agent trained on your business, not the internet.
            </h2>
            <p className="mx-auto mt-5 max-w-[40rem] text-lg text-pine-muted">
              We start from proven models from Google and Amazon, fine-tune them on your documents, and connect them to
              the tools your team already uses. Ask it something.
            </p>
          </div>
          <div className="mt-14">
            <AgentDemo />
          </div>
        </div>
      </section>

      {/* Everything around the agent */}
      <section className="relative pt-24 pb-[calc(5rem+min(8.75vw,150px))] sm:pt-32" aria-labelledby="services-title">
        <RidgeSeam fill="var(--background)" plane={1} />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <div className="reveal lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 id="services-title" className="font-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.06] font-extrabold">
                And everything around the agent.
              </h2>
              <p className="mt-5 max-w-md text-lg text-muted-foreground">
                The same team builds the platform your agent lives in, the systems it talks to and the dashboards you
                read the results on.
              </p>
              <Button asChild variant="outline" size="lg" className="btn-fill mt-8">
                <Link href="/solutions">
                  See every solution <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-8">
            <ServiceList />
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="relative bg-muted pt-24 pb-[calc(5rem+min(8.75vw,150px))] sm:pt-32" aria-labelledby="process-title">
        <RidgeSeam fill="var(--muted)" plane={2} flip />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal grid gap-8 lg:grid-cols-12 lg:items-end">
            <h2 id="process-title" className="font-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.06] font-extrabold lg:col-span-6">
              Senior engineers, plain English, and code that&rsquo;s yours.
            </h2>
            <p className="text-lg text-muted-foreground lg:col-span-5 lg:col-start-8">
              Work moves in two-week milestones with a live demo at the end of each, and the handoff is built into the
              plan from the first day.
            </p>
          </div>
          <div className="mt-16">
            <ProcessLine />
          </div>
          <dl className="mt-20 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p, i) => (
              <div key={p.title} className="reveal" style={{ ["--delay" as string]: `${i * 60}ms` }}>
                <dt className="font-display text-xl font-bold">{p.title}</dt>
                <dd className="mt-2 text-muted-foreground">{p.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Scope */}
      <section id="scope" className="relative py-24 sm:py-32" aria-labelledby="scope-title">
        <RidgeSeam fill="var(--background)" plane={3} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal mb-12 max-w-2xl">
            <h2 id="scope-title" className="font-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.06] font-extrabold">
              Sketch your project in a minute.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Pick what you need and see a realistic timeline and who would build it. Your picks go with you to the
              contact form.
            </p>
          </div>
          <ScopeEstimator />
        </div>
      </section>

      <ClosingCall />
    </>
  );
}
