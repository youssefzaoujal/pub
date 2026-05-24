import { motion } from "framer-motion";
import { Gift, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePerf } from "@/contexts/PerformanceContext";

export function PromoBar() {
  const { t } = useLanguage();
  const calm = usePerf() === "lite";

  const scrollToOffer = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      data-header-promo
      initial={calm ? false : { y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 22, delay: calm ? 0 : 0.3 }}
      className="promo-bar-fixed fixed top-[var(--header-nav,4rem)] left-0 right-0 z-[45] border-b border-amber-400/40 shadow-lg shadow-amber-900/20 lg:hidden safe-top-nav"
      role="region"
      aria-label={t("promo.badge")}
    >
      <div className="relative overflow-hidden bg-gradient-to-r from-[#8c664b] via-amber-600 to-[#A67C52] text-white shadow-[0_4px_24px_rgba(166,124,82,0.4)]">
        {!calm && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        )}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(255,255,255,0.15) 8px, rgba(255,255,255,0.15) 16px)",
          }}
        />

        <div className="container mx-auto px-3 sm:px-4 relative w-full max-w-full">
          <div className="flex flex-col items-stretch sm:flex-row sm:items-center justify-center gap-2 py-2.5 px-1 sm:py-3 sm:min-h-[3.25rem]">
            <div className="flex items-center justify-center gap-1.5 sm:gap-3 min-w-0 flex-1">
              <span className="hidden sm:flex shrink-0 items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm">
                <Gift className="w-4 h-4" />
              </span>
              <span className="inline-flex shrink-0 items-center gap-1 px-2 py-0.5 rounded-full bg-red-500 text-white text-xs font-bold font-arabic">
                <Sparkles className="w-3 h-3" />
                {t("promo.badge")}
              </span>
              <p
                className="text-xs sm:text-sm font-semibold text-center leading-snug line-clamp-2 min-w-0 font-arabic flex-1"
                dir="rtl"
              >
                {t("promo.bar")}
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToOffer}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 px-4 py-2.5 sm:py-2 rounded-full bg-white text-[#8c6743] text-xs sm:text-sm font-bold hover:bg-amber-50 transition-colors shadow-md shrink-0 font-arabic min-h-[44px]"
            >
              {t("promo.cta")}
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
