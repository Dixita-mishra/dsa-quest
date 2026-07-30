import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration for DSA Quest frontend
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});
