import Image from "next/image";
import { Clock, Mail } from "lucide-react";
import { SERVICES, TEAM } from "@/lib/content";
import { CONTACT_EMAIL, gmailComposeUrl } from "@/components/icons";

/** Solutions: the six things we build, as a jump-to map of the page. */
export function ServicesMap() {
  return (
    <nav aria-label="On this page" className="cel p-3">
      <ul className="grid grid-cols-2 gap-1">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="group flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-accent"
              >
                <span
                  className={`grid size-9 shrink-0 place-items-center rounded-lg ${
                    i === 0 ? "bg-[var(--pine)] text-pine-ink" : "bg-muted text-foreground/70"
                  }`}
                >
                  <Icon className="size-[1.1rem]" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-[0.95rem] font-semibold leading-tight">{s.nav}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/** Services: the engagement in three beats. */
export function HowWeWork() {
  const steps = [
    { t: "Discovery call", d: "We look at your systems and goals, free." },
    { t: "Two-week milestones", d: "Working software and a live demo every fortnight." },
    { t: "Handoff", d: "Code, data and design are yours, on open standards." },
  ];
  return (
    <ol className="cel grid gap-0 p-2">
      {steps.map((s, i) => (
        <li key={s.t} className="grid grid-cols-[2.25rem_1fr] gap-3 rounded-lg px-4 py-4">
          <span className="grid size-9 place-items-center rounded-full border-2 border-foreground/60 font-display font-bold tabular-nums">
            {i + 1}
          </span>
          <span>
            <span className="block font-display text-lg font-bold leading-tight">{s.t}</span>
            <span className="mt-0.5 block text-[0.95rem] text-muted-foreground">{s.d}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

/** About: the actual team, face by face. */
export function TeamFaces() {
  return (
    <div className="cel p-6">
      <ul className="flex -space-x-3" aria-label="The Hajolong team">
        {TEAM.map((m) => (
          <li key={m.name} className="relative size-14 overflow-hidden rounded-full border-[3px] border-card bg-[var(--plane-4)] sm:size-16">
            {m.image ? (
              <Image src={m.image} alt={m.name} fill sizes="64px" className="object-cover object-top" />
            ) : (
              <span className="grid size-full place-items-center font-display font-bold text-pine-ink" aria-label={m.name}>
                {m.name.split(" ").map((n) => n[0]).join("")}
              </span>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-5 font-display text-xl font-bold leading-snug">Six people, one team.</p>
      <p className="mt-1 text-[0.95rem] text-muted-foreground">
        You work directly with the founders and engineers who build your systems.
      </p>
    </div>
  );
}

/** Contact: the reply promise and the direct line. */
export function ReplyPromise() {
  return (
    <div className="cel p-6">
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-full bg-[var(--pine)] text-pine-ink">
          <Clock className="size-5" aria-hidden="true" />
        </span>
        <div>
          <p className="font-display text-2xl font-bold leading-none">Within 2 hours</p>
          <p className="mt-1 text-[0.95rem] text-muted-foreground">a plain-English reply from an engineer</p>
        </div>
      </div>
      <a
        href={gmailComposeUrl("Project inquiry for Hajolong Solutions")}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex items-center gap-2.5 border-t pt-5 font-semibold hover:underline"
      >
        <Mail className="size-[1.1rem] text-muted-foreground" aria-hidden="true" /> {CONTACT_EMAIL}
      </a>
    </div>
  );
}
