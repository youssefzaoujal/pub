import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(async () => {
  const replitPlugins: Plugin[] = [];
  
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    const [cartographer, devBanner] = await Promise.all([
      import("@replit/vite-plugin-cartographer").then((m) => m.cartographer()),
      import("@replit/vite-plugin-dev-banner").then((m) => m.devBanner()),
    ]);
    replitPlugins.push(cartographer, devBanner);
  }

  return {
    plugins: [
      react(),
      runtimeErrorOverlay(),
      ...replitPlugins,
    ],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
        "@shared": path.resolve(import.meta.dirname, "..", "shared"),
        "@assets": path.resolve(import.meta.dirname, "..", "attached_assets"),
      },
    },
    build: {
      outDir: path.resolve(import.meta.dirname, "dist"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});

