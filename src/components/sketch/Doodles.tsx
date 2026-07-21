/**
 * Small hand-drawn SVG accents. Stroke paths are intentionally uneven to read
 * as pencil/ink. All use currentColor so they inherit the surrounding text hue.
 */
import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function StarDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={28} height={28} viewBox="0 0 32 32" {...base} {...props}>
      <path d="M16 3.5c1.6 5.4 4 8.9 11.5 10.2-6.8 1.4-9.4 4.6-10.8 14.8-1.2-8.6-3.4-12.7-11.7-13.9C11.7 13 14 9.9 16 3.5Z" />
    </svg>
  );
}

export function ArrowDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={40} height={20} viewBox="0 0 48 24" {...base} {...props}>
      <path d="M2 13c9 2 22 1 41-4" />
      <path d="M34 2c4 3 7 5 9 7-3 2-6 5-8 9" />
    </svg>
  );
}

export function SquiggleDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={120} height={14} viewBox="0 0 120 14" {...base} {...props}>
      <path d="M2 8c12-7 22 5 34 0s20-8 32-2 22 5 30-1" />
    </svg>
  );
}

export function CircleDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={90} height={90} viewBox="0 0 90 90" {...base} {...props}>
      <path d="M46 6C22 5 8 21 7 42c-1 24 18 35 40 42 20-2 36-16 37-38C86 22 68 8 46 6Z" />
    </svg>
  );
}
