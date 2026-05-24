import { cn } from "@/lib/utils";
import { usePerf } from "@/contexts/PerformanceContext";

type Variant = "hero" | "light" | "dark" | "warm";

const orbConfig: Record<
  Variant,
  { orbs: { className: string; delay?: string }[]; mesh: string }
> = {
  hero: {
    mesh: "mesh-hero",
    orbs: [
      { className: "top-[-15%] right-[-5%] w-[70vw] h-[70vw] bg-amber-400/40" },
      { className: "bottom-[-20%] left-[-15%] w-[60vw] h-[60vw] bg-[#A67C52]/35", delay: "1s" },
    ],
  },
  light: {
    mesh: "mesh-light",
    orbs: [{ className: "top-0 right-0 w-[50vw] h-[50vw] bg-[#A67C52]/20" }],
  },
  dark: {
    mesh: "mesh-dark",
    orbs: [
      {
        className:
          "top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[#A67C52]/25",
      },
    ],
  },
  warm: {
    mesh: "mesh-warm",
    orbs: [{ className: "top-1/4 right-[-10%] w-[55vw] h-[55vw] bg-yellow-300/25" }],
  },
};

const heroOrbsFull = [
  { className: "top-[-15%] right-[-5%] w-[70vw] h-[70vw] bg-amber-400/40" },
  { className: "bottom-[-20%] left-[-15%] w-[60vw] h-[60vw] bg-[#A67C52]/35", delay: "1s" },
  { className: "top-[40%] left-[30%] w-[40vw] h-[40vw] bg-orange-300/25", delay: "2s" },
];

export function AmbientBackground({
  variant = "light",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const mode = usePerf();
  const config = orbConfig[variant];
  const orbs =
    variant === "hero" && mode === "full" ? heroOrbsFull : config.orbs;

  return (
    <div
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      aria-hidden
    >
      <div className={cn("absolute inset-0 opacity-80", config.mesh)} />
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={cn(
            "ambient-orb absolute rounded-full blur-[80px] sm:blur-[100px] mix-blend-multiply",
            orb.className
          )}
          style={orb.delay ? { animationDelay: orb.delay } : undefined}
        />
      ))}
      {mode === "full" && (
        <div className="absolute inset-0 bg-noise-fine opacity-[0.2] mix-blend-overlay" />
      )}
    </div>
  );
}

export function FloatingParticles({ count = 16 }: { count?: number }) {
  const mode = usePerf();
  if (mode === "lite" || count <= 0) return null;

  const particleCount = Math.min(count, 16);
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    left: `${(i * 17 + 7) % 100}%`,
    top: `${(i * 23 + 11) % 100}%`,
    size: 2 + (i % 3),
    delay: (i % 8) * 0.5,
    duration: 4 + (i % 6),
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle-dot absolute rounded-full bg-amber-400/50"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export function ShineBorder({ className }: { className?: string }) {
  const mode = usePerf();
  if (mode === "lite") return null;

  return (
    <div
      className={cn(
        "pointer-events-none absolute -inset-[1px] rounded-[inherit] overflow-hidden z-0",
        className
      )}
      aria-hidden
    >
      <div className="shine-border-spin absolute inset-[-50%] opacity-90" />
    </div>
  );
}
