import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeading({ 
  title, 
  subtitle, 
  className, 
  align = "center",
}: SectionHeadingProps) {
  return (
    <div       className={cn(
      "mb-8 sm:mb-12 md:mb-16", 
      align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left",
      className
    )}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "text-primary font-bold tracking-widest uppercase text-sm md:text-base block mb-2 font-arabic"
          )}
          dir="rtl"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight font-arabic"
        )}
        dir="rtl"
      >
        {title}
      </motion.h2>
      <div className={cn(
        "h-1.5 w-24 bg-primary mt-6 rounded-full",
        align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : "mr-auto"
      )} />
    </div>
  );
}
