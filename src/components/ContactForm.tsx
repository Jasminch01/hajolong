"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { ArrowRight, CircleCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CONTACT_EMAIL, gmailComposeUrl } from "@/components/icons";
import { SERVICES, serviceById } from "@/lib/content";
import { estimateWeeks } from "@/components/ScopeEstimator";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const params = useSearchParams();
  const initialServices = (params.get("services") ?? "")
    .split(",")
    .filter((id) => serviceById(id))
    .map((id) => id);

  const [services, setServices] = useState<string[]>(initialServices.length ? initialServices : []);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: params.get("brief") ?? "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  const toggle = (id: string) =>
    setServices((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = "Enter an email we can reply to, like name@company.com.";
    if (form.message.trim().length < 10) e.message = "A sentence or two about the project helps us reply properly.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    const picked = services.map((id) => serviceById(id)?.formLabel).filter(Boolean).join(", ") || "Not sure yet";
    const subject = `Project inquiry: ${picked} (${form.company || form.name})`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company || "N/A"}`,
      `Needs: ${picked}`,
      services.length ? `Estimated timeline from the site: ${estimateWeeks(services)}–${estimateWeeks(services) + 2} weeks` : "",
      "",
      "Project details:",
      form.message,
    ]
      .filter((l, i) => l !== "" || i === 5)
      .join("\n");
    const url = gmailComposeUrl(subject, body);
    window.open(url, "_blank", "noopener,noreferrer");
    setSentUrl(url);
  };

  if (sentUrl) {
    return (
      <motion.div
        className="cel flex flex-col items-start gap-4 p-8 sm:p-10"
        role="status"
        initial={{ opacity: 0, y: 12, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", bounce: 0.15, visualDuration: 0.45 }}
      >
        <motion.span
          initial={{ scale: 0.4, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", bounce: 0.45, visualDuration: 0.4, delay: 0.12 }}
        >
          <CircleCheck className="size-9 text-[var(--plane-4)] dark:text-pine-muted" strokeWidth={1.6} aria-hidden="true" />
        </motion.span>
        <h2 className="font-display text-3xl font-extrabold">Your email is ready to send.</h2>
        <p className="max-w-md text-lg text-muted-foreground">
          We opened it in Gmail with everything filled in. Press send, and an engineer will reply with a plain-English
          assessment within 2 hours.
        </p>
        <p className="text-muted-foreground">
          Nothing opened?{" "}
          <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground underline">
            Open the draft in Gmail
          </a>{" "}
          or write to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-foreground underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <Button variant="outline" onClick={() => setSentUrl(null)}>
          Edit the message
        </Button>
      </motion.div>
    );
  }

  const field = (id: keyof typeof form) => ({
    id,
    value: form[id],
    "aria-invalid": errors[id] ? true : undefined,
    "aria-describedby": errors[id] ? `${id}-error` : undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [id]: e.target.value });
      if (errors[id]) setErrors({ ...errors, [id]: "" });
    },
  });

  return (
    <form onSubmit={submit} noValidate className="cel grid gap-6 p-6 sm:p-9">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Your name</Label>
          <Input {...field("name")} autoComplete="name" />
          <FieldError id="name" msg={errors.name} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Work email</Label>
          <Input {...field("email")} type="email" autoComplete="email" placeholder="name@company.com" />
          <FieldError id="email" msg={errors.email} />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="company">
          Company <span className="font-normal text-muted-foreground">(optional)</span>
        </Label>
        <Input {...field("company")} autoComplete="organization" />
      </div>

      <fieldset className="grid gap-3">
        <legend className="mb-3 text-sm font-medium">What do you need? Pick any that fit.</legend>
        <div className="flex flex-wrap gap-2">
          {SERVICES.map((s) => {
            const on = services.includes(s.id);
            return (
              <button
                key={s.id}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(s.id)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[0.95rem] transition-colors duration-300",
                  on
                    ? "border-foreground bg-foreground text-background"
                    : "border-input bg-card hover:border-foreground/40"
                )}
              >
                {s.nav}
                {on && <X className="size-3.5" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-2">
        <Label htmlFor="message">What do you want to build, or what problem are you facing?</Label>
        <Textarea {...field("message")} rows={5} placeholder="A few sentences is plenty. Links welcome." />
        <FieldError id="message" msg={errors.message} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">Opens a ready-to-send email in Gmail, addressed to {CONTACT_EMAIL}.</p>
        <Button type="submit" variant="lamp" size="lg" className="shrink-0">
          Send to the team <ArrowRight />
        </Button>
      </div>
    </form>
  );
}

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return (
    <p id={`${id}-error`} className="text-sm font-medium text-destructive">
      {msg}
    </p>
  );
}
