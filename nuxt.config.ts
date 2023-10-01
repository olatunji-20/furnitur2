// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&family=Orbitron:wght@400;500&display=swap' }]
    }
  },
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  css: [
    '@/assets/css/main.css'
  ],
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }]
})
