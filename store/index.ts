import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      this.counter = ++this.counter
    },
  },
  getters: {
    getDoubleCounter() {
      return this.counter * 2
    },
  },
})

export const useLangStore = defineStore('language', {
  state: () => ({
    language: 'en',
  }),
  actions: {
    setLanguage(lang: string) {
      this.language = lang
    },
  },
  persist: true,
})
