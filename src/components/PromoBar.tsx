import { motion } from "framer-motion";
import { Gift, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function PromoBar() {
  const { t } = useLanguage();

  const scrollToOffer = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 22, delay: 0.3 }}
      className="fixed top-[var(--header-nav,4rem)] left-0 right-0 z-[45] border-b border-amber-400/40 shadow-lg shadow-amber-900/20 lg:hidden"
      role="region"
      aria-label={t("promo.badge")}
    >
      <div className="relative overflow-hidden bg-gradient-to-r from-[#8c664b] via-amber-600 to-[#A67C52] text-white shadow-[0_4px_24px_rgba(166,124,82,0.4)]">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(255,255,255,0.15) 8px, rgba(255,255,255,0.15) 16px)",
          }}
        />

        <div className="container mx-auto px-2 sm:px-4 relative max-w-[100vw]">
          <div className="flex flex-col items-stretch sm:flex-row sm:items-center justify-center gap-2 py-2 px-1 sm:py-3 min-h-[5.5rem] sm:min-h-[3.25rem]">
            <div className="flex items-center justify-center gap-1.5 sm:gap-3 min-w-0">
              <motion.span
                animate={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="hidden sm:flex shrink-0 items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-sm"
              >
                <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.span>
              <span className="inline-flex shrink-0 items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full bg-red-500 text-[10px] sm:text-xs font-bold font-arabic">
                <Sparkles className="w-3 h-3" />
                {t("promo.badge")}
              </span>
              <p
                className="text-[11px] sm:text-sm font-semibold text-center leading-tight line-clamp-2 min-w-0 font-arabic"
                dir="rtl"
              >
                {t("promo.bar")}
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToOffer}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 px-3 sm:px-4 py-2 sm:py-1.5 rounded-full bg-white text-[#8c6743] text-xs sm:text-sm font-bold hover:bg-amber-50 transition-colors shadow-md shrink-0 font-arabic"
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
