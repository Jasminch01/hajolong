import { FarRidges, NearRidge } from "@/components/scenery/Ridges";
import Genghuli from "@/components/Genghuli";
import BriefForm from "@/components/BriefForm";
import { HeroCopy, HeroMascot } from "@/components/HeroDrift";

export default function Hero() {
  return (
    <section data-scene className="relative -mt-16 overflow-hidden sky" aria-labelledby="hero-title">
      <FarRidges className="absolute inset-x-0 bottom-0 h-[max(50%,32vw)] w-full" />

      <div className="relative mx-auto grid min-h-[min(92svh,55rem)] max-w-7xl grid-cols-1 gap-8 px-5 pt-40 pb-[236px] sm:px-8 sm:pt-48 md:pb-40 lg:grid-cols-12 lg:pb-48">
        <HeroCopy className="lg:col-span-12">
          <h1
            id="hero-title"
            className="reveal font-display max-w-[18ch] text-[clamp(2.4rem,5.6vw,5.25rem)] leading-[1] font-extrabold tracking-[-0.025em] lg:max-w-none text-foreground"
          >
            We turn ideas into <br /> working AI.
          </h1>
          <p
            className="reveal mt-6 max-w-[34rem] text-[1.15rem] leading-[1.55] text-pretty text-foreground/80 sm:text-[1.3rem]"
            style={{ ["--delay" as string]: "80ms" }}
          >
            We build AI agents on Google and Amazon models, fine-tune them on your data, and ship the software
            around them. You own all of it.
          </p>
          <div className="reveal mt-9 max-w-xl" style={{ ["--delay" as string]: "180ms" }}>
            <BriefForm />
          </div>
        </HeroCopy>
      </div>

      {/* the nearest ridge, with Genghuli standing on it */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-px z-10">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <HeroMascot className="pointer-events-auto absolute right-3 -bottom-[clamp(18px,3.2vw,52px)] w-[clamp(118px,19vw,18rem)] lg:right-16">
            <Genghuli />
          </HeroMascot>
        </div>
        <NearRidge className="relative block h-[clamp(110px,14vw,13rem)] w-full" />
      </div>
    </section>
  );
}
