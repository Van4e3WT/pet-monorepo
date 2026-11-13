import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5175,
    strictPort: true,
  },
  plugins: [
    react(),
    federation({
      name: 'web-host',
      remotes: {
        account: {
          type: 'module',
          name: 'account',
          entry: 'http://localhost:5176/remoteEntry.js',
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
