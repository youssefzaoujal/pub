import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NetworkItem } from "@/components/design/NetworkGrid";

type StyledCarouselProps = {
  items: NetworkItem[];
  variant?: "partner" | "testimonial";
  ariaLabel: string;
  autoplayMs?: number;
  className?: string;
};

function PartnerSlide({ item }: { item: NetworkItem }) {
  return (
    <article className="glass-card h-full rounded-2xl overflow-hidden border border-[#A67C52]/15 shadow-md">
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
              className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-bold bg-[#A67C52]/90 text-white font-arabic"
              dir="rtl"
            >
              {item.tag}
            </span>
          )}
          {item.rating != null && (
            <span
              className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-bold bg-white/95 text-gray-900 shadow flex items-center gap-1 font-arabic"
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
      className="glass-card h-full min-h-[220px] rounded-2xl border border-amber-200/50 bg-gradient-to-br from-white via-amber-50/70 to-[#f8f5f2] p-5 sm:p-6 flex flex-col shadow-md"
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
  autoplayMs = 5000,
  className,
}: StyledCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: items.length > 1,
      align: "start",
      direction: "rtl",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: autoplayMs, stopOnInteraction: true, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (items.length === 0) return null;

  const showControls = items.length > 1;

  return (
    <section
      className={cn("carousel-embla relative w-full", className)}
      aria-label={ariaLabel}
      aria-roledescription="carousel"
    >
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {items.map((item) => (
            <div
              key={item.id}
              className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 pl-3 sm:pl-4"
            >
              {variant === "testimonial" ? (
                <TestimonialSlide item={item} />
              ) : (
                <PartnerSlide item={item} />
              )}
            </div>
          ))}
        </div>
      </div>

      {showControls && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            className="carousel-embla-btn carousel-embla-btn--prev"
            aria-label="السابق"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="carousel-embla-btn carousel-embla-btn--next"
            aria-label="التالي"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden />
          </button>

          <div
            className="flex justify-center gap-2 mt-6 flex-wrap"
            role="tablist"
            aria-label="مؤشرات"
          >
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === selectedIndex}
                aria-label={`الشريحة ${i + 1}`}
                onClick={() => scrollTo(i)}
                className="carousel-embla-dot"
              >
                <span
                  className={cn(
                    "block h-2 rounded-full transition-all duration-300",
                    i === selectedIndex
                      ? "w-8 bg-[#A67C52]"
                      : "w-2 bg-[#A67C52]/30"
                  )}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
