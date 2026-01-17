import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useState } from "react";

export function LanguageToggle() {
  const [lang, setLang] = useState<"fr" | "ar">("fr");

  const toggle = () => {
    // In a real app, this would use context to switch text content
    setLang(prev => prev === "fr" ? "ar" : "fr");
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggle}
      className="flex items-center gap-2 font-medium hover:bg-primary/10 hover:text-primary transition-colors"
    >
      <Globe className="w-4 h-4" />
      <span>{lang === "fr" ? "العربية" : "FR"}</span>
    </Button>
  );
}
