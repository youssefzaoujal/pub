import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function PremiumButton({
  children,
  className,
  onClick,
  type = "button",
  href,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  href?: string;
}) {
  const inner = (
    <>
      <span className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-[#A67C52] via-amber-500 to-[#8c664b] opacity-100" />
      <span className="absolute inset-[2px] rounded-[inherit] bg-gradient-to-r from-[#8c664b] via-[#A67C52] to-amber-600 opacity-100 group-hover:opacity-95 transition-opacity" />
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
        animate={{ x: ["-120%", "220%"] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
      />
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </>
  );

  const classes = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-8 py-4 text-white font-bold shadow-[0_8px_32px_rgba(166,124,82,0.45)] hover:shadow-[0_12px_48px_rgba(166,124,82,0.55)] transition-shadow",
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {inner}
    </motion.button>
  );
}
