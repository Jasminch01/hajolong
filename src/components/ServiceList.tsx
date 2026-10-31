import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/content";

/** The services around the agent, as one ruled list rather than a card grid. */
export default function ServiceList({ exclude = ["ai"] }: { exclude?: string[] }) {
  const items = SERVICES.filter((s) => !exclude.includes(s.id));
  return (
    <ul className="border-t">
      {items.map((s) => {
        const Icon = s.icon;
        return (
          <li key={s.id} className="reveal border-b">
            <Link
              href={`/solutions#${s.id}`}
              className="group grid grid-cols-[auto_1fr_auto] items-start gap-x-5 gap-y-1 px-2 py-6 transition-colors duration-300 hover:bg-accent/70 sm:grid-cols-[auto_minmax(0,18rem)_1fr_auto] sm:items-center sm:px-4"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-[var(--pine)] text-pine-ink transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-rotate-6">
                <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="font-display text-[1.35rem] leading-tight font-bold">{s.title}</span>
              <span className="col-start-2 text-muted-foreground sm:col-start-auto">{s.short}</span>
              <ArrowRight
                className="col-start-3 row-start-1 mt-3 size-5 text-muted-foreground transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1 group-hover:text-foreground sm:col-start-auto sm:row-start-auto sm:mt-0"
                aria-hidden="true"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
