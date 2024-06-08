import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // تنظیمات نام فایل‌های دارایی‌ها (assets)
        assetFileNames: assetInfo => {
          // تعیین نوع فایل بر اساس پسوند
          let extType = assetInfo.name.split('.').pop();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        // تنظیمات نام فایل‌های chunk و entry
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        // تنظیمات جداسازی chunks
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.split('node_modules/')[1].split('/')[0];
          }
        },
      },
    },
    // حد آستانه هشدار برای اندازه chunk
    chunkSizeWarningLimit: 500,
  },
});
