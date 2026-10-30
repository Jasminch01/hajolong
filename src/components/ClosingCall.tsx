import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/** The page close: one sentence about where the name comes from, and the next step. */
export default function ClosingCall({
  title = "Tell us what you want to build.",
  body = "Send us your idea and an engineer will reply with a plain-English technical assessment and a realistic timeline within 2 hours.",
  action = "Start a project",
}: {
  title?: string;
  body?: string;
  action?: string;
}) {
  return (
    <section className="pt-8" aria-labelledby="closing-title">
      <div className="reveal mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2 id="closing-title" className="font-display text-[clamp(2.3rem,5vw,4.2rem)] leading-[1.02] font-extrabold">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-[38rem] text-lg text-muted-foreground">{body}</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="lamp" size="lg">
            <Link href="/contact">
              {action} <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/about">Meet the team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
