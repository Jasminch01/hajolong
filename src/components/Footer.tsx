import Link from "next/link";
import { Mail } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { RIVER_BANKS, RIVER_SPUR, RIVER_VIEWBOX } from "@/components/scenery/paths";
import { wavePath } from "@/components/scenery/waves";
import { CONTACT_EMAIL, LINKEDIN_URL, LinkedInIcon, gmailComposeUrl } from "@/components/icons";

// The Hajolong, drawn by hand: widest near the viewer where it rises from the
// footer ground at the left, it winds through an S-bend, makes one last bend
// to the right and slips behind a mountain shoulder (RIVER_SPUR), so its end is
// hidden by the hill rather than drawn. Clipped to the land, so it never spills
// into the sky.
const RIVER =
  "M-40 322 C140 318 340 302 470 282 C590 260 600 222 690 214 C790 206 880 238 980 260 " +
  "C1060 278 1120 270 1180 248 C1230 228 1280 212 1340 202 " +
  "L1340 226 C1290 240 1250 260 1200 286 C1130 322 1060 328 970 302 C870 278 790 252 712 252 " +
  "C650 254 630 306 520 330 C360 358 160 374 -40 382 Z";

const SEA_BACK = wavePath({ mid: 362, amp: 7, bottom: 420, phase: 0.6 });
const SEA_FRONT = wavePath({ mid: 384, amp: 6, bottom: 420, phase: 2.2, cycles: [3, 8] });
// the same crest as an open line: a faint highlight riding the front wave
const SEA_FRONT_LINE = SEA_FRONT.replace(/^M0 420 L/, "M").replace(/ L3200 420 Z$/, "");

const explore = [
  { href: "/solutions", label: "Solutions" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 text-pine-ink">
      {/* The Hajolong rises from the footer ground at the left, bends, and runs behind the mountain */}
      <svg
        viewBox={RIVER_VIEWBOX}
        preserveAspectRatio="none"
        className="block h-[clamp(150px,26.25vw,560px)] w-full overflow-hidden"
        aria-hidden="true"
      >
        <defs>
          {/* deep water near the viewer, paling as it recedes toward the bend */}
          <linearGradient id="river-flow" gradientUnits="userSpaceOnUse" x1="0" y1="340" x2="1600" y2="60">
            <stop offset="0" style={{ stopColor: "var(--river)" }} />
            <stop offset="0.45" style={{ stopColor: "color-mix(in oklab, var(--river) 55%, var(--river-light))" }} />
            <stop offset="0.8" style={{ stopColor: "var(--river-light)" }} />
          </linearGradient>
          <linearGradient id="river-edge" gradientUnits="userSpaceOnUse" x1="0" y1="340" x2="1600" y2="60">
            <stop offset="0" style={{ stopColor: "var(--river-light)", stopOpacity: 0.5 }} />
            <stop offset="0.85" style={{ stopColor: "var(--river-light)", stopOpacity: 0 }} />
          </linearGradient>
          <linearGradient id="river-mist" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style={{ stopColor: "var(--sky-low)", stopOpacity: 0 }} />
            <stop offset="0.6" style={{ stopColor: "var(--sky-low)", stopOpacity: 0.45 }} />
            <stop offset="1" style={{ stopColor: "var(--sky-low)", stopOpacity: 0 }} />
          </linearGradient>
          <clipPath id="on-land">
            <path d={RIVER_BANKS[0]} />
          </clipPath>
          <clipPath id="above-sea">
            <rect width="1600" height="372" />
          </clipPath>
          <linearGradient id="sea-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style={{ stopColor: "var(--sea)", stopOpacity: 0 }} />
            <stop offset="1" style={{ stopColor: "var(--sea)" }} />
          </linearGradient>
        </defs>
        <path d={RIVER_BANKS[0]} style={{ fill: "var(--plane-3)" }} />
        <rect x="-40" y="150" width="1680" height="80" fill="url(#river-mist)" className="mist-band" />
        <path d={RIVER_BANKS[1]} style={{ fill: "var(--plane-4)" }} />
        {/* the river: pale where it catches the dawn, deepening into sea colour as it widens */}
        <g clipPath="url(#on-land)">
          <path d={RIVER} fill="url(#river-flow)" />
          <path d={RIVER} clipPath="url(#above-sea)" fill="none" stroke="url(#river-edge)" strokeWidth={1.5} />
        </g>
        {/* the shoulder of the mountain the river disappears behind */}
        <path d={RIVER_SPUR} style={{ fill: "var(--plane-4)" }} />
        {/* the footer's solid ground the river rises from */}
        <rect y="330" width="1600" height="90" fill="url(#sea-fade)" />
        <g className="wave-flow" style={{ ["--wave-speed" as string]: "44s" }}>
          <path d={SEA_BACK} style={{ fill: "var(--sea)", opacity: 0.7 }} />
        </g>
        <g className="wave-flow" style={{ ["--wave-speed" as string]: "30s" }}>
          <path d={SEA_FRONT} style={{ fill: "var(--sea)" }} />
          <path d={SEA_FRONT_LINE} style={{ fill: "none", stroke: "var(--river-light)", strokeOpacity: 0.28, strokeWidth: 1.5 }} />
        </g>
      </svg>

      <div className="-mt-px bg-[var(--sea)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pt-6 pb-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-5">
            <BrandLogo size="lg" className="[--river-ink:#c7d3da]" />
            <p className="mt-5 max-w-sm text-pine-muted">
              Named after the Hajolong (Kassalong in Bangla), a river in the Chittagong Hill Tracts of Bangladesh, where
              our team comes from.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <h2 className="label-caps text-pine-muted">Explore</h2>
            <ul className="mt-4 grid gap-2.5">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 lg:col-span-4">
            <h2 className="label-caps text-pine-muted">Talk to us</h2>
            <ul className="mt-4 grid gap-3">
              <li>
                <a
                  href={gmailComposeUrl("Project inquiry for Hajolong Solutions")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-display text-xl font-bold hover:underline"
                >
                  <Mail className="size-5 text-pine-muted" aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 break-all hover:underline">
                  <LinkedInIcon className="size-5 shrink-0" />
                  linkedin.com/company/hajolong-solution
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-white/10 px-5 py-6 text-sm text-pine-muted sm:flex-row sm:justify-between sm:px-8">
          <p>&copy; 2026 HAJOLONG Solutions Inc. All rights reserved.</p>
          <p>Rooted in the Chittagong Hill Tracts.</p>
        </div>
      </div>
    </footer>
  );
}
