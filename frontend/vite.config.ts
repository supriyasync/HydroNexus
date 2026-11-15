import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  const backendPort = Number(process.env.BACKEND_PORT || 5000);
  const frontendPort = Number(process.env.FRONTEND_PORT || 3000);

  return {
    plugins: [react(), tailwindcss()],
    envDir: path.resolve(import.meta.dirname, '..'),
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, './src'),
        '@shared': path.resolve(import.meta.dirname, '../shared/src'),
      },
    },
    server: {
      port: frontendPort,
      host: '0.0.0.0',
      allowedHosts: true,
      proxy: {
        '/api': {
          target: `http://127.0.0.1:${backendPort}`,
          changeOrigin: true,
        },
      },
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
