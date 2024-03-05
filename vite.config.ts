import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/personal-training-and-nutrition-frontend/',
  css: {
    modules: {
      localsConvention: 'dashes',
    },
  },
});
