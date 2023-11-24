// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/global.css"],

  typescript: {
    typeCheck: true,
  },
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", '@nuxt/ui'],
  runtimeConfig: {
    public: {
      baseURL: "https://www.omdbapi.com",
      APIKey: "cd214d21",
    },
    ui: {
      global: true,
      icons: ['mdi', 'simple-icons']
    }
  },
});
