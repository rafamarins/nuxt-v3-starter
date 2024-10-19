// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  vite: {
    server: {
      hmr: {
        protocol: "wss",
        clientPort: 443,
        path: "hmr/",
      },
    },
  },
  modules: [
    "@nuxt/devtools",
    "@nuxt/image",
    "@nuxt/eslint",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "nuxt-directus",
    "nuxt-security",
  ],
});
