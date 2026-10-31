import { FarRidges, NearRidge } from "@/components/scenery/Ridges";

/**
 * The dawn scene for inner pages. Copy sits on the left; `aside` holds one
 * small, page-specific panel on the right (a map of the services, the process,
 * the team, the reply promise) so the banner carries real content.
 */
export default function PageHero({
  title,
  lead,
  children,
  aside,
}: {
  title: React.ReactNode;
  lead: string;
  children?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <section data-scene className="relative -mt-16 overflow-hidden sky" aria-labelledby="page-title">
      <FarRidges planes={4} className="absolute inset-x-0 bottom-0 h-[31.25vw] min-h-[150px] w-full" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pt-36 pb-[max(170px,17vw)] sm:px-8 sm:pt-44 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1
            id="page-title"
            className="reveal font-display text-[clamp(2.25rem,4.6vw,4.25rem)] leading-[1.02] font-extrabold tracking-[-0.022em] text-foreground"
          >
            {title}
          </h1>
          <p
            className="reveal mt-6 max-w-[36rem] text-[1.15rem] leading-[1.55] text-pretty text-foreground/80 sm:text-[1.3rem]"
            style={{ ["--delay" as string]: "80ms" }}
          >
            {lead}
          </p>
          {children && (
            <div className="reveal mt-9" style={{ ["--delay" as string]: "160ms" }}>
              {children}
            </div>
          )}
        </div>
        {aside && (
          <div className="reveal lg:col-span-5 lg:col-start-8" style={{ ["--delay" as string]: "220ms" }}>
            {aside}
          </div>
        )}
      </div>
      <NearRidge className="absolute inset-x-0 -bottom-px block h-[clamp(80px,10vw,150px)] w-full" />
    </section>
  );
}
