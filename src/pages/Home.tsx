import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue, useVelocity } from "framer-motion";
import { ArrowRight, CheckCircle2, ShoppingBag, Store, Users, MessageSquare, ChevronLeft, ChevronRight, Star, Quote, Zap, Target, TrendingUp, Calculator, BarChart, Heart, Sparkles, Rocket, Globe, Award, Clock, DollarSign, Eye, MousePointerClick, Users as UsersIcon, Smartphone, Mail, MapPin, Phone, Instagram, Facebook, Twitter, Linkedin, Coffee, ShoppingCart, Briefcase, Home as HomeIcon, Gift, Coffee as CoffeeIcon, ChefHat, Wine, ShoppingBag as Bag, Truck, Palette, Brush, Printer, Package, RefreshCw, Check, X, Menu, XCircle, Volume2, VolumeX, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

// Mapping des noms arabes aux IDs de section (partagé entre Navigation et Footer)
const menuItemMap: { [key: string]: string } = {
  "الرئيسية": "hero",
  "من نحن": "about",
  "كيفاش كنخدمو": "how-it-works",
  "شركاؤنا": "partners",
  "آراء زبنائنا": "testimonials",
  "تواصل معنا": "contact"
};

// === MAGNETIC CURSOR EFFECT ===
function MagneticCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed w-6 h-6 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed w-12 h-12 border-2 border-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 24,
          y: position.y - 24,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />
    </>
  );
}



// === WHATSAPP WITH MEGA PULSE ===
function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.a
      href="https://wa.me/212XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 group"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.2, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
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
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-green-500 rounded-full"
            animate={{
              scale: [1, 2 + i * 0.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
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
          className="relative bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 text-white p-3 sm:p-4 md:p-5 rounded-full shadow-2xl"
          animate={{
            boxShadow: isHovered 
              ? ["0 0 20px rgba(34,197,94,0.5)", "0 0 60px rgba(34,197,94,0.8)", "0 0 20px rgba(34,197,94,0.5)"]
              : ["0 0 20px rgba(34,197,94,0.3)", "0 0 40px rgba(34,197,94,0.5)", "0 0 20px rgba(34,197,94,0.3)"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          
          {/* Notification badge */}
          <motion.div
            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            1
          </motion.div>
          
          {/* Floating text */}
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ opacity: 0, x: 20, scale: 0 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0 }}
                className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-black to-gray-900 text-white px-5 py-3 rounded-2xl text-sm whitespace-nowrap backdrop-blur-sm shadow-2xl border border-white/10"
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
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-green-500 to-yellow-500 origin-left shadow-lg relative overflow-hidden"
        style={{ scaleX }}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-green-500 to-yellow-500 blur-sm opacity-50"
          style={{ scaleX }}
        />
      </motion.div>
    </div>
  );
}

// === 3D CARD WITH GLOW & MAGNETIC EFFECT ===
function Card3D({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glow, setGlow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
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
          ? "0 30px 80px rgba(166,124,82,0.3), 0 0 0 1px rgba(166,124,82,0.1)"
          : "0 10px 40px rgba(0, 0, 0, 0.08)",
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Enhanced glow effect */}
      {glow && (
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-[#A67C52]/20 via-yellow-400/20 to-[#A67C52]/20 rounded-3xl blur-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.3 }}
        />
      )}
      {/* Inner glow */}
      {glow && (
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

// === SECTION HEADING WITH ENHANCED ANIMATIONS ===
function SectionHeading({ title, subtitle, isArabic }: { title: string; subtitle?: string; isArabic?: boolean }) {
  return (
    <div className="text-center mb-8 sm:mb-12 md:mb-16 relative px-4">
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          viewport={{ once: true }}
          className="inline-block mb-4 sm:mb-6 relative"
        >
          {/* Glowing badge */}
          <motion.div
            className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="relative z-10 text-xs sm:text-sm font-bold text-primary uppercase tracking-wider px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
            {subtitle}
          </span>
        </motion.div>
      )}
      <motion.h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 relative inline-block px-2",
          isArabic && "font-arabic"
        )}
        dir={isArabic ? "rtl" : "ltr"}
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          delay: 0.2,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        viewport={{ once: true }}
      >
        {/* Gradient text with animation */}
        <span className="bg-gradient-to-r from-foreground via-[#A67C52] to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
          {title}
        </span>
        {/* Underline effect */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A67C52] to-transparent rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        />
      </motion.h2>
      
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}

// === NAVIGATION ===

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "من نحن",
    "كيفاش كنخدمو",
    "شركاؤنا",
    "آراء زبنائنا",
    "تواصل معنا"
  ].reverse();

  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    const sectionId = menuItemMap[item] || item;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-2xl shadow-black/5 border-b border-white/20"
          : "bg-transparent"
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
        <div className="flex items-center justify-between h-20">
          {/* Logo with 3D effect and glow */}
          <motion.a
            href="#hero"
            className="flex items-center gap-3 cursor-pointer group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            {/* Glow effect behind logo */}
            <motion.div
              className="absolute -inset-2 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(166,124,82,0.3)",
                  "0 0 40px rgba(166,124,82,0.5)",
                  "0 0 20px rgba(166,124,82,0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            
            {/* Logo image with rotation effect */}
            <motion.div
              className="relative"
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src="/logo.png"
                alt="Logo"
                className="w-12 h-12 rounded-xl shadow-xl border-2 border-white/50 relative z-10"
                whileHover={{ 
                  boxShadow: "0 10px 30px rgba(166,124,82,0.4)",
                  borderColor: "rgba(166,124,82,0.6)"
                }}
              />
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-xl z-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

            <div className="relative z-10">
              <motion.h4 
                className="text-2xl font-bold tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                F'Yedk{" "}
                <motion.span 
                  className="text-primary relative inline-block"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(166,124,82,0.5)",
                      "0 0 20px rgba(166,124,82,0.8)",
                      "0 0 10px rgba(166,124,82,0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  Pub
                </motion.span>
              </motion.h4>
              <motion.p 
                className="text-xs text-muted-foreground font-medium"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Ton business f'Yed nass
              </motion.p>
            </div>
          </motion.a>

          {/* Desktop Menu with enhanced animations */}
          <div className="hidden md:flex items-center gap-2">
            {menuItems.map((item, i) => {
              const sectionId = menuItemMap[item] || item;
              return (
              <motion.a
                key={i}
                href={`#${sectionId}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(sectionId);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="relative font-arabic text-base text-gray-700 hover:text-primary px-4 py-2 rounded-xl overflow-hidden group cursor-pointer"
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
                  {item}
                </span>
              </motion.a>
              );
            })}

            {/* CTA Button with amazing animations */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              <motion.button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="relative ml-4 px-6 py-2.5 bg-gradient-to-r from-[#A67C52] via-yellow-700 to-[#A67C52] text-white font-bold rounded-full overflow-hidden group shadow-lg shadow-primary/30 font-arabic text-sm"
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
                  ابدأ الآن
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile Hamburger with animation */}
          <motion.div 
            className="md:hidden flex items-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative p-2 text-gray-700 hover:text-primary rounded-lg transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
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

      {/* Mobile Menu with enhanced animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-xl shadow-2xl border-t border-white/20 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {menuItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={`#${menuItemMap[item] || item}`}
                  onClick={(e) => {
                    handleMenuClick(e, item);
                    setMobileMenuOpen(false);
                  }}
                  className="font-arabic text-lg text-gray-700 hover:text-primary px-4 py-3 rounded-xl hover:bg-primary/10 transition-all relative overflow-hidden group cursor-pointer"
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
                  <span className="relative z-10 font-semibold">{item}</span>
                </motion.a>
              ))}
              
              {/* Mobile CTA */}
              <motion.button
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-[#A67C52] to-yellow-700 text-white font-bold rounded-xl overflow-hidden relative group font-arabic"
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
                  ابدأ الآن
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}


// === STATS WITH EXPLOSIVE COUNTERS ===
import {  useInView } from "framer-motion";

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
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-primary/5 via-transparent to-transparent relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(var(--primary-rgb, 0, 0, 0), 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(var(--primary-rgb, 0, 0, 0), 0.1) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50, scale: 0 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: index * 0.2,
                type: "spring",
                stiffness: 200
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 }
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
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-1 sm:mb-2">
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
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  // Parallaxe douce pour le fond
  const yParallax = useTransform(scrollY, [0, 1000], [0, 300]);

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
      className="relative min-h-[110vh] flex items-center pt-24 md:pt-0 overflow-hidden bg-[#f8f5f2]"
      id="hero"
      data-id="الرئيسية"
    >
      {/* --- BACKGROUND LIGHTS & NOISE (ULTRA ENHANCED) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: yParallax }} className="absolute inset-0">
          {/* Multiple animated gradient orbs */}
          <motion.div
            className="absolute top-[-20%] right-[-10%] w-[90vw] h-[90vw] rounded-full bg-gradient-to-br from-yellow-400/30 via-orange-300/20 to-transparent blur-[180px] mix-blend-screen"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-[-30%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tr from-[#A67C52]/25 via-yellow-200/15 to-transparent blur-[180px] mix-blend-screen"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.25, 0.4, 0.25],
              x: [0, -40, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(166,124,82,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(166,124,82,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" 
          style={{
            backgroundPosition: "0 0, 0 0",
            animation: "gridMove 20s linear infinite",
          }}
        />
        
        <div className="absolute inset-0 bg-noise opacity-[0.05] mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-20 grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-2 items-center h-full py-8 sm:py-12 md:py-0">
        {/* --- LEFT: TEXT --- */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-center relative z-30 text-center lg:text-left items-center lg:items-start"
          >
          {/* Badge ULTRA ENHANCED */}
          <motion.div variants={textReveal} className="mb-8 inline-block relative">
            {/* Glow effect behind badge */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400/50 via-orange-400/50 to-yellow-400/50 blur-xl rounded-full -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.span
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-50/90 via-orange-50/90 to-yellow-50/90 text-yellow-900 text-sm font-bold border-2 border-yellow-300/60 shadow-[0_8px_30px_-8px_rgba(234,179,8,0.5)] backdrop-blur-xl overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {/* Shine sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Sparkles className="w-4 h-4 text-yellow-600 relative z-10" />
              </motion.div>
              <span className="relative z-10">Le futur de la publicité locale</span>
              {/* Pulse rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-yellow-400/30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.span>
          </motion.div>

          {/* Arabic Title ULTRA ENHANCED */}
          <div className="overflow-visible mb-6 relative">
            {/* Glow behind text */}
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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold leading-[1.1] sm:leading-[1] tracking-tight relative"
            >
              <span
                className="font-arabic block bg-gradient-to-b from-yellow-600 via-yellow-800 to-yellow-950 bg-clip-text text-transparent pb-4 scale-[1.05] relative"
                dir="rtl"
                style={{
                  textShadow: "0 15px 40px rgba(166,124,82,0.3), 0 0 80px rgba(234,179,8,0.2)",
                  filter: "drop-shadow(0 0 20px rgba(234,179,8,0.3))",
                }}
              >
                مشروعك فيد الناس
              </span>
            </motion.h1>
          </div>

          {/* French tagline SIMPLE */}
          <div className="overflow-visible mb-8 sm:mb-10 md:mb-12">
            <motion.h2 variants={textReveal}>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#8c6743] font-bold relative">
                Ton business{" "}
                <span className="relative inline-block whitespace-nowrap">
                  <span className="absolute -inset-2 bg-yellow-300/20 blur-xl rounded-[100%] z-0"></span>
                  <span 
                    className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#A67C52] via-yellow-600 to-[#A67C52] font-extrabold"
                    style={{
                      filter: "drop-shadow(0 0 15px rgba(234,179,8,0.3))",
                    }}
                  >
                    f'Yed Nass
                  </span>
                </span>
              </span>
            </motion.h2>
          </div>

        </motion.div>

        {/* --- RIGHT: THE "WOW" 3D SINGLE IMAGE CONTAINER --- */}
        <div className="lg:col-span-7 relative flex justify-center items-center lg:h-[900px] z-10 mt-8 sm:mt-12 md:mt-16 lg:mt-0 perspective-origin-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: 0.3 }}
            className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[750px] aspect-[4/3] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] transition-all duration-200 ease-out group"
          >
             {/* L'ombre 3D portée au sol */}
             <motion.div
               style={{ opacity: glareOpacity, scaleX: 0.9 }}
               className="absolute -bottom-[15%] inset-x-[10%] h-[100px] bg-black/30 blur-[80px] rounded-[100%] z-[-1] transform-gpu translate-z-[-100px]"
             />


            {/* LE CADRE DE VERRE PRINCIPAL */}
            <div className="absolute inset-0 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-gradient-to-br from-white/40 via-white/10 to-white/5 backdrop-blur-[50px] border-[4px] sm:border-[6px] md:border-[8px] border-white/50 shadow-[inset_0_0_40px_rgba(255,255,255,0.4),_0_40px_120px_-30px_rgba(0,0,0,0.4)] overflow-hidden z-20 transform-gpu">

              {/* --- L'IMAGE UNIQUE STABLE --- */}
              <div className="absolute inset-[-5%] z-10">
                 <img
                  src={heroImage}
                  alt="Présentation App"
                  className="w-full h-full object-cover filter saturate-[1.1] contrast-[1.05]"
                />
                 {/* Overlay couleur subtil sur l'image */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#A67C52]/30 via-transparent to-yellow-100/10 mix-blend-overlay" />
              </div>

               {/* EFFET DE LUMIÈRE (GLARE) STATIQUE SUR LE VERRE */}
              <div
                style={{
                  background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0) 60%)`,
                  opacity: glareOpacity
                }}
                className="absolute inset-0 pointer-events-none mix-blend-plus-lighter z-30"
              />
               {/* Reflets statiques sur les bords pour l'effet "verre taillé" */}
              <div className="absolute inset-0 rounded-[50px] shadow-[inset_0_3px_4px_rgba(255,255,255,0.8),_inset_0_-3px_4px_rgba(0,0,0,0.2)] z-40 pointer-events-none border border-white/30"></div>
            </div>


            {/* ÉLÉMENTS FLOTTANTS AUTOUR DU CADRE */}
            <motion.div
              initial={{ opacity: 0, scale: 0, x: -50 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: [0, -10, 0],
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{
                opacity: { delay: 1.8, duration: 0.8 },
                scale: { delay: 1.8, duration: 0.8 },
                x: { delay: 1.8, type: "spring", stiffness: 200 },
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              style={{ transform: "translateZ(100px)" }}
              className="absolute -top-8 -right-8 bg-white/90 backdrop-blur-xl px-4 py-2 rounded-full shadow-xl border-2 border-emerald-400/40 z-40 flex items-center gap-2"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Target className="w-5 h-5 text-emerald-600" />
              </motion.div>
              <span className="font-bold text-emerald-700 text-sm">Ciblage Précis</span>
            </motion.div>

            

          </motion.div>
        </div>

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
      <div className="relative overflow-hidden bg-white/80 backdrop-blur-xl border border-white/60 p-6 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(166,124,82,0.3)] transition-all duration-300 h-full flex flex-col items-center text-center">
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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects for images
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]); // Image de gauche (monte)
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);   // Image de droite (descend)
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]); // Rotation subtile

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
      id="about"
      data-id="من نحن" 
      className="py-12 sm:py-16 md:py-20 lg:py-32 bg-[#fdfbf7] relative overflow-hidden"
    >
      {/* --- TEXTURE DE FOND (Noise) --- */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')]"></div>

      {/* --- ELÉMENTS DÉCORATIFS ARRIÈRE-PLAN --- */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-20 left-[-5%] text-[40rem] font-black text-[#A67C52]/5 font-arabic select-none z-0 leading-none"
      >
        ف
      </motion.div>
      <div className="absolute top-1/2 right-[-10%] w-[600px] h-[600px] bg-yellow-300/20 rounded-full blur-[120px] mix-blend-multiply pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* --- LEFT: COLLAGE IMAGES (PARALLAX) --- */}
          <div className="relative h-[600px] w-full flex items-center justify-center">
             {/* Cercles décoratifs derrière */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[400px] h-[400px] border border-[#A67C52]/20 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute w-[350px] h-[350px] border border-dashed border-[#A67C52]/30 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
             </div>

            {/* Image Principale (Grande) */}
            <motion.div 
              style={{ y: y1, rotate: -6 }}
              className="absolute left-0 top-10 w-[60%] z-20"
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
              className="absolute right-0 bottom-20 w-[55%] z-30"
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
              
              <div className="space-y-6 text-xl text-gray-600 font-arabic leading-loose relative">
                {/* Ligne verticale décorative */}
                <div className="absolute right-[-20px] top-2 bottom-2 w-1 bg-gradient-to-b from-[#A67C52] to-transparent rounded-full opacity-30"></div>
                
                <p>
                  <span className="font-bold text-gray-900 text-2xl">F'Yedk Pub</span> هي ثورة فمجال الإشهار المحلي. الفكرة ديالنا نابعة من الواقع المغربي: كيفاش نوصلو رسالتك لقلب الدار، ماشي غير للزنقة.
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
  
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95]);

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
      {/* --- AMBIANCE BACKGROUND ENHANCED --- */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[150px] mix-blend-screen"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#A67C52]/30 rounded-full blur-[150px] mix-blend-screen"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- RIGHT: THE VIDEO (PHONE STYLE) --- */}
          <div className="order-1 lg:order-2 flex justify-center perspective-[2000px]">
            <motion.div
              style={{ y, rotateY: rotate, scale }}
              className="relative w-[320px] md:w-[380px] aspect-[9/16] rounded-[3rem] border-8 border-gray-900 bg-gray-900 shadow-[0_0_80px_rgba(166,124,82,0.5)] z-20 group"
              initial={{ opacity: 0, scale: 0.8, rotateX: 20, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Phone Notch Enhanced */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-30 flex items-center justify-center gap-2"
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <div className="w-16 h-1 bg-gray-800 rounded-full"></div>
                <motion.div
                  className="w-1 h-1 bg-blue-500 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>

              {/* Video Container */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-gray-800 cursor-pointer group/video" onClick={togglePlay}>
                <video
                  ref={videoRef}
                  src="/video.mp4"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover/video:scale-105"
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
                      <motion.div
                        key={i}
                        className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-lg cursor-pointer"
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        animate={{
                          y: [0, -8, 0],
                          x: [0, i % 2 === 0 ? 3 : -3, 0],
                        }}
                        transition={{
                          duration: 2 + i * 0.3,
                          delay: i * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Heart
                          className="w-5 h-5 text-white transition-all"
                          fill={i === 1 ? "#ef4444" : "none"}
                          style={{
                            filter: i === 1 ? "drop-shadow(0 0 8px rgba(239,68,68,0.8))" : "none",
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>

              {/* GLOWING BORDER ANIMATION Enhanced */}
              <motion.div
                className="absolute -inset-[3px] rounded-[3.2rem] bg-gradient-to-br from-[#A67C52] via-yellow-500 via-purple-500 to-[#A67C52] -z-10 opacity-60 blur-lg"
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Floating Elements popping OUT of the phone */}
              <motion.div
                className="absolute top-20 -left-20 bg-white p-5 rounded-2xl shadow-2xl z-40 max-w-[200px] border-2 border-yellow-400/30"
                initial={{ x: -100, opacity: 0, scale: 0.8 }}
                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ delay: 0.5, type: "spring" }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <motion.div
                    className="w-2.5 h-2.5 rounded-full bg-green-500"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                  <span className="text-xs font-bold text-gray-800">Live Reaction</span>
                </div>
                <p className="text-sm font-arabic text-gray-600 leading-tight" dir="rtl">
                  "شوف التفاعل ديال الناس مع الإشهار!"
                </p>
                {/* Arrow pointing to phone */}
                <motion.div
                  className="absolute -right-3 top-1/2 text-white"
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  →
                </motion.div>
              </motion.div>

              {/* Additional glow orb */}
              <motion.div
                className="absolute bottom-32 -right-16 w-32 h-32 bg-gradient-to-br from-yellow-400 to-[#A67C52] rounded-full blur-3xl opacity-50 -z-10"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
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
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#A67C52]/20 to-purple-600/20 border border-[#A67C52]/30 text-gray-900 text-sm font-bold mb-6 shadow-lg backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Smartphone className="w-5 h-5" />
                </motion.div>
                <span>شاهد بنفسك</span>
              </motion.div>

              <motion.h2
                className="text-5xl md:text-7xl font-black font-arabic text-gray-900 mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                dir="rtl"
              >
                <span className="inline-block">أكثر من مجرد </span>
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-l from-[#A67C52] via-yellow-600 to-[#A67C52]">
                  إشهار عادي
                </span>
              </motion.h2>

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
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
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
      className="relative group w-full"
    >
      {/* --- CARTE PRINCIPALE --- */}
      <div className="relative h-full overflow-hidden rounded-2xl sm:rounded-3xl border border-[#A67C52]/20 bg-white shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-[#A67C52]/50">
        
        {/* Fond texturé subtil */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        {/* --- Spotlight Effect Overlay (Brillance au survol) --- */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
          style={style}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-20`} />
        </motion.div>

        <div className="relative z-20 p-6 sm:p-8 flex flex-col items-center text-center h-full">
          
          {/* Numéro Géant en arrière-plan */}
          <span className="absolute top-2 right-2 sm:right-4 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-gray-100 select-none -z-10 group-hover:text-gray-200 transition-colors duration-500 font-sans">
            {step.id}
          </span>

          {/* Icône Flottante */}
          <div className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.gradient} p-[2px] mb-4 sm:mb-6 shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
            <div className="w-full h-full bg-white rounded-[12px] sm:rounded-[14px] flex items-center justify-center">
              <step.icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-gray-700" strokeWidth={1.5} />
            </div>
          </div>

          <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold font-arabic mb-3 sm:mb-4 text-gray-900 group-hover:text-[#A67C52] transition-colors">
            {step.title}
          </h3>
          
          <p className="text-gray-500 font-arabic text-base sm:text-lg leading-relaxed dir-rtl">
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
      {index !== 2 && (
        <div className="hidden md:flex absolute top-1/2 -left-12 w-12 items-center justify-center z-0 text-[#A67C52]/30">
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
      title: "الطباعة",
      desc: "كنطبعو الإعلان فوق سّاك كرافت بجودة عالية، تصميم بسيط ومقروء.",
      icon: ShoppingBag,
      gradient: "from-[#A67C52] to-yellow-500" // Couleur Branding
    },
    {
      id: "03",
      title: "التوزيع",
      desc: "كنسلّمو السّاك للمطاعم لي شركاء ديالنا، وهما كيوزّعوه للناس يومياً.",
      icon: Users,
      gradient: "from-emerald-500 to-green-400"
    }
  ];

  return (
    <section id="how-it-works" data-id="كيفاش كنخدمو" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white relative overflow-hidden">
      
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
          >
            ثلاث خطوات بسيطة كتفصلك على آلاف الزبناء المحتملين فمنطقتك
          </motion.p>
        </div>

        {/* --- THE GRID & PIPELINE --- */}
        <div className="relative">
            {/* Ligne connectrice animée (Desktop only) */}
            <div className="hidden md:block absolute top-[130px] left-[10%] right-[10%] h-[2px] bg-gray-100 -z-10">
                <motion.div 
                    initial={{ scaleX: 0, originX: 1 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="h-full w-full bg-gradient-to-l from-transparent via-[#A67C52]/30 to-transparent"
                />
            </div>

            <div className="grid md:grid-cols-3 gap-12" dir="rtl">
            {steps.map((step, idx) => (
                <motion.div
                key={step.id}
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
  const circumference = 2 * Math.PI * 120; // Rayon 120
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center p-6">
      {/* Background Glow if winner */}
      {isWinner && (
        <div className="absolute inset-0 bg-[#A67C52] opacity-20 blur-[80px] rounded-full animate-pulse" />
      )}

      {/* SVG Circle */}
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Track */}
        <svg className="w-full h-full rotate-[-90deg]">
          <circle
            cx="50%"
            cy="50%"
            r="120"
            fill="transparent"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Progress */}
          <motion.circle
            cx="50%"
            cy="50%"
            r="120"
            fill="transparent"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
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
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      
      {/* --- AMBIANCE DARK LUXE --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#A67C52]/20 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-arabic text-white mb-4">
            استثمارك <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A67C52] via-yellow-400 to-[#A67C52]">كيرجع ليك</span>
          </h2>
          <p className="text-gray-400 font-arabic text-lg max-w-2xl mx-auto">
            مقارنة مباشرة بالأرقام. شوف الفرق بعينيك بين الإشهار التقليدي و F'Yedk Pub
          </p>
        </div>

        {/* --- MAIN DASHBOARD --- */}
        <div className="bg-[#121212] border border-white/10 rounded-[40px] p-6 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden backdrop-blur-xl">
          
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
                          مع نفس الميزانية، كتقدر توصل لـ <span className="text-white font-bold">15 مرة</span> أكثر من الناس مقارنة بالفلاير.
                        </p>
                    </div>
                 </div>
              </div>
            </div>

            {/* RIGHT: THE GAUGES (VS MODE) */}
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-8 items-center justify-center border-t md:border-t-0 md:border-l border-white/5 pt-8 md:pt-0 md:pl-8">
              
              {/* LOSER: TRADITIONAL */}
              <div className="opacity-60 scale-90 blur-[1px] hover:blur-0 hover:opacity-100 hover:scale-95 transition-all duration-500">
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
              <div className="relative scale-110 z-10">
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
function PricingSection() {
  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-[#f8f5f2] via-white to-[#f8f5f2] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#A67C52]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="الأسعار" 
          isArabic 
        />
        
        <div className="max-w-4xl mx-auto">
          {/* Main Pricing Card with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow effect behind card */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#A67C52] to-yellow-600 rounded-[3rem] blur-2xl opacity-30"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <div className="relative bg-white/90 backdrop-blur-xl rounded-[3rem] shadow-2xl border-2 border-[#A67C52]/20 overflow-hidden">
              {/* Premium header with animated gradient */}
              <div className="relative bg-gradient-to-br from-[#A67C52] via-yellow-700 to-[#A67C52] p-16 text-white text-center overflow-hidden">
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "linear",
                  }}
                />
                
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }} />
                </div>
                
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  {/* Icon with pulse animation */}
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full mb-6 sm:mb-8 relative"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Package className="w-12 h-12 relative z-10" />
                    {/* Pulsing ring */}
                    <motion.div
                      className="absolute inset-0 border-2 border-white/50 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                  
                  <motion.h3
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-arabic mb-4 sm:mb-6"
                    dir="rtl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    1000 كيس موزع
                  </motion.h3>
                  
                  {/* Animated price */}
                  <motion.div
                    className="flex items-baseline justify-center gap-3 mb-6"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight"
                      animate={{
                        textShadow: [
                          "0 0 20px rgba(255,255,255,0.5)",
                          "0 0 40px rgba(255,255,255,0.8)",
                          "0 0 20px rgba(255,255,255,0.5)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      800
                    </motion.span>
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold opacity-90">درهم</span>
                  </motion.div>
                  
                  <motion.p
                    className="text-base sm:text-lg md:text-xl opacity-90 font-arabic"
                    dir="rtl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.9 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    طباعة على وجه واحد
                  </motion.p>
                </motion.div>
              </div>

              {/* Option: Double Face with enhanced design */}
              <div className="p-4 sm:p-6 md:p-10 bg-gradient-to-b from-white to-gray-50/50">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 150 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 p-6 sm:p-8 bg-gradient-to-r from-yellow-50 via-amber-50 to-yellow-50 rounded-2xl sm:rounded-3xl border-2 border-yellow-300/50 shadow-lg">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <motion.div
                        className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <RefreshCw className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        <motion.div
                          className="absolute inset-0 border-2 border-yellow-400/50 rounded-2xl"
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </motion.div>
                      <div>
                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold font-arabic text-gray-900 mb-2" dir="rtl">
                          طباعة على الوجهين
                        </h4>
                        <p className="text-sm sm:text-base text-gray-600 font-arabic" dir="rtl">
                          أضف تأثيراً مضاعفاً لإعلانك - تأثير مزدوج
                        </p>
                      </div>
                    </div>
                    
                    <motion.div
                      className="text-left sm:text-right w-full sm:w-auto"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-black text-[#A67C52]">+300</span>
                        <span className="text-lg sm:text-xl font-bold text-gray-600">درهم</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1" dir="rtl">إضافي</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Features with icons */}
              <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-b from-gray-50/50 to-white">
                <h4 className="text-xl sm:text-2xl font-bold font-arabic text-center mb-6 sm:mb-8 text-gray-900" dir="rtl">
                  ما ستحصل عليه
                </h4>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { icon: Truck, text: "توزيع على مطاعم بيتزا شركاء" },
                    { icon: Palette, text: "تصميم احترافي مجاناً" },
                    { icon: BarChart, text: "متابعة وتقرير النتائج" },
                    { icon: Heart, text: "دعم كامل قبل وبعد الخدمة" },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#A67C52] to-yellow-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <span className="font-arabic text-gray-700 text-base sm:text-lg font-medium pt-1 sm:pt-2" dir="rtl">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Button with enhanced effects */}
              <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-b from-white to-gray-50">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-[#A67C52] via-yellow-700 to-[#A67C52] hover:from-[#A67C52]/90 hover:via-yellow-700/90 hover:to-[#A67C52]/90 text-white rounded-xl sm:rounded-2xl h-16 sm:h-18 md:h-20 text-lg sm:text-xl md:text-2xl font-bold font-arabic shadow-2xl shadow-[#A67C52]/40 hover:shadow-[#A67C52]/60 transition-all duration-300 relative overflow-hidden group"
                    onClick={() => {
                      const contact = document.getElementById('contact');
                      if (contact) {
                        contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    {/* Animated background */}
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
                    
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                      <span className="text-center">احجز الآن واحصل على أفضل الأسعار</span>
                    </span>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// === ROI CALCULATOR SECTION ===
function ROISection() {
  return (
    <section id="roi" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <SectionHeading 
          title="كم ستوفر؟" 
          isArabic 
        />
        
        {/* COMPARISON TABLE ENHANCED */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-x-auto overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-gray-200 shadow-2xl bg-white"
          >
            {/* Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-gray-50 via-white to-gray-50 p-4 sm:p-6 md:p-8 border-b-2 border-gray-100 min-w-[500px] sm:min-w-0">
              <div className="font-arabic font-bold text-sm sm:text-base md:text-lg text-gray-900" dir="rtl">الميزة</div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-[#A67C52] to-yellow-700 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full shadow-lg">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-bold font-arabic text-sm sm:text-base md:text-lg">F'Yedk Pub</span>
                </div>
              </motion.div>
              <div className="text-center">
                <div className="inline-flex items-center gap-1 sm:gap-2 bg-gray-200 text-gray-600 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full">
                  <span className="font-bold font-arabic text-sm sm:text-base">التقليدي</span>
                </div>
              </div>
            </div>
            
            {/* Table Body */}
            <div className="divide-y divide-gray-100 min-w-[500px] sm:min-w-0">
              {[
                { feature: "الوصول المباشر", fyedk: true, traditional: false },
                { feature: "تكلفة منخفضة", fyedk: true, traditional: false },
                { feature: "تأثير محلي", fyedk: true, traditional: true },
                { feature: "تفاعل عالي", fyedk: true, traditional: false },
                { feature: "بيئي (كرافت)", fyedk: true, traditional: false },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-3 p-4 sm:p-5 md:p-6 hover:bg-gradient-to-r hover:from-[#A67C52]/5 hover:to-yellow-50/30 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="font-arabic font-semibold text-sm sm:text-base text-gray-800 group-hover:text-[#A67C52] transition-colors" dir="rtl">
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
                <span className="font-bold text-[#A67C52]">F'Yedk Pub</span> يوفر لك <span className="font-bold text-green-600">70%</span> أكثر من الإشهار التقليدي
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// === CLIENTS CAROUSEL (شبكة زبناؤنا) ===
function ClientsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const clients = [
    {
      name: "مقهى",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
      description: "المقاهي المحلية"
    },
    {
      name: "مطعم",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      description: "المطاعم التقليدية"
    },
    {
      name: "صالون تجميل",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
      description: "صالونات التجميل"
    },
    {
      name: "مخبز",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
      description: "المخابز والحلويات"
    },
    {
      name: "سوق",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop",
      description: "أسواق الخضار"
    },
    {
      name: "محل ملابس",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      description: "محلات الملابس"
    },
    {
      name: "صالون حلاقة",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=300&fit=crop",
      description: "صالونات الحلاقة"
    },
    {
      name: "صيدلية",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop",
      description: "الصيدليات المحلية"
    }
  ];

  // Responsive slides to show
  const getSlidesToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
      return 4; // desktop
    }
    return 4;
  };

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = clients.length;
  const maxIndex = Math.max(0, totalSlides - slidesToShow);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % (maxIndex + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + (maxIndex + 1)) % (maxIndex + 1));
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, maxIndex]);

  const visibleClients = clients.slice(currentIndex, currentIndex + slidesToShow);

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 -translate-x-2 sm:translate-x-0 z-20 bg-white/90 hover:bg-white shadow-xl rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 border border-gray-200"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#A67C52]" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-0 z-20 bg-white/90 hover:bg-white shadow-xl rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 border border-gray-200"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#A67C52]" />
      </button>

      {/* Carousel Container */}
      <div className="overflow-hidden px-8 sm:px-12 md:px-16">
        <div className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out">
          {visibleClients.map((client, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.5 }}
              className={`flex-shrink-0 ${slidesToShow === 1 ? 'w-full' : slidesToShow === 2 ? 'w-1/2' : 'w-full sm:w-1/2 md:w-1/4'}`}
            >
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 right-4 bg-[#A67C52]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                    {client.name}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="font-bold font-arabic text-lg sm:text-xl text-gray-900 mb-2" dir="rtl">
                    {client.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-arabic" dir="rtl">
                    {client.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6 sm:mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-[#A67C52]"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// === ENHANCED PARTNERS SECTION ===
function Partners() {
  return (
    <section id="partners" data-id="شركاؤنا" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#A67C52] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <SectionHeading 
          title="شبكة زبناؤنا" 
          isArabic 
        />
        
        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <ClientsCarousel />
        </motion.div>
        
      </div>
    </section>
  );
}

// === PARTNERS DISTRIBUTORS SECTION (شبكة شركائنا) ===
function PartnersDistributors() {
  const pizzerias = [
    {
      name: "Pizzeria Les Amis",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
      type: "بيتزا"
    },
    {
      name: "Pizzeria Placa de Toro",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
      type: "بيتزا"
    },
    {
      name: "Pizzeria Achraf",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
      type: "بيتزا"
    }
  ];

  return (
    <section id="partners-distributors" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeading 
          title="شبكة شركائنا" 
          isArabic 
        />
        
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-base sm:text-lg text-muted-foreground font-arabic mb-8 sm:mb-12 px-4" dir="rtl"
          >
            شركاؤنا في التوزيع - المطاعم التي توزع الأكياس مع إعلاناتكم
          </motion.p>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pizzerias.map((pizzeria, index) => (
              <Card3D key={index}>
                <motion.div
                  className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img 
                      src={pizzeria.image} 
                      alt={pizzeria.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-[#A67C52]/90 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold">
                      {pizzeria.type}
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold font-arabic mb-2" dir="rtl">{pizzeria.name}</h3>
                    <div className="flex items-center gap-2 mt-3 sm:mt-4">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600 font-arabic" dir="rtl">شريك توزيع معتمد</span>
                    </div>
                  </div>
                </motion.div>
              </Card3D>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// === TESTIMONIALS SECTION ===
function Testimonials() {
  const testimonials = [
    {
      name: "حميد رشدي",
      business: "مقهى الوردة",
      content: "خدمة مزيانة بزاف، الناس كاتعرف على العرض ديالي وحتا الطلب زاد. أنا راضي بزاف ومستامر معاهم.",
      rating: 5,
      avatar: "https://i.pravatar.cc/300?img=12"
    },
    {
      name: "سارة العلمي",
      business: "صالون تجميل",
      content: "الإشهار ديالي وصل لنساء من الحي، وبدات نحصل على زبناء جدد. طريقة بسيطة وفعالة.",
      rating: 4,
      avatar: "https://i.pravatar.cc/300?img=47"
    },
    {
      name: "يوسف بلمهدي",
      business: "مخبز حديث",
      content: "كنت متشكك في البداية، ولكن النتائج كانت مذهلة. التكلفة مناسبة والوصول كبير.",
      rating: 5,
      avatar: "https://i.pravatar.cc/300?img=33"
    },
  ];

  return (
    <section id="testimonials" data-id="آراء زبنائنا" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="آراء زبنائنا" 
          isArabic 
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card3D key={index}>
              <motion.div
                className="bg-white rounded-3xl p-8 shadow-xl border border-border"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-1 sm:gap-2 mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={cn(
                        "w-4 h-4 sm:w-5 sm:h-5",
                        i < testimonial.rating 
                          ? "fill-yellow-400 text-yellow-400" 
                          : "fill-gray-200 text-gray-200"
                      )}
                    />
                  ))}
                </div>
                
                <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-primary/20 mb-4 sm:mb-6" />
                
                <p className="text-base sm:text-lg font-arabic leading-relaxed text-right mb-6 sm:mb-8" dir="rtl">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full rounded-full object-cover border-2 border-[#A67C52]/20 shadow-md"
                      onError={(e) => {
                        // Fallback si l'image ne charge pas
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=A67C52&color=fff&size=128&bold=true`;
                      }}
                    />
                    {/* Ring decoration */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#A67C52]/30 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-bold font-arabic text-base sm:text-lg" dir="rtl">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground font-arabic" dir="rtl">
                      {testimonial.business}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}

// === CONTACT SECTION ===
function Contact() {
  const contactMethods = [
    { 
      icon: Phone, 
      text: "+212607141549",
      link: "tel:+212607141549",
      label: "اتصل بنا"
    },
    { 
      icon: Mail, 
      text: "fyedkpub@gmail.com",
      link: "mailto:fyedkpub@gmail.com",
      label: "أرسل بريد إلكتروني"
    },
    { 
      icon: Instagram, 
      text: "@fyedkpub",
      link: "https://www.instagram.com/fyedkpub",
      label: "تابعنا على إنستغرام"
    }
  ];

  return (
    <section id="contact" data-id="تواصل معنا" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#A67C52] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-yellow-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <SectionHeading 
          title="تواصل معنا" 
          isArabic 
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
              <span className="text-sm sm:text-base">ابدأ رحلتك الآن</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-arabic mb-4 sm:mb-6 px-4" dir="rtl">
              جاهز لتغيير قواعد اللعبة؟
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-arabic mb-6 max-w-2xl mx-auto px-4" dir="rtl">
              انضم إلى المئات من رجال الأعمال الذين اختاروا الطريق الذكي للإشهار المحلي. لا تضيع فرصة الوصول إلى عملائك المحليين.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h3 className="text-xl sm:text-2xl font-bold font-arabic mb-3 sm:mb-4" dir="rtl">
              هيا نبدأ العمل معًا
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground font-arabic max-w-2xl mx-auto px-4" dir="rtl">
              تواصل معنا عبر أي من الطرق التالية
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
                className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-gray-200 hover:border-[#A67C52] transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#A67C52]/5 to-yellow-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#A67C52] to-yellow-700 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <h4 className="text-base sm:text-lg font-bold font-arabic text-gray-900 mb-2 sm:mb-3 text-center" dir="rtl">
                    {item.label}
                  </h4>
                  
                  <p className="text-center text-sm sm:text-base text-gray-600 font-medium group-hover:text-[#A67C52] transition-colors break-all">
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
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated gradient */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-primary/30 animate-gradient-x" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="py-16">
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
                  <h4 className="text-2xl font-bold font-latin">F'Yedk <span className="text-primary">Pub</span></h4>
                  <p className="text-gray-400 text-sm">Ton business f'Yed nass</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm font-arabic mb-6" dir="rtl">
                إشهار محلي ذكي يوصل مباشرة إلى يد عملائك المحليين.
              </p>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h5 className="font-bold mb-6 font-arabic" dir="rtl">روابط سريعة</h5>
              <div className="space-y-3">
                {["الرئيسية", "من نحن", "كيفاش كنخدمو", "شركاؤنا", "آراء زبنائنا", "تواصل معنا"].map((link, index) => {
                  const sectionId = menuItemMap[link] || link;
                  return (
                    <motion.a
                      key={index}
                      href={`#${sectionId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(sectionId);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className="block text-gray-400 hover:text-primary transition-colors text-sm font-arabic cursor-pointer"
                      dir="rtl"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h5 className="font-bold mb-6 font-arabic" dir="rtl">معلومات الاتصال</h5>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">+212 6 XX XX XX XX</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">contact@fyedkpub.ma</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">الدار البيضاء، المغرب</span>
                </div>
              </div>
            </motion.div>

            {/* Social media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h5 className="font-bold mb-6 font-arabic" dir="rtl">تابعنا</h5>
              <div className="space-y-3">
                <motion.a
                  href="https://www.instagram.com/FyedkPub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-pink-400 transition-colors group"
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg group-hover:shadow-pink-500/50">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <span className="font-arabic">@FyedkPub</span>
                </motion.a>
              </div>
              <div className="flex gap-4 mt-4">
                {[
                  { icon: Facebook, color: "from-blue-500 to-blue-600", label: "Facebook" },
                  { icon: Twitter, color: "from-sky-500 to-blue-400", label: "Twitter" },
                  { icon: Linkedin, color: "from-blue-600 to-blue-700", label: "LinkedIn" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className={`relative w-10 h-10 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
              
              {/* Newsletter */}
              <div className="mt-8">
                <p className="text-sm text-gray-400 mb-3">اشترك في نشرتنا</p>
                <div className="flex gap-2">
                  <Input 
                    placeholder="بريدك الإلكتروني"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                  />
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
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
              © {currentYear} F'Yedk Pub. جميع الحقوق محفوظة.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// === FLOATING CURSOR EFFECT (Subtle) ===
function FloatingCursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <motion.div
      className="fixed top-0 left-0 w-96 h-96 pointer-events-none z-0 opacity-30"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(166,124,82,0.15) 0%, transparent 50%)`,
      }}
      animate={{
        x: mousePosition.x - 192,
        y: mousePosition.y - 192,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 30,
      }}
    />
  );
}

// === SECTION DIVIDER WITH ANIMATION ===
function SectionDivider() {
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
  return (
    <div className="min-h-screen overflow-x-hidden bg-background relative">
      <FloatingCursorEffect />
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <SectionDivider />
        <StatsSection />
        <SectionDivider />
        <About />
        <SectionDivider />
        <VideoShowcase />
        <SectionDivider />
        <HowItWorks />
        <SectionDivider />
        <PricingSection />
        <SectionDivider />
        <ROISection />
        <SectionDivider />
        <Partners />
        <SectionDivider />
        <PartnersDistributors />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}