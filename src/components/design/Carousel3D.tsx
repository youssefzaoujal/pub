import { useRef } from "react";
import { useInView } from "framer-motion";
import { Star, Clock, Quote, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type Carousel3DItem = {
  id: string;
  image?: string;
  imageFit?: "cover" | "contain";
  title: string;
  subtitle?: string;
  tag?: string;
  rating?: number;
  meta?: string;
  /** Pour avis sans photo */
  excerpt?: string;
};

type Carousel3DProps = {
  items: Carousel3DItem[];
  /** Limite le nombre de cartes sur le cercle (perf + lisibilité) */
  maxItems?: number;
  variant?: "image" | "quote";
  className?: string;
  ariaLabel?: string;
};

export function Carousel3D({
  items,
  maxItems = 8,
  variant = "image",
  className,
  ariaLabel = "Carrousel 3D",
}: Carousel3DProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rootRef, { margin: "-60px", amount: 0.2 });

  const displayItems = items.slice(0, maxItems);
  const count = displayItems.length;
  if (count === 0) return null;

  const angleStep = 360 / count;
  const animate = isInView;

  return (
    <div
      ref={rootRef}
      className={cn("carousel-3d relative w-full", className)}
      role="region"
      aria-label={ariaLabel}
      aria-live="polite"
    >
      <div className="absolute inset-0 -z-10 mesh-conic opacity-40 pointer-events-none rounded-3xl" />

      <div
        className={cn(
          "carousel-3d-stage mx-auto",
          variant === "quote" && "carousel-3d-stage--quote"
        )}
      >
        <div
          className={cn(
            "carousel-3d-inner",
            animate && "carousel-3d-inner--spin",
            !animate && "carousel-3d-inner--paused"
          )}
        >
          {displayItems.map((item, i) => {
            const angle = i * angleStep;
            return (
              <article
                key={item.id}
                className="carousel-3d-card"
                style={
                  {
                    "--card-angle": `${angle}deg`,
                  } as React.CSSProperties
                }
              >
                {variant === "quote" || !item.image ? (
                  <QuoteCard item={item} />
                ) : (
                  <ImageCard item={item} />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ImageCard({ item }: { item: Carousel3DItem }) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl border border-white/20 bg-white">
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        decoding="async"
        className={cn(
          "absolute inset-0 w-full h-full",
          item.imageFit === "contain"
            ? "object-contain p-3 bg-gradient-to-b from-gray-50 to-white"
            : "object-cover"
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

      {item.rating != null && (
        <div
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 text-gray-900 shadow flex items-center gap-1 font-arabic"
          dir="rtl"
        >
          <Star size={11} className="fill-amber-400 text-amber-400 shrink-0" />
          {item.rating.toFixed(1).replace(".", ",")}
        </div>
      )}

      {item.tag && (
        <div
          className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#A67C52]/90 text-white font-arabic"
          dir="rtl"
        >
          {item.tag}
        </div>
      )}

      <div className="absolute bottom-4 left-4 right-4 text-white text-right" dir="rtl">
        {item.tag && !item.rating && (
          <div className="text-[10px] uppercase tracking-wider opacity-70 font-arabic">
            {item.tag}
          </div>
        )}
        <div className="font-arabic font-extrabold text-lg sm:text-xl mt-0.5 leading-tight">
          {item.title}
        </div>
        {item.subtitle && (
          <p className="text-xs opacity-90 mt-1 font-arabic leading-snug line-clamp-2">
            {item.subtitle}
          </p>
        )}
        {item.meta && (
          <div className="text-[11px] opacity-80 mt-1.5 flex items-center justify-end gap-1 font-arabic">
            <Clock size={11} className="shrink-0" />
            {item.meta}
          </div>
        )}
        {!item.meta && item.subtitle && (
          <div className="flex items-center justify-end gap-1 mt-2 text-[10px] opacity-80">
            <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
            <span className="font-arabic">شريك موثوق</span>
          </div>
        )}
      </div>
    </div>
  );
}

function QuoteCard({ item }: { item: Carousel3DItem }) {
  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl border border-amber-200/40 bg-gradient-to-br from-white via-amber-50/80 to-[#f8f5f2] p-5 flex flex-col"
      dir="rtl"
    >
      <Quote className="w-8 h-8 text-[#A67C52]/40 mb-2 shrink-0" />
      <p className="font-arabic text-sm text-gray-700 leading-relaxed flex-1 line-clamp-6">
        {item.excerpt ?? item.subtitle}
      </p>
      <div className="mt-4 pt-3 border-t border-[#A67C52]/15">
        {item.rating != null && (
          <div className="flex justify-end gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-3.5 h-3.5",
                  i < (item.rating ?? 5)
                    ? "fill-amber-400 text-amber-400"
                    : "text-gray-200"
                )}
              />
            ))}
          </div>
        )}
        <div className="font-arabic font-bold text-gray-900">{item.title}</div>
        {item.tag && (
          <div className="text-xs text-[#A67C52] font-arabic mt-0.5">{item.tag}</div>
        )}
      </div>
    </div>
  );
}
