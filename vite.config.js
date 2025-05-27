import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // assetFileNames: (assetInfo) => {
        //   let extType = assetInfo.name.split(".").at(1);
        //   if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
        //     extType = "img";
        //   }
        //   return `assets/${extType}/[name]-[hash][extname]`;
        // },
        // chunkFileNames: "assets/js/[name]-[hash].js",
        // entryFileNames: "assets/js/[name]-[hash].js",
        // manualChunks(id) {
        //   if (id.includes("node_modules")) {
        //     return id
        //       .toString()
        //       .split("node_modules/")[1]
        //       .split("/")[0]
        //       .toString();
        //   }
        // },
      },
    },
    chunkSizeWarningLimit: 500,
  },
});
