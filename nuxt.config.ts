// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public:{
      appUrl:process.env.APP_URL, 
      // encryptStorageKey:'8Jv7sT3qL4fRnKpW9yXh6ZbN2mUcDxG5'
    }
  },

  modules: ['@nuxthq/ui', 'nuxt-icon', '@nuxt/image', '@sidebase/nuxt-pdf'],

  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },

  compatibilityDate: '2024-10-18'
})