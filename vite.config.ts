import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// Start with `npm run dev -- --host` to open it from a phone on the same Wi-Fi.
// Cloudflare sets WORKERS_CI_COMMIT_SHA; shown in the menu so we can tell which build a phone is running.
const commit = process.env.WORKERS_CI_COMMIT_SHA ?? process.env.CF_PAGES_COMMIT_SHA ?? 'local'
const version = `${new Date().toISOString().slice(0, 16).replace('T', ' ')} · ${commit.slice(0, 7)}`

// `--mode preview-page` builds a copy with relative paths and no service worker, for a shareable preview page.
export default defineConfig(({ mode }) => ({
  define: {
    __APP_VERSION__: JSON.stringify(version),
  },
  base: mode === 'preview-page' ? './' : '/',
  build: {
    // All course text ships in the bundle on purpose, so lessons open offline next to the stove.
    chunkSizeWarningLimit: 1000,
    ...(mode === 'preview-page' ? { outDir: 'dist-preview' } : {}),
  },
  plugins: [
    react(),
    VitePWA({
      disable: mode === 'preview-page',
      registerType: 'autoUpdate',
      // Registered from main.tsx, so a new deploy reloads the app instead of showing the cached version.
      injectRegister: false,
      includeAssets: ['icons/icon.svg', 'icons/apple-touch-icon.png'],
      manifest: {
        name: 'Macro Chef Academy',
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
        // The app and lessons are precached; cover photos (about 4 MB at full sharpness) are cached as they are viewed.
        globPatterns: ['**/*.{js,css,html,svg,png,webp,woff2}'],
        globIgnores: ['media/**'],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.startsWith('/media/') && url.pathname.endsWith('.webp'),
            handler: 'CacheFirst',
            options: { cacheName: 'media', expiration: { maxEntries: 80 } },
          },
        ],
        // Every lesson of every grade ships in the main bundle so the course works offline; it outgrew the 2 MiB default.
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
      },
    }),
  ],
}))
