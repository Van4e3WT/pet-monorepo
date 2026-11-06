import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5176,
    strictPort: true,
  },
  plugins: [
    react(),
    federation({
      name: "account",
      filename: "remoteEntry.js",
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
  ],
});
