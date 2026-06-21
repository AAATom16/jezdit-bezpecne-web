"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { COUNTERS } from "@/content/counters";
import { formatNumber } from "@/lib/utils";

export function CountersStrip() {
  return (
    <section className="border-y border-slate-200 bg-white py-12">
      <Container className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {COUNTERS.map((c) => (
          <Counter key={c.label} num={c.num} suffix={c.suffix} label={c.label} />
        ))}
      </Container>
    </section>
  );
}

function Counter({
  num,
  suffix,
  label,
}: {
  num: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const reduced = window.matchMedia(
              "(prefers-reduced-motion: reduce)"
            ).matches;
            if (reduced) {
              setVal(num);
              return;
            }
            const t0 = performance.now();
            const dur = 1400;
            const tick = (t: number) => {
              const p = Math.min(1, (t - t0) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(num * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [num]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-extrabold tabular-nums text-brand-700 sm:text-4xl">
        {formatNumber(val)}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  );
}
