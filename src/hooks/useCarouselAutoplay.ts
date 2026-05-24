import { useEffect } from "react";

/** Lance l’autoplay uniquement quand le carrousel est visible à l’écran */
export function useCarouselAutoplay(
  enabled: boolean,
  onTick: () => void,
  intervalMs: number
) {
  useEffect(() => {
    if (!enabled) return;
    const id = window.setInterval(onTick, intervalMs);
    return () => window.clearInterval(id);
  }, [enabled, onTick, intervalMs]);
}
