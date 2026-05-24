import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { PerformanceProvider } from "@/contexts/PerformanceContext";
import NotFound from "@/pages/not-found";

const Home = lazy(() => import("@/pages/Home"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f5f2]">
      <div className="h-10 w-10 rounded-full border-4 border-[#A67C52]/30 border-t-[#A67C52] animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <PerformanceProvider>
          <TooltipProvider>
            <Router />
          </TooltipProvider>
        </PerformanceProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
