import { defineConfig } from 'vitest/config';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
  },
  // ⚠️  DO NOT add define: { 'process.env': {}, 'global': 'window' } here.
  //     See _AGENT_COORD/VITE_CONFIG_RULES.md for why.
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  // ⚠️  DO NOT add manualChunks for lazy-loaded dependencies (e.g. three).
  //     See _AGENT_COORD/VITE_CONFIG_RULES.md for why.
  build: {
    rollupOptions: {},
  },
});
