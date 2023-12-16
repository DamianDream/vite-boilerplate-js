import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from "vite"
import Inspect from 'vite-plugin-inspect';
import checker from 'vite-plugin-checker'

export default defineConfig({
    // repository is at https://github.com/<USERNAME>/<REPO>
  base: '/vite-boilerplate-js/',
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
})