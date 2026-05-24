import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCarouselAutoplay } from "@/hooks/useCarouselAutoplay";
import type { NetworkItem } from "@/components/design/NetworkGrid";

type StyledCarouselProps = {
  items: NetworkItem[];
  variant?: "partner" | "testimonial";
  ariaLabel: string;
  autoplayMs?: number;
  className?: string;
};

function useSlidesToShow() {
  const [slides, setSlides] = useState(1);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setSlides(1);
      else if (w < 1024) setSlides(2);
      else setSlides(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return slides;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

function PartnerSlide({ item }: { item: NetworkItem }) {
  return (
    <article className="glass-card h-full rounded-2xl overflow-hidden border border-[#A67C52]/15 shadow-md mx-1.5 sm:mx-2">
      {item.image && (
        <div className="relative aspect-[4/3] bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className={cn(
              "absolute inset-0 w-full h-full",
              item.imageFit === "contain" ? "object-contain p-3" : "object-cover"
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
          <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed line-clamp-2">
            {item.subtitle}
          </p>
        )}
      </div>
    </article>
  );
}

function TestimonialSlide({ item }: { item: NetworkItem }) {
  return (
    <article
      className="glass-card h-full min-h-[220px] rounded-2xl border border-amber-200/50 bg-gradient-to-br from-white via-amber-50/70 to-[#f8f5f2] p-5 sm:p-6 flex flex-col shadow-md mx-1.5 sm:mx-2"
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
  );
}

export function StyledCarousel({
  items,
  variant = "partner",
  ariaLabel,
  autoplayMs = 4500,
  className,
}: StyledCarouselProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const slidesToShow = useSlidesToShow();
  const [index, setIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);

  const maxIndex = Math.max(0, items.length - slidesToShow);
  const slidePercent = 100 / slidesToShow;

  const goNext = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const canAutoplay =
    items.length > slidesToShow && maxIndex > 0 && !prefersReducedMotion;

  // Auto dès que le carrousel est monté ; pause au survol souris uniquement
  useCarouselAutoplay(canAutoplay && !hoverPaused, goNext, autoplayMs);

  if (items.length === 0) return null;

  return (
    <div
      ref={rootRef}
      className={cn("carousel-styled relative w-full", className)}
      role="region"
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
    >
      <div className="carousel-styled-viewport overflow-hidden rounded-2xl px-1">
        <motion.div
          className="flex"
          animate={{ x: `-${index * slidePercent}%` }}
          transition={{ type: "spring", stiffness: 280, damping: 32 }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 box-border"
              style={{ width: `${slidePercent}%` }}
            >
              {variant === "testimonial" ? (
                <TestimonialSlide item={item} />
              ) : (
                <PartnerSlide item={item} />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {maxIndex > 0 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="carousel-styled-nav carousel-styled-nav--prev"
            aria-label="الشريحة السابقة"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="carousel-styled-nav carousel-styled-nav--next"
            aria-label="الشريحة التالية"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden />
          </button>

          <div className="flex justify-center gap-2 mt-6 sm:mt-8" role="tablist" aria-label="مؤشرات الشرائح">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`الشريحة ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === index
                    ? "w-8 bg-[#A67C52]"
                    : "w-2 bg-[#A67C52]/25 hover:bg-[#A67C52]/45"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
