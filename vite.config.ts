import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import vike from "vike/plugin"

export default defineConfig({
  server: {
    open: true,
    port: 3000,
  },
  envPrefix: "REACT_APP_",
  build: {
    outDir: "build",
    sourcemap: true,
    chunkSizeWarningLimit: 2000,
  },
  plugins: [
    react(),
    vike(),
    // SSG有効化
    // vike({ prerender: true }),
  ],
  test: {
    include: ["src/**/*.test.{ts,tsx}"],
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/setupTests.ts"],
    css: {
      modules: {
        classNameStrategy: "non-scoped",
      },
    },
  },
  resolve: {
    alias: {
      "~/": `${__dirname}/src/`,
    },
  },
});