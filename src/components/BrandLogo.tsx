import { cn } from "@/lib/utils";

/**
 * The Hajolong emblem (an H with the river running through it), redrawn as
 * vector so it takes the theme's ink. Source mark: public/images/hajolong_emblem.png.
 */
export function Emblem({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 345 380" className={className} aria-hidden="true">
      <path d="M4 22 L94 52 L94 232 L4 292 Z" fill="currentColor" />
      <path d="M232 56 L322 8 L322 362 L232 306 Z" fill="currentColor" />
      <path
        d="M214 112 C150 116 88 140 92 178 C96 214 176 214 214 244 C250 272 210 316 150 334 C118 344 92 350 64 372 L132 372 C174 360 248 334 262 286 C276 236 214 212 160 196 C124 184 120 160 150 146 C172 136 196 130 214 128 Z"
        style={{ fill: "var(--river-ink, #7fa3b4)" }}
      />
    </svg>
  );
}

export default function BrandLogo({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const s = {
    sm: { mark: "h-7 w-6", name: "text-lg", sub: "text-[0.625rem]" },
    md: { mark: "h-9 w-8", name: "text-xl", sub: "text-[0.6875rem]" },
    lg: { mark: "h-12 w-11", name: "text-3xl", sub: "text-xs" },
  }[size];

  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <Emblem className={cn(s.mark, "shrink-0")} />
      <span className="flex flex-col leading-none">
        <span className={cn("font-display font-extrabold tracking-[0.02em]", s.name)}>
          Hajolong
        </span>
        <span className={cn("label-caps mt-1 opacity-70", s.sub)}>Solutions</span>
      </span>
    </span>
  );
}
