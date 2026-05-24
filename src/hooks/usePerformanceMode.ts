import { useEffect, useState } from "react";

export type PerformanceMode = "full" | "lite";

function detectMode(): PerformanceMode {
  if (typeof window === "undefined") return "full";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return "lite";
  }

  const conn = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }
  ).connection;

  if (conn?.saveData) return "lite";
  if (conn?.effectiveType === "2g" || conn?.effectiveType === "slow-2g") {
    return "lite";
  }

  // Téléphone / tablette : moins d’effets pour garder 60 fps
  if (window.innerWidth < 1024) return "lite";

  return "full";
}

export function usePerformanceMode(): PerformanceMode {
  const [mode, setMode] = useState<PerformanceMode>(detectMode);

  useEffect(() => {
    const update = () => setMode(detectMode());

    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    motionMq.addEventListener("change", update);
    window.addEventListener("resize", update, { passive: true });

    const conn = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    conn?.addEventListener?.("change", update);

    return () => {
      motionMq.removeEventListener("change", update);
      window.removeEventListener("resize", update);
      conn?.removeEventListener?.("change", update);
    };
  }, []);

  return mode;
}
