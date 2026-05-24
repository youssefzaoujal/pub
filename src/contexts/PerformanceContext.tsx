import {
  createContext,
  useContext,
  useEffect,
  type ReactNode,
} from "react";
import {
  usePerformanceMode,
  type PerformanceMode,
} from "@/hooks/usePerformanceMode";

const PerformanceContext = createContext<PerformanceMode>("full");

export function PerformanceProvider({ children }: { children: ReactNode }) {
  const mode = usePerformanceMode();

  useEffect(() => {
    document.documentElement.classList.toggle("perf-lite", mode === "lite");
    return () => document.documentElement.classList.remove("perf-lite");
  }, [mode]);

  return (
    <PerformanceContext.Provider value={mode}>
      {children}
    </PerformanceContext.Provider>
  );
}

export function usePerf() {
  return useContext(PerformanceContext);
}
