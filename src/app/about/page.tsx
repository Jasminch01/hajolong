import Image from "next/image";
import PageHero from "@/components/PageHero";
import { TeamFaces } from "@/components/HeroPanels";
import { Emblem } from "@/components/BrandLogo";
import ClosingCall from "@/components/ClosingCall";
import { RidgeSeam } from "@/components/scenery/Ridges";
import { PRINCIPLES, TEAM } from "@/lib/content";

export const metadata = {
  title: "About | Hajolong Solutions",
  description:
    "A senior engineering team from the Chittagong Hill Tracts, named after the Hajolong river.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Named after a river, built to last."
        lead="Hajolong is the river our team grew up beside. We build software the same way it flows: steady, clear, and here for the long run."
        aside={<TeamFaces />}
      />

      <section className="bg-[var(--plane-5)] pt-10 pb-[calc(5rem+min(8.75vw,150px))] text-pine-ink" aria-labelledby="name-title">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <div className="reveal lg:col-span-5">
            <h2 id="name-title" className="font-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.06] font-extrabold">
              Where the name comes from.
            </h2>
            <Emblem className="mt-10 h-44 w-40 text-pine-ink/85 [--river-ink:var(--river)]" />
          </div>
          <div className="reveal space-y-5 text-lg text-pine-muted lg:col-span-6 lg:col-start-7">
            <p>
              <span className="text-pine-ink">Hajolong, called Kassalong in Bangla, is a river in the Chittagong Hill Tracts</span> of Bangladesh,
              the hills our team comes from. We named the company after it, and we carry it into everything we build.
            </p>
            <p>
              Too many businesses are stuck between slow consultancies that bill six figures before writing any code,
              and freelancers who disappear when production breaks. We built a different model: you work directly with
              the principal engineers who design, build and deploy your web platforms, AI agents and cloud systems, in
              weeks rather than years.
            </p>
          </div>
        </div>
      </section>

      <section className="relative pt-24 pb-[calc(5rem+min(8.75vw,150px))] sm:pt-32" aria-labelledby="team-title">
        <RidgeSeam fill="var(--background)" plane={1} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <h2 id="team-title" className="font-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.06] font-extrabold">
              The people you&rsquo;ll actually work with.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              No account managers in between. These are the leaders and engineers who build your systems.
            </p>
          </div>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <li key={m.name} className="reveal" style={{ ["--delay" as string]: `${(i % 3) * 70}ms` }}>
                <article className="cel cel-lift group overflow-hidden">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[var(--plane-4)]">
                    {m.image ? (
                      <Image
                        src={m.image}
                        alt={`Portrait of ${m.name}`}
                        fill
                        sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover saturate-[0.82] contrast-[1.03] sepia-[0.08] transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
                        style={m.focus ? { objectPosition: m.focus.position, scale: String(m.focus.scale), transformOrigin: "top" } : undefined}
                      />
                    ) : null}
                    {m.image && (
                      <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgb(42_33_26/0.32),transparent_45%)]" />
                    )}
                    {!m.image && (
                      <div className="grid size-full place-items-center text-pine-ink">
                        <span className="font-display text-6xl font-extrabold opacity-80">
                          {m.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                        <span className="absolute bottom-5 text-sm text-pine-muted">Photo coming soon</span>
                      </div>
                    )}
                  </div>
                  <div className="px-5 py-5">
                    <h3 className="font-display text-2xl font-bold">{m.name}</h3>
                    <p className="mt-1 text-muted-foreground">{m.role}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative bg-muted py-24" aria-labelledby="principles-title">
        <RidgeSeam fill="var(--muted)" plane={2} flip />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 id="principles-title" className="reveal max-w-2xl font-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.06] font-extrabold">
            Four promises we keep on every project.
          </h2>
          <dl className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <div key={p.title} className="reveal border-t pt-6" style={{ ["--delay" as string]: `${i * 60}ms` }}>
                <dt className="font-display text-2xl font-bold">{p.title}</dt>
                <dd className="mt-2 max-w-md text-lg text-muted-foreground">{p.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ClosingCall
        title="Work with an engineering team that delivers."
        body="Tell us about your current systems and we'll show you, in plain English, how we would modernize them."
        action="Schedule a discovery call"
      />
    </>
  );
}
