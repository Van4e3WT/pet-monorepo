import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5176,
    strictPort: true,
  },
  plugins: [
    react(),
    federation({
      name: 'account',
      filename: 'remoteEntry.js',
      exposes: {
        '.': './src/app/index.tsx',
      },
      dts: {
        generateTypes: {
          tsConfigPath: './tsconfig.app.json',
        },
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
  ],
  resolve: {
    alias: {
      '~': '/src',
    },
  },
});
