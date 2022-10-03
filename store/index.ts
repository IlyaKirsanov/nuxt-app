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
