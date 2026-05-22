import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      // Target modern browsers for smaller bundles (no legacy polyfills)
      target: 'es2020',
      // Inline small assets (< 8kb) to reduce HTTP requests
      assetsInlineLimit: 8192,
      // Split vendor chunks for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            'motion': ['motion/react'],
            'router': ['react-router-dom'],
          },
        },
      },
    },
  };
});
