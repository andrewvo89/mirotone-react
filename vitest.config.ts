// eslint-disable-next-line spaced-comment
/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  test: {
    environment: 'jsdom',
    css: {
      include: [/.+/],
    },
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html'],
      include: ['src/**'],
      exclude: ['src/**/*.stories.*'],
    },
    setupFiles: ['./setup.jsdom.ts'],
    globals: true,
  },
});
