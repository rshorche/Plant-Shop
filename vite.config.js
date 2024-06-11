import { defineConfig } from 'vite'
import vercel from '@vercel/plugin-vercel'

export default defineConfig({
  plugins: [
    vercel(),
  ],
});
