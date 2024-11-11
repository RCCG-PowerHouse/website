// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "radix-vue",
    "@vueuse/motion/nuxt",
  ],
  googleFonts: {
    families: {
      Outfit: true,
      Quicksand: true,
      Doto: true,
      Abel: true,
    },
  },
});
