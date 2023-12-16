import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from "vite"
import path from 'path'
import Inspect from 'vite-plugin-inspect';
import checker from 'vite-plugin-checker'

export default defineConfig({
  server: {
    port: "5000",
  },
  preview: {
    port: "5001",
  },
  esbuild: {},
  plugins: [
    Inspect(),
    checker(),
    ViteImageOptimizer({
      jpg: {
        quality: 80,
      },
    }),
  ],
  envPrefix: 'APP',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src/assets')
    }
  }
})