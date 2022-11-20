import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define your typings for the store state
export interface State {
  count: number
  textoPrueba: string
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
    textoPrueba: 'holaaaaaa',
  },
  mutations: {
    increment(state) {
      state.count++
    },
    changeTextoPrueba(state, texto: string) {
      state.textoPrueba = texto
    },
  },
  actions: {
    changeTextoPrueba(state, texto: string) {
      store.commit('changeTextoPrueba', texto)
    },
  },
})
