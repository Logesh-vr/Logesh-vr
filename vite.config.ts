import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // Relative asset paths support both a custom domain and GitHub Pages subpaths.
  base: "./",
});
