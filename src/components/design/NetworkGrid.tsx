import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export type NetworkItem = {
  id: string;
  image?: string;
  imageFit?: "cover" | "contain";
  title: string;
  subtitle?: string;
  tag?: string;
  rating?: number;
  excerpt?: string;
};

type PartnerGridProps = {
  items: NetworkItem[];
  className?: string;
};

export function PartnerGrid({ items, className }: PartnerGridProps) {
  return (
    <ul
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 list-none p-0 m-0",
        className
      )}
    >
      {items.map((item) => (
        <li key={item.id}>
          <article className="glass-card h-full rounded-2xl overflow-hidden border border-[#A67C52]/10 shadow-md hover:shadow-glow transition-shadow duration-300">
            {item.image && (
              <div className="relative aspect-[4/3] bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "absolute inset-0 w-full h-full",
                    item.imageFit === "contain"
                      ? "object-contain p-3"
                      : "object-cover"
                  )}
                />
                {item.tag && (
                  <span
                    className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#A67C52]/90 text-white font-arabic"
                    dir="rtl"
                  >
                    {item.tag}
                  </span>
                )}
                {item.rating != null && (
                  <span
                    className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[11px] font-bold bg-white/95 text-gray-900 shadow flex items-center gap-1 font-arabic"
                    dir="rtl"
                  >
                    <Star size={11} className="fill-amber-400 text-amber-400 shrink-0" />
                    {item.rating.toFixed(1).replace(".", ",")}
                  </span>
                )}
              </div>
            )}
            <div className="p-4 sm:p-5 text-right font-arabic" dir="rtl">
              <h3 className="font-bold text-base sm:text-lg text-gray-900 leading-snug">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
                  {item.subtitle}
                </p>
              )}
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

type TestimonialGridProps = {
  items: NetworkItem[];
  className?: string;
};

export function TestimonialGrid({ items, className }: TestimonialGridProps) {
  return (
    <ul
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 list-none p-0 m-0",
        className
      )}
    >
      {items.map((item) => (
        <li key={item.id}>
          <article
            className="glass-card h-full rounded-2xl border border-amber-200/40 bg-gradient-to-br from-white via-amber-50/60 to-[#f8f5f2] p-5 sm:p-6 flex flex-col shadow-md hover:shadow-glow transition-shadow duration-300"
            dir="rtl"
          >
            {item.rating != null && (
              <div className="flex justify-end gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < (item.rating ?? 5)
                        ? "fill-amber-400 text-amber-400"
                        : "text-gray-200"
                    )}
                  />
                ))}
              </div>
            )}
            <Quote className="w-7 h-7 text-[#A67C52]/35 mb-2 shrink-0 ms-auto" />
            <p className="font-arabic text-sm sm:text-base text-gray-700 leading-relaxed flex-1">
              &ldquo;{item.excerpt ?? item.subtitle}&rdquo;
            </p>
            <div className="mt-4 pt-3 border-t border-[#A67C52]/15 text-right">
              <h4 className="font-bold text-gray-900 font-arabic">{item.title}</h4>
              {item.tag && (
                <p className="text-xs text-muted-foreground font-arabic mt-1">{item.tag}</p>
              )}
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
