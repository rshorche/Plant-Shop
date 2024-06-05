import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // 1️⃣ تنظیم برای نام‌گذاری فایل‌های استاتیک
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        // 2️⃣ تنظیم برای نام‌گذاری فایل‌های chunk
        chunkFileNames: "assets/js/[name]-[hash].js",
        // 3️⃣ تنظیم برای نام‌گذاری فایل‌های ورودی
        entryFileNames: "assets/js/[name]-[hash].js",
        // تنظیم برای manualChunks
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
    // تنظیم برای محدودیت اندازه chunk
    chunkSizeWarningLimit: 500,
  },
});
