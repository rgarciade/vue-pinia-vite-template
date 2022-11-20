import { defineStore } from 'pinia'

export const useExampleStatusStore = defineStore('exampleStatus', {
  state: () => ({ count: 0, name: 'Eduardo', textoPrueba: 'textoPrueba1' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
    changeTextoPrueba(textoPrueba: string) {
      this.textoPrueba = textoPrueba
    },
  },
})
