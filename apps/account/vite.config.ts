import fs from 'node:fs';
import path from 'node:path';

import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5176,
    strictPort: true,
  },
  plugins: [
    {
      name: 'clean-mf-cache',
      buildStart() {
        fs.rmSync(path.resolve(import.meta.dirname, 'node_modules/.federation'), {
          recursive: true,
          force: true,
        });
      },
    },
    react(),
    federation({
      name: 'account',
      filename: 'remoteEntry.js',
      exposes: {
        './routes': './src/pages/routes.tsx',
      },
      dts: {
        generateTypes: {
          tsConfigPath: './tsconfig.app.json',
        },
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        'react-router': { singleton: true },
        // Local packages
        '@packages/ui': { singleton: true },
      },
    }),
  ],
  resolve: {
    alias: {
      '~': '/src',
    },
  },
});
