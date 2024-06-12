import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  builds: [
    {
      src: "package.json",
      use: "@vercel/static-build",
      config: {
        distDir: "dist",
      },
    },
  ],
});
