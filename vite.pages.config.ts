import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/kru-sai-learning-media/",
  plugins: [react()],
  build: { outDir: "dist-pages", emptyOutDir: true },
});
