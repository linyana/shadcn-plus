import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  base: '/shadcn-plus/',
  plugins: [react()],
  build: {
    outDir: path.resolve(process.env.INIT_CWD || './', './dist/doc'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
