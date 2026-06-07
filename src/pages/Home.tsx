import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, ShoppingBag, Store, Users, MessageSquare, ChevronLeft, ChevronRight, Star, Quote, Zap, Target, TrendingUp, Calculator, BarChart, Heart, Sparkles, Rocket, Globe, Award, Clock, DollarSign, Eye, MousePointerClick, Users as UsersIcon, Smartphone, Mail, MapPin, Phone, Instagram, Facebook, Twitter, Linkedin, Coffee, ShoppingCart, Briefcase, Home as HomeIcon, Gift, Coffee as CoffeeIcon, ChefHat, Wine, ShoppingBag as Bag, Truck, Palette, Brush, Printer, Package, RefreshCw, Check, X, Menu, XCircle, Volume2, VolumeX, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { DeferredMount } from "@/components/DeferredMount";
import { StyledCarousel } from "@/components/design/StyledCarousel";
import { HeaderMetrics } from "@/components/HeaderMetrics";
import { usePerf } from "@/contexts/PerformanceContext";
import {
  CLIENT_CAROUSEL_ITEMS,
  RESTAURANT_CAROUSEL_ITEMS,
  TESTIMONIAL_CAROUSEL_ITEMS,
} from "@/data/carouselItems";
import { PRICING_PACKS, type PricingPack } from "@/data/pricingPacks";
import { PromoBar } from "@/components/PromoBar";
import {
  AmbientBackground,
  FloatingParticles,
  ShineBorder,
} from "@/components/design/AmbientBackground";
import { PremiumButton } from "@/components/design/PremiumButton";
import { BrandName } from "@/components/design/BrandName";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationPath } from "@/i18n/translations";
import { scrollToSection, SECTION_NAVIGATE_EVENT } from "@/lib/scrollToSection";

const NAV_ITEMS: { id: string; labelKey: TranslationPath }[] = [
  { id: "about", labelKey: "nav.about" },
  { id: "how-it-works", labelKey: "nav.howItWorks" },
  { id: "pricing", labelKey: "sections.pricing" },
  { id: "partners", labelKey: "nav.partners" },
  { id: "testimonials", labelKey: "nav.testimonials" },
  { id: "contact", labelKey: "nav.contact" },
];

const FOOTER_LINKS: { id: string; labelKey: TranslationPath }[] = [
  { id: "hero", labelKey: "footer.home" },
  { id: "about", labelKey: "nav.about" },
  { id: "how-it-works", labelKey: "nav.howItWorks" },
  { id: "pricing", labelKey: "sections.pricing" },
  { id: "partners", labelKey: "nav.partners" },
  { id: "testimonials", labelKey: "nav.testimonials" },
  { id: "contact", labelKey: "nav.contact" },
];

// === WHATSAPP WITH MEGA PULSE ===
function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);
  const mode = usePerf();
  const calm = mode === "lite";
  const pulseCount = calm ? 0 : 2;

  return (
    <motion.a
      href="https://wa.me/212607141549"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed safe-bottom safe-right bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 group"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={calm ? { scale: 1.05 } : { scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 15,
        delay: 1.5 
      }}
    >
      <div className="relative">
        {/* Multiple pulsing rings */}
        {[0, 1, 2].slice(0, pulseCount + 1).map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-green-500 rounded-full"
            animate={
              pulseCount > 0
                ? {
                    scale: [1, 2 + i * 0.3, 1],
                    opacity: [0.5, 0, 0.5],
                  }
                : undefined
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Main button with glow */}
        <motion.div
          className="relative bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 text-white p-3 sm:p-4 rounded-full shadow-2xl"
          animate={
            calm
              ? undefined
              : {
                  boxShadow: isHovered
                    ? [
                        "0 0 20px rgba(34,197,94,0.5)",
                        "0 0 60px rgba(34,197,94,0.8)",
                        "0 0 20px rgba(34,197,94,0.5)",
                      ]
                    : [
                        "0 0 20px rgba(34,197,94,0.3)",
                        "0 0 40px rgba(34,197,94,0.5)",
                        "0 0 20px rgba(34,197,94,0.3)",
                      ],
                }
          }
          transition={calm ? undefined : { duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          
          {/* Notification badge */}
          {!calm && (
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
              1
            </div>
          )}
          
          {/* Floating text */}
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ opacity: 0, x: 20, scale: 0 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0 }}
                className="hidden md:block absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-black to-gray-900 text-white px-5 py-3 rounded-2xl text-sm whitespace-nowrap backdrop-blur-sm shadow-2xl border border-white/10 max-w-[min(90vw,280px)]"
              >
                💬 Contactez-nous maintenant!
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.a>
  );
}

// === ENHANCED RAINBOW PROGRESS BAR ===
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-black/5">
      <motion.div
        className="h-full bg-gradient-to-r from-[#8c664b] via-[#A67C52] via-amber-400 to-yellow-300 origin-left shadow-glow relative overflow-hidden"
        style={{ scaleX }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
}

// === 3D CARD WITH GLOW & MAGNETIC EFFECT ===
function Card3D({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mode = usePerf();
  const tiltEnabled = mode === "full";
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glow, setGlow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEnabled || !ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth magnetic effect
    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = ((centerY - y) / centerY) * 12;
    
    setRotateX(rotateX);
    setRotateY(rotateY);
    setGlow(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlow(false);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative transition-all duration-500 ease-out",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      animate={{
        boxShadow: glow 
          ? "0 30px 80px rgba(166,124,82,0.45), 0 0 60px rgba(234, 179, 8, 0.2), 0 0 0 1px rgba(166,124,82,0.2)"
          : "0 10px 40px rgba(0, 0, 0, 0.06)",
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      onMouseMove={tiltEnabled ? handleMouseMove : undefined}
      onMouseLeave={tiltEnabled ? handleMouseLeave : undefined}
    >
      {/* Enhanced glow effect */}
      {tiltEnabled && glow && (
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-[#A67C52]/20 via-yellow-400/20 to-[#A67C52]/20 rounded-3xl blur-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.3 }}
        />
      )}
      {/* Inner glow */}
      {tiltEnabled && glow && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-3xl opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

// === SECTION HEADING — PREMIUM ===
function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-10 sm:mb-14 md:mb-20 relative px-4">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100%,28rem)] h-32 bg-[#A67C52]/15 blur-[80px] rounded-full pointer-events-none" />

      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          viewport={{ once: true }}
          className="inline-flex mb-5 sm:mb-7 relative max-w-[90vw]"
        >
          <span className="absolute inset-0 rounded-full bg-amber-400/30 blur-xl animate-pulse-ring" />
          <span
            dir="rtl"
            className="relative z-10 inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#8c664b] px-5 sm:px-7 py-2.5 glass-card rounded-full border-amber-200/60 font-arabic leading-relaxed"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            {subtitle}
          </span>
        </motion.div>
      )}

      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-5 sm:mb-7 relative inline-block max-w-4xl text-balance leading-[1.15] font-arabic px-1"
        dir="rtl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, type: "spring", stiffness: 90, damping: 14 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient-kraft">{title}</span>
      </motion.h2>

      <motion.div
        className="flex items-center justify-center gap-3 mx-auto"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#A67C52]" />
        <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
        <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#A67C52]" />
      </motion.div>
    </div>
  );
}

// === NAVIGATION ===

function Navigation() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.toggleAttribute(
      "data-mobile-menu-open",
      mobileMenuOpen
    );
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.documentElement.removeAttribute("data-mobile-menu-open");
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const closeMenu = () => setMobileMenuOpen(false);
    window.addEventListener(SECTION_NAVIGATE_EVENT, closeMenu);
    return () => window.removeEventListener(SECTION_NAVIGATE_EVENT, closeMenu);
  }, []);

  const menuItems = [...NAV_ITEMS].reverse();

  const handleMenuClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <motion.nav
      data-header-nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 safe-top-nav",
        isScrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-glow border-b border-[#A67C52]/15"
          : "bg-gradient-to-b from-white/40 to-transparent backdrop-blur-sm"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
        boxShadow: isScrolled 
          ? "0 10px 40px -10px rgba(0,0,0,0.1), 0 0 60px -20px rgba(166,124,82,0.15)" 
          : "none"
      }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        boxShadow: { duration: 0.5 }
      }}
    >
      {/* Animated gradient border on scroll */}
      {isScrolled && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />
      )}


      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex items-center justify-between h-14 sm:h-20 shrink-0">
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer min-w-0"
            whileTap={{ scale: 0.98 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <img
              src="/logo.png"
              alt="Logo F'Yedk Pub"
              className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl border border-[#A67C52]/20 shadow-sm shrink-0"
            />

            <div dir="ltr" className="min-w-0 hidden min-[360px]:block">
              <h4 className="text-base sm:text-2xl font-bold tracking-tight font-latin truncate">
                F'Yedk <span className="text-primary">Pub</span>
              </h4>
              <p className="text-[10px] sm:text-xs text-muted-foreground font-medium font-latin truncate">
                {t("nav.tagline")}
              </p>
            </div>
          </motion.a>

          {/* Desktop Menu with enhanced animations */}
          <div className="hidden md:flex items-center gap-2">
            {menuItems.map((item, i) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleMenuClick(e, item.id)}
                className={cn(
                  "relative text-base text-gray-700 hover:text-primary px-4 py-2 rounded-xl overflow-hidden group cursor-pointer",
                  "font-arabic"
                )}
                dir="rtl"
                onMouseEnter={() => setHoveredItem(i)}
                onMouseLeave={() => setHoveredItem(null)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3, type: "spring", stiffness: 200 }}
                whileHover={{ 
                  y: -3,
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-xl"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: hoveredItem === i ? 1 : 0,
                    opacity: hoveredItem === i ? 1 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-xl"
                  initial={{ x: "-100%" }}
                  animate={{
                    x: hoveredItem === i ? "100%" : "-100%",
                  }}
                  transition={{ duration: 0.6 }}
                />

                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: hoveredItem === i ? 1 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />

                {/* Text with glow on hover */}
                <span className="relative z-10 font-semibold transition-all duration-300">
                  {t(item.labelKey)}
                </span>
              </motion.a>
            ))}

            {/* CTA Button with amazing animations */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              <motion.button
                onClick={() => scrollToSection("contact")}
                className={cn(
                  "relative ml-4 px-6 py-2.5 bg-gradient-to-r from-[#A67C52] via-yellow-700 to-[#A67C52] text-white font-bold rounded-full overflow-hidden group shadow-lg shadow-primary/30 text-sm",
                  "font-arabic"
                )}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 10px 40px rgba(166,124,82,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-[#A67C52] to-yellow-600"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                />

                {/* Shine sweep effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />

                {/* Pulse rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/30"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                <span className="relative z-10 flex items-center gap-2">
                  {t("nav.cta")}
                  <ArrowRight
                    className="w-4 h-4 transition-transform rotate-180 group-hover:-translate-x-1"
                  />
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile Hamburger with animation */}
          <motion.div 
            className="md:hidden flex items-center gap-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <motion.button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative flex items-center justify-center min-h-[44px] min-w-[44px] text-gray-700 hover:text-primary rounded-lg transition-colors"
              whileTap={{ scale: 0.95 }}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XCircle size={28} className="text-primary" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="إغلاق القائمة"
              className="md:hidden fixed inset-0 z-[55] bg-black/40"
              style={{ top: "var(--header-nav)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden fixed inset-x-0 bottom-0 z-[56] bg-white/98 backdrop-blur-xl shadow-2xl border-t border-[#A67C52]/15 overflow-y-auto overscroll-contain"
              style={{ top: "var(--header-nav)" }}
            >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-1 max-h-full">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    handleMenuClick(e, item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "text-lg text-gray-700 hover:text-primary px-4 py-3.5 rounded-xl hover:bg-primary/10 transition-all relative overflow-hidden group cursor-pointer min-h-[48px] flex items-center",
                    "font-arabic"
                  )}
                  dir="rtl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Slide-in background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <span className="relative z-10 font-semibold">
                    {t(item.labelKey)}
                  </span>
                </motion.a>
              ))}
              
              {/* Mobile CTA */}
              <motion.button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToSection("contact");
                }}
                className={cn(
                  "mt-4 w-full px-6 py-3.5 min-h-[48px] bg-gradient-to-r from-[#A67C52] to-yellow-700 text-white font-bold rounded-xl overflow-hidden relative group",
                  "font-arabic"
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-[#A67C52]"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {t("nav.cta")}
                  <ArrowRight
                    className="w-4 h-4 rotate-180"
                  />
                </span>
              </motion.button>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}


// === STATS WITH EXPLOSIVE COUNTERS ===
// Le composant pour l'animation des chiffres
function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [motionValue, isInView, end]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        // Formate le nombre (ex: 5000 -> 5,000)
        ref.current.textContent = Math.floor(latest).toLocaleString('en-US');
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
}

function StatsSection() {
  const stats = [
    { label: "شخص يومياً", value: 5000, icon: UsersIcon, color: "from-blue-500 to-cyan-500" },
    { label: "عملاء راضون", value: 200, icon: Heart, color: "from-rose-500 to-pink-500" },
    { label: "شريك", value: 50, icon: Store, color: "from-emerald-500 to-green-500" },
    { label: "انطباع", value: 15000, icon: Eye, color: "from-purple-500 to-indigo-500" },
  ];

  return (
    <section className="py-14 sm:py-20 md:py-24 relative overflow-hidden border-y border-[#A67C52]/10">
      <AmbientBackground variant="light" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border-amber-100/80 hover:shadow-glow transition-shadow duration-500"
              initial={{ opacity: 0, y: 50, scale: 0 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: index * 0.2,
                type: "spring",
                stiffness: 200
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} shadow-xl sm:shadow-2xl mb-3 sm:mb-4 relative overflow-hidden`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white relative z-10" />
              </motion.div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gradient-kraft mb-1 sm:mb-2 tabular-nums">
                <span>+</span><AnimatedCounter end={stat.value} />
              </div>
              <div className="font-arabic text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground" dir="rtl">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// === HERO SECTION ===



function Hero() {
  const { t } = useLanguage();
  const calm = usePerf() === "lite";
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], calm ? [0, 0] : [0, 120]);

  // Image stable - pas d'effet 3D
  const rotateX = "0deg";
  const rotateY = "0deg";
  const imageTranslateX = "0%";
  const imageTranslateY = "0%";
  const glareX = "50%";
  const glareY = "50%";
  const glareOpacity = 0.4;

  // --- L'IMAGE UNIQUE ---
  const heroImage = "/1.png"; // Votre image unique

  // --- Animation texte SIMPLE ET RAPIDE ---
  const textReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={containerRef}
      className="section-anchor relative min-h-[100dvh] flex items-center pt-[var(--header-total)] lg:pt-[var(--header-nav)] overflow-hidden bg-kraft-radial mobile-contain"
      id="hero"
      data-id="الرئيسية"
    >
      <motion.div style={{ y: yParallax }} className="absolute inset-0 pointer-events-none">
        <AmbientBackground variant="hero" />
        <FloatingParticles count={calm ? 4 : 8} />
      </motion.div>

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(rgba(166,124,82,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(166,124,82,0.12)_1px,transparent_1px)] bg-[size:48px_48px]"
        style={calm ? undefined : { animation: "gridMove 24s linear infinite" }}
      />

      <div className="container mx-auto px-3 sm:px-6 md:px-8 relative z-20 flex flex-col lg:grid lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-2 items-center w-full min-w-0 py-2 sm:py-8 md:py-10 lg:py-0">
        {/* --- IMAGE (first on mobile) --- */}
        <div className="order-1 lg:order-2 lg:col-span-7 relative flex justify-center items-center w-full min-w-0 shrink-0 max-h-[34dvh] sm:max-h-[42dvh] md:max-h-[48dvh] lg:max-h-none lg:h-[min(900px,90vh)] z-10">
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 120, delay: 0.15 }}
            className="relative w-full max-w-[min(100%,220px)] min-[400px]:max-w-[260px] sm:max-w-[340px] md:max-w-[440px] lg:max-w-[600px] xl:max-w-[680px] h-full max-h-full aspect-[4/3] rounded-[20px] sm:rounded-[32px] md:rounded-[50px] transition-all duration-200 ease-out group mx-auto"
          >
             <motion.div
               style={{ opacity: glareOpacity, scaleX: 0.9 }}
               className="absolute -bottom-[10%] inset-x-[10%] h-[60px] sm:h-[100px] bg-black/30 blur-[60px] sm:blur-[80px] rounded-[100%] z-[-1] transform-gpu"
             />

            {!calm && (
              <motion.div
                className="absolute -inset-3 sm:-inset-4 rounded-[28px] sm:rounded-[40px] bg-gradient-to-r from-amber-400/40 via-[#A67C52]/50 to-amber-400/40 blur-2xl -z-10"
                animate={{ opacity: [0.35, 0.65, 0.35], scale: [0.98, 1.02, 0.98] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            )}

            <div className="absolute inset-0 rounded-[18px] sm:rounded-[32px] md:rounded-[50px] bg-gradient-to-br from-white/50 via-white/15 to-white/5 backdrop-blur-[40px] sm:backdrop-blur-[50px] border-[3px] sm:border-[6px] md:border-[8px] border-white/60 shadow-glow-lg overflow-hidden z-20 transform-gpu ring-1 ring-white/40">
              <div className="absolute inset-0 z-10">
                 <img
                  src={heroImage}
                  alt="Présentation App"
                  width={800}
                  height={600}
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover filter saturate-[1.1] contrast-[1.05]"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#A67C52]/30 via-transparent to-yellow-100/10 mix-blend-overlay" />
              </div>

              <div
                style={{
                  background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0) 60%)`,
                  opacity: glareOpacity
                }}
                className="absolute inset-0 pointer-events-none mix-blend-plus-lighter z-30"
              />
              <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0_3px_4px_rgba(255,255,255,0.8),_inset_0_-3px_4px_rgba(0,0,0,0.2)] z-40 pointer-events-none border border-white/30" />
            </div>

            <div className="absolute top-1.5 right-1.5 sm:top-4 sm:right-4 glass-card px-2 py-1 sm:px-3 sm:py-2 rounded-full shadow-md z-40 flex items-center gap-1.5 border-emerald-300/50">
              <Target className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
              <span className="font-bold text-emerald-700 text-[10px] sm:text-sm whitespace-nowrap">
                Ciblage Précis
              </span>
            </div>
          </motion.div>
        </div>

        {/* --- TEXT --- */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
            className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-center relative z-30 text-center items-center w-full min-w-0 shrink"
          >
          {/* Promo highlight — desktop only */}
          <motion.div
            variants={textReveal}
            className="mb-6 w-full max-w-lg hidden lg:block"
          >
            <button
              type="button"
              onClick={() => scrollToSection("pricing")}
              className={cn(
                "relative w-full text-left rounded-2xl px-4 py-3 sm:px-5 sm:py-4 glass-card shadow-glow hover:shadow-glow-lg transition-all duration-500 overflow-hidden group",
                "text-right font-arabic"
              )}
              dir="rtl"
            >
              <ShineBorder />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-100/80 via-orange-50/90 to-amber-50/80 -z-10"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <span className="inline-flex items-center gap-1.5 mb-1.5 px-2 py-0.5 rounded-full bg-red-500 text-white text-[10px] sm:text-xs font-bold">
                <Sparkles className="w-3 h-3" />
                {t("promo.badge")}
              </span>
              <p className="text-sm sm:text-base font-bold text-amber-900 leading-snug">
                {t("promo.bar")}
              </p>
              <p className="text-xs sm:text-sm text-amber-800/90 mt-1 font-medium">
                {t("promo.urgency")}
              </p>
            </button>
          </motion.div>

          <motion.div variants={textReveal} className="mb-2 sm:mb-4 lg:mb-6 inline-block relative">
            <span className="relative inline-flex items-center gap-1.5 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-gradient-to-r from-yellow-50/90 via-orange-50/90 to-yellow-50/90 text-yellow-900 text-[10px] sm:text-sm font-bold border border-yellow-300/60 sm:border-2 shadow-md backdrop-blur-xl font-arabic">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600 shrink-0" />
              {t("hero.badge")}
            </span>
          </motion.div>

          <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center mb-3 sm:mb-6 lg:mb-10">
            <div className="overflow-visible mb-2 sm:mb-4 relative w-full">
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-yellow-400/30 via-orange-400/20 to-transparent blur-3xl -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.h1
                variants={textReveal}
                className="text-[1.65rem] leading-[1.2] min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight relative text-center"
              >
                <span
                  className={cn(
                    "block text-center text-gradient-gold pb-1 sm:pb-3 lg:scale-[1.02] relative drop-shadow-sm",
                    "font-arabic"
                  )}
                  dir="rtl"
                  style={{
                    textShadow:
                      "0 8px 24px rgba(166,124,82,0.25), 0 0 40px rgba(234,179,8,0.15)",
                  }}
                >
                  {t("hero.title")}
                </span>
              </motion.h1>
            </div>

            <motion.h2 variants={textReveal} className="w-full text-center">
              <span
                className="block text-center text-base sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl text-[#8c6743] font-bold relative font-latin leading-tight"
                dir="ltr"
              >
                {t("nav.tagline")}
              </span>
            </motion.h2>
          </div>

          <motion.div
            variants={textReveal}
            className="flex flex-col min-[400px]:flex-row items-stretch min-[400px]:items-center justify-center gap-2 sm:gap-3 w-full max-w-md lg:max-w-lg px-1"
          >
            <PremiumButton
              className="w-full min-[400px]:flex-1 py-3 sm:py-4 text-sm sm:text-base rounded-xl font-arabic min-h-[44px]"
              onClick={() => scrollToSection("contact")}
            >
              {t("nav.cta")}
              <ArrowRight className="w-4 h-4 rotate-180" />
            </PremiumButton>
            <button
              type="button"
              onClick={() => scrollToSection("pricing")}
              className={cn(
                "w-full min-[400px]:flex-1 py-3 sm:py-4 min-h-[44px] rounded-xl border-2 border-[#A67C52]/35 bg-white/80 text-[#8c664b] font-bold text-sm sm:text-base shadow-sm hover:bg-amber-50/90 transition-colors font-arabic"
              )}
            >
              {t("sections.pricing")}
            </button>
          </motion.div>

        </motion.div>

      </div>

      <style>{`
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        .perspective-[2500px] {
          perspective: 2500px;
        }
        @keyframes shimmer {
            100% {
                transform: translateX(100%);
            }
        }
        @keyframes gridMove {
            0% {
                background-position: 0 0, 0 0;
            }
            100% {
                background-position: 50px 50px, 50px 50px;
            }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(166,124,82,0.3); }
          50% { box-shadow: 0 0 40px rgba(166,124,82,0.6); }
        }
        * {
          scroll-behavior: smooth;
        }
        ::selection {
          background: rgba(166,124,82,0.3);
          color: inherit;
        }
      `}</style>
    </section>
  );
}





// === ABOUT SECTION ===

// Composant pour les cartes interactives (Tilt Effect)
const FeatureCard = ({ icon: Icon, title, description, delay }: { 
  icon: React.ComponentType<{ className?: string }>; 
  title: string; 
  description: string; 
  delay: number;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      style={{ x, y, rotateX, rotateY, z: 100 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="relative group cursor-pointer perspective-1000"
    >
      <div className="relative overflow-hidden glass-card p-6 rounded-3xl hover:shadow-glow transition-all duration-500 h-full flex flex-col items-center text-center">
        {/* Hover Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#A67C52]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#A67C52] to-yellow-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="relative z-10 text-xl font-bold font-arabic text-gray-900 mb-2">{title}</h3>
        <p className="relative z-10 text-sm text-gray-600 font-arabic leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

function About() {
  const calm = usePerf() === "lite";
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], calm ? [0, 0] : [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], calm ? [0, 0] : [-30, 30]);
  const rotate = useTransform(scrollYProgress, [0, 1], calm ? [0, 0] : [-3, 3]);

  const aboutImages = [
    {
      url: "/1.png", // Assure-toi que ces images existent dans /public
      alt: "Ambiance Restaurant",
    },
    {
      url: "/2.png", 
      alt: "Sac en main",
    },
    {
      url: "/3.png",
      alt: "Communauté locale",
    }
  ];

  return (
    <section 
      ref={containerRef} 
      data-id="من نحن" 
      className="py-12 sm:py-16 md:py-20 lg:py-32 bg-[#fdfbf7] relative overflow-hidden"
    >
      <AmbientBackground variant="warm" />
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')]" />

      {/* --- ELÉMENTS DÉCORATIFS ARRIÈRE-PLAN --- */}
      {!calm && (
        <motion.div
          style={{ y: y2 }}
          className="absolute top-20 -left-4 sm:left-[-5%] text-[6rem] sm:text-[16rem] lg:text-[28rem] font-black text-[#A67C52]/5 font-arabic select-none z-0 leading-none pointer-events-none"
        >
          ف
        </motion.div>
      )}
      <div className="absolute top-1/2 right-0 w-[min(85%,420px)] h-[min(85%,420px)] sm:right-[-10%] sm:w-[min(100%,600px)] sm:h-[min(100%,600px)] bg-yellow-300/20 rounded-full blur-[120px] mix-blend-multiply pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
          
          {/* --- LEFT: COLLAGE IMAGES (PARALLAX) --- */}
          <div className="relative min-h-[320px] sm:min-h-[420px] md:h-[500px] lg:h-[600px] w-full max-w-lg mx-auto lg:max-w-none flex flex-col sm:block items-center justify-center gap-4 sm:gap-0 overflow-hidden">
             {/* Cercles décoratifs derrière */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[min(85vw,400px)] h-[min(85vw,400px)] border border-[#A67C52]/20 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute w-[min(75vw,350px)] h-[min(75vw,350px)] border border-dashed border-[#A67C52]/30 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
             </div>

            {/* Image Principale (Grande) */}
            <motion.div 
              style={{ y: y1, rotate: -6 }}
              className="relative sm:absolute sm:left-0 sm:top-10 w-full sm:w-[58%] z-20 mx-auto sm:mx-0"
            >
              <div className="relative rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-4 border-white">
                <img src={aboutImages[0].url} alt={aboutImages[0].alt} className="w-full h-auto object-cover aspect-[4/5]" />
                {/* Badge sur l'image */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold text-[#A67C52] shadow-sm">
                  100% Locale
                </div>
              </div>
            </motion.div>

            {/* Image Secondaire (Petite flottante) */}
            <motion.div 
              style={{ y: y2, rotate: 6 }}
              className="relative sm:absolute sm:right-0 sm:bottom-12 w-full sm:w-[52%] z-30 mx-auto sm:mx-0"
            >
              <div className="relative rounded-[30px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.25)] border-4 border-white">
                 <img src={aboutImages[1].url} alt={aboutImages[1].alt} className="w-full h-auto object-cover aspect-square" />
              </div>
            </motion.div>

            {/* Élément graphique (Points) - Réduit pour performance */}
            <div className="absolute top-0 right-10 flex gap-2 z-10 opacity-50">
               {[...Array(10)].map((_, i) => (
                 <div key={i} className="w-2 h-2 rounded-full bg-[#A67C52]" />
               ))}
            </div>
          </div>

          {/* --- RIGHT: CONTENT & STORY --- */}
          <div className="text-right order-1 lg:order-2" dir="rtl">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 text-gray-900 font-arabic leading-tight">
                شكون <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#A67C52] to-yellow-600">حنا ؟</span>
              </h2>
              
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-gray-600 font-arabic leading-relaxed sm:leading-loose relative">
                {/* Ligne verticale décorative */}
                <div className="absolute right-0 sm:right-[-12px] top-2 bottom-2 w-1 bg-gradient-to-b from-[#A67C52] to-transparent rounded-full opacity-30" />
                
                <p>
                  <BrandName className="font-bold text-gray-900 text-2xl" pubClassName="text-gray-900" /> هي ثورة فمجال الإشهار المحلي. الفكرة ديالنا نابعة من الواقع المغربي: كيفاش نوصلو رسالتك لقلب الدار، ماشي غير للزنقة.
                </p>
                <p>
                  حنا كنحولو <span className="bg-yellow-100 px-2 py-1 rounded mx-1 text-yellow-800 font-bold">سّاك الكرافت</span> من مجرد وسيلة نقل للماكلة، لأقوى وسيلة تواصل كتضمن أن الإعلان ديالك يتشاف ويتقرا بتركيز.
                </p>
              </div>
            </motion.div>

            {/* --- AVANTAGES MODERNE --- */}
            <div className="mt-12 space-y-6">
              {[
                { 
                  icon: ShoppingBag, 
                  title: "بسيط", 
                  description: "تصميم واضح ومباشر كيوصل الفكرة بلا تعقيد.",
                  gradient: "from-blue-500 to-cyan-500"
                },
                { 
                  icon: Users, 
                  title: "ذكي", 
                  description: "استهداف دقيق للزبناء فمنطقتك الجغرافية.",
                  gradient: "from-purple-500 to-pink-500"
                },
                { 
                  icon: Zap, 
                  title: "فعّال", 
                  description: "نسبة مشاهدة وتفاعل عالية بزاف مقارنة بالورق.",
                  gradient: "from-amber-500 to-orange-500"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-200/60 hover:border-[#A67C52]/40 hover:shadow-lg transition-all duration-300">
                    {/* Gradient accent line */}
                    <div className={`w-1 h-16 rounded-full bg-gradient-to-b ${item.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />
                    
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1" dir="rtl">
                      <h3 className="text-xl font-bold font-arabic text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 font-arabic text-sm leading-relaxed">{item.description}</p>
                    </div>
                    
                    {/* Arrow indicator */}
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#A67C52] group-hover:translate-x-1 transition-all flex-shrink-0 rotate-180" />
                  </div>
                </motion.div>
              ))}
            </div>



          </div>
        </div>
      </div>
    </section>
  );
}

// === WOW VIDEO SHOWCASE ===
function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const calmPhone = usePerf() === "lite";

  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], calmPhone ? [0, 0] : [40, -40]);
  const rotate = useTransform(scrollYProgress, [0, 1], calmPhone ? [0, 0] : [-4, 4]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    calmPhone ? [1, 1, 1] : [0.92, 1, 0.98]
  );

  const toggleMute = () => {
    // Son toujours désactivé - pas de toggle
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Toujours muet
      setIsMuted(true);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-[#f8f5f2] via-white to-[#f8f5f2]">
      <AmbientBackground variant="light" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.07]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          
          {/* --- RIGHT: THE VIDEO (PHONE STYLE) --- */}
          <div
            className={cn(
              "order-1 lg:order-2 flex justify-center",
              !calmPhone && "lg:perspective-[2000px]"
            )}
          >
            <motion.div
              style={calmPhone ? undefined : { y, rotateY: rotate, scale }}
              className="relative w-full max-w-[min(100%,320px)] sm:max-w-[380px] aspect-[9/16] rounded-[2rem] sm:rounded-[3rem] border-[6px] sm:border-8 border-gray-900 bg-gray-900 shadow-glow-lg z-20 group mx-auto ring-2 ring-amber-400/30 will-change-auto"
              initial={calmPhone ? { opacity: 0, y: 16 } : { opacity: 0, scale: 0.9, rotateX: 12, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
              transition={{ duration: calmPhone ? 0.45 : 0.8, type: "spring", stiffness: calmPhone ? 120 : 100 }}
              viewport={{ once: true }}
              whileHover={calmPhone ? undefined : { scale: 1.02 }}
            >
              {/* Phone Notch Enhanced */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-30 flex items-center justify-center gap-2">
                <div className="w-16 h-1 bg-gray-800 rounded-full" />
                <div className="w-1 h-1 bg-blue-500 rounded-full opacity-80" />
              </div>

              {/* Video Container */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-gray-800 cursor-pointer group/video" onClick={togglePlay}>
                <video
                  ref={videoRef}
                  src="/video.mp4"
                  className="w-full h-full object-cover lg:transition-transform lg:duration-300 lg:group-hover/video:scale-105"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                
                {/* Overlay Play/Pause State */}
                <AnimatePresence>
                  {!isPlaying && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black/50 flex items-center justify-center z-20 backdrop-blur-sm"
                    >
                      <motion.div
                        className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/50 shadow-lg"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        <Play className="w-10 h-10 text-white fill-white ml-1" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Gradient Overlay Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
                
                {/* Social Elements Mockup Enhanced */}
                <div className="absolute right-4 bottom-20 flex flex-col gap-6 items-center z-20">
                  {/* Hearts Floating Animation */}
                  <div className="flex flex-col gap-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-lg"
                      >
                        <Heart
                          className="w-5 h-5 text-white transition-all"
                          fill={i === 1 ? "#ef4444" : "none"}
                          style={{
                            filter: i === 1 ? "drop-shadow(0 0 8px rgba(239,68,68,0.8))" : "none",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <div
                className={cn(
                  "absolute -inset-[3px] rounded-[3.2rem] bg-gradient-to-br from-[#A67C52] via-yellow-500 to-[#A67C52] -z-10 blur-lg",
                  calmPhone ? "opacity-45" : "opacity-60"
                )}
              />

              {/* Floating Elements popping OUT of the phone */}
              <motion.div
                className="hidden sm:block absolute top-12 left-1 sm:top-20 sm:-left-12 md:-left-20 bg-white p-3 sm:p-5 rounded-2xl shadow-2xl z-40 max-w-[min(85vw,200px)] border-2 border-yellow-400/30"
                initial={{ x: -100, opacity: 0, scale: 0.8 }}
                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                whileHover={calmPhone ? undefined : { scale: 1.05, x: 5 }}
                transition={{ delay: 0.5, type: "spring" }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0" />
                  <span className="text-xs font-bold text-gray-800">Live Reaction</span>
                </div>
                <p className="text-sm font-arabic text-gray-600 leading-tight" dir="rtl">
                  "شوف التفاعل ديال الناس مع الإشهار!"
                </p>
                {/* Arrow pointing to phone */}
                {!calmPhone && (
                  <motion.div
                    className="absolute -right-3 top-1/2 text-white"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                )}
              </motion.div>

              {!calmPhone && (
                <div className="absolute bottom-20 right-0 sm:bottom-32 sm:-right-10 md:-right-16 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-yellow-400 to-[#A67C52] rounded-full blur-3xl opacity-40 -z-10 pointer-events-none" />
              )}
            </motion.div>
          </div>

          {/* --- LEFT: TEXT CONTENT ENHANCED --- */}
          <div className="order-2 lg:order-1 text-right mt-8 lg:mt-0" dir="rtl">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#A67C52]/20 to-purple-600/20 border border-[#A67C52]/30 text-gray-900 text-sm font-bold mb-6 shadow-lg backdrop-blur-sm">
                <Smartphone className="w-5 h-5 shrink-0" />
                <span>شاهد بنفسك</span>
              </div>

              <div className="overflow-visible mb-8">
                <motion.h2
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-arabic text-gray-900 leading-[1.3] sm:leading-[1.25] overflow-visible"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  dir="rtl"
                >
                  <span className="block overflow-visible">
                    أكثر من مجرد{" "}
                    <span
                      className="text-transparent bg-clip-text bg-gradient-to-l from-[#A67C52] via-yellow-600 to-[#A67C52] pb-2 sm:pb-3"
                      style={{
                        WebkitBoxDecorationBreak: "clone",
                        boxDecorationBreak: "clone",
                        filter: "drop-shadow(0 0 12px rgba(234, 179, 8, 0.25))",
                      }}
                    >
                      إشهار عادي
                    </span>
                  </span>
                </motion.h2>
              </div>

              <motion.p
                className="text-xl text-gray-600 font-arabic mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                شوف كيفاش الناس كتفاعل مع "سّاك الكرافت". الإشهار ديالك ماشي غير صورة، هو تجربة حية كتدخل لقلب الدار وكتخلق حديث بين العائلة.
              </motion.p>

              <div className="space-y-6 mb-10">
                {[
                  { title: "تفاعل حقيقي", desc: "الزبون كيشوف، كيقرا، وكيحتفظ بالسّاك." },
                  { title: "جودة عالية", desc: "طباعة واضحة كتجذب العين." },
                  { title: "تأثير فوري", desc: "حول المشاهدين لزبناء من أول نظرة." },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4 p-5 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-[#A67C52]/30 hover:shadow-lg hover:shadow-[#A67C52]/20"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02, x: -5 }}
                    transition={{ delay: 0.2 + idx * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="mt-1 w-10 h-10 rounded-full bg-gradient-to-br from-[#A67C52] to-yellow-600 flex items-center justify-center shrink-0 shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Check className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-gray-900 font-bold font-arabic text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600 font-arabic">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#A67C52] to-yellow-700 text-white font-bold rounded-full font-arabic text-base sm:text-lg flex items-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
                onClick={() => scrollToSection("contact")}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
                <span className="relative z-10">بغيت نجرب دابا</span>
                <motion.div
                  className="relative z-10"
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useMotionTemplate } from "framer-motion";
import {  ArrowLeft } from "lucide-react";
// === ANIMATED HOW IT WORKS ===
const ProcessCard = ({ step, index }: { 
  step: { id: string; title: string; desc: string; icon: React.ComponentType<any>; gradient: string }; 
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Gestion de la souris pour l'effet "Spotlight" et Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Mouvement fluide (Spring)
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Masque pour le dégradé de révélation
  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove}
      className="relative group w-full h-full"
    >
      {/* --- CARTE PRINCIPALE --- */}
      <div className="relative flex min-h-[320px] h-auto sm:min-h-[380px] md:min-h-[400px] flex-col overflow-hidden rounded-2xl border border-[#A67C52]/20 bg-white shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-[#A67C52]/50 sm:rounded-3xl">
        
        {/* Fond texturé subtil */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        {/* --- Spotlight Effect Overlay (Brillance au survol) --- */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
          style={style}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-20`} />
        </motion.div>

        <div className="relative z-20 flex h-full flex-1 flex-col items-center p-6 pb-8 text-center sm:p-8 sm:pb-9">
          
          {/* Numéro Géant en arrière-plan */}
          <span className="absolute top-2 right-2 sm:right-4 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-gray-100 select-none -z-10 group-hover:text-gray-200 transition-colors duration-500 font-sans">
            {step.id}
          </span>

          {/* Icône Flottante */}
          <div className={`mb-4 h-16 w-16 shrink-0 rounded-xl bg-gradient-to-br sm:mb-6 sm:h-[4.5rem] sm:w-[4.5rem] sm:rounded-2xl md:h-20 md:w-20 ${step.gradient} p-[2px] shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
            <div className="flex h-full w-full items-center justify-center rounded-[12px] bg-white sm:rounded-[14px]">
              <step.icon className="h-8 w-8 text-gray-700 sm:h-9 sm:w-9 md:h-10 md:w-10" strokeWidth={1.5} />
            </div>
          </div>

          <h3 className="mb-3 flex min-h-[3.5rem] shrink-0 items-center justify-center text-xl font-bold font-arabic text-gray-900 transition-colors group-hover:text-[#A67C52] sm:mb-4 sm:min-h-[4rem] sm:text-2xl xl:text-[1.35rem] xl:leading-snug">
            {step.title}
          </h3>
          
          <p className="flex flex-1 items-start justify-center text-base leading-relaxed text-gray-500 font-arabic dir-rtl sm:text-lg">
            {step.desc}
          </p>
        </div>

        {/* Barre de progression en bas de carte */}
        <div className="absolute bottom-0 left-0 h-1 bg-gray-100 w-full">
            <motion.div 
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: index * 0.4 }}
                className={`h-full bg-gradient-to-r ${step.gradient}`} 
            />
        </div>
      </div>

      {/* --- Connecteur (Flèche) entre les cartes (Sauf la dernière) --- */}
      {index !== 3 && (
        <div className="hidden xl:flex absolute top-1/2 -left-12 w-12 items-center justify-center z-0 text-[#A67C52]/30">
             <ArrowLeft className="w-8 h-8 animate-pulse" />
        </div>
      )}
    </div>
  );
};

function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "البيزنس",
      desc: "كتعطينا الإعلان ديالك و اللوغو، وإلى ما عندكش، كنصاوبوهلك .",
      icon: Store,
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      id: "02",
      title: "الموقع الإلكتروني",
      desc: "وإلا ما عندكش موقع إلكتروني، كنصاوبوهولك باش يبان البيزنس ديالك بشكل احترافي فالإنترنت.",
      icon: Globe,
      gradient: "from-violet-500 to-purple-400"
    },
    {
      id: "03",
      title: "الطباعة",
      desc: "كنطبعو الإعلان فوق سّاك كرافت بجودة عالية، تصميم بسيط ومقروء.",
      icon: Printer,
      gradient: "from-[#A67C52] to-yellow-500"
    },
    {
      id: "04",
      title: "التوزيع",
      desc: "كنوزعو السّاك ديالكم عبر مطاعمنا الشركاء، باش الإعلان ديالك يوصل مباشرة ليد الزبناء اللي كيشريو وكيستهلكو",
      icon: Truck,
      gradient: "from-emerald-500 to-green-400"
    }
  ];

  return (
    <section data-id="كيفاش كنخدمو" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#A67C52]/20 to-transparent"></div>
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-yellow-100/50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold font-arabic text-gray-900 mb-6"
          >
            كيفاش <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A67C52] to-yellow-600">كنخدمو ؟</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-xl text-gray-500 font-arabic"
            dir="rtl"
          >
            أربع خطوات بسيطة كتفصلك على آلاف الزبناء المحتملين فمنطقتك
          </motion.p>
        </div>

        {/* --- THE GRID & PIPELINE --- */}
        <div className="relative">
            {/* Ligne connectrice animée (Desktop only) */}
            <div className="hidden xl:block absolute top-[130px] left-[5%] right-[5%] h-[2px] bg-gray-100 -z-10">
                <motion.div 
                    initial={{ scaleX: 0, originX: 1 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="h-full w-full bg-gradient-to-l from-transparent via-[#A67C52]/30 to-transparent"
                />
            </div>

            <div className="grid auto-rows-fr items-stretch gap-8 sm:grid-cols-2 lg:gap-10 xl:grid-cols-4" dir="rtl">
            {steps.map((step, idx) => (
                <motion.div
                key={step.id}
                className="h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                >
                    <ProcessCard step={step} index={idx} />
                </motion.div>
            ))}
            </div>
        </div>

        {/* Call to action text */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-12 sm:mt-16"
        >
            <p className="text-gray-400 text-xs sm:text-sm font-arabic px-4">
                النتيجة؟ إشهار كيدوم وكيوصل ليد الناس مباشرة
            </p>
        </motion.div>

      </div>
    </section>
  );
}

// === ENHANCED ROI CALCULATOR ===
import { animate } from "framer-motion";
import {  Wallet,Crown  } from "lucide-react";

// Compteur animé fluide


// Composant Jauge Circulaire (Speedometer)
const Gauge = ({ value, max, color, title, icon: Icon, isWinner }: { 
  value: number; 
  max: number; 
  color: string; 
  title: string; 
  icon: React.ComponentType<{ className?: string }>; 
  isWinner: boolean;
}) => {
  const percent = Math.min((value / max) * 100, 100);
  const radius = 110;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center p-6">
      {/* Background Glow if winner */}
      {isWinner && (
        <div className="absolute inset-0 bg-[#A67C52] opacity-20 blur-[80px] rounded-full animate-pulse" />
      )}

      {/* SVG Circle */}
      <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 mx-auto">
        {/* Track */}
        <svg viewBox="0 0 260 260" className="w-full h-full rotate-[-90deg]">
          <circle
            cx="130"
            cy="130"
            r="110"
            fill="transparent"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Progress */}
          <motion.circle
            cx="130"
            cy="130"
            r="110"
            fill="transparent"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 110}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>

        {/* Inner Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className={`p-3 rounded-full mb-2 ${isWinner ? 'bg-[#A67C52]/20 text-[#A67C52]' : 'bg-gray-800 text-gray-400'}`}>
            <Icon className="w-8 h-8" />
          </div>
          <span className={`text-4xl md:text-5xl font-bold ${isWinner ? 'text-white drop-shadow-[0_0_15px_rgba(166,124,82,0.8)]' : 'text-gray-400'}`}>
            <AnimatedCounter end={value} />
          </span>
        </div>
      </div>

      <h3 className={`mt-4 text-xl font-bold font-arabic ${isWinner ? 'text-[#A67C52]' : 'text-gray-500'}`}>
        {title}
      </h3>
    </div>
  );
};

function ROICalculator() {
  const [budget, setBudget] = useState(2000);

  // Formules (Mêmes ratios qu'avant mais visualisés différemment)
  const traditionalReach = Math.floor(budget / 0.5); // Cher
  const fyedkReach = Math.floor(budget / 0.008); // Pas cher
  const maxScale = 500000; // Echelle max pour la jauge

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#050505] relative overflow-hidden">
      <AmbientBackground variant="dark" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.06]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-arabic text-white mb-4">
            استثمارك <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A67C52] via-yellow-400 to-[#A67C52]">كيرجع ليك</span>
          </h2>
          <p className="text-gray-400 font-arabic text-lg max-w-2xl mx-auto" dir="rtl">
            مقارنة مباشرة بالأرقام. شوف الفرق بعينيك بين الإشهار التقليدي و{" "}
            <BrandName className="text-base align-baseline" pubClassName="text-[#A67C52]" />
          </p>
        </div>

        {/* --- MAIN DASHBOARD --- */}
        <div className="glass-card-dark rounded-[2rem] sm:rounded-[40px] p-6 md:p-12 shadow-glow relative overflow-hidden ring-1 ring-[#A67C52]/20">
          
          {/* Glass Reflection Top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT: SLIDER CONTROL (THE INPUT) */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-8">
              <div className="space-y-2" dir="rtl">
                <label className="text-gray-400 font-arabic text-lg">شحال هي الميزانية ؟</label>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white tracking-tight">
                    {budget.toLocaleString()}
                  </span>
                  <span className="text-[#A67C52] font-bold text-xl">DH</span>
                </div>
              </div>

              {/* Custom Slider */}
              <div className="relative h-16 w-full flex items-center">
                <div className="absolute w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                   <div className="h-full bg-[#A67C52]" style={{ width: `${(budget/10000)*100}%` }} />
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="100"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="absolute w-full h-full opacity-0 cursor-pointer z-20"
                />
                {/* Thumb Visuel */}
                <div 
                  className="absolute h-8 w-8 bg-white rounded-full shadow-[0_0_20px_rgba(166,124,82,0.8)] border-4 border-[#A67C52] z-10 pointer-events-none transition-all"
                  style={{ left: `calc(${(budget/10000)*100}% - 16px)` }}
                />
              </div>

              <div className="p-6 bg-[#A67C52]/5 border border-[#A67C52]/20 rounded-2xl" dir="rtl">
                 <div className="flex gap-4">
                    <div className="p-3 bg-[#A67C52]/20 rounded-lg h-fit">
                        <TrendingUp className="w-6 h-6 text-[#A67C52]" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold font-arabic mb-1">توفير هائل</h4>
                        <p className="text-gray-400 text-sm font-arabic leading-relaxed">
                          مع نفس الميزانية، كتقدر توصل لجمهور أكبر بكثير مقارنة بالفلاير التقليدي.
                        </p>
                    </div>
                 </div>
              </div>
            </div>

            {/* RIGHT: THE GAUGES (VS MODE) */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center justify-center border-t md:border-t-0 md:border-l border-white/5 pt-8 md:pt-0 md:pl-8 min-w-0">
              
              {/* LOSER: TRADITIONAL */}
              <div className="opacity-60 scale-95 sm:scale-90 blur-0 sm:blur-[1px] hover:blur-0 hover:opacity-100 hover:scale-95 transition-all duration-500">
                <Gauge 
                  value={traditionalReach} 
                  max={maxScale} 
                  color="#6b7280" // Gray
                  title="الإشهار التقليدي"
                  icon={Wallet}
                  isWinner={false}
                />
              </div>

              {/* WINNER: F'YEDK */}
              <div className="relative scale-100 md:scale-105 z-10 mt-4 md:mt-0">
                 {/* Winner Badge */}
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#A67C52] text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest shadow-lg border border-yellow-400/50 flex items-center gap-2">
                    <Crown className="w-3 h-3" /> LE CHOIX INTELLIGENT
                 </div>
                
                <Gauge 
                  value={fyedkReach} 
                  max={maxScale} 
                  color="#A67C52" // Gold
                  title="F'Yedk Pub"
                  icon={Zap}
                  isWinner={true}
                />
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}




// === PRICING SECTION ===
const PACK_ACCENT_STYLES = {
  bronze: {
    glow: "from-[#A67C52]/25 to-amber-300/20",
    header: "from-[#8c664b] via-[#A67C52] to-amber-700",
    icon: "from-[#A67C52] to-amber-600",
    border: "border-[#A67C52]/25",
    badge: "bg-[#A67C52]/90",
    price: "text-[#8c664b]",
  },
  gold: {
    glow: "from-amber-400/35 to-yellow-300/25",
    header: "from-amber-500 via-yellow-600 to-[#A67C52]",
    icon: "from-amber-400 to-yellow-600",
    border: "border-amber-400/50",
    badge: "bg-amber-500",
    price: "text-amber-700",
  },
  premium: {
    glow: "from-violet-400/25 via-[#A67C52]/30 to-amber-400/25",
    header: "from-[#5c3d2e] via-[#A67C52] to-amber-600",
    icon: "from-violet-500 via-[#A67C52] to-amber-500",
    border: "border-violet-300/40",
    badge: "bg-gradient-to-r from-violet-600 to-[#A67C52]",
    price: "text-[#5c3d2e]",
  },
} as const;

function PricingPackCard({
  pack,
  index,
  onSelect,
  ctaLabel,
  currency,
}: {
  pack: PricingPack;
  index: number;
  onSelect: () => void;
  ctaLabel: string;
  currency: string;
}) {
  const styles = PACK_ACCENT_STYLES[pack.accent];
  const Icon = pack.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: index * 0.12, type: "spring", stiffness: 90 }}
      whileHover={{ y: -6 }}
      className="relative flex flex-col h-full"
    >
      <motion.div
        className={cn(
          "absolute -inset-0.5 rounded-[1.75rem] bg-gradient-to-br opacity-60 blur-lg",
          styles.glow
        )}
        animate={{ opacity: pack.featured ? [0.45, 0.75, 0.45] : [0.25, 0.45, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className={cn(
          "relative flex flex-col h-full rounded-[1.65rem] overflow-hidden bg-white/90 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(92,61,46,0.25)] border-2 transition-shadow duration-500 hover:shadow-[0_28px_80px_-16px_rgba(166,124,82,0.35)]",
          styles.border,
          pack.featured && "ring-2 ring-amber-300/40"
        )}
      >
        {pack.badge && (
          <div className="absolute top-4 right-4 z-20">
            <motion.span
              animate={pack.featured ? { scale: [1, 1.06, 1] } : undefined}
              transition={{ duration: 2, repeat: Infinity }}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-bold shadow-lg font-arabic",
                styles.badge
              )}
            >
              {pack.featured && <Sparkles className="w-3.5 h-3.5" />}
              {pack.badge}
            </motion.span>
          </div>
        )}

        <div
          className={cn(
            "relative px-6 pt-12 pb-8 sm:px-8 sm:pt-14 sm:pb-10 text-white text-center overflow-hidden bg-gradient-to-br",
            styles.header
          )}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
          />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <motion.div
            className={cn(
              "relative z-10 mx-auto mb-5 w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-2xl flex items-center justify-center shadow-xl bg-gradient-to-br",
              styles.icon
            )}
            whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-white" />
          </motion.div>

          <h3 className="relative z-10 text-xl sm:text-2xl font-bold font-arabic mb-2" dir="rtl">
            {pack.name}
          </h3>
          <p className="relative z-10 text-sm sm:text-base text-white/85 font-arabic leading-relaxed max-w-[16rem] mx-auto" dir="rtl">
            {pack.tagline}
          </p>

          <div className="relative z-10 mt-6 flex items-end justify-center gap-2">
            <span className={cn("text-5xl sm:text-6xl font-black tabular-nums leading-none", styles.price, "text-white drop-shadow-md")}>
              {pack.price}
            </span>
            <span className="text-lg sm:text-xl font-bold text-white/90 pb-1 font-arabic">
              {currency}
            </span>
          </div>
        </div>

        <ul className="flex-1 px-5 py-6 sm:px-7 sm:py-8 space-y-3 sm:space-y-4 bg-gradient-to-b from-white to-[#faf8f5]">
          {pack.features.map((feature, i) => (
            <motion.li
              key={feature.text}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.06 }}
              className={cn(
                "flex items-start gap-3 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 transition-colors",
                feature.included ? "bg-emerald-50/60" : "bg-gray-50/80"
              )}
            >
              <span
                className={cn(
                  "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                  feature.included
                    ? "bg-emerald-500 text-white shadow-sm shadow-emerald-500/30"
                    : "bg-gray-200 text-gray-400"
                )}
              >
                {feature.included ? (
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                ) : (
                  <X className="w-3.5 h-3.5" strokeWidth={3} />
                )}
              </span>
              <span
                className={cn(
                  "font-arabic text-sm sm:text-base leading-relaxed pt-0.5",
                  feature.included ? "text-gray-800 font-medium" : "text-gray-400 line-through decoration-gray-300"
                )}
                dir="rtl"
              >
                {feature.text}
              </span>
            </motion.li>
          ))}
        </ul>

        <div className="px-5 pb-6 sm:px-7 sm:pb-8 pt-2 bg-gradient-to-b from-[#faf8f5] to-white">
          <PremiumButton
            className={cn("w-full py-4 sm:py-5 text-base sm:text-lg rounded-xl font-arabic")}
            onClick={onSelect}
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            {ctaLabel}
          </PremiumButton>
        </div>
      </div>
    </motion.article>
  );
}

function PricingSection() {
  const { t } = useLanguage();
  const calm = usePerf() === "lite";

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-[#f8f5f2] via-white to-[#f8f5f2] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {!calm && (
          <>
            <motion.div
              className="absolute top-16 -left-20 w-80 h-80 bg-[#A67C52]/12 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-10 -right-16 w-96 h-96 bg-amber-300/15 rounded-full blur-3xl"
              animate={{ scale: [1, 1.25, 1], y: [0, -30, 0] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,700px)] h-[min(90vw,700px)] bg-violet-200/10 rounded-full blur-[100px]"
              animate={{ opacity: [0.3, 0.55, 0.3] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </>
        )}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading title={t("sections.pricing")} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {PRICING_PACKS.map((pack, index) => (
            <div
              key={pack.id}
              className={cn(
                index === 2 && "md:col-span-2 md:max-w-sm md:justify-self-center lg:col-span-1 lg:max-w-none lg:justify-self-stretch"
              )}
            >
              <PricingPackCard
                pack={pack}
                index={index}
                ctaLabel={t("pricing.cta")}
                currency={t("pricing.currency")}
                onSelect={() => scrollToSection("contact")}
              />
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 sm:mt-14 text-center text-sm sm:text-base text-gray-500 font-arabic max-w-2xl mx-auto leading-relaxed"
          dir="rtl"
        >
          {t("promo.urgency")} — تواصل معنا ونختارو الباقة المناسبة لمشروعك.
        </motion.p>
      </div>
    </section>
  );
}

// === ROI CALCULATOR SECTION ===
function ROISection() {
  const { t } = useLanguage();
  return (
    <section id="roi" className="section-anchor py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-amber-50/20 to-white relative overflow-hidden">
      <AmbientBackground variant="warm" className="opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <SectionHeading 
          title={t("sections.roi")}
        />
        
        {/* COMPARISON TABLE ENHANCED */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl sm:rounded-3xl border-2 border-gray-200 shadow-2xl bg-white"
          >
            {/* Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-gray-50 via-white to-gray-50 p-4 sm:p-6 md:p-8 border-b-2 border-gray-100 min-w-[min(100%,28rem)] sm:min-w-0" dir="rtl">
              <div className="font-arabic font-bold text-sm sm:text-base md:text-lg text-gray-900 text-right">الميزة</div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-[#A67C52] to-yellow-700 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full shadow-lg">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  <BrandName className="font-bold text-sm sm:text-base md:text-lg" />
                </div>
              </motion.div>
              <div className="text-center">
                <div className="inline-flex items-center gap-1 sm:gap-2 bg-gray-200 text-gray-600 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full">
                  <span className="font-bold font-arabic text-sm sm:text-base">التقليدي</span>
                </div>
              </div>
            </div>
            
            {/* Table Body */}
            <div className="divide-y divide-gray-100 min-w-[min(100%,28rem)] sm:min-w-0">
              {[
                { feature: "الوصول المباشر", fyedk: true, traditional: false },
                { feature: "تكلفة منخفضة", fyedk: true, traditional: false },
                { feature: "تأثير محلي", fyedk: true, traditional: false },
                { feature: "تفاعل عالي", fyedk: true, traditional: false },
                { feature: "بيئي (كرافت)", fyedk: true, traditional: false },
                { feature: "إشهار قريب منك (كيخدم غير المنطقة ديالك)", fyedk: true, traditional: false },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-3 p-4 sm:p-5 md:p-6 hover:bg-gradient-to-r hover:from-[#A67C52]/5 hover:to-yellow-50/30 transition-all duration-300 group"
                  dir="rtl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="font-arabic font-semibold text-sm sm:text-base text-gray-800 text-right group-hover:text-[#A67C52] transition-colors">
                    {item.feature}
                  </div>
                  <div className="text-center flex items-center justify-center">
                    {item.fyedk ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, delay: index * 0.08 }}
                        viewport={{ once: true }}
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-green-100 flex items-center justify-center"
                      >
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      </motion.div>
                    ) : (
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                      </div>
                    )}
                  </div>
                  <div className="text-center flex items-center justify-center">
                    {item.traditional ? (
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer with CTA */}
            <div className="p-6 bg-gradient-to-r from-[#A67C52]/10 via-yellow-50/50 to-[#A67C52]/10 border-t-2 border-gray-100">
              <p className="text-center font-arabic text-gray-600" dir="rtl">
                <BrandName className="font-bold" pubClassName="text-[#A67C52]" /> يوفر لك <span className="font-bold text-green-600">100%</span> أكثر من الإشهار التقليدي
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// === ENHANCED PARTNERS SECTION ===
function Partners() {
  const { t } = useLanguage();
  return (
    <section data-id="شركاؤنا" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#A67C52] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <SectionHeading 
          title={t("sections.clients")}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <StyledCarousel
            items={CLIENT_CAROUSEL_ITEMS}
            variant="partner"
            ariaLabel="شبكة زبناؤنا"
          />
        </motion.div>
        
      </div>
    </section>
  );
}

// === PARTNERS DISTRIBUTORS SECTION (شبكة شركائنا) ===
function PartnersDistributors() {
  const { t } = useLanguage();
  return (
    <section
      id="partners-distributors"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-primary/10"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeading title={t("sections.partners")} />

        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={cn(
              "text-center text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 px-4",
              "font-arabic"
            )}
            dir="rtl"
          >
            {t("sections.partnersDesc")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <StyledCarousel
              items={RESTAURANT_CAROUSEL_ITEMS}
              variant="partner"
              ariaLabel="شبكة شركائنا"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// === TESTIMONIALS SECTION ===
function Testimonials() {
  const { t } = useLanguage();
  return (
    <section
      data-id="آراء زبنائنا"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title={t("sections.testimonials")} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <StyledCarousel
            items={TESTIMONIAL_CAROUSEL_ITEMS}
            variant="testimonial"
            ariaLabel="آراء زبنائنا"
          />
        </motion.div>
      </div>
    </section>
  );
}

// === CONTACT SECTION ===
function Contact() {
  const { t } = useLanguage();
  const contactMethods = [
    { 
      icon: Phone, 
      text: "+212607141549",
      link: "tel:+212607141549",
      labelKey: "sections.callUs" as const,
    },
    { 
      icon: Mail, 
      text: "fyedkpub@gmail.com",
      link: "mailto:fyedkpub@gmail.com",
      labelKey: "sections.emailUs" as const,
    },
    { 
      icon: Instagram, 
      text: "@fyedkpub",
      link: "https://www.instagram.com/fyedkpub",
      labelKey: "sections.followInstagram" as const,
    }
  ];

  return (
    <section data-id="تواصل معنا" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#A67C52] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-yellow-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <SectionHeading 
          title={t("sections.contact")}
        />
        
        <div className="max-w-4xl mx-auto">
          {/* CTA Content integrated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 text-primary font-bold mb-4 sm:mb-6">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className={cn("text-sm sm:text-base", "font-arabic")}>
                {t("sections.contactBadge")}
              </span>
            </div>
            
            <h2
              className={cn(
                "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4",
                "font-arabic"
              )}
              dir="rtl"
            >
              {t("sections.contactTitle")}
            </h2>
            
            <p
              className={cn(
                "text-base sm:text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto px-4",
                "font-arabic"
              )}
              dir="rtl"
            >
              {t("sections.contactSubtitle")}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h3
              className={cn(
                "text-xl sm:text-2xl font-bold mb-3 sm:mb-4",
                "font-arabic"
              )}
              dir="rtl"
            >
              {t("sections.contactHeading")}
            </h3>
            <p
              className={cn(
                "text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4",
                "font-arabic"
              )}
              dir="rtl"
            >
              {t("sections.contactMethods")}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {contactMethods.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.link.includes('instagram') || item.link.includes('mailto') ? '_blank' : undefined}
                rel={item.link.includes('instagram') || item.link.includes('mailto') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-glow border-amber-100/80 hover:border-[#A67C52]/50 transition-all duration-500 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#A67C52]/5 to-yellow-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#A67C52] to-yellow-700 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <h4
                    className={cn(
                      "text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 text-center",
                      "font-arabic"
                    )}
                    dir="rtl"
                  >
                    {t(item.labelKey)}
                  </h4>
                  
                  <p className="text-center text-sm sm:text-base text-gray-600 font-medium group-hover:text-[#A67C52] transition-colors break-words">
                    {item.text}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// === ENHANCED FOOTER ===
function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a] via-gray-950 to-black text-white relative overflow-hidden">
      <AmbientBackground variant="dark" className="opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#A67C52]/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="py-10 sm:py-12 md:py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo and description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <img 
                    src="/logo.png" 
                    alt="F'Yedk Pub Logo"
                    className="w-12 h-12 rounded-lg"
                  />
                  <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">
                    <BrandName />
                  </h4>
                  <p className="text-gray-400 text-sm font-latin" dir="ltr">
                    {t("nav.tagline")}
                  </p>
                </div>
              </div>
              <p
                className={cn("text-gray-400 text-sm mb-6", "font-arabic")}
                dir="rtl"
              >
                {t("footer.description")}
              </p>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h5
                className={cn("font-bold mb-6", "font-arabic")}
                dir="rtl"
              >
                {t("footer.quickLinks")}
              </h5>
              <div className="space-y-3">
                {FOOTER_LINKS.map((link) => (
                    <motion.a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.id);
                      }}
                      className={cn(
                        "block text-gray-400 hover:text-primary transition-colors text-sm cursor-pointer",
                        "font-arabic"
                      )}
                      dir="rtl"
                      whileHover={{ x: 5 }}
                    >
                      {t(link.labelKey)}
                    </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h5
                className={cn("font-bold mb-6", "font-arabic")}
                dir="rtl"
              >
                {t("footer.contactInfo")}
              </h5>
              <div className="space-y-4">
                <a
                  href="tel:+212607141549"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm" dir="ltr">
                    +212 6 07 14 15 49
                  </span>
                </a>
                <a
                  href="mailto:fyedkpub@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm" dir="ltr">
                    fyedkpub@gmail.com
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Social media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h5
                className={cn("font-bold mb-6", "font-arabic")}
                dir="rtl"
              >
                {t("footer.followUs")}
              </h5>
              <motion.a
                href="https://www.instagram.com/fyedkpub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white hover:text-pink-400 transition-colors group"
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg group-hover:shadow-pink-500/50">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="font-arabic">@fyedkpub</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 text-center">
            <motion.p 
              className="text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              © {currentYear} <BrandName className="text-sm" />. {t("footer.copyright")}
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// === SECTION DIVIDER WITH ANIMATION ===
function SectionDivider() {
  const mode = usePerf();
  if (mode === "lite") {
    return (
      <div className="h-px bg-gradient-to-r from-transparent via-[#A67C52]/20 to-transparent" />
    );
  }
  return (
    <div className="relative h-px bg-gradient-to-r from-transparent via-[#A67C52]/20 to-transparent overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A67C52] to-transparent"
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "linear",
        }}
      />
    </div>
  );
}

// === SCROLL REVEAL WRAPPER ===
function ScrollReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// === MAIN APP ===
export default function LandingPage() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      scrollToSection(hash);
    }
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden relative promo-theme mobile-contain">
      <HeaderMetrics />
      <ScrollProgress />
      <Navigation />
      <PromoBar />
      <main>
        <Hero />
        <SectionDivider />
        <StatsSection />
        <SectionDivider />
        <DeferredMount minHeight="520px" sectionId="about">
          <About />
        </DeferredMount>
        <SectionDivider />
        <DeferredMount minHeight="560px">
          <VideoShowcase />
        </DeferredMount>
        <SectionDivider />
        <DeferredMount minHeight="640px" sectionId="how-it-works">
          <HowItWorks />
        </DeferredMount>
        <SectionDivider />
        <DeferredMount minHeight="720px" sectionId="pricing">
          <PricingSection />
        </DeferredMount>
        <SectionDivider />
        <DeferredMount minHeight="480px">
          <ROISection />
        </DeferredMount>
        <SectionDivider />
        <DeferredMount minHeight="400px" sectionId="partners">
          <Partners />
        </DeferredMount>
        <SectionDivider />
        <DeferredMount minHeight="480px">
          <PartnersDistributors />
        </DeferredMount>
        <SectionDivider />
        <DeferredMount minHeight="420px" sectionId="testimonials">
          <Testimonials />
        </DeferredMount>
        <SectionDivider />
        <DeferredMount minHeight="520px" sectionId="contact">
          <Contact />
        </DeferredMount>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}