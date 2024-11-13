import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: 'autoUpdate', 
    includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    manifest: {
      name: 'TechPulse App',
      short_name: 'App',
      description: 'Trivsel app til elever fra 8/9 klasse om en skoledag på TechCollege',
      theme_color: '#34C759', 
      background_color: '#ECFFED', 
      display: 'standalone', 
      start_url: '/', // URL for the PWA
      scope: '/',
      icons: [
        {
          src: '/Icon.png',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          src: '/Icon.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/Icon.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  })
]
});