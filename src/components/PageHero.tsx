import { FarRidges, NearRidge } from "@/components/scenery/Ridges";

/** A shorter dawn scene for inner pages: three far planes and the near ridge. */
export default function PageHero({
  title,
  lead,
  children,
}: {
  title: string;
  lead: string;
  children?: React.ReactNode;
}) {
  return (
    <section data-scene className="relative -mt-16 overflow-hidden sky" aria-labelledby="page-title">
      <FarRidges planes={4} className="absolute inset-x-0 bottom-0 h-[max(40%,27vw)] w-full" />
      <div className="relative mx-auto max-w-7xl px-5 pt-32 pb-[clamp(200px,24vw,330px)] sm:px-8 sm:pt-36">
        <h1
          id="page-title"
          className="reveal max-w-5xl font-display text-[clamp(2rem,4.2vw,3.9rem)] leading-[1.06] font-extrabold tracking-[-0.02em] text-foreground"
        >
          {title}
        </h1>
        <p className="reveal mt-5 max-w-[44rem] text-[1.15rem] leading-relaxed text-foreground/80" style={{ ["--delay" as string]: "80ms" }}>
          {lead}
        </p>
        {children && (
          <div className="reveal mt-9" style={{ ["--delay" as string]: "160ms" }}>
            {children}
          </div>
        )}
      </div>
      <NearRidge className="absolute inset-x-0 -bottom-px block h-[clamp(80px,10vw,150px)] w-full" />
    </section>
  );
}
