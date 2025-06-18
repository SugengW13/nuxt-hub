// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxthub/core'],
  devtools: { enabled: true },
  devServer: { port: 3030 },
  compatibilityDate: '2025-05-15',
  eslint: {
    config: { stylistic: true },
  },
})
