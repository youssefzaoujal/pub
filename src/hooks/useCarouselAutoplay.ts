import { useEffect } from "react";

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
