/**
 * A periodic water line across 0..3200 user units (two 1600-wide periods),
 * filled down to `bottom`. Harmonics divide 1600 evenly, so sliding the path
 * left by 1600 lands on an identical shape and the drift loops seamlessly.
 */
export function wavePath({
  mid,
  amp,
  bottom,
  phase = 0,
  cycles = [2, 5],
}: {
  mid: number;
  amp: number;
  bottom: number;
  phase?: number;
  cycles?: [number, number];
}) {
  const pts: string[] = [];
  for (let x = 0; x <= 3200; x += 20) {
    const a = (x / 1600) * Math.PI * 2;
    const y = mid + Math.sin(a * cycles[0] + phase) * amp + Math.sin(a * cycles[1] + phase * 1.7) * amp * 0.35;
    pts.push(`${x} ${y.toFixed(1)}`);
  }
  return `M0 ${bottom} L${pts.join(" L")} L3200 ${bottom} Z`;
}
