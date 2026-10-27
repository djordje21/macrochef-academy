import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// Start with `npm run dev -- --host` to open it from a phone on the same Wi-Fi.
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // Registered from main.tsx, so a new deploy reloads the app instead of showing the cached version.
      injectRegister: false,
      includeAssets: ['icons/icon.svg', 'icons/apple-touch-icon.png'],
      manifest: {
        name: 'MacroChef Academy',
        short_name: 'Academy',
        description: 'Škola kuvanja korak po korak. Napravio kuvar.',
        lang: 'sr',
        start_url: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#0B1730',
        theme_color: '#0B1730',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
        // Lessons are read next to the stove, often offline, so the cover photos are precached too.
        globPatterns: ['**/*.{js,css,html,svg,png,webp,woff2}'],
      },
    }),
  ],
})
