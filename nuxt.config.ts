// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { quasar } from '@quasar/vite-plugin'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  modules: [['@pinia/nuxt', { autoImports: ['defineStore'] }]],

  css: ['@quasar/extras/material-icons/material-icons.css', '~/assets/styles/quasar.sass'],

  build: {
    transpile: ['quasar'],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
      },
    },
    plugins: [
      quasar({
        sassVariables: 'assets/styles/quasar.variables.sass',
      }),
      VueI18nVitePlugin({
        include: [resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')],
      }),
    ],
  },
})
