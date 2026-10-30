import { RIDGES } from "./paths";
import { wavePath } from "./waves";

/**
 * The far ridges of the Hill Tracts, painted as four planes with mist between
 * them. Each plane reads --scroll from its [data-scene] ancestor and drifts
 * by its own depth, so the far hills move least relative to the viewer.
 * The sky itself is painted by the .sky class on the scene, so it never seams.
 */
const DEPTHS = [150, 110, 70, 34];

export function FarRidges({ planes = 4, className }: { planes?: number; className?: string }) {
  return (
    <svg
      viewBox="0 500 1600 500"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mist" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--sky-low)", stopOpacity: 0 }} />
          <stop offset="0.65" style={{ stopColor: "var(--sky-low)", stopOpacity: 0.6 }} />
          <stop offset="1" style={{ stopColor: "var(--sky-low)", stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      {RIDGES.slice(0, planes).map((d, i) => (
        <g key={i} className="scene-plane" style={{ ["--depth" as string]: DEPTHS[i] }}>
          <path d={d} style={{ fill: `var(--plane-${i + 1})` }} />
          {/* mist pooled in the valley in front of this ridge */}
          <rect
            className="mist-band"
            x="-80"
            y={590 + i * 72}
            width="1760"
            height="140"
            fill="url(#mist)"
            style={{ animationDelay: `${i * -9}s` }}
          />
        </g>
      ))}
    </svg>
  );
}

/** The nearest forested ridge: the plane Genghuli and the content stand on. */
export function NearRidge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 830 1600 170"
      preserveAspectRatio="xMidYMin slice"
      className={className}
      aria-hidden="true"
    >
      <path d={RIDGES[4]} style={{ fill: "var(--plane-5)" }} />
    </svg>
  );
}

/**
 * Where one section flows into the next: two layers of slow water rising
 * out of the section above, the back one in a ridge-water tone, the front one
 * in the next section's ground. Place it as the first child of a `relative`
 * section; it overhangs upward. The 1600:140 box keeps every crest in view.
 */
export function RidgeSeam({
  fill,
  plane = 2,
  flip = false,
}: {
  fill: string;
  plane?: 1 | 2 | 3;
  flip?: boolean;
}) {
  const back = wavePath({ mid: 70, amp: 16, bottom: 140, phase: plane * 1.3 });
  const front = wavePath({ mid: 98, amp: 12, bottom: 140, phase: plane * 2.1 + 1, cycles: [3, 7] });
  return (
    <svg
      viewBox="0 0 1600 140"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-[calc(100%-1px)] block h-[min(8.75vw,150px)] w-full overflow-hidden"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <g className="wave-flow" style={{ ["--wave-speed" as string]: `${46 + plane * 6}s` }}>
        <path d={back} style={{ fill: `var(--plane-${plane + 1})`, opacity: 0.55 }} />
      </g>
      <g className="wave-flow" style={{ ["--wave-speed" as string]: `${30 + plane * 4}s` }}>
        <path d={front} style={{ fill }} />
      </g>
    </svg>
  );
}
