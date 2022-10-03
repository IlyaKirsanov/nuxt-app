// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { quasar } from '@quasar/vite-plugin'

export default defineNuxtConfig({
  css: ['@quasar/extras/material-icons/material-icons.css', '~/assets/styles/quasar.sass'],

  build: {
    transpile: ['quasar'],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    plugins: [
      quasar({
        sassVariables: 'assets/styles/quasar.variables.sass',
      }),
    ],
  },
})
