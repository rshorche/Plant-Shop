<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from "vite-plugin-commonjs";
export default defineConfig(() => {
    return {
        plugins: [
            react(),
            commonjs({
                filter(id) {
                    if (["libs/ckeditor5/build/ckeditor.js"].includes(id)) {
                        return true;
                    }
                },
            }),
        ],
        optimizeDeps: {
            include: ["ckeditor5-custom-build"],
        },
        build: {
            commonjsOptions: { exclude: ["ckeditor5-custom-build"] },
            outDir: 'build',
            rollupOptions: {
                output:{
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            return id.toString().split('node_modules/')[1].split('/')[0].toString();
                        }
                    }
                }
            }
        },
    };
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
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
    chunkSizeWarningLimit: 500,
  },
>>>>>>> b863c95 (fix: bug is ckeditor change to tunymce)
});
