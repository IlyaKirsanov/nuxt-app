import { createI18n } from 'vue-i18n'
import en from '~/locales/en.json'
import ru from '~/locales/ru.json'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    fallbackLocale: 'en',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
      },
      {
        code: 'ru',
        name: 'Русский',
      },
    ],
    messages: {
      en,
      ru,
    },
  })

  nuxtApp.vueApp.use(i18n)
})
