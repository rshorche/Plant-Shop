import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            "@ckeditor/ckeditor5-build-classic",
            "@ckeditor/ckeditor5-react",
            "@reduxjs/toolkit",
            "@supabase/auth-ui-react",
            "@supabase/auth-ui-shared",
            "@supabase/supabase-js",
            "react",
            "react-dom",
            "react-hook-form",
            "react-icons",
            "react-redux",
            "react-router-dom",
            "redux",
            "swiper",
          ],
        },
      },
    },
  },
});
