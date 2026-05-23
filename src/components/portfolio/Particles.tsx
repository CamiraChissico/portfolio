import { useEffect, useMemo, useState } from "react";

type P = { x: number; y: number; vx: number; vy: number; s: number };

export function Particles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const particles = useMemo<P[]>(
    () =>
      Array.from({ length: 30 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05,
        s: Math.random() * 2 + 1,
      })),
    [],
  );
  if (!mounted) return null;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-primary/40 animate-pulse-glow"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s,
            height: p.s,
            animationDelay: `${i * 0.2}s`,
            boxShadow: "0 0 6px currentColor",
          }}
        />
      ))}
    </div>
  );
}
