import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'; 

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pages-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 30 * 24 * 60 * 60, 
              },
            },
          },
          {
            urlPattern: /\/offline/, 
            handler: 'CacheOnly',
            options: {
              cacheName: 'offline-cache',
            },
          },
        ],
      },
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt'], 
      manifest: {
        name: 'TechPulse',
        short_name: 'TechPulse',
        description: 'TechPulse - Stay updated even offline',
        theme_color: '#ffffff',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});