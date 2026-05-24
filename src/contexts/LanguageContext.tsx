import { createContext, useContext, useEffect, type ReactNode } from "react";
import { t, type TranslationPath } from "@/i18n/translations";

type LanguageContextValue = {
  t: (key: TranslationPath) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    root.lang = "ar";
    root.dir = "rtl";
    root.classList.add("promo-theme");
    return () => root.classList.remove("promo-theme");
  }, []);

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
