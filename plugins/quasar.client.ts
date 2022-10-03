import * as components from 'quasar'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const quasarOptions = {
    components,
    plugins: {},
  }

  nuxtApp.vueApp.use(components.Quasar, quasarOptions)
})
