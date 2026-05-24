import { cn } from "@/lib/utils";

/** Nom de marque toujours en ordre F'Yedk → Pub (pas inversé en RTL). */
export function BrandName({
  className,
  pubClassName,
}: {
  className?: string;
  pubClassName?: string;
}) {
  return (
    <span
      dir="ltr"
      className={cn("font-latin inline-block whitespace-nowrap", className)}
    >
      F'Yedk <span className={cn("text-primary", pubClassName)}>Pub</span>
    </span>
  );
}
