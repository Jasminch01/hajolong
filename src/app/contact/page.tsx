import { Suspense } from "react";
import { Clock, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL, LINKEDIN_URL, LinkedInIcon, gmailComposeUrl } from "@/components/icons";

export const metadata = {
  title: "Contact | Hajolong Solutions",
  description: "Tell us what you want to build. An engineer replies with a plain-English assessment within 2 hours.",
};

const next = [
  "An engineer reads your message, not a sales rep.",
  "Within 2 hours you get a plain-English assessment and a realistic timeline.",
  "If it's a fit, we book a call and plan the first two-week milestone.",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Tell us what you want to build."
        lead="A new web app, an AI agent for your customers, or a rebuild of the system your team struggles with."
      />

      <section className="bg-[var(--plane-5)] pt-6 pb-24" aria-label="Contact">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-12">
          <div className="reveal lg:col-span-7">
            <Suspense fallback={<div className="cel h-[36rem]" />}>
              <ContactForm />
            </Suspense>
          </div>

          <aside className="grid content-start gap-8 text-pine-ink lg:col-span-4 lg:col-start-9">
            <div className="reveal">
              <h2 className="flex items-center gap-2.5 font-display text-2xl font-bold">
                <Clock className="size-5 text-pine-muted" aria-hidden="true" /> What happens next
              </h2>
              <ol className="mt-5 grid gap-4">
                {next.map((n, i) => (
                  <li key={n} className="grid grid-cols-[1.75rem_1fr] gap-3 text-pine-muted">
                    <span className="grid size-7 place-items-center rounded-full border border-pine-muted/40 text-sm font-bold text-pine-ink tabular-nums">
                      {i + 1}
                    </span>
                    {n}
                  </li>
                ))}
              </ol>
            </div>

            <div className="reveal border-t border-white/10 pt-8">
              <h2 className="font-display text-2xl font-bold">Prefer email?</h2>
              <a
                href={gmailComposeUrl("Project inquiry for Hajolong Solutions")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2.5 text-lg font-semibold underline-offset-4 hover:underline"
              >
                <Mail className="size-5 text-pine-muted" aria-hidden="true" /> {CONTACT_EMAIL}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-2.5 text-pine-muted hover:text-pine-ink hover:underline"
              >
                <LinkedInIcon className="size-5" /> Message us on LinkedIn
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
