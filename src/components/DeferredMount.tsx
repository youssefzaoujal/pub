import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SECTION_NAVIGATE_EVENT } from "@/lib/scrollToSection";

type DeferredMountProps = {
  children: ReactNode;
  /** Ancre de navigation toujours présente dans le DOM */
  sectionId?: string;
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
  sectionId,
  minHeight = "320px",
  rootMargin = "280px 0px",
  className,
}: DeferredMountProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionId) return;

    const onNavigate = (e: Event) => {
      const targetId = (e as CustomEvent<string>).detail;
      if (targetId === sectionId) {
        setVisible(true);
      }
    };

    window.addEventListener(SECTION_NAVIGATE_EVENT, onNavigate);
    return () => window.removeEventListener(SECTION_NAVIGATE_EVENT, onNavigate);
  }, [sectionId]);

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
      id={sectionId}
      className={cn(sectionId && "section-anchor", className ?? "section-defer")}
      style={visible ? undefined : { minHeight }}
    >
      {visible ? children : null}
    </div>
  );
}
