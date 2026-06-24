import type { PartnerCategory } from "@/content/partners";

/**
 * Fictional brand logo mark for demo/test partners. Renders a colored rounded
 * square with a category glyph — no real logos are used anywhere on the site.
 */
export function BrandMark({
  name,
  category,
  accent,
  size = 40,
  className,
}: {
  name: string;
  category: PartnerCategory;
  accent: string;
  size?: number;
  className?: string;
}) {
  const r = size * 0.28;
  const c = size / 2;
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={`Logo ${name} (smyšlená značka)`}
    >
      <rect x="0" y="0" width={size} height={size} rx={r} fill={accent} />
      <g
        transform={`translate(${c} ${c})`}
        fill="none"
        stroke="white"
        strokeWidth={size * 0.06}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Glyph category={category} s={size} />
      </g>
    </svg>
  );
}

function Glyph({ category, s }: { category: PartnerCategory; s: number }) {
  const u = s * 0.18; // unit
  switch (category) {
    case "food":
      // shopping cart
      return (
        <>
          <path d={`M${-1.7 * u} ${-1.4 * u} h${0.7 * u} l${0.5 * u} ${2.4 * u} h${2.2 * u} l${0.6 * u} -${1.6 * u} h-${3 * u}`} />
          <circle cx={-0.4 * u} cy={1.7 * u} r={0.28 * u} fill="white" stroke="none" />
          <circle cx={1.5 * u} cy={1.7 * u} r={0.28 * u} fill="white" stroke="none" />
        </>
      );
    case "fuel":
      // fuel pump
      return (
        <>
          <rect x={-1.7 * u} y={-1.9 * u} width={2.4 * u} height={3.8 * u} rx={0.3 * u} />
          <line x1={-1.7 * u} y1={1.9 * u} x2={0.7 * u} y2={1.9 * u} />
          <path d={`M${0.7 * u} -${0.9 * u} h${0.8 * u} v${2 * u} a${0.45 * u} ${0.45 * u} 0 0 0 ${0.9 * u} 0 v-${2.6 * u} l-${0.7 * u} -${0.7 * u}`} />
        </>
      );
    case "pharma":
      // medical cross
      return (
        <path
          d={`M-${0.55 * u} -${1.7 * u} h${1.1 * u} v${1.15 * u} h${1.15 * u} v${1.1 * u} h-${1.15 * u} v${1.15 * u} h-${1.1 * u} v-${1.15 * u} h-${1.15 * u} v-${1.1 * u} h${1.15 * u} z`}
          fill="white"
          stroke="none"
        />
      );
    case "retail":
    default:
      // shopping bag
      return (
        <>
          <path d={`M-${1.5 * u} -${0.8 * u} h${3 * u} l${0.3 * u} ${3 * u} h-${3.6 * u} z`} />
          <path d={`M-${0.8 * u} -${0.8 * u} v-${0.4 * u} a${0.8 * u} ${0.8 * u} 0 0 1 ${1.6 * u} 0 v${0.4 * u}`} />
        </>
      );
  }
}
