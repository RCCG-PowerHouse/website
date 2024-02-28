// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts", "radix-vue"],
  googleFonts: {
    families: {
      Outfit: true,
    },
    overwriting: true,
  },
});
