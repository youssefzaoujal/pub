import { useEffect, useRef, useState, type ReactNode } from "react";

type DeferredMountProps = {
  children: ReactNode;
  /** Réserve l’espace avant le montage (évite les sauts de layout) */
  minHeight?: string;
  rootMargin?: string;
  className?: string;
};

/**
 * Monte les enfants seulement quand la zone entre dans le viewport.
 * Réduit le travail initial du navigateur sur mobile et desktop.
 */
export function DeferredMount({
  children,
  minHeight = "320px",
  rootMargin = "280px 0px",
  className,
}: DeferredMountProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible, rootMargin]);

  return (
    <div
      ref={ref}
      className={className ?? "section-defer"}
      style={visible ? undefined : { minHeight }}
    >
      {visible ? children : null}
    </div>
  );
}
