import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "components-app",
      filename: "remoteEntry.js",
      exposes: {
        // "./App": "./src/App.tsx", // we can also export the entire repo or route it in container as required
        // "./ExposedButton": "./src/components/ui/button.tsx", //this button contains shad cn button and tailwind is required, so it wasnt visible in container app
        "./ExposingButton": "./src/App.tsx", // just a regular button with embedded css
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    outDir: "dist", // Ensure output directory is correct
    target: "esnext",
  },
  server: {
    port: 4173, // Ensure the port matches
    fs: {
      allow: ["dist"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
