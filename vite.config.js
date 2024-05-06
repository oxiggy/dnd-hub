import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  root: 'src',
  publicDir: 'public',
  manifest: true,
  build: {
    manifest: true,
    outDir: '../build',
  },
  server: {
    open: true,
    port: 3000,
    strictPort: true,
  },
  preview: {
    port: 3000,
  }
})
