// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public:{
      appUrl:process.env.APP_URL, 
      // encryptStorageKey:'8Jv7sT3qL4fRnKpW9yXh6ZbN2mUcDxG5'
    }
  },
  modules: ['@nuxthq/ui', 'nuxt-icon', '@nuxt/image', '@sidebase/nuxt-pdf']
})
